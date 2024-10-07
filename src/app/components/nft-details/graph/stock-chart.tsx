'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {
  useFetchNftScatterDataQuery,
  useFetchNftTrendingDataQuery,
  useFetchNftDetailsMutation,
} from '@/app/redux/nft-details';
import { usePathname } from 'next/navigation';
import CustomTooltip from './custom-tooltip';
import ReactDOMServer from 'react-dom/server';

interface StockChartProps {
  volumeValue: string;
  isFullScreen: boolean;
  chartRef: any;
  setIsFullScreen: (val: boolean) => void;
  coinSymbol: any;
}

const StockChartNft: React.FC<StockChartProps> = React.memo(
  ({ isFullScreen, chartRef, setIsFullScreen, coinSymbol, volumeValue }) => {
    const [options, setOptions] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [, setIsImgLoading] = useState(false);
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const chartComponentRef = useRef<any>(null);
    const graphType = 'area';
    const pathname = usePathname();
    const contractId = pathname.split('/')[3];
    const platformAlias = pathname.split('/')[4];

    const [currentTokenImage, setCurrentTokenImage] = useState(
      '/images/collections/Rectangle 40918.png',
    );
    const imageCacheRef = useRef<Record<string, string>>({});

    const periodTime =
      volumeValue === '1h'
        ? 1
        : volumeValue === '24h'
          ? 2
          : volumeValue === '7d'
            ? 3
            : 4;

    const { data: nftTrendingData, isFetching } = useFetchNftTrendingDataQuery({
      period: periodTime,
      contract_id: contractId,
      alias: platformAlias,
    });
    const { data: nftScatterData } = useFetchNftScatterDataQuery({
      period: periodTime,
      contract_id: contractId,
      alias: platformAlias,
    });

    const [fetchNftDetails] = useFetchNftDetailsMutation();

    const handleFetchNftDetails = async (id: string, point: any) => {
      if (imageCacheRef.current[id]) {
        setCurrentTokenImage(imageCacheRef.current[id]);
        chartComponentRef.current?.chart.tooltip.refresh(point);
        return;
      }

      setIsImgLoading(true);

      try {
        const response = await fetchNftDetails({
          tokenId: id,
          contract_id: contractId,
          alias: platformAlias,
        });

        const nftImage = response?.data?.data?.[0]?.nftImage;
        imageCacheRef.current[id] = nftImage;
        setCurrentTokenImage(nftImage);
        setIsImgLoading(false);
        chartComponentRef.current?.chart.tooltip.refresh(point);
      } catch (error) {
        setIsImgLoading(false);
      }
    };

    const formatChartData = (data: any) => {
      const priceData = data.map((item: any) => ({
        x: parseInt(item.timestamp),
        y: item.averagePrice,
        sales: item.sales,
        marker: {
          enabled: false,
        },
      }));

      const volumeData = data.map((item: any) => ({
        x: parseInt(item.timestamp),
        y: item.volume,
        color: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 1,
            y2: 0,
          },
          stops: [
            [0, '#F7841A'],
            [1, '#F74848'],
          ],
        },
      }));

      return { priceData, volumeData };
    };

    const formatScatterData = (data: any) => {
      return data.map((item: any) => ({
        x: parseInt(item.time),
        y: item.price,
        tokenId: item.tokenId,
        marketplace: item.marketplace,
        marketLogoUrl: item.marketLogoUrl,
      }));
    };

    const fetchChartData = useCallback(async () => {
      setIsLoading(true);

      try {
        const apiData = nftTrendingData?.data || [];
        const apiDataScatter = nftScatterData?.data?.middleSales || [];
        const { priceData, volumeData } = formatChartData(apiData);
        const scatterData = formatScatterData(apiDataScatter);

        if (priceData.length === 0) {
          setIsDataAvailable(false);
        } else {
          setIsDataAvailable(true);
        }

        const priceValues = priceData.map((item: any) => item.y);
        const minPrice = Math.min(...priceValues);
        const maxPrice = Math.max(...priceValues);
        const yMin = minPrice * 0.999;
        const yMax = maxPrice * 1.001;

        setOptions({
          scrollbar: { enabled: false },
          rangeSelector: { enabled: false },
          xAxis: [
            {
              labels: {
                enabled: true,
                style: {
                  fontSize: '12px',
                  fontFamily: 'Sf Pro Display',
                  color: 'rgba(17, 17, 17, 0.4)',
                },
              },
              lineWidth: 0,
              tickWidth: 0,
            },
          ],
          yAxis: [
            {
              labels: {
                align: 'left',
                style: {
                  fontSize: '12px',
                  fontFamily: 'Sf Pro Display',
                  color: 'rgba(17, 17, 17, 0.4)',
                },
                formatter: function (this: any) {
                  const value = this.value;
                  if (value >= 1000000000000)
                    return (value / 1000000000000).toFixed(1) + 'T';
                  if (value >= 1000000000)
                    return (value / 1000000000).toFixed(1) + 'B';
                  if (value >= 1000000)
                    return (value / 1000000).toFixed(1) + 'M';
                  if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
                  return value;
                },
              },
              height: '90%',
              resize: { enabled: false },
              gridLineWidth: 0.5,
              min: yMin * 0.999,
              max: yMax * 1.001,
            },
            {
              labels: { enabled: false, align: 'left' },
              top: '92%',
              height: '10%',
              offset: 0,
              gridLineWidth: 0,
            },
          ],
          plotOptions: {
            series: {
              states: {
                inactive: {
                  opacity: 1,
                },
              },
            },
          },
          tooltip: {
            backgroundColor: 'transparent',
            borderColor: 'transparent',
            shadow: false,
            useHTML: true,
            formatter: function (this: any) {
              const date = Highcharts.dateFormat('%m/%d/%Y', this.x);
              const time = Highcharts.dateFormat('%I:%M:%S %p', this.x);
              const volume = this.points?.[1]?.y;
              const sales = this?.point?.options?.sales;
              const tokenId = this?.point?.tokenId;
              const isScatter = this.point?.series?.initialType === 'scatter';

              const tooltipHtml = ReactDOMServer.renderToString(
                <CustomTooltip
                  point={this.point}
                  date={date}
                  time={time}
                  volume={volume}
                  sales={sales}
                  tokenId={tokenId}
                  imageCacheRef={imageCacheRef}
                  currentTokenImage={currentTokenImage}
                  isScatter={isScatter}
                  apiData={apiData}
                />,
              );

              return tooltipHtml;
            },
            shared: true,
            split: false,
          },
          series: [
            {
              type: graphType,
              name: coinSymbol,
              data: priceData,
              color: 'rgba(69, 202, 148, 1)',
              fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, 'rgba(69, 202, 148, 0.3)'],
                  [1, 'rgba(69, 202, 148, 0.001)'],
                ],
              },
              marker: {
                enabled: false,
              },
              dataGrouping: {
                enabled: false,
              },
            },
            {
              type: 'column',
              name: 'Volume',
              data: volumeData,
              borderRadius: 0,
              borderWidth: 1,
              borderColor: 'rgba(230, 230, 230, 1)',
              yAxis: 1,
              dataGrouping: {
                enabled: false,
              },
              showInLegend: false,
            },
            {
              type: 'scatter',
              name: 'NFT Sales',
              data: scatterData,
              marker: {
                symbol: 'circle',
                shadow: false,
                radius: 3,
                lineWidth: 0,
                lineColor: '#fff',
                fillColor: 'rgba(114, 72, 247, 1)',
              },
              point: {
                events: {
                  mouseOver: function (this: any) {
                    const tokenId = this?.tokenId;
                    handleFetchNftDetails(tokenId, this);
                  },
                },
              },
            },
          ],
          legend: { enabled: false },
          navigator: {
            enabled: false,
            top: 580,
            height: 28,
            maskFill: 'transparent',
            outlineWidth: 1,
            outlineColor: 'transparent',
            scrollbar: { enabled: false },
            handles: { enabled: false },
            series: {
              type: 'line',
              color: 'transparent',
              fillOpacity: 0,
            },
            xAxis: {
              labels: {
                style: {
                  fontSize: '12px',
                  fontFamily: 'Sf Pro Display',
                  color: 'rgba(17, 17, 17, 0.4)',
                },
              },
            },
          },
          responsive: {
            rules: [
              {
                condition: { maxWidth: 800 },
                chartOptions: { rangeSelector: { inputEnabled: false } },
              },
            ],
          },
          credits: { enabled: false },
          chart: {
            events: {
              load: function () {
                setIsLoading(false);
              },
            },
          },
        });

        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    }, [coinSymbol, nftTrendingData, nftScatterData]);

    useEffect(() => {
      fetchChartData();
    }, [fetchChartData]);

    const handleKeyDown = (event: any) => {
      if (event.keyCode === 27 && isFullScreen) {
        document.exitFullscreen();
        setIsFullScreen(false);
      }
    };

    const handleFullScreenChange = () => {
      if (!document.fullscreenElement) {
        setIsFullScreen(false);
      }
    };

    useEffect(() => {
      document.addEventListener('keydown', handleKeyDown);
      document.addEventListener('fullscreenchange', handleFullScreenChange);

      return () => {
        document.removeEventListener('keydown', handleKeyDown);
        document.removeEventListener(
          'fullscreenchange',
          handleFullScreenChange,
        );
      };
    }, [isFullScreen]);

    useEffect(() => {
      chartComponentRef?.current?.chart?.zoomOut();
    }, [periodTime]);

    return (
      <div
        ref={chartRef}
        style={{
          padding: isFullScreen ? '0' : '0 24px 34px 22px',
          height: isFullScreen ? '90vh' : '610px',
          position: 'relative',
          marginTop: '35px',
        }}
      >
        {isFetching && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 10,
              marginTop: '50px',
            }}
          >
            <div className="spinner" style={{ marginBottom: '10px' }}></div>
            <div
              style={{
                fontSize: '16px',
                fontWeight: 'bold',
                marginBottom: '5px',
              }}
            >
              Loading data
            </div>
            <div style={{ fontSize: '14px', color: 'gray' }}>
              Please wait a moment.
            </div>
          </div>
        )}
        {!isLoading && !isDataAvailable && (
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
              zIndex: 10,
              marginTop: '50px',
            }}
          >
            <div
              style={{
                fontSize: '18px',
                fontWeight: 'bold',
                color: 'rgba(17, 17, 17, 0.8)',
                marginBottom: '10px',
              }}
            >
              No data found
            </div>
            <div style={{ fontSize: '14px', color: 'gray' }}>
              There is no data to display for the selected period.
            </div>
          </div>
        )}
        {!isLoading && isDataAvailable && (
          <HighchartsReact
            highcharts={Highcharts}
            constructorType={'stockChart'}
            options={options}
            containerProps={{ style: { height: '100%' } }}
            ref={chartComponentRef}
          />
        )}
      </div>
    );
  },
);

export default StockChartNft;

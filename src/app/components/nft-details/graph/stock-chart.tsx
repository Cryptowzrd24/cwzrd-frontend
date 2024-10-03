'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import {
  useFetchNftScatterDataQuery,
  useFetchNftTrendingDataQuery,
  useFetchNftDetailsMutation,
} from '@/app/redux/nft-details';
import { priceNumberFormatter } from '../../data-table/price';
import { usePathname } from 'next/navigation';

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
    // const previousTokenIdRef = useRef<any>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [isDataAvailable, setIsDataAvailable] = useState(false);
    const chartComponentRef = useRef<any>(null);
    const useZones = 2;
    const graphType = 'area';
    const pathname = usePathname();
    const contractId = pathname.split('/')[3];
    const platformAlias = pathname.split('/')[4];

    const periodTime =
      volumeValue === '1h'
        ? 1
        : volumeValue === '24h'
          ? 2
          : volumeValue === '7d'
            ? 3
            : 4;

    const { data: nftTrendingData } = useFetchNftTrendingDataQuery({
      period: periodTime,
      contract_id: contractId,
      alias: platformAlias,
    });
    const { data: nftScatterData } = useFetchNftScatterDataQuery({
      period: periodTime,
      contract_id: contractId,
      alias: platformAlias,
    });

    const [fetchNftDetails, { data: nftDetails }] =
      useFetchNftDetailsMutation();

    // const handleFetchNftDetails = (id: any) => {
    //   if (previousTokenIdRef.current !== id) {
    //     fetchNftDetails({
    //       tokenId: id?.toString(),
    //       contract_id: contractId,
    //       alias: platformAlias,
    //     });
    //     previousTokenIdRef.current = id; // Store current tokenId to prevent repeated calls
    //   }
    // };

    const handleFetchNftDetails = async (id: any) => {
      const response = await fetchNftDetails({
        tokenId: id?.toString(),
        contract_id: contractId,
        alias: platformAlias,
      });

      console.log('response?.data?.[0]>>', response?.data?.data?.[0].nftImage);
      // Assume the API response contains the data you provided
      return response?.data?.data?.[0].nftImage; // Access the first element from the data array
    };

    // const { data: nftDetailsata } = useFetchNftDetailsMutation({
    //   tokenId: tokenId,
    //   alias: platformAlias,
    //   contract_id: contractId,
    // });

    const formatChartData = (data: any) => {
      // Area graph data for price with conditional marker based on sales count
      const priceData = data.map((item: any) => ({
        x: parseInt(item.timestamp),
        y: item.averagePrice,
        sales: item.sales, // additional data: sales
        marker: {
          enabled: false,
          // enabled: item.sales > 0,
        },
      }));

      // Column graph data for volume
      const volumeData = data.map((item: any) => ({
        x: parseInt(item.timestamp), // x-axis: timestamp
        y: item.volume,
        sales: item.sales,
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
        x: parseInt(item.time), // Use timestamp for x-axis
        y: item.price, // Price for y-axis
        tokenId: item.tokenId, // Additional data to show on hover
        marketplace: item.marketplace,
        marketLogoUrl: item.marketLogoUrl, // URL for marketplace logo
      }));
    };

    const fetchChartData = useCallback(async () => {
      setIsLoading(true);

      try {
        // Fetching data from Highcharts' demo API
        const apiData = nftTrendingData?.data || [];
        const apiDataScatter = nftScatterData?.data?.middleSales || [];
        const { priceData, volumeData } = formatChartData(apiData);
        const scatterData = formatScatterData(apiDataScatter);
        if (priceData.length === 0) {
          setIsDataAvailable(false);
        } else {
          setIsDataAvailable(true);
        }

        // Extract y values (price) from priceData
        const priceValues = priceData.map((item: any) => item.y);

        // Calculate min and max prices
        const minPrice = Math.min(...priceValues);
        const maxPrice = Math.max(...priceValues);

        // Set yMin and yMax with some padding
        const yMin = minPrice * 0.999;
        const yMax = maxPrice * 1.001;

        // Setting chart options
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
              const tokeId = this?.point?.tokenId;
              if (this.point?.series?.initialType === 'scatter') {
                let cardImgUrl;

                // Trigger the async API call
                handleFetchNftDetails(tokeId).then((img) => {
                  console.log('img>>>', img);
                  cardImgUrl = img;
                });
                console.log('nftDetails inside the codn>>', nftDetails);
                // setTokenId(tokeId);
                return `
                  <div
                    style="
                  width: 200px;
                  box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05);
                  background-color: rgba(255, 255, 255, 1);
                  border-radius: 16px;
                "
                  >
                    <div style="display: flex; flex-direction: column;">
                      <div style="margin-left: 8px; margin-top: 8px;">
                        <img
                          src="${cardImgUrl}"
                          alt="banner"
                          style="width: 184px; height: 169px;"
                        />
                      </div>

                      <div
                        style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                      margin-top: 8px;
                      padding-inline: 16px;
                    "
                      >
                        <span
                          style="
                        font-size: 10px;
                        font-weight: 400;
                        color: rgba(17, 17, 17, 1);
                      "
                        >
                          ${date}
                        </span>
                        <span
                          style="
                        font-size: 10px;
                        font-weight: 400;
                        color: rgba(17, 17, 17, 1);
                      "
                        >
                          ${time}
                        </span>
                      </div>

                      <div
                        style="
                      height: 36px;
                      width: 184px;
                      border-radius: 8px;
                      background: rgba(17, 17, 17, 0.05);
                      display: flex;
                      justify-content: center;
                      align-items: center;
                      margin-top: 8px;
                      margin-bottom: 8px;
                      margin-left: 8px;
                      gap: 48px;
                      opacity: 80%;
                    "
                      >
                        <div style='display:flex; flex-direction:column'>
                          <span
                            style="
                          font-size: 10px;
                          font-weight: 400;
                          color: rgba(17, 17, 17, 0.6);
                          font-family: 'Sf Pro Display';
                        "
                          >
                            Item
                          </span>
                          <span
                            style="
                          font-size: 12px;
                          font-weight: 700;
                          font-family: 'Sf Pro Display';
                          color: rgba(17, 17, 17, 1);
                        "
                          >
                            #${tokeId}
                          </span>
                        </div>

                        <div style='display:flex; flex-direction:column'>
                          <span
                            style="
                          font-size: 10px;
                          font-weight: 400;
                          color: rgba(17, 17, 17, 0.6);
                          font-family: 'Sf Pro Display';
                        "
                          >
                            Price
                          </span>
                          <span
                            style="
                          font-size: 12px;
                          font-weight: 700;
                          font-family: 'Sf Pro Display';
                          color: rgba(17, 17, 17, 1);
                        "
                          >
                            ${priceNumberFormatter(this.y)} ${apiData[0]?.nativeCurrencySymbol}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                `;
              } else
                return `
              <div style="padding: 16px; border-radius: 8px; background: white; box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05); width: 220px; max-height: 128px;">
                <div style="display: flex; justify-content: space-between; padding-bottom: 16px;">
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${date}</div>
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${time}</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4); display:flex; gap:4px;align-items:center;">
                   <div style="width:8px; height: 8px; background-color:rgba(31, 215, 115, 1); border-radius:50%"></div>
                    Price
                  </div>
                  <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase">
                   ${priceNumberFormatter(this.y)} ${apiData[0]?.nativeCurrencySymbol}
                  </div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px; align-items:center;">
                <div style="display: flex; justify-content:start; align-items:center; gap:4px;">
                <div style="width:8px; height: 8px; background-color:rgba(247, 132, 26, 1); border-radius:50%"></div>
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">Volume</div>
                </div>
                  <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase;">${priceNumberFormatter(volume)} ${apiData[0]?.nativeCurrencySymbol}</div>
                </div>
    
                   <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4); display:flex; gap:4px;align-items:center;">
                   <div style="width:8px; height: 8px; background-color:rgba(114, 72, 247, 1); border-radius:50%"></div>
                    Sales Count
                  </div>
                  <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase">
                   ${sales}
                  </div>
                </div>
    
              </div>
            `;
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
                // fillColor: 'rgba(114, 72, 247, 1)',
                shadow: false,
                radius: 3,
                lineWidth: 0,
                lineColor: '#fff',
                states: {
                  hover: {
                    enabled: false,
                    lineWidth: 4,
                    radius: 8,
                    shadow: false,
                    fillColor: useZones ? '' : 'rgba(114, 72, 247, 1)',
                  },
                },
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
        console.error('Error fetching chart data:', error);
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
        {isLoading && (
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

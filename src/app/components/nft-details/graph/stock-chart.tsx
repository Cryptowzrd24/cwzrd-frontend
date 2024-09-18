'use client';
import React, { useEffect, useRef, useState, useCallback } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
// import { priceNumberFormatter } from '../../data-table/price';
// import numeral from 'numeral';

interface StockChartProps {
  volumeValue: string;
  isFullScreen: boolean;
  chartRef: any;
  setIsFullScreen: (val: boolean) => void;
  coinSymbol: any;
}

const StockChartNft: React.FC<StockChartProps> = React.memo(
  ({ isFullScreen, chartRef, setIsFullScreen, coinSymbol }) => {
    const [options, setOptions] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const chartComponentRef = useRef<any>(null);
    const useZones = 2;
    const graphType = 'area';

    const fetchChartData = useCallback(async () => {
      setIsLoading(true);

      try {
        // Fetching data from Highcharts' demo API
        const data = await fetch(
          'https://demo-live-data.highcharts.com/aapl-c.json',
        ).then((response) => response.json());

        const reducedData = data.slice(0, 100);
        // Formatting volume data (if needed)
        // const volumeThreshold = Math.max(...reducedData.map((d: any) => d[1]));
        const formattedVolumeData = reducedData.map(([time, value]: any) => ({
          x: time,
          y: value,
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
                  //   if (selectedCompareCoinId) {
                  //     return `${value.toFixed(2)}%`;
                  //   }
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
              //   compare: selectedCompareCoinId ? 'percent' : '',
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
              //   const volume = numeral(data[this.point.index][1]).format('0.00a');
              //   const price = priceNumberFormatter(this.y);

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
                   0.2495 ETH
                  </div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px; align-items:center;">
                <div style="display: flex; justify-content:start; align-items:center; gap:4px;">
                <div style="width:8px; height: 8px; background-color:rgba(247, 132, 26, 1); border-radius:50%"></div>
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">Volume</div>
                </div>
                  <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase;">1.88 ETH</div>
                </div>

                   <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4); display:flex; gap:4px;align-items:center;">
                   <div style="width:8px; height: 8px; background-color:rgba(114, 72, 247, 1); border-radius:50%"></div>
                    Sales Count
                  </div>
                  <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase">
                   3
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
              data: reducedData,
              color: 'rgba(69, 202, 148, 1)',
              fillColor: {
                linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                stops: [
                  [0, 'rgba(69, 202, 148, 0.3)'],
                  [1, 'rgba(69, 202, 148, 0.001)'],
                ],
              },
              marker: {
                enabled: true,
                fillColor: 'rgba(114, 72, 247, 1)',
                shadow: false,
                radius: 3,
                lineWidth: 0,
                lineColor: '#fff',
                states: {
                  hover: {
                    enabled: true,
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
              data: formattedVolumeData,
              borderRadius: 0,
              borderWidth: 1,
              borderColor: 'rgba(230, 230, 230, 1)',
              yAxis: 1,
              dataGrouping: {
                enabled: false,
              },
              showInLegend: false,
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
    }, [coinSymbol]);

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
        <HighchartsReact
          highcharts={Highcharts}
          constructorType={'stockChart'}
          options={options}
          containerProps={{ style: { height: '100%' } }}
          ref={chartComponentRef}
        />
      </div>
    );
  },
);

export default StockChartNft;

'use client';
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useFetchCoinDetailsGraphDataQuery } from '@/app/redux/coin-details';

interface StockChartProps {
  selectedGraph: string;
  selectedFilter: string;
}

const StockChart = ({ selectedGraph, selectedFilter }: StockChartProps) => {
  const [options, setOptions] = useState({});
  const { data: apiData } = useFetchCoinDetailsGraphDataQuery({
    coinId: '1',
    range: '1D',
  });

  const graphType =
    selectedFilter === 'candlestick'
      ? 'candlestick'
      : selectedGraph === 'Price'
        ? 'area'
        : 'line';

  useEffect(() => {
    const fetchData = async () => {
      const points: any[] = apiData?.data?.points;
      const ohlc = [];
      const volume = [];

      const threshold: any = Object.values(points)[0].v[0];

      for (const timestamp in points) {
        if (points.hasOwnProperty(timestamp)) {
          const point = points[timestamp];
          const date = new Date(parseInt(timestamp, 10) * 1000); // Convert to milliseconds
          ohlc.push([
            date.getTime(), // Use the date in milliseconds for x-axis
            point.v[0], // open
            point.v[0], // high (using same as open for this example)
            point.v[0], // low (using same as open for this example)
            point.v[0], // close
          ]);

          volume.push([
            date.getTime(), // Use the date in milliseconds for x-axis
            point.v[0], // the volume
          ]);
        }
      }

      const formattedData = volume.map(([time, value]) => ({
        x: time,
        y: value,
        color:
          value > threshold ? 'rgba(69, 202, 148, 1)' : 'rgba(152, 0, 255, 1)',
      }));

      const yMin = Math.min(...ohlc.map((point) => point[1]));
      const yMax = Math.max(...ohlc.map((point) => point[1]));

      setOptions({
        chart: {
          zoomType: '', // Disables zooming
          panning: false, // Disables panning
        },
        scrollbar: {
          enabled: false,
        },
        rangeSelector: {
          enabled: false,
        },
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
            plotLines: [
              {
                value: threshold,
                color: '#999',
                dashStyle: 'dot',
                width: 1,
              },
            ],
            labels: {
              align: 'left',
              style: {
                fontSize: '12px',
                fontFamily: 'Sf Pro Display',
                color: 'rgba(17, 17, 17, 0.4)',
              },
            },
            height: '80%',
            resize: {
              enabled: false,
            },
            gridLineWidth: 0.5,
            min: yMin * 0.999, // Set minimum value slightly lower than the minimum data value
            max: yMax * 1.001,
            // tickInterval: 5000,
          },
          {
            labels: {
              enabled: false,
              align: 'left',
            },
            top: '80%',
            height: '20%',
            offset: 0,
            gridLineWidth: 0,
          },
        ],
        tooltip: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          useHTML: true,
          formatter: function (this: any) {
            const date = Highcharts.dateFormat('%m/%d/%Y', this.x);
            const time = Highcharts.dateFormat('%I:%M:%S %p', this.x);
            return `
              <div style="padding: 16px; border-radius: 8px; background: white; box-shadow:  0px 4px 28px 0px rgba(0, 0, 0, 0.05); width: 250px; max-height: 194px;">
                <div style="display: flex; justify-content: space-between; padding-bottom: 16px;">
                <div style="font-size: 11px; font-weight: 600; font-family: Sf Pro Display"; >${date}</div>
                <div style="font-size: 11px; font-weight: 600; font-family: Sf Pro Display";>${time}</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px;"> 
                <div style="font-size: 11px; font-weight: 400; font-family: Sf Pro Display; color: rgba(17, 17, 17, 0.4);">Opening</div>
                <div style="font-size: 14px; font-weight: 500; font-family: Sf Pro Display"; color: rgba(17, 17, 17, 1);>€${Highcharts.numberFormat(this.points[0].point.open, 2)}</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px;"> 
                <div style="font-size: 11px; font-weight: 400; font-family: Sf Pro Display;color: rgba(17, 17, 17, 0.4);">High</div>
                <div style="font-size: 14px; font-weight: 500; font-family: Sf Pro Display"; color: rgba(17, 17, 17, 1)>€${Highcharts.numberFormat(this.points[0].point.high, 2)}</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px;"> 
                <div style="font-size: 11px; font-weight: 400; font-family: Sf Pro Display;color: rgba(17, 17, 17, 0.4);">Low</div>
                <div style="font-size: 14px; font-weight: 500; font-family: Sf Pro Display"; color: rgba(17, 17, 17, 1)>€${Highcharts.numberFormat(this.points[0].point.low, 2)}</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px;"> 
                <div style="font-size: 11px; font-weight: 400; font-family: Sf Pro Display;color: rgba(17, 17, 17, 0.4);">Closing</div>
                <div style="font-size: 14px; font-weight: 500; font-family: Sf Pro Display"; color: rgba(17, 17, 17, 1)>€${Highcharts.numberFormat(this.points[0].point.close, 2)}</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px;"> 
                <div style="font-size: 11px; font-weight: 400; font-family: Sf Pro Display;color: rgba(17, 17, 17, 0.4);">Variation</div>
                <div style= "display: flex; gap:5px; align-items: center;">
                <div style="font-size: 14px; font-weight: 500; font-family: Sf Pro Display"; color: rgba(17, 17, 17, 1)>
                 €${Highcharts.numberFormat(this.points[0].point.close - this.points[0].point.open, 2)}
                </div>
                <div style= "display: flex; justify-content:center; align-items: center; width: 45px; height: 18px; padding:2px, 4px, 2px, 4px; background-color: rgba(31, 215, 115, 0.1); border-radius: 11px">
                <span style="font-size: 11px; color: ${this.points[0].point.close > this.points[0].point.open ? 'rgba(31, 215, 115, 1)' : 'rgba(31, 215, 115, 1)'}; margin-left: 2px;">${Highcharts.numberFormat(((this.points[0].point.close - this.points[0].point.open) / this.points[0].point.open) * 100, 2)}%</span>
                </div>
                </div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px;"> 
                <div style="font-size: 11px; font-weight: 400; font-family: Sf Pro Display; color: rgba(17, 17, 17, 0.4)">Volume</div>
                <div style="font-size: 14px; font-weight: 500; font-family: Sf Pro Display"; color: rgba(17, 17, 17, 1)>€${Highcharts.numberFormat(this.points[1].point.y, 2)}</div>
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
            id: 'graph',
            name: 'AAPL Stock Price',
            data: ohlc,
            color: 'rgba(69, 202, 148, 1)',
            fillColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, 'rgba(69, 202, 148, 0.3)'],
                [1, 'rgba(69, 202, 148, 0.001)'],
              ],
            },
            zones: [
              {
                value: threshold,
                color: 'rgba(255, 0, 0, 1)',
                fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                    [0, 'rgba(255, 0, 0, 0.3)'],
                    [1, 'rgba(255, 0, 0, 0.001)'],
                  ],
                },
              },
              {
                color: 'rgba(69, 202, 148, 1)',
                fillColor: {
                  linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                  stops: [
                    [0, 'rgba(69, 202, 148, 0.3)'],
                    [1, 'rgba(69, 202, 148, 0.001)'],
                  ],
                },
              },
            ],
            marker: {
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
                },
              },
            },
          },
          {
            type: 'column',
            id: 'aapl-volume',
            name: 'AAPL Volume',
            data: formattedData,
            yAxis: 1,
          },
        ],
        navigator: {
          height: 48,
          maskFill: '#11111100',
          outlineWidth: 1,
          outlineColor: 'rgba(17, 17, 17, 0.05)',
          scrollbar: {
            enabled: false,
          },
          handles: {
            enabled: false,
          },
          series: {
            type: 'line',
            color: 'rgba(114, 72, 247, 1)',
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
              condition: {
                maxWidth: 800,
              },
              chartOptions: {
                rangeSelector: {
                  inputEnabled: false,
                },
              },
            },
          ],
        },
        credits: {
          enabled: false,
        },
      });
    };

    fetchData();
  }, [graphType, selectedFilter, apiData]);

  return (
    <div style={{ padding: '45px 24px 34px 22px' }}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
        containerProps={{ style: { height: '620px' } }}
      />
    </div>
  );
};

export default StockChart;

'use client';
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import { useFetchCoinDetailsGraphDataQuery } from '@/app/redux/coin-details';
import { useFetchHistoricalCoinDataDetailsQuery } from '@/app/redux/reducers/data-grid';
import { usePathname } from 'next/navigation';
import { priceNumberFormatter } from '../../data-table/price';
import numeral from 'numeral';

interface StockChartProps {
  selectedGraph: string;
  selectedFilter: string;
  volumeValue: string;
  isFullScreen: boolean;
  chartRef: any;
}

const StockChart: React.FC<StockChartProps> = ({
  selectedGraph,
  selectedFilter,
  volumeValue,
  isFullScreen,
  chartRef,
}) => {
  const pathname = usePathname();
  const [options, setOptions] = useState({});

  const convertToUppercasePeriod = (input: string) => {
    if (input === '24h') return '1D';
    return input.replace(
      /(\d+)([a-z])/i,
      (_, number, period) => `${number}${period.toUpperCase()}`,
    );
  };

  const range = convertToUppercasePeriod(volumeValue);
  const coinId = pathname.split('/').pop();

  const { data: apiData } = useFetchCoinDetailsGraphDataQuery({
    coinId,
    range,
  });

  const { data: candleStickData } = useFetchHistoricalCoinDataDetailsQuery({
    coinId,
  });

  const graphType =
    selectedFilter === 'candlestick'
      ? 'candlestick'
      : selectedGraph === 'Price'
        ? 'area'
        : 'line';

  const getDate = (timestamp: string) =>
    new Date(parseInt(timestamp, 10) * 1000).getTime();

  useEffect(() => {
    const fetchChartData = async () => {
      if (!apiData?.data?.points) return;

      const points = apiData.data.points;
      const data: any[] = [];
      const volume: any[] = [];
      const candleStickVolume: any[] = [];
      const coinThreshold = Object.values(points)[0].v[0];
      const volumeThreshold = Object.values(points)[0].v[1];

      for (const timestamp in points) {
        if (points.hasOwnProperty(timestamp)) {
          const point = points[timestamp];
          data.push([getDate(timestamp), point.v[0]]);
          volume.push([getDate(timestamp), point.v[1]]);
        }
      }

      const formattedVolumeData = volume.map(([time, value]) => ({
        x: time,
        y: value,
        color:
          value > volumeThreshold
            ? 'rgba(69, 202, 148, 1)'
            : 'rgba(152, 0, 255, 1)',
      }));

      const yMin = Math.min(...data.map((point) => point[1]));
      const yMax = Math.max(...data.map((point) => point[1]));

      let candlestickSeries = [];

      if (selectedFilter === 'candlestick' && candleStickData?.data?.quotes) {
        candlestickSeries = candleStickData.data.quotes.map((quote: any) => {
          candleStickVolume.push({
            x: new Date(quote.timeOpen).getTime(),
            y: quote.quote.volume,
            color:
              quote.quote.volume > volumeThreshold
                ? 'rgba(69, 202, 148, 1)'
                : 'rgba(152, 0, 255, 1)',
          });

          return [
            new Date(quote.timeOpen).getTime(),
            quote.quote.open,
            quote.quote.high,
            quote.quote.low,
            quote.quote.close,
          ];
        });
      }

      debugger;

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
            plotLines: [
              {
                value: coinThreshold,
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
              formatter: function (this: any) {
                const value = this.value;
                if (value >= 1000000000000)
                  return (value / 1000000000000).toFixed(1) + 'T';
                if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
                if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
                return value;
              },
            },
            height: '80%',
            resize: { enabled: false },
            gridLineWidth: 0.5,
            min: yMin * 0.999,
            max: yMax * 1.001,
          },
          {
            labels: { enabled: false, align: 'left' },
            top: '80%',
            height: '20%',
            offset: 0,
            gridLineWidth: 0,
          },
        ],
        tooltip: {
          backgroundColor: 'transparent',
          borderColor: 'transparent',
          shadow: false,
          useHTML: true,
          formatter: function (this: any) {
            const date = Highcharts.dateFormat('%m/%d/%Y', this.x);
            const time = Highcharts.dateFormat('%I:%M:%S %p', this.x);
            const price = priceNumberFormatter(this.y);
            const volume = numeral(
              Object.values(points)[this.point.index].v[1],
            ).format('0.00a');

            return `
              <div style="padding: 16px; border-radius: 8px; background: white; box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05); width: 250px; max-height: 194px;">
                <div style="display: flex; justify-content: space-between; padding-bottom: 16px;">
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${date}</div>
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${time}</div>
                </div>
                <div style="display: flex; justify-content: space-between;">
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">Price</div>
                  <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1)">$${price}</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                  <div style="font-size: 11px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.4)">Volume</div>
                  <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase;">$${volume}</div>
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
            data: graphType === 'candlestick' ? candlestickSeries : data,
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
                value: coinThreshold,
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
            dataGrouping: { enabled: false },
          },
          {
            type: 'column',
            id: 'aapl-volume',
            name: 'AAPL Volume',
            data:
              graphType === 'candlestick'
                ? candleStickVolume
                : formattedVolumeData,
            yAxis: 1,
            dataGrouping: { enabled: false }, // Ensure no data grouping for the volume series
          },
        ],
        navigator: {
          height: 48,
          maskFill: '#11111100',
          outlineWidth: 1,
          outlineColor: 'rgba(17, 17, 17, 0.05)',
          scrollbar: { enabled: true },
          handles: { enabled: true },
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
              condition: { maxWidth: 800 },
              chartOptions: { rangeSelector: { inputEnabled: false } },
            },
          ],
        },
        credits: { enabled: false },
      });
    };

    fetchChartData();
  }, [graphType, selectedFilter, apiData, candleStickData, volumeValue]);

  return (
    <div
      ref={chartRef}
      style={{
        padding: '45px 24px 34px 22px',
        height: isFullScreen ? '90vh' : '620px',
      }}
    >
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
        containerProps={{ style: { height: '100%' } }}
      />
    </div>
  );
};

export default StockChart;

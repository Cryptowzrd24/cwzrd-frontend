'use client';

import React, { useEffect } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const CandlestickChart = () => {
  useEffect(() => {
    // Additional effect logic if needed
  }, []);

  const options = {
    chart: {
      backgroundColor: 'transparent',
    },
    rangeSelector: {
      enabled: false, // Disable the range selector
    },
    navigator: {
      enabled: false, // Disable the navigator
    },
    scrollbar: {
      enabled: false, // Disable the scrollbar
    },
    title: {
      text: null, // Remove the chart title
    },
    series: [
      {
        type: 'candlestick',
        name: 'Bitcoin',
        data: [
          // Replace with your actual data points
          [Date.UTC(2024, 6, 1), 29.9, 71.5, 29.9, 71.5],
          [Date.UTC(2024, 6, 2), 71.5, 106.4, 71.5, 106.4],
          [Date.UTC(2024, 6, 3), 106.4, 129.2, 106.4, 129.2],
          [Date.UTC(2024, 6, 4), 129.2, 144.0, 129.2, 144.0],
          [Date.UTC(2024, 6, 5), 144.0, 176.0, 144.0, 16.0],
          [Date.UTC(2024, 6, 6), 144.0, 176.0, 144.0, 76.0],
          [Date.UTC(2024, 6, 7), 144.0, 176.0, 114.0, 17.0],
          [Date.UTC(2024, 6, 8), 144.0, 176.0, 154.0, 132.0],
          [Date.UTC(2024, 6, 9), 14.0, 126.0, 144.0, 176.0],
          [Date.UTC(2024, 6, 10), 1444.0, 16.0, 154.0, 76.0],
          [Date.UTC(2024, 6, 11), 141.0, 136.0, 1.0, 10.0],
          [Date.UTC(2024, 6, 12), 143.0, 746.0, 44.0, 76.0],
        ],
        color: '#FF0000', // Custom color for the bearish candles
        upColor: '#00FF00', // Custom color for the bullish candles
        lineColor: '#000000', // Line color for the wicks
        upLineColor: '#000000', // Line color for the wicks when the candle is bullish
        dataGrouping: {
          units: [
            [
              'week', // unit name
              [1], // allowed multiples
            ],
            ['month', [1, 2, 3, 4, 6]],
          ],
        },
      },
    ],
    tooltip: {
      enabled: true,
    },
    credits: {
      enabled: false,
    },
    legend: {
      enabled: false,
    },
    xAxis: {
      gridLineWidth: 0,
      labels: {
        enabled: false,
      },
    },
    yAxis: {
      labels: {
        enabled: false,
      },
    },
  };

  return (
    <div>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
};

export default CandlestickChart;

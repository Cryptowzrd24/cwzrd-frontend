'use client';

import React, { useEffect, useRef } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact, {
  HighchartsReactRefObject,
} from 'highcharts-react-official';

const CandlestickChart: React.FC = () => {
  const chartRef = useRef<HighchartsReactRefObject>(null);

  useEffect(() => {
    if (chartRef.current) {
      const chartContainer = chartRef.current.container.current;

      if (chartContainer) {
        chartContainer.style.height = '135px';
        chartContainer.style.marginTop = '-12px';
      }
    }
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
          [Date.UTC(2024, 6, 1), 100, 130, 90, 110],
          [Date.UTC(2024, 6, 2), 110, 140, 100, 120],
          [Date.UTC(2024, 6, 3), 120, 150, 110, 130],
          [Date.UTC(2024, 6, 4), 130, 160, 120, 140],
          [Date.UTC(2024, 6, 5), 140, 170, 130, 150],
          [Date.UTC(2024, 6, 6), 150, 180, 140, 160],
          [Date.UTC(2024, 6, 7), 122, 190, 100, 170],
          [Date.UTC(2024, 6, 8), 170, 200, 160, 180],
          [Date.UTC(2024, 6, 9), 180, 210, 170, 190],
          [Date.UTC(2024, 6, 10), 190, 220, 180, 200],
          [Date.UTC(2024, 6, 10), 191, 220, 180, 100],
          [Date.UTC(2024, 6, 11), 200, 230, 190, 210],
          [Date.UTC(2024, 6, 12), 270, 140, 190, 190],
        ],
        color: 'rgba(152, 0, 255, 1)', // Custom color for the bearish candles
        upColor: 'rgba(17, 210, 105, 1)', // Custom color for the bullish candles
        lineColor: 'rgba(152, 0, 255, 1)', // Line color for the wicks
        upLineColor: 'rgba(17, 210, 105, 1)', // Line color for the wicks when the candle is bullish
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
      useHTML: true,
      backgroundColor: 'transparent',
      borderColor: 'transparent',
      borderRadius: 10,
      borderWidth: 0,
      shadow: false,
      style: {
        outerHeight: '20px',
        lineHeight: '15px',
        padding: '5px',
      },
      positioner: function (
        this: any,
        labelWidth: number,
        labelHeight: number,
        point: Highcharts.Point,
      ): { x: number; y: number } {
        const chart: any = this.chart;
        const plotLeft = chart.plotLeft;
        const plotTop = chart.plotTop;
        const plotWidth = chart.plotWidth;
        let tooltipX = point.plotX + plotLeft - labelWidth / 2;
        const tooltipY = plotTop - labelHeight - 10;

        if (tooltipX < plotLeft) {
          tooltipX = plotLeft;
        } else if (tooltipX + labelWidth > plotLeft + plotWidth) {
          tooltipX = plotLeft + plotWidth - labelWidth;
        }

        return {
          x: tooltipX,
          y: tooltipY,
        };
      },
      formatter: function (this: any) {
        const point = this.point;
        const open: any = point.open;
        const high: any = point.high;
        const low: any = point.low;
        const close: any = point.close;
        return `
          <div
           style="display: flex; align-items: center; justify-content: center; 
           width:120px;
           height:60px;
           background: white; 
           border-radius: 10px; 
           padding: 4px 8px; 
           font-size: 13px; 
           font-weight: 400;
           color: #111111;">
           <div styles = "display:flex; flex-direction:column; gap:2px; flex-wrap:wrap;">
            <div>Open: $${open}</div>
            <div>High: $${high}</div>
            <div>Low: $${low}</div>
            <div>Close: $${close}</div>
           </div>
          </div>`;
      },
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
      lineWidth: 0,
    },
    yAxis: {
      labels: {
        enabled: false,
      },
    },
  };

  return (
    <div style={{ width: '100%' }}>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
      />
    </div>
  );
};

export default CandlestickChart;

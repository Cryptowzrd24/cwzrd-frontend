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
          [Date.UTC(2024, 6, 1), 120, 125, 115, 118], // Small candle
          [Date.UTC(2024, 6, 2), 118, 130, 117, 127], // Larger candle
          [Date.UTC(2024, 6, 3), 127, 132, 125, 130], // Medium candle
          [Date.UTC(2024, 6, 4), 130, 138, 128, 135], // Larger candle
          [Date.UTC(2024, 6, 5), 135, 140, 130, 132], // Medium candle, bearish
          [Date.UTC(2024, 6, 6), 132, 135, 125, 126], // Medium candle, bearish
          [Date.UTC(2024, 6, 7), 126, 128, 120, 122], // Medium candle, bearish
          [Date.UTC(2024, 6, 8), 122, 124, 118, 119], // Small candle, bearish
          [Date.UTC(2024, 6, 9), 119, 123, 115, 120], // Small candle
          [Date.UTC(2024, 6, 10), 120, 130, 118, 128], // Larger candle
          [Date.UTC(2024, 6, 11), 128, 132, 125, 126], // Medium candle, bearish
          [Date.UTC(2024, 6, 12), 126, 128, 122, 123], // Small candle
          [Date.UTC(2024, 6, 13), 123, 127, 120, 125], // Medium candle
          [Date.UTC(2024, 6, 14), 125, 130, 120, 128], // Medium candle
          [Date.UTC(2024, 6, 15), 128, 132, 126, 129], // Medium candle
          [Date.UTC(2024, 6, 16), 129, 135, 127, 133], // Medium candle
          [Date.UTC(2024, 6, 17), 133, 138, 130, 135], // Medium candle
          [Date.UTC(2024, 6, 18), 135, 140, 132, 138], // Medium candle
          [Date.UTC(2024, 6, 19), 138, 145, 135, 142], // Medium candle
          [Date.UTC(2024, 6, 20), 142, 148, 140, 145], // Medium candle
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
      outside: true,
      style: {
        fontSize: '12px',
        lineHeight: '15px',
      },
      positioner: function (labelWidth: any, labelHeight: any, point: any) {
        const chart: any = (this as any).chart;
        const plotLeft: any = chart.plotLeft;
        const plotTop: any = chart.plotTop;
        const plotWidth: any = chart.plotWidth;
        let tooltipX: any = point.plotX + plotLeft - labelWidth / 2;
        let tooltipY: any = point.plotY + plotTop - labelHeight - 20; // Move tooltip higher by 20 more pixels

        if (tooltipX < plotLeft) {
          tooltipX = plotLeft;
        } else if (tooltipX + labelWidth > plotLeft + plotWidth) {
          tooltipX = plotLeft + plotWidth - labelWidth;
        }

        if (tooltipY < plotTop) {
          tooltipY = plotTop + point.plotY + 10;
        }

        return {
          x: tooltipX,
          y: tooltipY,
        };
      },
      formatter: function () {
        const point: any = (this as any).point;
        const open = point.open;
        const high = point.high;
        const low = point.low;
        const close = point.close;
        return `
          <div style="display: flex; flex-direction: column; align-items: start; justify-content: center;
           background: rgba(255, 255, 255, 0.85);
           border-radius: 8px;
           padding: 4px 8px;
           font-size: 11px;
           font-weight: 400;
           color: #111111;
           margin-top: -70px;
           ">
            <div style="margin-bottom: 2px;"><strong>Open:</strong> $${open}</div>
            <div style="margin-bottom: 2px;"><strong>High:</strong> $${high}</div>
            <div style="margin-bottom: 2px;"><strong>Low:</strong> $${low}</div>
            <div><strong>Close:</strong> $${close}</div>
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

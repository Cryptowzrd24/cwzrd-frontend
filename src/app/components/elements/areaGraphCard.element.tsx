import React, { useEffect, useRef } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts';

const AreaChart = (props: IChartProps) => {
  const { data, color, isMarker, percent } = props;
  const chartRef: any = useRef(null);

  const chartOptions: any = {
    chart: {
      type: 'area',
      plotBorderWidth: 0,
      plotMarginBottom: 0,
    },
    xAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: null,
      },
      lineWidth: 0,
      gridLineWidth: 0,
      lineColor: 'transparent',
      offset: 13,
    },
    title: {
      text: null,
    },
    yAxis: {
      labels: {
        enabled: false,
      },
      title: {
        text: null,
      },
      lineWidth: 0,
      gridLineWidth: 0.5,
      tickAmount: 3,
    },
    legend: {
      enabled: false,
    },
    credits: {
      enabled: false,
    },
    series: [
      {
        name: '',
        data: data,
        lineWidth: 2,
        color: `rgb(${color})`,
        fillOpacity: 0,
        threshold: null,
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 1, y2: 0 },
          stops: [
            [0, `rgba(${color}, 0.1)`],
            // [1, `rgba( ${color}, 1)`],
          ],
        },
        marker: {
          enabled: isMarker ? true : false,
          fillColor: isMarker ? 'rgba(114, 72, 247, 1)' : 'transparent',
          shadow: false,
          radius: 3,
          lineWidth: 0,
          lineColor: '#fff',
          states: {
            hover: {
              enabled: true,
              fillColor: `rgb(${color})`,
              lineColor: '#fff',
              lineWidth: 4,
              radius: 8,
              shadow: false,
            },
          },
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
      style: {},
      formatter: function () {
        const point: any = (this as any)?.point;
        const yValue = point.y;
        return `
          <div
           style="display: flex; align-items: center; justify-content: center; 
           width:71px;
           height:20px;
           background: white; 
           border-radius: 40px; 
           padding: 4px 8px; 
           box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05);
           font-size: 14px; 
           font-weight: 300;
           color: #111111;">
            ${percent ? '' : '$'}${yValue}${percent ? '%' : 'm'}
          </div>`;
      },
      positioner: function (
        labelWidth: number,
        labelHeight: number,
        point: any,
      ) {
        const chart: any = (this as any)?.chart;
        const plotX: any = point.plotX + chart.plotLeft;
        const plotY: any = point.plotY + chart.plotTop;
        const cursorPadding = 10;

        let x = plotX + cursorPadding; // Default position to the right
        let y = plotY - labelHeight / 2;

        // Adjust position to the left if the tooltip goes out of bounds
        if (x + labelWidth > chart.plotLeft + chart.plotWidth) {
          x = plotX - labelWidth - cursorPadding;
        }

        // Ensure tooltip stays within chart bounds on x-axis
        if (x < chart.plotLeft) {
          x = chart.plotLeft;
        }

        // Ensure tooltip stays within chart bounds on y-axis
        if (y < chart.plotTop) {
          y = chart.plotTop;
        } else if (y + labelHeight > chart.plotTop + chart.plotHeight) {
          y = chart.plotTop + chart.plotHeight - labelHeight;
        }

        return { x, y };
      },
      outside: false,
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current?.chart.setSize(undefined, 100);
      const innerDiv = chartRef.current.container.current.querySelector('div');
      if (innerDiv) {
        innerDiv.style.height = 'auto';
        innerDiv.style.width = '100% !important';
        // innerDiv.style.marginTop = '35px';
      }
      const xAxisElement = chartRef.current.chart.xAxis[0].axisGroup;
      xAxisElement?.destroy();
    }
  }, []);

  return (
    <div style={{ width: '100%' }}>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

export default AreaChart;

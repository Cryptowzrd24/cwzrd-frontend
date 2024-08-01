import React, { useEffect, useRef } from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts';

const BarChart = (props: IChartProps) => {
  const { data, color } = props;
  const chartRef: any = useRef(null);

  const chartOptions: HighchartsChartOptions = {
    chart: {
      type: 'column',
      plotBorderWidth: 0,
      plotMarginBottom: 0,
    },
    title: {
      text: null,
    },
    xAxis: {
      //   categories: data.map((d) => d.x),
      title: {
        text: null,
      },
      labels: {
        enabled: false,
      },
      lineWidth: 0,
      gridLineWidth: 0,
      lineColor: 'transparent',
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
        data: data.map((d) => d.y),
        lineWidth: 1,
        color: `rgb( ${color})`,
        fillOpacity: 1,
        threshold: null,
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
        const point = this.point;
        const yValue = point.y;
        return `
          <div
           style="display: flex; align-items: center; justify-content: center; 
           width:71px;
           height:25px;
           background: white; 
           border-radius: 40px; 
           padding: 4px 8px; 
           box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05);
           font-size: 14px; 
           font-weight: 300;
           color: #111111;">
             $${yValue}m
          </div>`;
      },
      positioner: function (labelWidth, labelHeight, point) {
        const chart = this.chart;
        const plotX = point.plotX + chart.plotLeft;
        const plotY = point.plotY + chart.plotTop;
        const cursorPadding = 10;

        let x = plotX + cursorPadding; // Default position to the right
        let y = plotY - labelHeight / 2;

        // Adjust position to the left if the tooltip goes out of bounds
        if (x + labelWidth > chart.plotLeft + chart.plotWidth) {
          x = plotX - labelWidth - cursorPadding + 10;
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

export default BarChart;

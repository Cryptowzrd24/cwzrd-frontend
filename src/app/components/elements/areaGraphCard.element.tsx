import React, { useEffect, useRef } from 'react';

import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts';

const AreaChart = (props: IChartProps) => {
  const { data, color, isMarker } = props;
  const chartRef: any = useRef(null);

  const chartOptions: HighchartsChartOptions = {
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
        lineWidth: 1,
        color: `rgb( ${color})`,
        fillOpacity: 0,
        threshold: null,
        fillColor: {
          linearGradient: { x1: 0, x2: 0, y1: 1, y2: 0 },
          stops: [
            [0, `rgba( ${color}, 0)`],
            [1, `rgba( ${color}, 1)`],
          ],
        },
        marker: {
          enabled: isMarker ? true : false,
          fillColor: isMarker ? 'rgba(114, 72, 247, 1)' : '',
          radius: 3,
        },
      },
    ],
    tooltip: {
      backgroundColor: '#fff',
      borderColor: 'transparent',
      borderRadius: 10,
      borderWidth: 0,
      width: '71px',
      height: '25px',
      style: {},
      formatter: function () {
        const point = this.point;
        const yValue = point.y;
        return `<span style="color: '#111111'; font-weight: 400; font-size: 13; line-height: '16px'">$${yValue}M</span>`;
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current?.chart.setSize(undefined, 100);
      const innerDiv = chartRef.current.container.current.querySelector('div');
      if (innerDiv) {
        innerDiv.style.height = 'auto';
        innerDiv.style.width = '100% !important';
        // innerDiv.style.marginTop = '-35px';
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

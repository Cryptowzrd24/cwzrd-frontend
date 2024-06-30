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
      formatter: function () {
        const point = this.point;
        const yValue = point.y;
        return `<span style="color: black; font-weight: bold; padding: 2px; border-radius: 50%!important; margin-right: 2px;">${yValue}</span>`;
      },
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current?.chart.setSize(320, 124);
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

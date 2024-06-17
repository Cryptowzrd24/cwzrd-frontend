import React, { useEffect, useRef } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from 'highcharts/highcharts';

interface IAreaChartProps {
    data: {x: string | number , y : string | number}[]
    color: string
}

const AreaChart = (props : IAreaChartProps) => {
    const {data, color} = props
    const chartRef: any = useRef(null);

    const chartOptions : HighchartsChartOptions  = {
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
            gridLineWidth: .5,
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
                color: color,
                fillOpacity: 0,
                threshold: null,
                fillColor: {
                    linearGradient: { x1: 0, x2: 0, y1: 1, y2: 0 },
                    stops: [
                        [0, 'rgba(201, 242, 155, 0)'],
                        [1, 'rgba(201, 242, 155, 1)'],
                    ],
    
                },
                marker: {
                    enabled: false,
                },
            },
        ],
        tooltip: {
            formatter: function () {
              const point = this.point;
              const yValue = point.y; 
              return `<span style="color: black; font-weight: bold; padding: 2px; border-radius: 50%!important; margin-right: 2px;">$${yValue}</span>`;
            },
          },
    };

    useEffect(() => {
        if (chartRef.current) {
            chartRef.current?.chart.setSize(320, 104);
            const xAxisElement = chartRef.current.chart.xAxis[0].axisGroup;
            xAxisElement?.destroy();
        }
    }, []);

    return (
        <div style={{width: '100%'}}>
            <HighchartsReact ref={chartRef} highcharts={Highcharts} options={chartOptions} />
        </div>
    );
};


export default AreaChart;
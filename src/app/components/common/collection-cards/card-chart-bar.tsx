'use client';
import React, { useEffect, useRef } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts';

const CardChartBar = (props: any) => {
  const { data, color, isMarker, headerName } = props;
  const chartRef: any = useRef(null);

  const chartOptions: any = {
    chart: {
      type: 'column',
      plotBorderWidth: 0,
      plotMarginBottom: 0,
    },
    xAxis: {
      labels: {
        enabled: true,
        style: {
          fontSize: '12px',
          fontFamily: 'Sf Pro Display',
          color: 'rgba(17, 17, 17, 0.4)',
        },
      },
      title: {
        text: null,
      },
      lineWidth: 0,
      gridLineWidth: 0,
      lineColor: 'transparent',
      crosshair: {
        // Enable crosshair for y-axis
        width: 1,
        color: 'rgba(17, 17, 17, 0.4)',
        dashStyle: 'longdash', // Style as dotted
      },
    },
    title: {
      text: null,
    },
    yAxis: {
      labels: {
        align: 'left',
        style: {
          fontSize: '12px',
          fontFamily: 'Sf Pro Display',
          color: 'rgba(17, 17, 17, 0.4)',
        },
      },
      title: {
        text: null,
      },
      lineWidth: 0,
      gridLineWidth: 1.5,
      gridLineDashStyle: 'shortdot',
      tickAmount: 10,
      opposite: true,
      crosshair: {
        // Enable crosshair for y-axis
        width: 1,
        color: 'rgba(17, 17, 17, 0.4)',
        dashStyle: 'longdash', // Style as dotted
      },
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
        color: `#7248F7`,
        fillOpacity: 0,
        threshold: null,
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
        // const point: any = (this as any)?.point;
        // const yValue = point.y;
        return `<div style="padding: 16px; border-radius: 8px; background: white; box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05); width: 230px; max-height: 194px;">
                <div style="display: flex; justify-content: space-between; padding-bottom: 16px;">
                  <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">Aug 11, 2024</div>
                  <div style="font-size: 14px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.6);">10:30 AM</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 6px;">
                <div style="display: flex; justify-content: start; gap:10px">
                <div style='width:16px; height:16px; background-color:#7248F7; border-radius:50%'></div>
                  <div style="font-size: 14px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.8)">${headerName}:</div>
                </div>
                  <div style="font-size: 14px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase;">$96,789.80</div>
                </div>
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
      chartRef.current?.chart.setSize(undefined, 190);
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
    <div style={{ width: '95%' }}>
      <HighchartsReact
        ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
      />
    </div>
  );
};

export default CardChartBar;

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
      height: 168,
      width: 394,
    },
    xAxis: {
      type: 'datetime',
      labels: {
        enabled: true,
        format: '{value:%H:%M}', // Shortened format to show only hours and minutes
        style: {
          fontSize: '10px', // Slightly reduce font size to fit more labels
          fontFamily: 'Sf Pro Display',
          color: 'rgba(17, 17, 17, 0.4)',
        },
        rotation: 0, // Prevent rotation for better readability
        align: 'center', // Align the labels to the center
      },
      tickInterval: 3 * 3600 * 1000, // Set tick interval to 3 hours for better spacing
      title: {
        text: null,
      },
      lineWidth: 0,
      gridLineWidth: 0,
      lineColor: 'transparent',
      crosshair: {
        width: 1,
        color: 'rgba(17, 17, 17, 0.4)',
        dashStyle: 'shortdash',
        snap: false, // Allows the crosshair to be free-floating
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
        width: 1,
        color: 'rgba(17, 17, 17, 0.4)',
        dashStyle: 'shortdash',
        snap: false, // Allows the crosshair to be free-floating
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
        const date = Highcharts.dateFormat('%b %e, %Y', (this as any).x);
        const time = Highcharts.dateFormat('%H:%M %p', (this as any).x);
        const value = Highcharts.numberFormat((this as any).y, 2);

        return `<div style="padding: 8px; border-radius: 8px; background: white; box-shadow: 0px 4px 28px 0px rgba(0, 0, 0, 0.05); width: 180px; max-height: 150px;">
                <div style="display: flex; justify-content: space-between; padding-bottom: 8px;">
                  <div style="font-size: 12px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1);">${date}</div>
                  <div style="font-size: 12px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.6);">${time}</div>
                </div>
                <div style="display: flex; justify-content: space-between; padding-top: 4px;">
                <div style="display: flex; justify-content: start; gap:6px">
                <div style='width:12px; height:12px; background-color:#7248F7; border-radius:50%'></div>
                  <div style="font-size: 12px; font-weight: 400; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 0.8)">${headerName}:</div>
                </div>
                  <div style="font-size: 12px; font-weight: 500; font-family: 'Sf Pro Display'; color: rgba(17, 17, 17, 1); text-transform: uppercase;">$${value}</div>
                </div>
              </div>`;
      },
      positioner: function (
        labelWidth: number,
        labelHeight: number,
        point: any,
      ) {
        const chart = (this as any)?.chart;
        const plotX = point.plotX + chart.plotLeft;
        const plotY = point.plotY + chart.plotTop;
        const cursorPadding = 10;

        // Default position: Tooltip is placed to the right of the point
        let x = plotX + cursorPadding;
        let y = plotY - labelHeight / 2;

        // Ensure tooltip stays within chart bounds on the x-axis
        const chartRightBoundary = chart.plotLeft + chart.plotWidth;
        const chartLeftBoundary = chart.plotLeft;

        // Calculate available space on both sides of the point
        const spaceRight =
          chartRightBoundary - (plotX + labelWidth + cursorPadding);
        const spaceLeft =
          plotX - chartLeftBoundary - labelWidth - cursorPadding;

        // Adjust the tooltip logic to prioritize right side unless it's not enough space
        if (spaceRight < 0 && spaceLeft >= 0) {
          // Not enough space on the right, move to the left
          x = plotX - labelWidth - cursorPadding;
        }

        // Final check to ensure the tooltip is entirely inside the chart bounds
        if (x + labelWidth > chartRightBoundary) {
          x = chartRightBoundary - labelWidth - cursorPadding;
        }
        if (x < chartLeftBoundary) {
          x = chartLeftBoundary + cursorPadding;
        }

        // Ensure tooltip stays within chart bounds on the y-axis
        if (y < chart.plotTop) {
          y = chart.plotTop;
        } else if (y + labelHeight > chart.plotTop + chart.plotHeight) {
          y = chart.plotTop + chart.plotHeight - labelHeight;
        }

        return { x, y };
      },

      outside: true,
    },
  };

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current?.chart.setSize(394, 168);
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

export default CardChartBar;

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
        width: 0,
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
        const chart: any = (this as any)?.chart;
        const plotX: any = point.plotX + chart.plotLeft;
        const plotY: any = point.plotY + chart.plotTop;
        const cursorPadding = 5; // Padding to keep tooltip close but not overlapping with cursor

        let x = plotX + cursorPadding; // Default position to the right of the cursor
        let y = plotY - labelHeight - cursorPadding; // Default position above the cursor

        // Adjust x position if tooltip would overflow the chart's width
        if (x + labelWidth > chart.plotLeft + chart.plotWidth) {
          x = plotX - labelWidth - cursorPadding; // Move to the left of the cursor
        } else if (x < chart.plotLeft) {
          x = plotX + cursorPadding; // Move to the right within the bounds
        }

        // Adjust y position if tooltip would overflow the chart's height
        if (y < chart.plotTop) {
          y = plotY + cursorPadding; // Move below the cursor
        } else if (y + labelHeight > chart.plotTop + chart.plotHeight) {
          y = chart.plotTop + chart.plotHeight - labelHeight - cursorPadding; // Keep within the bottom bounds
        }

        // Adjust y position to avoid cursor overlap, switching direction if necessary
        if (y < plotY && y + labelHeight > plotY) {
          y = plotY + cursorPadding; // Position below if too close to the cursor
        } else if (y > plotY && y < plotY + cursorPadding) {
          y = plotY - labelHeight - cursorPadding; // Position above if below the cursor
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

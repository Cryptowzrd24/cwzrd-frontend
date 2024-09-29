'use client';
import React, { useEffect, useRef, useMemo, useCallback } from 'react';
import HighchartsReact from 'highcharts-react-official';
import Highcharts from 'highcharts/highcharts';
import { debounce } from 'lodash';
import { priceNumberFormatDigits } from '@/utils/price-number-formater';

// Memoizing the Graph component using React.memo
const Graph = React.memo((props: IChartProps) => {
  const { data, color, isMarker, percent, fill, className, isLiveMarket, id } =
    props;
  const chartRef: any = useRef(null);

  // Memoize getDate function
  const getDate = useCallback(
    (timestamp: string) => new Date(parseInt(timestamp, 10) * 1000).getTime(),
    [],
  );

  // Memoize the liveMarketChartData
  const liveMarketChartData = useMemo(() => {
    const result: any[] = [];
    if (isLiveMarket && data && data.data && data.data.points) {
      let count = 0;
      for (const timestamp in data.data.points) {
        if (data.data.points.hasOwnProperty(timestamp)) {
          if (count >= 100) break;
          const point = data.data.points[timestamp];
          result.push([getDate(timestamp), point.v[0]]);
          count++;
        }
      }
    }
    return result;
  }, [data, isLiveMarket, getDate]);

  // Memoize the debouncedUpdateChart function
  const debouncedUpdateChart = useCallback(
    debounce(() => {
      if (chartRef.current) {
        chartRef.current.chart.update({
          series: [
            {
              data: isLiveMarket ? liveMarketChartData : data,
            },
          ],
        });
      }
    }, 300),
    [data, isLiveMarket, liveMarketChartData],
  );

  useEffect(() => {
    if (chartRef.current) {
      chartRef.current.chart.update({
        series: [
          {
            data: isLiveMarket ? liveMarketChartData : data,
          },
        ],
      });
    }

    debouncedUpdateChart();
    return () => debouncedUpdateChart.cancel();
  }, [id, liveMarketChartData, debouncedUpdateChart]);

  useEffect(() => {
    if (chartRef.current && className !== '') {
      chartRef.current?.chart.setSize(undefined, 327);
      const innerDiv = chartRef.current.container.current.querySelector('div');
      if (innerDiv) {
        innerDiv.style.height = '327px';
        innerDiv.style.width = '100% !important';
      }
      const xAxisElement = chartRef.current.chart.xAxis[0].axisGroup;
      xAxisElement?.destroy();
    }
  }, [className]);

  // Memoize chartOptions object
  const chartOptions = useMemo(
    () => ({
      chart: {
        type: 'area',
        plotBorderWidth: 0,
        plotMarginBottom: 0,
        backgroundColor: fill || 'transparent',
        height: '100%',
        spacingRight: 20,
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
          enabled: true,
          align: 'right',
          x: 20,
          style: {
            fontSize: '12px',
            fontFamily: 'Sf Pro Display',
            fontWeight: '400',
            color: 'rgba(17, 17, 17, 0.4)',
          },
          formatter: function (this: any) {
            const value = this.value;
            if (value >= 1000000000000)
              return (value / 1000000000000).toFixed(1) + 'T';
            if (value >= 1000000000)
              return (value / 1000000000).toFixed(1) + 'B';
            if (value >= 1000000) return (value / 1000000).toFixed(1) + 'M';
            if (value >= 1000) return (value / 1000).toFixed(1) + 'K';
            return value;
          },
        },
        title: {
          text: null,
        },
        lineWidth: 0,
        gridLineWidth: 0.5,
        tickAmount: 10,
        opposite: true,
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
          dataGrouping: { enabled: false },
          fillColor: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, 'rgba(69, 202, 148, 0.3)'],
              [1, 'rgba(69, 202, 148, 0.001)'],
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
          const point: any = (this as any).point;
          const yValue = point.y.toFixed(2);
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
              ${percent ? '' : '$'}${isLiveMarket ? priceNumberFormatDigits(yValue) : yValue}${percent ? '%' : isLiveMarket ? '' : 'm'}
            </div>`;
        },
        valueDecimals: 2,
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
    }),
    [data, color, fill, isMarker, percent, isLiveMarket],
  );

  return (
    <div style={{ width: '100%', height: '347px' }}>
      <HighchartsReact
        className={className || ''}
        ref={chartRef}
        highcharts={Highcharts}
        options={chartOptions}
        containerProps={{
          style: { height: '347px', paddingInline: '24px', paddingTop: '24px' },
        }}
      />
    </div>
  );
});

export default Graph;

'use client';
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';

const StockChart = () => {
  const [options, setOptions] = useState({});
  const threshold: any = 60000000;

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        'https://demo-live-data.highcharts.com/aapl-ohlcv.json',
      );
      const data = await response.json();

      // split the data set into ohlc and volume
      const ohlc = [];
      const volume = [];
      const dataLength = data.length;

      for (let i = 0; i < dataLength; i += 1) {
        ohlc.push([
          data[i][0], // the date
          data[i][1], // open
          data[i][2], // high
          data[i][3], // low
          data[i][4], // close
        ]);

        volume.push([
          data[i][0], // the date
          data[i][5], // the volume
        ]);
      }
      const formattedData = volume.map(([time, value]) => ({
        x: time,
        y: value,
        color:
          value > threshold ? 'rgba(69, 202, 148, 1)' : 'rgba(152, 0, 255, 1)',
      }));

      setOptions({
        rangeSelector: {
          enabled: false,
        },
        xAxis: [
          {
            labels: {
              enabled: true,
              style: {
                fontSize: '12px',
                fontFamily: 'Sf Pro Display',
                color: 'rgba(17, 17, 17, 0.4)',
              },
            },
            lineWidth: 0,
            tickWidth: 0,
          },
        ],
        yAxis: [
          {
            labels: {
              align: 'left',
              style: {
                fontSize: '12px',
                fontFamily: 'Sf Pro Display',
                color: 'rgba(17, 17, 17, 0.4)',
              },
            },
            height: '80%',
            resize: {
              enabled: true,
            },
            gridLineWidth: 0.5,
            tickInterval: 25,
          },
          {
            labels: {
              enabled: false,
              align: 'left',
            },
            top: '80%',
            height: '20%',
            offset: 0,
            gridLineWidth: 0,
          },
        ],
        tooltip: {
          shape: 'square',
          headerShape: 'callout',
          borderWidth: 0,
          shadow: false,
          positioner: function (
            this: any,
            width: any,
            height: any,
            point: any,
          ) {
            const chart = this.chart;
            let position;

            if (point.isHeader) {
              position = {
                x: Math.max(
                  // Left side limit
                  this.chart.plotLeft,
                  Math.min(
                    point.plotX + chart.plotLeft - width / 2,
                    // Right side limit
                    chart.chartWidth - width - chart.marginRight,
                  ),
                ),
                y: point.plotY,
              };
            } else {
              position = {
                x: point.series.chart.plotLeft,
                y: point.series.yAxis.top - chart.plotTop,
              };
            }

            return position;
          },
        },
        series: [
          {
            type: 'area',
            id: 'area',
            name: 'AAPL Stock Price',
            data: ohlc,
            color: 'rgba(69, 202, 148, 1)',
            fillColor: {
              linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
              stops: [
                [0, 'rgba(69, 202, 148, 0.5)'],
                [1, 'rgba(69, 202, 148, 0.1)'],
              ],
            },
          },
          {
            type: 'column',
            id: 'aapl-volume',
            name: 'AAPL Volume',
            data: formattedData,
            yAxis: 1,
          },
        ],
        navigator: {
          height: 48,
          maskFill: '#11111100',
          outlineWidth: 1,
          outlineColor: 'rgba(17, 17, 17, 0.05)',
          scrollbar: {
            enabled: false,
          },
          handles: {
            enabled: false,
          },
          series: {
            type: 'line',
            color: 'rgba(114, 72, 247, 1)',
            fillOpacity: 0,
          },
        },
        responsive: {
          rules: [
            {
              condition: {
                maxWidth: 800,
              },
              chartOptions: {
                rangeSelector: {
                  inputEnabled: false,
                },
              },
            },
          ],
        },
        credits: {
          enabled: false,
        },
      });
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: '60px 63px 34px 22px' }}>
      <HighchartsReact
        highcharts={Highcharts}
        constructorType={'stockChart'}
        options={options}
        containerProps={{ style: { height: '620px' } }}
      />
    </div>
  );
};

export default StockChart;

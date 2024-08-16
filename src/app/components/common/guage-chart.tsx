'use client';
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import { Card, Typography } from '@mui/material';
import styles from './index.module.scss';

if (typeof Highcharts === 'object') {
  HighchartsMore(Highcharts);
  SolidGauge(Highcharts);
}

interface GaugeChartProps {
  value: number;
}

const GaugeChart = ({ value }: GaugeChartProps) => {
  useEffect(() => {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'solidgauge',
        backgroundColor: 'transparent',
      },
      title: {
        text: undefined,
      },
      pane: {
        center: ['50%', '35%'],
        size: '95%',
        startAngle: -90,
        endAngle: 90,
        background: [
          {
            borderRadius: '10px',
            borderWidth: 0,
            innerRadius: '60%',
            outerRadius: '88%',
            shape: 'arc',
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              stops: [
                [0, '#F74848'],
                [0.22, '#F78748'],
                [0.49, '#F6FF90'],
                [1, '#1FD773'],
              ],
            },
          },
          {
            borderWidth: 0,
            innerRadius: '50%',
            outerRadius: '70%',
            shape: 'arc',
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              stops: [
                [0, '#FACCCC'],
                [0.145, '#F95B5B'],
                [0.24, '#CA6C37'],
                [0.49, '#E5F346'],
                [0.775, '#61AF12'],
                [1, '#1FD773'],
              ],
            },
          },
          {
            borderWidth: 0,
            innerRadius: '60%',
            outerRadius: '50%',
            shape: 'arc',
            backgroundColor: {
              linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
              stops: [
                [0, '#f58989'],
                [0, '#F74848'],
                [0.22, '#F78748'],
                [0.49, '#F2F7B7'],
                [0.765, '#96EE3E'],
                [1, '#C1FFDD'],
              ],
            },
          },
        ],
      },
      exporting: { enabled: false },
      credits: { enabled: false },
      tooltip: { enabled: false },
      yAxis: [
        {
          stops: [
            [0.8, '#DF5353'],
            [0.5, '#DDDF0D'],
            [1.0, '#55BF3B'],
          ],
          tickPositions: [value],
          lineWidth: 0,
          tickWidth: 0,
          minorTickInterval: undefined,
          tickAmount: 2,
          title: {
            y: -70,
          },
          labels: {
            enabled: false,
          },
          min: 0,
          max: 100,
        },
      ],
      plotOptions: {
        solidgauge: {
          dataLabels: {
            y: -70,
            borderWidth: 0,
            useHTML: true,
            format: `<div style="text-align:center;">
                      <span style="font-size:38px;">{y}</span><br/>
                      <span style="font-size:14px; letter-spacing:10%;">GREED</span>
                     </div>`,
          },
        },
      },
      series: [
        {
          type: 'solidgauge',
          name: 'Value',
          data: [value],
        },
      ],
    };

    Highcharts.chart('gauge-container', chartOptions);
  }, [value]);

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        borderRadius: '15px',
        border: '1px solid rgba(17, 17, 17, 0.05)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
      }}
      className="guage-chart"
    >
      <Card className={styles.guage_card_wrapper}>
        <Typography
          sx={{
            textAlign: 'center',
            paddingTop: '12px',
            fontWeight: 600,
            fontFamily: 'Sf Pro Display',
            fontSize: '16px',
          }}
        >
          Index Fear & Greed
        </Typography>
        <div style={{ width: '100%' }} id="gauge-container"></div>
      </Card>
    </div>
  );
};

export default GaugeChart;

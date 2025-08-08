'use client';
import React, { useEffect, useState } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import { Card, Typography } from '@mui/material';
import styles from './index.module.scss';

if (typeof Highcharts === 'object') {
  HighchartsMore(Highcharts);
  SolidGauge(Highcharts);
}

const GaugeChart = () => {
  const [val, setVal] = useState(0);
  const [classification, setClassification] = useState('');
  async function getFearGreedIndex() {
    const fearGreedRes = await fetch(
      'https://api.alternative.me/fng/?limit=2',
      {
        next: {
          revalidate: 60,
        },
      },
    );

    const data = await fearGreedRes.json();
    const firstDataPoint = data.data[0];
    setVal(parseInt(firstDataPoint.value));
    setClassification(firstDataPoint.value_classification);
  }
  useEffect(() => {
    getFearGreedIndex();
    const chartOptions: any = {
      chart: {
        type: 'gauge',
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
          stops: [[0.8, 'transparent']],
          tickPositions: [val],
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
        gauge: {
          dial: {
            backgroundColor: 'black',
            baseLength: '100%',
            baseWidth: 5.5,
            rearLength: '-50%',
            topWidth: 0,
            radius: '92%',
          },
        },
      },
      series: [
        {
          name: 'Value',
          data: [val],
          dataLabels: {
            y: -60,
            borderWidth: 0,
            useHTML: true,
            format: `<div style="text-align:center;">
                      <span className="greed-value" style="fontSize: 36px">{y}</span><br/>
                      <span className="greed-class" style="font-size:14px; letter-spacing:10%;">${classification?.toUpperCase()}</span>
                     </div>`,
          },
        },
      ],
    };

    Highcharts.chart('gauge-container', chartOptions);
  }, [val, classification]);

  return (
    <div
      style={{
        width: '100%',
        height: '100%',
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
            paddingTop: '15px',
            fontWeight: 600,
            fontFamily: 'Sf Pro Display',
            fontSize: { xs: '14px !important', sm: '16px !important' },
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

'use client';
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import { Card, Typography } from '@mui/material';
import styles from './index.module.scss';

interface TvlChainCardProps {
  isDarkTheme: boolean;
}

if (typeof Highcharts === 'object') {
  HighchartsMore(Highcharts);
  SolidGauge(Highcharts);
}

const KpiGuageChart = ({ isDarkTheme }: TvlChainCardProps) => {
  // const trackColors = Highcharts?.getOptions()?.colors?.map((color) =>
  //   new Highcharts.Color(color).setOpacity(0.3).get(),
  // );
  useEffect(() => {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'solidgauge',
        height: '100%',
      },
      title: {
        text: undefined,
      },
      tooltip: {
        enabled: false,
      },
      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [
          {
            outerRadius: '112%',
            innerRadius: '87%',
            backgroundColor: '#F4F3F7',
            borderWidth: 0,
          },
          {
            outerRadius: '87%',
            innerRadius: '62%',
            backgroundColor: '#F6FAFF',
            borderWidth: 0,
          },
          {
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: '#fff',
            borderWidth: 0,
          },
          {
            outerRadius: '38%',
            innerRadius: '22%',
            backgroundColor: '#FDF6F6',
            borderWidth: 0,
          },
        ],
      },
      yAxis: {
        min: 0,
        max: 100,
        lineWidth: 0,
        tickPositions: [],
      },
      plotOptions: {
        solidgauge: {
          dataLabels: {
            enabled: false,
          },
          linecap: 'round',
          stickyTracking: false,
          rounded: false,
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          type: 'solidgauge',
          name: 'Conversion',
          data: [
            {
              color: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                  [0.3, '#8D36A0'],
                  [0.7, '#E65CD9'],
                  [1, '#b91d73'],
                  [1, '##A487D3'],
                ],
              },
              radius: '112%',
              innerRadius: '87%',
              y: 60,
            },
          ],
        },
        {
          type: 'solidgauge',
          name: 'Engagement',
          data: [
            {
              color: '#8B7AF7',
              radius: '87%',
              innerRadius: '62%',
              y: 25,
            },
          ],
        },
        {
          type: 'solidgauge',
          name: 'Feedback',
          data: [
            {
              color: '#6DE0B1',
              radius: '62%',
              innerRadius: '38%',
              y: 20,
            },
          ],
        },
        {
          type: 'solidgauge',
          name: 'Social',
          data: [
            {
              color: '#D24A4A',
              radius: '38%',
              innerRadius: '22%',
              y: 10,
            },
          ],
        },
      ],
    };
    Highcharts.chart('container', chartOptions);
  }, []);

  const listItems = [
    {
      label: 'Ethereum',
      value: '57,39%',
      bulletColor: 'rgba(114, 72, 247, 1)',
    },
    {
      label: 'Arbitrum',
      value: '57,39%',
      bulletColor: 'rgba(247, 72, 72, 1)',
    },
    {
      label: 'Tron',
      value: '57,39%',
      bulletColor: 'rgba(222, 72, 247, 1)',
    },
    {
      label: 'Others',
      value: '57,39%',
      bulletColor: 'rgba(17, 17, 17, 0.3)',
    },
    {
      label: 'BSC',
      value: '57,39%',
      bulletColor: 'rgba(31, 215, 115, 1)',
    },
  ];

  const renderMiniCard = () => {
    return (
      <div
        style={{
          position: 'absolute',
          top: '138px',
          left: '74px',
          width: '76px',
          height: '50px',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '8px',
          padding: '2px',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          zIndex: 1,
        }}
      >
        <p style={{ margin: '0', fontSize: '9px', padding: '5px 0 3px 5px' }}>
          Ethereum
        </p>
        <h6
          style={{
            margin: '0',
            fontSize: '14px',
            fontWeight: 700,
            paddingLeft: '5px',
          }}
        >
          $57.15B
        </h6>
        <p
          style={{
            fontSize: '9px',
            fontWeight: 600,
            color: 'rgba(69, 202, 148, 1)',
            margin: '0',
            paddingLeft: '5px',
            paddingTop: '2px',
          }}
        >
          +6.32%
        </p>
      </div>
    );
  };

  return (
    <Card
      className={styles.tvl_chain_card_wrapper}
      style={{
        backgroundColor: isDarkTheme
          ? 'rgba(17, 17, 17, 1)'
          : 'rgba(255, 255, 255, 1)',
      }}
    >
      <div style={{ padding: '15px 0 0 25px' }}>
        <Typography
          style={{
            fontSize: '14px',
            fontWeight: 700,
            letterSpacing: '1px',
            fontFamily: 'Sf Pro Display',
            color: !isDarkTheme
              ? 'rgba(17, 17, 17, 1)'
              : 'rgba(255, 255, 255, 1)',
          }}
        >
          ⭐️ TVL BY CHAINS
        </Typography>
      </div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'start',
          alignItems: 'start',
        }}
      >
        <div style={{ display: 'flex' }}>
          {renderMiniCard()}
          <div
            style={{
              width: '125%',
              marginTop: '5px',
            }}
            id="container"
          ></div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              paddingLeft: '5px',
              paddingTop: '25px',
            }}
          >
            {listItems.map((elem) => {
              return (
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'start',
                      alignItems: 'center',
                    }}
                  >
                    <li
                      style={{
                        margin: '0',
                        width: '8px',
                        color: `${elem.bulletColor}`,
                      }}
                    ></li>
                    <p
                      style={{
                        margin: '0',
                        fontSize: '11px',
                        fontWeight: 400,
                        color: !isDarkTheme
                          ? 'rgba(17, 17, 17, 1)'
                          : 'rgba(255, 255, 255, 1)',
                      }}
                    >
                      {elem.label}
                    </p>
                  </div>
                  <p
                    style={{
                      margin: '0',
                      fontSize: '14px',
                      fontWeight: 700,
                      marginLeft: '9px',
                      color: !isDarkTheme
                        ? 'rgba(17, 17, 17, 1)'
                        : 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    {elem.value}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default KpiGuageChart;

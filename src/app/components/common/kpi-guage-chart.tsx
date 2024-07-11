'use client';
import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
import HighchartsMore from 'highcharts/highcharts-more';
import SolidGauge from 'highcharts/modules/solid-gauge';
import { Card, Typography } from '@mui/material';
import styles from './index.module.scss';

interface TvlChainCardProps {
  isDarkTheme: boolean;
  value: any;
}

if (typeof Highcharts === 'object') {
  HighchartsMore(Highcharts);
  SolidGauge(Highcharts);
}

const KpiGuageChart = ({ isDarkTheme, value }: TvlChainCardProps) => {
  const trackColors = Highcharts?.getOptions()?.colors?.map((color) =>
    new Highcharts.Color(color).setOpacity(0.3).get(),
  );
  useEffect(() => {
    Highcharts.chart('container', {
      chart: {
        type: 'solidgauge',
        height: '100%',
        label: 'null',
      },

      title: {
        text: null,
      },

      pane: {
        startAngle: 0,
        endAngle: 360,
        background: [
          {
            // Track for Conversion
            outerRadius: '112%',
            innerRadius: '87%',
            backgroundColor: trackColors?.[0],
            borderWidth: 0,
          },
          {
            // Track for Engagement
            outerRadius: '87%',
            innerRadius: '62%',
            backgroundColor: trackColors?.[1],
            borderWidth: 0,
          },
          {
            // Track for Feedback
            outerRadius: '62%',
            innerRadius: '38%',
            backgroundColor: trackColors?.[2],
            borderWidth: 0,
          },
          {
            // Track for Conversion
            outerRadius: '38%',
            innerRadius: '22%',
            backgroundColor: trackColors?.[5],
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
          linecap: 'rounded',
          stickyTracking: false,
          rounded: false,
        },
      },
      credits: {
        enabled: false,
      },
      series: [
        {
          name: 'Conversion',
          data: [
            {
              color: Highcharts?.getOptions()?.colors?.[0],
              radius: '112%',
              innerRadius: '87%',
              y: 50,
            },
          ],
        },
        {
          name: 'Engagement',
          data: [
            {
              color: Highcharts?.getOptions()?.colors?.[1],
              radius: '87%',
              innerRadius: '62%',
              y: 25,
            },
          ],
        },
        {
          name: 'Feedback',
          data: [
            {
              color: Highcharts?.getOptions()?.colors?.[2],
              radius: '62%',
              innerRadius: '38%',
              y: 20,
            },
          ],
        },
        {
          name: 'Social',
          data: [
            {
              color: Highcharts?.getOptions()?.colors?.[5],
              radius: '38%',
              innerRadius: '22%',
              y: 10,
            },
          ],
        },
      ],
    });
  }, [value]);

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
          top: '155px',
          left: '70px',
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

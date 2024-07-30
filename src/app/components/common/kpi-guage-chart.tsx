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
  useEffect(() => {
    const chartOptions: Highcharts.Options = {
      chart: {
        type: 'solidgauge',
        height: '100%',
        events: {
          render: function (this: any) {
            // const chart = this;
            const renderer = this.renderer;
            if (!renderer.defs) {
              renderer.defs = renderer.createElement('defs').add();
            }

            if (!renderer.defs.filter) {
              const filter = renderer
                .createElement('filter')
                .attr({
                  id: 'drop-shadow',
                  height: '130%',
                })
                .add(renderer.defs);

              renderer
                .createElement('feGaussianBlur')
                .attr({
                  in: 'SourceAlpha',
                  stdDeviation: 1.5,
                })
                .add(filter);

              renderer
                .createElement('feOffset')
                .attr({
                  dx: 0.5,
                  dy: 0.5,
                  result: 'offsetblur',
                })
                .add(filter);

              renderer
                .createElement('feFlood')
                .attr({
                  'flood-color': 'rgba(255, 255, 255, 1)',
                  'flood-opacity': 0.1,
                  result: 'color',
                })
                .add(filter);

              const feMerge = renderer.createElement('feMerge').add(filter);
              renderer
                .createElement('feMergeNode')
                .attr({
                  in: 'offsetblur',
                })
                .add(feMerge);
              renderer
                .createElement('feMergeNode')
                .attr({
                  in: 'SourceGraphic',
                })
                .add(feMerge);
            }

            const outermostCircle = this.series[0].data[0].graphic;
            if (outermostCircle) {
              outermostCircle.attr({
                filter: 'url(#drop-shadow)',
              });
            }
          },
        },
      },
      title: {
        text: undefined,
      },
      tooltip: {
        useHTML: true,
        backgroundColor: 'white',
        borderColor: 'transparent',
        borderRadius: 8,
        borderWidth: 0,
        shadow: {
          color: 'rgba(0, 0, 0, 0.05)',
          offsetX: 0,
          offsetY: 4,
          width: 28,
        },
        style: {
          fontSize: '14px',
          fontWeight: '300',
        },
        formatter: function () {
          const seriesName = this.series.name;
          const yValue = this.y;

          return `
            <div style="display: flex; flex-direction: column; background: white; border-radius: 8px; font-family: 'Sf Pro Display';">
              <div style="font-size: 9px; font-weight: 400; line-height: 11.7px;">${seriesName}</div>
              <div style="font-size: 14px; font-weight: 700; line-height: 18.2px;">$${yValue}B</div>
              <div style="font-size: 9px; font-weight: 600; line-height: 11.7px; color: rgba(69, 202, 148, 1);">+6.32%</div>
            </div>
          `;
        },
        outside: true,
        positioner: function (labelWidth, labelHeight, point) {
          return {
            x: point.plotX + this.chart.plotLeft - labelWidth / 2,
            y: point.plotY + this.chart.plotTop - labelHeight + 60,
          };
        },
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
          name: 'Ethereum',
          data: [
            {
              color: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                  [0.5, '#7A2E94'],
                  [0.75, '#E35AD8'],
                  [1, '#B769E4'],
                ],
              },
              radius: '112%',
              innerRadius: '87%',
              y: 57.15,
            },
          ],
        },
        {
          type: 'solidgauge',
          name: 'Arbitrum',
          data: [
            {
              color: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                  [0.3, '#8B7AF7'],
                  [1, 'rgba(222, 72, 247, 1)'],
                  [1, '#8B7AF7'],
                ],
              },
              radius: '87%',
              innerRadius: '62%',
              y: 25.32,
            },
          ],
        },
        {
          type: 'solidgauge',
          name: 'BSC',
          data: [
            {
              color: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                  [0.5, '#6DE0B1'],
                  [1, 'rgba(69, 202, 148, 1)'],
                  [1, '#8B7AF7'],
                ],
              },
              radius: '62%',
              innerRadius: '38%',
              y: 20.21,
            },
          ],
        },
        {
          type: 'solidgauge',
          name: 'Tron',
          data: [
            {
              color: {
                linearGradient: { x1: 0, y1: 0, x2: 1, y2: 0 },
                stops: [
                  [0.5, '#D24A4A'],
                  [1, 'rgba(204, 56, 56, 1)'],
                  [1, '#8B7AF7'],
                ],
              },
              radius: '38%',
              innerRadius: '22%',
              y: 10.11,
            },
          ],
        },
        {
          type: 'solidgauge',
          name: 'Others',
          data: [
            {
              color: '#111111',
              radius: '22%',
              innerRadius: '0%',
              y: 5.67,
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
      value: '$57.15B',
      bulletColor: 'rgba(114, 72, 247, 1)',
    },
    {
      label: 'Arbitrum',
      value: '$25.32B',
      bulletColor: 'rgba(247, 72, 72, 1)',
    },
    {
      label: 'Tron',
      value: '$10.11B',
      bulletColor: 'rgba(222, 72, 247, 1)',
    },
    {
      label: 'Others',
      value: '$5.67B',
      bulletColor: 'rgba(17, 17, 17, 0.0)',
    },
    {
      label: 'BSC',
      value: '$20.21B',
      bulletColor: 'rgba(31, 215, 115, 1)',
    },
  ];

  return (
    <Card
      className={styles.tvl_chain_card_wrapper}
      style={{
        backgroundColor: isDarkTheme
          ? 'rgba(17, 17, 17, 1)'
          : 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 20px 30px rgba(0, 0, 0, 0.1)', // Add your box shadow here
        borderRadius: '8px', // Ensure border radius is also applied
      }}
    >
      <div
        style={{
          paddingTop: '24px',
          paddingLeft: '24px',
          paddingRight: '22px',
        }}
      >
        <Typography
          style={{
            fontSize: '12px',
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
          <div
            style={{
              width: '85%',
              marginLeft: '10px',
            }}
            id="container"
          ></div>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              paddingLeft: '5px',
              paddingTop: '10px',
              height: '30px',
            }}
          >
            {listItems.map((elem) => (
              <div
                key={elem.label}
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
                      backgroundColor: `${elem.bulletColor}`,
                      listStyle: 'none',
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
                    <span
                      style={{
                        width: '6px',
                        height: '6px',
                        display: 'inline-block',
                        background: elem.bulletColor,
                        borderRadius: '50%',
                        marginRight: '4px',
                      }}
                    ></span>
                    {elem.label}
                  </p>
                </div>
                <p
                  style={{
                    margin: '0',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: !isDarkTheme
                      ? 'rgba(17, 17, 17, 1)'
                      : 'rgba(255, 255, 255, 1)',
                    marginTop: '2px',
                    marginLeft: '17px',
                  }}
                >
                  {elem.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default KpiGuageChart;

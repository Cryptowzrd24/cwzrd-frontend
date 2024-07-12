'use client';
import React from 'react';
import Image from 'next/image';

import styles from './index.module.scss';
import { Card, Typography } from '@mui/material';
import tvlImage from '../../assets/images/tvlImage.svg';

interface TvlChainCardProps {
  isDarkTheme: boolean;
}

const TvlChainCard = ({ isDarkTheme }: TvlChainCardProps) => {
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
          top: '125px',
          left: '30px',
          width: '72px',
          height: '52px',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '8px',
          padding: '8px',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
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
      className={styles.coin_detail_card_wrapper}
      style={{
        backgroundColor: isDarkTheme
          ? 'rgba(17, 17, 17, 1)'
          : 'rgba(255, 255, 255, 1)',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'start',
          alignItems: 'start',
        }}
      >
        <div>
          {renderMiniCard()}
          <Image src={tvlImage} alt="" />
        </div>
        <div>
          <div style={{ padding: '20px' }}>
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
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '15px',
                paddingTop: '15px',
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
      </div>
    </Card>
  );
};

export default TvlChainCard;

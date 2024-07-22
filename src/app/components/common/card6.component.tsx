'use client';
import { Card, Typography } from '@mui/material';
import React from 'react';

import styles from './index.module.scss';
import Image from 'next/image';
import CardHeader from './cardHeader.component';

interface ICard6Props {
  heading: string;
  image: any;
  staticTextColor?: string;
  mainText: string;
  subText: string;
}

const Card6 = (props: ICard6Props) => {
  const { heading, image, mainText, subText, staticTextColor } = props;

  return (
    <Card
      className={styles.market_cap_wrapper}
      style={{
        background: 'rgba(17, 17, 17, 1)',
      }}
    >
      <div className={styles.header_wrapper}>
        <CardHeader heading={heading} staticTextColor={staticTextColor} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-start',
            marginTop: '15px',
          }}
        >
          <Image src={image} alt="VECTOR" />
        </div>

        <div style={{ marginTop: '15px' }}>
          <Typography
            sx={{
              background: 'linear-gradient(180deg, #2BFF27 0%, #FBFF39 100%)',
              fontFamily: 'SF Pro Display',
              fontSize: '24px',
              fontWeight: '700',
              lineHeight: '28.8px',
              letterSpacing: '1px',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
            }}
          >
            {mainText}
          </Typography>

          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              fontFamily: 'SF Pro Display',
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '20.8px',
            }}
          >
            {subText}
          </Typography>
        </div>

        <div
          style={{
            background: 'linear-gradient(180deg, #45CA94 0%, #97D14E 100%)',
            mixBlendMode: 'color-dodge',
            height: '300px',
            width: '300px',
            borderRadius: '50%',
            position: 'absolute',
            opacity: '0.3',
          }}
        ></div>
      </div>
    </Card>
  );
};

export default Card6;

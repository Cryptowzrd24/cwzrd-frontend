'use client';

import React from 'react';

import styles from './index.module.scss';
import { Card, Typography } from '@mui/material';
import CardHeader from './cardHeader.component';
import greenTick from '@/app/assets/images/greenTick.png';
import Image from 'next/image';

interface ICard7Props {
  heading: string;
  staticTextColor?: string;
  text: string;
  bg: string;
  options: string[];
  notinFormatOptions: boolean;
}

type ICssProperties = {
  left?: string;
  top?: string;
  rotate?: string;
  right?: string;
  display?: string;
};

const Card7 = (props: ICard7Props) => {
  const { heading, staticTextColor, text, bg, options, notinFormatOptions } =
    props;

  const getCss = (index: number): ICssProperties => {
    const cssMap: { [key: number]: ICssProperties } = {
      0: { left: '-19px', top: '20px', rotate: '-11.58deg' },
      1: { top: '60px', rotate: '-19deg' },
      2: { top: '22px', rotate: '-27deg', right: '-8px' },
      3: { top: '107px', rotate: '-2deg', left: '-21px' },
      4: { top: '94px', rotate: '23deg', left: '87px' },
      5: { top: '94px', rotate: '23deg', right: '-29px' },
    };

    return cssMap[index] || { display: 'hidden' };
  };
  return (
    <Card
      className={styles.market_cap_wrapper}
      style={{
        background: bg,
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      <div className={styles.header_wrapper}>
        <CardHeader heading={heading} staticTextColor={staticTextColor} />

        <div style={{ marginTop: '15px' }}>
          <Typography
            sx={{
              background: 'rgba(255, 255, 255, 1)',
              fontFamily: 'SF Pro Display',
              textAlign: 'center',
              fontSize: '20px',
              fontWeight: '700',
              lineHeight: '26px',
              letterSpacing: '-1px',
              WebkitTextFillColor: 'transparent',
              WebkitBackgroundClip: 'text',
            }}
          >
            {text}
          </Typography>
        </div>

        {notinFormatOptions ? (
          <div style={{ position: 'relative' }}>
            {options.map((item: string, index: number) => (
              <div
                key={index}
                style={{
                  border: '1px solid #FFFFFF',
                  display: 'flex',
                  background: '#FFFFFF',
                  borderRadius: '25px',
                  alignItems: 'center',
                  padding: '8px',
                  margin: '0px 4px 3px 0px',
                  position: 'absolute',
                  ...getCss(index),
                  maxWidth: 'fit-content',
                }}
              >
                <Image src={greenTick} alt="tick" />
                <Typography
                  sx={{
                    marginTop: '2px',
                    marginLeft: '3px',
                    background: 'rgba(255, 255, 255, 1)',
                    fontFamily: 'SF Pro Display',
                    textAlign: 'center',
                    fontSize: '11px',
                    fontWeight: '400',
                    lineHeight: '14.3px',
                    letterSpacing: '0px',
                  }}
                >
                  {item}
                </Typography>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexWrap: 'wrap' }}>
            {options.map((item: string, index: number) => (
              <div
                key={index}
                style={{
                  border: '1px solid #FFFFFF',
                  display: 'flex',
                  background: '#FFFFFF',
                  borderRadius: '25px',
                  alignItems: 'center',
                  padding: '8px',
                  margin: '0px 4px 3px 0px',
                }}
              >
                <Image src={greenTick} alt="tick" />
                <Typography
                  sx={{
                    marginTop: '2px',
                    marginLeft: '3px',
                    background: 'rgba(255, 255, 255, 1)',
                    fontFamily: 'SF Pro Display',
                    textAlign: 'center',
                    fontSize: '11px',
                    fontWeight: '400',
                    lineHeight: '14.3px',
                    letterSpacing: '0px',
                  }}
                >
                  {item}
                </Typography>
              </div>
            ))}
          </div>
        )}
      </div>
    </Card>
  );
};

export default Card7;

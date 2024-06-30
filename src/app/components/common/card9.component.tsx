'use client';
import React, { useState } from 'react';

import styles from './index.module.scss';
import { Button, Card, Stack, Typography } from '@mui/material';
import CardHeader from './cardHeader.component';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ICard9 {
  heading: string;
  staticTextColor?: string;
  text1: string;
  text2: string;
}

const commonTypographyStyles = {
  fontFamily: 'SF Pro Display',
  fontSize: '24px',
  fontWeight: '700',
  lineHeight: '28.8px',
  letterSpacing: '1px',
};
const webkitClasses = {
  WebkitTextFillColor: 'transparent',
  WebkitBackgroundClip: 'text',
};

const Card9 = (props: ICard9) => {
  const { heading, staticTextColor, text1, text2 } = props;

  const [currentStep] = useState(0);

  const stepSetter = () => {};
  return (
    <Card
      className={styles.market_cap_wrapper}
      style={{
        background:
          'linear-gradient(to right bottom, rgb(17, 17, 17), rgb(5 6 53))',
      }}
    >
      <div className={styles.header_wrapper}>
        <CardHeader
          heading={heading}
          currentStep={currentStep}
          stepSetter={stepSetter}
          staticTextColor={staticTextColor}
        />

        <div style={{}}>
          <div style={{ marginTop: '20px' }}>
            <Typography
              sx={{
                background: 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
                ...commonTypographyStyles,
                ...webkitClasses,
              }}
            >
              {text1}
            </Typography>
          </div>
          <div style={{ marginTop: '1px' }}>
            <Typography
              sx={{
                background: 'rgba(255, 255, 255, 1)',
                ...commonTypographyStyles,
                ...webkitClasses,
              }}
            >
              {text2}
            </Typography>
          </div>
        </div>
      </div>

      <Stack direction="row" style={{ marginLeft: '20px', marginTop: '40px' }}>
        <Button
          variant="contained"
          size="small"
          sx={{
            backgroundColor:
              'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
            borderRadius: '25px',
          }}
        >
          Join Now &nbsp; <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
        </Button>
      </Stack>

      <>
        <div
          style={{
            borderColor: 'rgb(171, 71, 188)',
            borderWidth: '44px',
            borderStyle: 'solid',
            height: '330px',
            position: 'absolute',
            borderRadius: '50%',
            width: '355px',
            top: '82px',
            right: '-318px',
          }}
        />
        <div
          style={{
            borderColor: 'rgb(188 110 201)',
            borderWidth: '31px',
            borderStyle: 'solid',
            height: '268px',
            position: 'absolute',
            borderRadius: '50%',
            width: '374px',
            top: '108px',
            right: '-349px',
          }}
        />
        <div
          style={{
            borderColor: 'rgb(188 110 201 / 30%)',
            borderWidth: '31px',
            borderStyle: 'solid',
            height: '268px',
            position: 'absolute',
            borderRadius: '50%',
            width: '377px',
            top: '105px',
            right: '-381px',
          }}
        />
      </>
    </Card>
  );
};

export default Card9;

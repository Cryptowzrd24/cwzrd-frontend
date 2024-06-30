'use client';

import { Button, Card, Stack, Typography, styled } from '@mui/material';
import React, { useState } from 'react';

import styles from './index.module.scss';
import { formatDate } from '@/app/helpers/functions';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import CardHeader from './cardHeader.component';

interface ICard4Props {
  bgImage: any;
  heading: string;
  staticTextColor: string;
  mainText: string;
  date: Date;
  name: string;
}

const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  padding: '12px 0px 0px 20px',
  lineHeight: 1.5,
  borderColor: '#0063cc',
  fontFamily: ['SF Pro Display'].join(','),
});

const Card4 = (props: ICard4Props) => {
  const { bgImage, heading, staticTextColor, mainText, date, name } = props;

  const [currentStep] = useState(0);

  const stepSetter = () => {};

  return (
    <Card
      className={styles.market_cap_wrapper}
      style={{
        backgroundImage: `url(${bgImage.src})`,
        boxShadow: 'inset 0 0 0 1000px rgba(0,0,0,.5)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <div className={styles.header_wrapper}>
        <CardHeader
          heading={heading}
          currentStep={currentStep}
          stepSetter={stepSetter}
          staticTextColor={staticTextColor}
        />
      </div>

      <div style={{ padding: '0px 8px 0px 8px', marginTop: '58px' }}>
        <div style={{ padding: '0px 8px 0px 8px' }}>
          <Typography
            sx={{
              fontSize: '20px',
              lineHeight: '26px',
              fontWeight: '700',
              color: `${staticTextColor}`,
              letterSpacing: '1px',
            }}
          >
            {mainText}
          </Typography>
        </div>

        <div style={{ padding: '0px 8px 0px 8px', marginTop: '7px' }}>
          <Typography
            sx={{
              fontSize: '12px',
              lineHeight: '15.6px',
              fontWeight: '400',
              color: `${staticTextColor}`,
              opacity: '0.6',
            }}
          >
            {formatDate(date)} &nbsp; | &nbsp; {name}
          </Typography>
        </div>
      </div>
      <Stack direction="row" style={{ marginLeft: '-6px' }}>
        <BootstrapButton
          variant="text"
          sx={{ color: `${staticTextColor}`, fontSize: '16px' }}
        >
          See all &nbsp;
          <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
        </BootstrapButton>
      </Stack>
    </Card>
  );
};

export default Card4;

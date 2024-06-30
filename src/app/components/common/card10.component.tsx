'use client';

import React, { useState } from 'react';

import styles from './index.module.scss';
import { Box, Button, Card, Stack, Typography, styled } from '@mui/material';
import CardHeader from './cardHeader.component';

import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import messageImage from '@/app/assets/images/message.png';
import rocketImage from '@/app/assets/images/rocket.png';
import Image from 'next/image';

interface ICard10Props {
  heading: string;
  staticTextColor?: string;
  text1: string;
  text2: string;
  messageCount: number;
  rocketCount: number;
}
const BootstrapButton = styled(Button)({
  boxShadow: 'none',
  textTransform: 'none',
  fontSize: 16,
  fontWeight: 700,
  padding: '0px 0px 0px 0px',
  margin: '0px 11px 0px 0px',
  lineHeight: 1.5,
  borderColor: '#0063cc',
  fontFamily: ['SF Pro Display'].join(','),
});

const Card10 = (props: ICard10Props) => {
  const { heading, staticTextColor, text1, text2, messageCount, rocketCount } =
    props;

  const [currentStep] = useState(0);

  const stepSetter = () => {};

  const renderIconCount = (image: any, value: number, bg?: string) => {
    return (
      <Box
        sx={{
          border: bg ? 'none' : '1px solid rgba(255, 255, 255, 0.6)',
          width: 'fit-content',
          background: bg ?? 'transparent',
          display: 'flex',
          gap: '6px',
          justifyContent: 'center',
          padding: '6px 10px',
          borderRadius: '50px',
        }}
      >
        <Image src={image} alt="message" />
        <Typography
          sx={{ color: '#FFFFFF', fontSize: '10px', marginTop: '1px' }}
        >
          {value}
        </Typography>
      </Box>
    );
  };
  return (
    <Card
      className={styles.market_cap_wrapper}
      style={{
        background: 'linear-gradient(333deg, #023100 0%, #000000 100%)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Box className={styles.header_wrapper}>
        <CardHeader
          heading={heading}
          currentStep={currentStep}
          stepSetter={stepSetter}
          staticTextColor={staticTextColor}
        />

        <Box sx={{}}>
          <Box sx={{ marginTop: '15px' }}>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 1)',
                fontFamily: 'SF Pro Display',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '20.8px',
              }}
            >
              {text1}
            </Typography>
          </Box>
          <Box sx={{ marginTop: '5px' }}>
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 1)',
                fontFamily: 'SF Pro Text',
                fontSize: '11px',
                fontWeight: '400',
                lineHeight: '14.3px',
                letterSpacing: '0.1px',
              }}
            >
              {text2}
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
            {renderIconCount(messageImage, messageCount)}
            {renderIconCount(
              rocketImage,
              rocketCount,
              'linear-gradient(180deg, #45CA94 0%, #97D14E 100%)',
            )}
          </Box>
        </Box>
      </Box>
      <Stack direction="row" style={{ justifyContent: 'flex-end' }}>
        <BootstrapButton variant="text" size="medium" sx={{ color: '#FFFFFF' }}>
          Get Started &nbsp; <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
        </BootstrapButton>
      </Stack>
    </Card>
  );
};

export default Card10;

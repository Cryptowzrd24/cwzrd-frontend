'use client';

import React, { useState } from 'react';

import styles from './index.module.scss';
import { Box, Button, Card, Stack, Typography, styled } from '@mui/material';
import CardHeader from './cardHeader.component';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

interface ICard11Props {
  heading: string;
  text: string;
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

const Card11 = (props: ICard11Props) => {
  const { heading, text } = props;

  const [currentStep] = useState(0);

  const stepSetter = () => {};

  return (
    <Card className={styles.market_cap_wrapper} style={{}}>
      <Box className={styles.header_wrapper}>
        <CardHeader
          heading={heading}
          currentStep={currentStep}
          stepSetter={stepSetter}
          // staticTextColor={staticTextColor}
        />

        <Box sx={{}}>
          <Box sx={{ marginTop: '15px' }}>
            <Typography
              sx={{
                background: 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
                WebkitTextFillColor: 'transparent',
                WebkitBackgroundClip: 'text',
                fontFamily: 'SF Pro Display',
                fontSize: '40px',
                fontWeight: '700',
                lineHeight: '44px',
              }}
            >
              “
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
              {text}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Stack direction="row" style={{ justifyContent: 'flex-end' }}>
        <BootstrapButton
          variant="text"
          size="medium"
          sx={{ color: 'rgba(114, 72, 247, 1)' }}
        >
          Get Started &nbsp; <ArrowForwardIosIcon sx={{ fontSize: '14px' }} />
        </BootstrapButton>
      </Stack>
    </Card>
  );
};

export default Card11;

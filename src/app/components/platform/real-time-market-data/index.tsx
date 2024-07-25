import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import macbook from '../../../../../public/images/platform/MacBook-cut.png';
const RealTimeMarketData = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: '80px 0 0 64px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        }}
      >
        <Stack>
          <Typography
            variant="h1"
            sx={{
              maxWidth: '547px',
              fontSize: '56px',
              fontWeight: '600',
              lineHeight: '61.6px',
              backgroundImage:
                ' linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: '16px',
            }}
          >
            Visualize Real-Time Market Data Instantly
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '600',
              lineHeight: '27px',
              letterSpacing: '-1px',
            }}
          >
            Access real-time data and visualize market trends effortlessly with
            our dynamic live charts. Stay informed about price movements,
            analyze patterns, and make informed trading decisions with ease.
          </Typography>
        </Stack>
        <Image src={macbook} alt="macbook" width={592} />
      </Box>
    </>
  );
};

export default RealTimeMarketData;

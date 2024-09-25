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
          // padding: '0px 0 0 48px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          // justifyContent: 'space-between',
          borderRadius: '24px',
          width: '967.5px',
        }}
      >
        <Stack sx={{ paddingLeft: '48px', paddingBlock: '103.25px' }}>
          <Typography
            sx={{
              maxWidth: '417.75px',
              fontSize: '36px',
              fontWeight: '600',
              lineHeight: '39.6px',
              backgroundImage:
                ' linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              mb: '16px',
              letterSpacing: '-2px',
              fontFamily: 'Sf Pro Display',
            }}
          >
            Visualize Real-Time Market Data Instantly
          </Typography>
          <Typography
            sx={{
              maxWidth: '417.75px',
              fontSize: '12px',
              fontWeight: '400',
              lineHeight: '18px',
              letterSpacing: '-0.5px',
              color: 'rgba(17, 17, 17, 0.8)',
            }}
          >
            Access real-time data and visualize market trends effortlessly with
            our dynamic live charts. Stay informed about price movements,
            analyze patterns, and make informed trading decisions with ease.
          </Typography>
        </Stack>
        <Image
          src={macbook}
          alt="macbook"
          loading="lazy"
          style={{
            borderBottomRightRadius: '24px',
            marginTop: '60px',
            width: '466.19px',
            height: '302.12px',
            marginLeft: '36px',
          }}
        />
      </Box>
    </>
  );
};

export default RealTimeMarketData;

'use client';

import { useWindowSize } from '@/hooks/useWindowSize';
import { Box, Typography } from '@mui/material';
import React from 'react';
const Forex = () => {
  const { width } = useWindowSize();
  return (
    <>
      <Box
        style={{
          marginLeft: (width - 1376) / 2,
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontWeight: '600',
            fontSize: '56px',
            lineHeight: '61.6px',
            color: 'rgba(17, 17, 17, 1)',
            maxWidth: '590px',
            minWidth: '590px',
            mb: '16px',
          }}
        >
          Daily Technical Analysis on Cryptocurrencies and Forex{' '}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontWeight: '400',
            fontSize: '20px',
            lineHeight: '30px',
            color: 'rgba(17, 17, 17, 0.8)',
            maxWidth: '590px',
          }}
        >
          Our daily technical analysis feed provides key insights on current
          market trends in forex, cryptocurrencies, commodities and indices
        </Typography>
      </Box>
    </>
  );
};

export default Forex;

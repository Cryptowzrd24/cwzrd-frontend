'use client';

import { useWindowSize } from '@/hooks/useWindowSize';
import { Box, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
const Forex = () => {
  const { width } = useWindowSize();
  const isTabView = useMediaQuery('(min-width: 978px)');
  return (
    <>
      <Box
        style={{
          marginLeft: isTabView ? (width - 976) / 2 : '0px',
        }}
      >
        <Typography
          sx={{
            fontWeight: '600',
            fontSize: '32px !important',
            lineHeight: '38.4px',
            color: 'rgba(17, 17, 17, 1)',
            maxWidth: '590px',
            mb: '16px',

            '@media (max-width: 1024px)': {
              textAlign: 'center',
            },

            '@media (max-width: 576px)': {
              fontSize: '24px !important',
              lineHeight: '28.8px',
              fontWeight: '700',
              letterSpacing: '0.24px',
              marginRight: '16px',
              textAlign: 'start',
            },
          }}
        >
          Daily Technical Analysis on Cryptocurrencies and Forex
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '16px !important',
            lineHeight: '24px',
            color: 'rgba(17, 17, 17, 0.8)',
            maxWidth: '590px',

            '@media (max-width: 1024px)': {
              textAlign: 'center',
            },

            '@media (max-width: 576px)': {
              fontSize: '14px !important',
              lineHeight: '150%',
              letterSpacing: '-0.135px',
              textAlign: 'start',
              width: '90%',
            },
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

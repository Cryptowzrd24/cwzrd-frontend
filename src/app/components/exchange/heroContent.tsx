'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';

function HeroContent() {
  return (
    <>
      <Typography
        variant="h4"
        sx={{ letterSpacing: '1px', fontSize: 14, marginBottom: '8px' }}
      >
        MARKET CAP
      </Typography>
      <Typography variant="h1" sx={{ maxWidth: '960px', marginTop: '-10px' }}>
        Top Cryptocurrency Spot
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          {' '}
          Exchanges{' '}
        </span>{' '}
      </Typography>
      <Box
        sx={{
          fontSize: '15px',
          lineHeight: '24px',
          color: 'rgba(17, 17, 17, 0.8)',
          mt: '8px',
        }}
      >
        Crypto WZRD ranks and scores exchanges by evaluating traffic, liquidity,
        trading volumes, and confidence in the legitimacy of the reported
        volumes.
      </Box>
    </>
  );
}

export default HeroContent;

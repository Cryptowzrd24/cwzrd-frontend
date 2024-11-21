import { Box, Typography } from '@mui/material';
import React from 'react';

const MarketTrend = () => {
  return (
    <Box
      sx={{
        width: '638px',
        paddingLeft: '36px',
        backgroundImage: `url('/images/membership/marketTrend.png')`,
        backgroundSize: 'cover',
        borderRadius: '24px',
        boxSizing: 'border-box',
      }}
    >
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          color: 'rgba(255, 255, 255, 1)',
          textTransform: 'uppercase',
          mb: '6px',
          mt: '46px',
          letterSpacing: '1px',
          lineHeight: '15.6px',
        }}
      >
        Market outlooks
      </Typography>

      <Typography
        variant="h1"
        sx={{
          fontSize: '32px',
          fontWeight: '700',
          lineHeight: '38px',
          mb: '33px',
          color: 'rgba(255, 255, 255, 1)',
          width: '322px',
        }}
      >
        Get a clear perspective on market trends with our expert market
        outlooks.
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '20px',
          color: 'rgba(255, 255, 255, 1)',
          width: '339px',
        }}
      >
        Know where the market is heading and adjust your strategies accordingly.
      </Typography>
    </Box>
  );
};

export default MarketTrend;

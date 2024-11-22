import React from 'react';

import { Box, Typography } from '@mui/material';

const DayTradeCard = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/images/membership/dayTradeBg.png')`,
        backgroundSize: 'cover',
        borderRadius: '24px',
        maxWidth: '270px',
        width: '100%',
        height: '423px',
        marginRight: '16px',
        boxShadow: '0px 4px 6px 0px #00000005',
        position: 'relative',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          px: '21px',
          pb: '28px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'end',
          alignItems: 'center',
          height: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '600',
            lineHeight: '24px',
            color: 'rgba(255, 255, 255, 1)',
            mb: '8px',
          }}
        >
          Day Trade Setups
        </Typography>
        <Typography
          sx={{
            fontSize: '13px',
            fontWeight: '400',
            lineHeight: '20px',
            color: 'rgba(255, 255, 255, 0.8)',
            textAlign: 'center',
            fontFamily: 'Sf Pro Text',
          }}
        >
          Find perfect day trade setups with our expert analysis. Our platform
          provides actionable insights to help you make smart, quick moves in
          the market.
        </Typography>
      </Box>
    </Box>
  );
};

export default DayTradeCard;

import { Box, Typography } from '@mui/material';
import React from 'react';

const DailyModeSimplified = () => {
  return (
    <Box
      sx={{
        height: '423px',
        backgroundImage: `
        url(/images/home/wzrd_membership_benefits/daily_mode_specified.svg),
          url(/images/home/wzrd_membership_benefits/daily_specified_bg.svg)
        `,
        backgroundRepeat: 'no-repeat, no-repeat',
        backgroundPosition: 'center center, center center', // front, back
        backgroundSize: 'cover, cover', // first is background, second is front
        boxSizing: 'border-box',
        // width: { xs: '95%', sm: '270px' },
        width: '96%',
        margin: '0 auto',
        borderRadius: '24px',
      }}
    >
      <Box
        sx={{
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          borderRadius: '24px',
          overflow: 'hidden',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: 700,
            letterSpacing: '0.02em',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Daily Market Analysis on 30 Cryptos
        </Typography>
        <Typography
          sx={{
            fontSize: '10px',
            fontWeight: 400,
            lineHeight: 1.5,
            maxWidth: '400px',
            color: 'white',
            textAlign: 'center',
          }}
        >
          Stay updated with daily, in-depth market analysis on 30
          cryptocurrencies. Get the insights you need to make informed trading
          decisions.
        </Typography>
      </Box>
    </Box>
  );
};

export default DailyModeSimplified;

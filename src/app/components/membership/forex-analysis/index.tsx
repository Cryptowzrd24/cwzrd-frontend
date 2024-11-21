import { Box, Typography } from '@mui/material';
import React from 'react';

const ForexAnalysis = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        borderRadius: '24px',
        alignItems: 'center',
        height: '330px',
        backgroundImage: `url('/images/membership/forexAnalysis.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
      }}
    >
      <Box sx={{ maxWidth: '225px', width: '100%', paddingLeft: '40px' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '31.2px',
            mb: '8px',
            color: 'rgba(255, 255, 255, 1)',
            textWrap: 'balance',
          }}
        >
          Digital Market Analysis on Forex
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '21px',
            color: 'rgba(255, 255, 255, 0.8)',
          }}
        >
          Access detailed daily analysis on the forex markets. Whether you're a
          beginner or seasoned trader, our insights will help sharpen your forex
          strategies.
        </Typography>
      </Box>
    </Box>
  );
};

export default ForexAnalysis;

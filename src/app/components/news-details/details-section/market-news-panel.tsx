import { Box, Typography } from '@mui/material';
import React from 'react';

function MarketNewsPanel() {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Box
        sx={{
          width: '300px',
          background:
            'linear-gradient(to right, rgba(254, 231, 226, 1), rgba(254, 231, 226, 0) 60px);',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          borderRadius: '16px',
          padding: '12px 16px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '14px',
            fontFamily: 'Sf Pro Display',
            lineHeight: '18.2px',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          Next:
        </Typography>
        <Typography
          sx={{
            fontWeight: 500,
            fontSize: '14px',
            fontFamily: 'Sf Pro Display',
            lineHeight: '18.2px',
            color: 'rgba(17, 17, 17, 1)',
            marginTop: '10px',
            letterSpacing: '0.7px',
          }}
        >
          1 Top Cryptocurrency to Buy Before It Soars 1,415% to $1 Million,
          According to Certain Wall Street Analysts
        </Typography>
      </Box>
      <Box
        sx={{
          width: '300px',
          height: '1190px',
          background:
            'linear-gradient(to right, rgba(254, 231, 226, 0.8), rgba(254, 231, 226, 0) 50px);',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          borderRadius: '16px',
          padding: '12px 16px',
        }}
      ></Box>
    </Box>
  );
}

export default MarketNewsPanel;

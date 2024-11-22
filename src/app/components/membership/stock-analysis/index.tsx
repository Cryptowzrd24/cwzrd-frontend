import { Box, Typography } from '@mui/material';
import React from 'react';

const StockAnalysis = () => {
  return (
    <Box
      sx={{
        borderRadius: '24px',
        height: '423px',
        backgroundImage: `url('/images/membership/stockAnalysis.png')`,
        backgroundSize: 'cover',
      }}
    >
      <Box sx={{ maxWidth: '375px', paddingLeft: '40px', paddingTop: '64px' }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '28px',
            mb: '12px',
            color: 'rgba(255, 255, 255, 1)',
          }}
        >
          Daily Market Analysis on Stocks
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '13px',
            fontWeight: '400',
            lineHeight: '20px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontFamily: 'Sf Pro Text',
          }}
        >
          Stay ahead of stock market trends with our daily analysis. Get the
          insights you need to make smart, informed trades in the stock market.
        </Typography>
      </Box>
    </Box>
  );
};

export default StockAnalysis;

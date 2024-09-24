import { Box, Typography } from '@mui/material';
import React from 'react';
import PortfolioCard from './portfolioCard';

const Portfolio = () => {
  return (
    <>
      <Box
        sx={{
          width: '967.5px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '24px',
          gap: '40px',
        }}
      >
        <Box sx={{ paddingTop: '36px' }}>
          <PortfolioCard />
        </Box>
        <Box sx={{ paddingBlock: '114px' }}>
          <Typography
            sx={{
              fontSize: '30px',
              fontWeight: '600',
              lineHeight: '33px',
              color: 'rgba(17, 17, 17, 1)',
              mb: '16px',
              width: '375px',
              letterSpacing: '-1px',
              fontFamily: 'Sf Pro Display',
            }}
          >
            Portfolio Investing for long term growth
          </Typography>
          <Typography
            sx={{
              fontSize: '15px',
              fontWeight: '400',
              lineHeight: '22.5px',
              color: 'rgba(17, 17, 17, 0.8)',
              width: '375px',
              fontFamily: 'Sf Pro Display',
            }}
          >
            Manage and track your investments with ease using our personal
            portfolio feature, allowing you to monitor your performance and make
            adjustments as needed.{' '}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default Portfolio;

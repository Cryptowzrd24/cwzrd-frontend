import { Box, Typography } from '@mui/material';
import React from 'react';
import PortfolioCard from './portfolioCard';

const Portfolio = () => {
  return (
    <>
      <Box
        sx={{
          padding: '48px 64px 0 0',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderRadius: '32px',
        }}
      >
        <PortfolioCard />
        <Box sx={{}}>
          <Typography
            variant="h1"
            sx={{
              fontSize: '56px',
              fontWeight: '600',
              lineHeight: '61.6px',
              color: 'rgba(17, 17, 17, 1)',
              mb: '16px',
              maxWidth: '500px',
              letterSpacing: '-1px',
            }}
          >
            Portfolio Investing for long term growth
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              lineHeight: '30px',
              color: 'rgba(17, 17, 17, 0.8)',
              maxWidth: '500px',
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

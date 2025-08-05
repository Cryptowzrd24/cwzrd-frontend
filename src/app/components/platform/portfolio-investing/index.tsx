import { Box, Typography } from '@mui/material';
import React from 'react';
import PortfolioCard from './portfolioCard';

const Portfolio = () => {
  return (
    <>
      <Box
        sx={{
          width: '100%',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          display: 'flex',
          alignItems: 'center',
          borderRadius: '24px',
          gap: '40px',
          overflow:'hidden',

          '@media (max-width: 1024px)': {
            flexDirection: 'column-reverse',
            alignItems: 'flex-start',
            gap: '16px',
          },
        }}
      >
        <Box
          sx={{
            paddingTop: '36px',
            '@media (max-width: 1024px)': {
              padding: '0px',
              width: '100%',
            },
          }}
        >
          <PortfolioCard />
        </Box>
        <Box
          sx={{
            paddingBlock: '114px',
            '@media (max-width: 1024px)': {
              padding: '16px',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '30px !important',
              fontWeight: '600',
              lineHeight: '33px',
              color: 'rgba(17, 17, 17, 1)',
              mb: '16px',
              width: '375px',
              letterSpacing: '-1px',
              fontFamily: 'Sf Pro Display',

              '@media (max-width: 1024px)': {
                width: '100%',
                fontSize: '24px !important',
              },
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

              '@media (max-width: 1024px)': {
                width: '100%',
              },
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

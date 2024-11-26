import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Portfolio from '../../../../../public/images/membership/portfolio.png';
const PortfolioInvestingCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(31,31,31,1)',
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        padding: '24px',
        borderRadius: '24px',
        width: '33%',
        height: '423px',
        boxSizing: 'border-box',
        '@media (max-width:855px)': {
          padding: '16px',
        },
        '@media (max-width:768px)': {
          width: '100%',
        },
      }}
    >
      <Box
        sx={{
          position: 'relative',
          maxWidth: '262px',
          height: '262px',
          mx: 'auto',
        }}
      >
        <Image src={Portfolio} alt="Image of bag" fill objectFit="contain" />
      </Box>

      <Box sx={{ mt: '30px' }}>
        <Typography
          sx={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '24px',
            fontWeight: '500',
            mb: '4px',
            '@media (max-width:660px)': {
              fontSize: '18px',
            },
          }}
        >
          Portfolio Investing
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: '400',
            lineHeight: '18px',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
        >
          Our platform provides insights and strategies for long-term wealth
          accumulation through smart portfolio investing.
        </Typography>
      </Box>
    </Box>
  );
};

export default PortfolioInvestingCard;

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Portfolio from '../../../../../public/images/membership/portfolio.svg';
const PortfolioInvestingCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(31,31,31,1)',
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        padding: '24px',
        borderRadius: '24px',
        width: '33%',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          position: 'relative',
          aspectRatio: '1',
        }}
      >
        <Image src={Portfolio} alt="Image of bag" fill objectFit="cover" />
      </Box>

      <Box sx={{ mt: '30px' }}>
        <Typography
          sx={{
            fontSize: '18px',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '24px',
            fontWeight: '500',
            mb: '4px',
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

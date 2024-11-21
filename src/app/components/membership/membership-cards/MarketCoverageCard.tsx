import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Clock from '../../../../../public/images/membership/clock.png';

const MarketCoverageCard = () => {
  return (
    <Box
      sx={{
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        padding: '32px 24px',
        borderRadius: '24px',
        width: '33%',
        height: '100%',
        backgroundImage: `url('/images/membership/marketCoverage.png')`,
        backgroundSize: 'cover',
        boxSizing: 'border-box',
      }}
    >
      <Box sx={{ mb: '50px', transform: 'translateX(-16px)' }}>
        <Typography
          sx={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '18px',
            fontWeight: '400',
          }}
        >
          24/7 MARKET COVERAGE
        </Typography>
      </Box>

      <Image src={Clock} width={120} height={120} alt="Image of bag" />

      <Box sx={{ mt: '28px' }}>
        <Typography
          sx={{
            fontSize: '22px',
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '600',
            lineHeight: '28px',
          }}
        >
          Get round-the-clock market updates, so you're always informed and
          ready to act.
        </Typography>
      </Box>
    </Box>
  );
};

export default MarketCoverageCard;

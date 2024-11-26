import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Clock from '../../../../../public/images/membership/clock.svg';

const MarketCoverageCard = () => {
  return (
    <Box
      sx={{
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        py: '32px',
        borderRadius: '24px',
        width: '33%',
        height: '423px',
        backgroundImage: `url('/images/membership/marketCoverage.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        boxSizing: 'border-box',
        '@media (max-width:768px)': {
          width: '100%',
        },
      }}
    >
      <Box sx={{ mb: '50px', px: '16px' }}>
        <Typography
          sx={{
            fontSize: '14px',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '18px',
            fontWeight: '400',
            '@media (max-width:660px)': {
              fontSize: '14px',
            },
          }}
        >
          24/7 MARKET COVERAGE
        </Typography>
      </Box>

      <Box
        sx={{
          px: '24px',
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '120px',
            width: '100%',
            aspectRatio: '1',
          }}
        >
          <Image
            src={Clock}
            fill
            alt="Image of bag"
            style={{
              objectFit: 'cover',
            }}
          />
        </Box>

        <Typography
          sx={{
            mt: '28px',
            fontSize: '22px',
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '600',
            lineHeight: '28px',
            fontFamily: 'Sf Pro Text',
            maxWidth: '251px',
            '@media (max-width:855px)': {
              fontSize: '20px',
            },
            '@media (max-width:660px)': {
              fontSize: '22px',
              mt: '44px',
            },
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

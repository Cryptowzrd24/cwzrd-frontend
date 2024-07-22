'use client';

import { Typography } from '@mui/material';
import React from 'react';

const HeroContent = () => {
  return (
    <>
      <Typography variant="h1" sx={{ maxWidth: '960px', marginTop: '-10px' }}>
        My{' '}
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Favorite Coins
        </span>{' '}
      </Typography>
    </>
  );
};

export default HeroContent;

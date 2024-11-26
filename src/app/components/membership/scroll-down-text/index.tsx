import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import ArrowDown from '../../../../../public/icons/membership/arrow-down.svg';

const ScrollDownText = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '0',
        right: '0',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        transform: 'rotate(90deg)',
        '@media (max-width:1025px)': {
          display: 'none',
        },
      }}
    >
      <Typography
        sx={{
          fontSize: '16px',
          fontWeight: '700',
          lineHeight: '19px',
          fontFamily: 'Sf Pro Text',
          background: 'linear-gradient(80deg, #FFC404 100%, #F2FF04 100%)',
          backgroundClip: 'text',
          WebkitBackgroundClip: 'text',
          color: 'transparent',
        }}
      >
        Scroll Down
      </Typography>
      <Box
        sx={{
          transform: 'rotate(-90deg)',
          display: 'inline-block',
        }}
      >
        <Image src={ArrowDown} alt="arrow" />
      </Box>
    </Box>
  );
};

export default ScrollDownText;

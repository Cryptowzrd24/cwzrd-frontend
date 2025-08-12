import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import Avatar from '../../../../../public/images/banner/avatar.png';

const NoOfUser = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center',
        padding: { md: '12px 24px', xs: '12px' },
        borderRadius: '60px',
        maxWidth: 'fit-content',
        background: 'rgb(255, 255, 255)',
        flexDirection: { xs: 'column', md: 'row' },
      }}
    >
      <Image
        src={Avatar}
        width={100}
        height={40}
        alt="Join the Cryptowzrd Community Today!"
      />

      <Typography
        sx={{
          color: '#111',
          fontSize: { lg: '16px', xs: '12px' },
          fontWeight: { lg: '600', xs: '400' },
          lineHeight: { lg: '19.2px', xs: '100%' },
          letterSpacing: { lg: '-0.16px', xs: '0.16px' },
        }}
      >
        3000+{' '}
        <span style={{ fontWeight: '400' }}>people who already joined us</span>
      </Typography>
    </Box>
  );
};

export default NoOfUser;

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
        padding: '8px 16px 8px 8px',
        borderRadius: '32px 32px 0px 32px',
        maxWidth: 'fit-content',
        background: 'rgb(255, 255, 255)',
        position: 'absolute',
        right: { xs: '10px', lg: '45px' },
        bottom: '35px',
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
          fontSize: '16px',
          fontWeight: '600',
          lineHeight: '19.2px',
          letterSpacing: '-0.16px',
        }}
      >
        3000+{' '}
        <span style={{ fontWeight: '400' }}>people who already joined us</span>
      </Typography>
    </Box>
  );
};

export default NoOfUser;

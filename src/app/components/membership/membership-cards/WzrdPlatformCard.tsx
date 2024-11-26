import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Wzrd from '../../../../../public/images/membership/wzrdPlatform.png';
const WzrdPlatformCard = () => {
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
        <Image
          src={Wzrd}
          fill
          objectFit="contain"
          alt="Image for Wzrd Platform"
        />
      </Box>

      <Box
        sx={{
          mt: '12px',
          '@media (max-width:898px)': {
            mt: '0',
          },
        }}
      >
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
          WZRD Platform
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: '400',
            lineHeight: '18px',
            mr: '8px',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
        >
          Unlock the WZRD Platform for all your trading needs. From expert
          courses and books to trade tracking and real-time data, everything is
          designed to help you succeed.
        </Typography>
      </Box>
    </Box>
  );
};

export default WzrdPlatformCard;

import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Wzrd from '../../../../../public/images/membership/wzrdPlatform.png';
const WzrdPlatformCard = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255,255,255,1)',
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        padding: '24px',
        borderRadius: '24px',
        width: '33%',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Image
        src={Wzrd}
        width={260}
        height={260}
        alt="Image for Wzrd Platform"
      />

      <Box sx={{ mt: '12px' }}>
        <Typography
          sx={{
            fontSize: '18px',
            color: 'rgba(17, 17, 17, 1)',
            lineHeight: '24px',
            fontWeight: '500',
            mb: '4px',
          }}
        >
          WZRD Platform
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'rgba(17, 17, 17, 0.8)',
            fontWeight: '400',
            lineHeight: '18px',
            mr: '8px',
            fontFamily: 'Sf Pro Text',
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

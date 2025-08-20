import { Box, Typography } from '@mui/material';
import React from 'react';
import RadialShield from '../../../../../public/images/home/trading_journey/radial_shield_check.svg';
import Image from 'next/image';

const PrivateCommunity = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        background: 'linear-gradient(90deg, #6CE1BC 0%, #00A1AC 100%)',
        borderRadius: '24px',
        height: '423px',
        alignContent: 'center',
        padding: '24px',
        gap: '20px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        width: '96%',
        margin: '0 auto',
      }}
    >
      <Image src={RadialShield} height={200} width={200} alt="radial shield" />
      <Box>
        <Typography
          sx={{
            color: 'white',
            fontWeight: { xs: '600' },
            fontSize: { xs: '16px' },
          }}
        >
          Private Community
        </Typography>
        <Typography
          sx={{
            color: 'white',
            fontWeight: '400px',
            fontSize: '12px',
            lineHeight: '1.5',
          }}
        >
          Our course has been made to guide a beginner and empower them with all
          the knowledge and tools they’ll need to get started investing and
          trading Cryptocurrency
        </Typography>
      </Box>
    </Box>
  );
};

export default PrivateCommunity;

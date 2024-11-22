import React from 'react';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Lock from '../../../../../public/images/membership/securityLock.png';

const CryptoSecurityCard = () => {
  return (
    <Box
      sx={{
        background: 'rgba(255,255,255,1)',
        borderRadius: '24px',
        maxWidth: '270px',
        width: '100%',
        height: '423px',
        marginRight: '16px',
        boxShadow: '0px 4px 6px 0px #00000005',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          pt: '24px',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Image
          src={Lock}
          alt="lock"
          width={207}
          style={{
            objectFit: 'cover',
            marginBottom: '24px',
          }}
        />

        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '26px',
            color: 'rgba(17, 17, 17, 1)',
            mb: '8px',
            px: '26px',
            textAlign: 'center',
          }}
        >
          Crypto Security Education
        </Typography>
        <Typography
          sx={{
            fontSize: '13px',
            fontWeight: '400',
            lineHeight: '20px',
            color: 'rgba(17, 17, 17, 0.8)',
            px: '22px',
            textAlign: 'center',
            fontFamily: 'Sf Pro Text',
          }}
        >
          Unsure when to take profits? Our experts provide clear, actionable
          guidance to help you lock in gains at the perfect time.
        </Typography>
      </Box>
    </Box>
  );
};

export default CryptoSecurityCard;

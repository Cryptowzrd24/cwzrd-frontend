import React from 'react';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Lock from '../../../../../public/images/membership/securityLock.png';

const CryptoSecurityCard = () => {
  return (
    <Box
      sx={{
        background: 'rgba(20,20,20,1)',
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
            color: 'rgba(255, 255, 255, 1)',
            mb: '8px',
            px: '26px',
            textAlign: 'center',
            '@media (max-width:660px)': {
              fontSize: '20px',
            },
          }}
        >
          Crypto Security Education
        </Typography>
        <Typography
          sx={{
            fontSize: '13px',
            fontWeight: '400',
            lineHeight: '20px',
            color: 'rgba(255, 255, 255, 0.8)',
            px: '22px',
            textAlign: 'center',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '13px',
            },
          }}
        >
          Secure your crypto with elite training to protect assets, avoid scams,
          and trade confidently.
        </Typography>
      </Box>
    </Box>
  );
};

export default CryptoSecurityCard;

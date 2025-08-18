import { Box, Typography } from '@mui/material';
import React from 'react';
import CryptoSecurityEducatoin from '../../../../../public/images/home/wzrd_membership_benefits/crypto_security_education.svg';
import Image from 'next/image';

const CryptoSecurityEducation = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '24px',
        height: '423px',
        alignContent: 'center',
        padding: '24px',
        gap: '20px',
        boxSizing: 'border-box',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        // width: { xs: '95%', sm: '270px' },
        width: '96%',
        margin: '0 auto',
      }}
    >
      <Image
        src={CryptoSecurityEducatoin}
        height={250}
        width={200}
        alt="crypto lock"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '600',
            textAlign: 'center',
          }}
        >
          Crypto Security Education
        </Typography>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            textAlign: 'center',
            lineHeight: '1.5',
          }}
        >
          Unsure when to take profits? Our experts provide clear, actionable
          guidance to help you lock in gains at the perfect time.
        </Typography>
      </Box>
    </Box>
  );
};

export default CryptoSecurityEducation;

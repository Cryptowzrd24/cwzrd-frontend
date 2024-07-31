import { Box, Typography } from '@mui/material';
import React from 'react';
import macbook from '../../../../../public/images/platform/MacBook-small.png';
import Image from 'next/image';
const RiskCalculator = () => {
  return (
    <>
      <Box
        sx={{
          padding: '48px 24px 34px 24px',
          borderRadius: '32px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          maxWidth: '380px',
        }}
      >
        <Box sx={{ paddingLeft: '24px', paddingRight: '24px' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              letterSpacing: '1px',
              mb: '8px',
            }}
          >
            RISK CALCULATOR
          </Typography>
          <Typography variant="h1" sx={{ mb: '56px' }}>
            Make Data-Driven Investment Choices{' '}
          </Typography>
        </Box>
        <Image src={macbook} alt="macbook" width={372} />
      </Box>
    </>
  );
};

export default RiskCalculator;

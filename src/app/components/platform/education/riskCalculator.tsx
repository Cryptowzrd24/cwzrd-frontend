import { Box, Typography } from '@mui/material';
import React from 'react';
import macbook from '../../../../../public/images/platform/MacBook-small.png';
import Image from 'next/image';
const RiskCalculator = () => {
  return (
    <>
      <Box
        sx={{
          // padding: '36px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          width: '307.5px',
          height: '352.5px',
        }}
      >
        <Box sx={{ padding: '36px 36px 0 36px' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '12px',
              fontWeight: '400',
              letterSpacing: '1px',
              lineHeight: '15.6px',
              mb: '8px',
            }}
          >
            RISK CALCULATOR
          </Typography>
          <Typography
            sx={{
              mb: '24px',
              fontSize: '24px',
              fontWeight: 700,
              lineHeight: '28.8px',
            }}
          >
            Make Data-Driven Investment Choices{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            marginTop: '40.75px',
            marginBottom: '25.4px',
          }}
        >
          <Image src={macbook} alt="macbook" width={279.4} height={170.21} />
        </Box>
      </Box>
    </>
  );
};

export default RiskCalculator;

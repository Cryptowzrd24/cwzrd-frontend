import { Box, Typography } from '@mui/material';
import React from 'react';

import WzrdStrategy from '../../../../../public/images/membership/wzrdStrategy.png';
import Image from 'next/image';

const WzrdStrategies = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(216,223,242,1)',
        borderRadius: '24px',
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: '400',
            color: 'rgba(17, 17, 17, 1)',
            textTransform: 'uppercase',
            mb: '6px',
            mt: '36px',
            px: '36px',
            letterSpacing: '1px',
            lineHeight: '15.6px',
          }}
        >
          Wzrd Strategies
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '24px',
            px: '36px',
            mb: '20px',
            color: 'rgba(17, 17, 17, 1)',
            width: '236px',
          }}
        >
          Designed to maximize profits and minimize risk.
        </Typography>
      </Box>

      <Box>
        <Image src={WzrdStrategy} alt="graph" />
      </Box>
    </Box>
  );
};

export default WzrdStrategies;

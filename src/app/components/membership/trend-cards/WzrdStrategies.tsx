import { Box, Typography } from '@mui/material';
import React from 'react';

import WzrdStrategy from '../../../../../public/images/membership/wzrdStrategy.png';
import Image from 'next/image';

const WzrdStrategies = () => {
  return (
    <Box
      sx={{
        width: '33%',
        backgroundColor: 'rgba(216,223,242,1)',
        borderRadius: '24px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        height: '353px',
        '@media (max-width:768px)': {
          width: '100%',
        },
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
            '@media (max-width:660px)': {
              fontSize: '12px',
            },
          }}
        >
          Wzrd Strategies
        </Typography>

        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '24px',
            px: '36px',
            mb: '20px',
            color: 'rgba(17, 17, 17, 1)',
            maxWidth: '236px',
            '@media (max-width:1014px)': {
              pr: '12px',
            },
            '@media (max-width:660px)': {
              fontSize: '20px',
            },
          }}
        >
          Designed to maximize profits and minimize risk.
        </Typography>
      </Box>

      <Box
        sx={{
          position: 'relative',
          maxWidth: '342px',
          width: '100%',
          aspectRatio: '1',
          mx: 'auto',
        }}
      >
        <Image
          src={WzrdStrategy}
          alt="graph"
          fill
          objectFit="contain"
          objectPosition="top"
        />
      </Box>
    </Box>
  );
};

export default WzrdStrategies;

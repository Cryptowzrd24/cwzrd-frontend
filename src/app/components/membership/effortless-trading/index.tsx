import React from 'react';
import { Box, Typography } from '@mui/material';
import EffortlessTradingCardContent from './EffortlessTradingCardContent';

function EffortlessTrading() {
  return (
    <>
      <Box
        sx={{
          ml: '120px',
          '@media (max-width:855px)': {
            ml: '32px',
          },
        }}
      >
        <Typography
          sx={{
            mb: '4px',
            letterSpacing: '1.4px',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 1)',
            '@media (max-width:660px)': {
              fontSize: '12px',
              lineHeight: '15px',
            },
          }}
        >
          Effortless trading{' '}
        </Typography>
        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '38px',
            color: 'rgba(255, 255, 255, 1)',
            '@media (max-width:660px)': {
              fontSize: '24px',
              lineHeight: '28px',
            },
          }}
        >
          Trade and profit
          <span
            style={{
              color: 'rgba(99, 77 ,253, 1)',
              paddingLeft: '6px',
            }}
          >
            with us
          </span>
        </Typography>
        <Box sx={{ mt: '28px' }}>
          <EffortlessTradingCardContent />
        </Box>
      </Box>
    </>
  );
}

export default EffortlessTrading;

import React from 'react';
import { Box, Typography } from '@mui/material';
import EffortlessTradingCardContent from './EffortlessTradingCardContent';

function EffortlessTrading() {
  return (
    <>
      <Box sx={{ ml: '138px' }}>
        <Typography
          variant="h4"
          sx={{
            mb: '4px',
            letterSpacing: '1.4px',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18px',
            textTransform: 'uppercase',
          }}
        >
          Effortless trading{' '}
        </Typography>
        <Typography
          variant="h2"
          sx={{ fontSize: '32px', fontWeight: '700', lineHeight: '38px' }}
        >
          Trade and profit
          <span
            style={{
              background:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              paddingLeft: '6px',
            }}
          >
            with us
          </span>
        </Typography>
      </Box>

      <Box sx={{ mt: '28px', ml: '118px' }}>
        <EffortlessTradingCardContent />
      </Box>
    </>
  );
}

export default EffortlessTrading;

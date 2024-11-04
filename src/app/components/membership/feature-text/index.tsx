import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const FeatureText = () => {
  return (
    <Box>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '972px',
          margin: 'auto',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: 2,
            lineHeight: '18.2px',
            mb: '4px',
          }}
        >
          FEATURES
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: '32px',
            lineHeight: '38.4px',
            mb: '8px',
            fontWeight: '700',
          }}
        >
          More Benefits
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            textAlign: 'center',
            color: '#111111CC',
            lineHeight: '21px',
          }}
        >
          Unlock a wealth of benefits by joining our platform. From expert
          lessons to real-time signals, we have everything you need to succeed.
        </Typography>
      </Stack>
    </Box>
  );
};

export default FeatureText;

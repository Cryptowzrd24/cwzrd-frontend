import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const WzrdPlatformText = () => {
  return (
    <Box>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          maxWidth: '972px',
          width: '100%',
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
          Platform
        </Typography>
        <Typography
          variant="h1"
          sx={{
            fontSize: '32px',
            lineHeight: '38.4px',
            mb: '12px',
            fontWeight: '700',
          }}
        >
          WZRD Platform
        </Typography>
        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            mb: '24px',
            textAlign: 'center',
            color: '#111111CC',
            lineHeight: '21px',
          }}
        >
          Join the industry's most exclusive Trading Community and unlock a
          wealth of benefits in both Crypto and Forex trading. As a lifetime
          member, you'll gain access to:
        </Typography>
      </Stack>
    </Box>
  );
};

export default WzrdPlatformText;

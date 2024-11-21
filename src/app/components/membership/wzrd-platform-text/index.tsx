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
          Education
        </Typography>

        <Typography
          variant="h2"
          sx={{ fontSize: '32px', fontWeight: '700', lineHeight: '38px' }}
        >
          Virtually
          <span
            style={{
              background:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              paddingLeft: '6px',
            }}
          >
            limitless{' '}
          </span>
          learning
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            textAlign: 'center',
            color: '#111111CC',
            lineHeight: '21px',
            maxWidth: '574px',
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

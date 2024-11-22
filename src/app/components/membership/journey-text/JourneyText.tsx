import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

const JourneyText = () => {
  return (
    <Box>
      <Stack
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
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
          EVERYTHING AND MORE
        </Typography>

        <Typography
          variant="h2"
          sx={{ fontSize: '32px', fontWeight: '700', lineHeight: '38px' }}
        >
          <span
            style={{
              background:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              paddingLeft: '6px',
            }}
          >
            Boost{' '}
          </span>
          your trading journey
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            textAlign: 'center',
            color: '#111111CC',
            lineHeight: '21px',
            fontFamily: 'Sf Pro Text',
          }}
        >
          Unlock a wealth of benefits by joining our platform. From expert
          lessons to real-time signals, we have everything you need to succeed.
        </Typography>
      </Stack>
    </Box>
  );
};

export default JourneyText;

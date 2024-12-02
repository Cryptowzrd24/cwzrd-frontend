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
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: 2,
            lineHeight: '18.2px',
            mb: '4px',
            color: 'rgba(17, 17, 17, 1)',
            '@media (max-width:660px)': {
              fontSize: '12px',
              lineHeight: '15px',
              fontWeight: '500',
            },
          }}
        >
          EVERYTHING AND MORE
        </Typography>

        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '38px',
            color: 'rgba(17, 17, 17, 1)',
            '@media (max-width:660px)': {
              fontSize: '24px',
              lineHeight: '28px',
              fontWeight: '700',
            },
          }}
        >
          <span
            style={{
              background:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              paddingRight: '6px',
            }}
          >
            Boost
          </span>
          your trading journey
        </Typography>

        <Typography
          variant="body1"
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            textAlign: 'center',
            color: 'rgba(17, 17, 17, 0.8)',
            lineHeight: '21px',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '14px',
              fontWeight: '400',
            },
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

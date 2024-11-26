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
          sx={{
            fontSize: '14px',
            fontWeight: '500',
            textTransform: 'uppercase',
            letterSpacing: 2,
            lineHeight: '18.2px',
            mb: '4px',
            color: 'rgba(255, 255, 255, 1)',
            '@media (max-width:660px)': {
              fontSize: '12px',
              lineHeight: '15px',
            },
          }}
        >
          Education
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
          sx={{
            fontSize: '14px',
            fontWeight: '400',
            textAlign: 'center',
            color: 'rgba(255, 255, 255, 0.8)',
            lineHeight: '21px',
            maxWidth: '574px',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '14px',
            },
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

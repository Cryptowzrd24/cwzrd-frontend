import { Stack, Typography } from '@mui/material';
import React from 'react';

const TradeHeader = () => {
  return (
    <Stack
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '1070px',
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
          mb: '8px',
        }}
      >
        features
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontSize: '32px',
          lineHeight: '38.4px',
          mb: '12px',
          '@media (max-width: 978px)': {
            fontSize: '21px !important',
            lineHeight: '28.8px',
            letterSpacing: '0.24px',
          },
        }}
      >
        <Typography
          component={'span'}
          sx={{
            fontSize: 'inherit !important',
            fontWeight: 'inherit',
            lineHeight: 'inherit',
            letterSpacing: 'inherit',
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '10px',
            '@media (max-width: 978px)': { marginLeft: '0px' },
          }}
        >
          Profitable
        </Typography>{' '}
        Trade Opportunities
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: '800px',
          fontSize: '14px !important',
          fontWeight: '400',
          mb: '36px',
          textAlign: 'center',
          lineHeight: '21px',
          color: 'rgba(17, 17, 17, 0.8)',
        }}
      >
        Join the industry's most exclusive Trading Community and unlock a wealth
        of benefits in both Crypto and Forex trading. As a lifetime member,
        you'll gain access to:
      </Typography>
    </Stack>
  );
};

export default TradeHeader;

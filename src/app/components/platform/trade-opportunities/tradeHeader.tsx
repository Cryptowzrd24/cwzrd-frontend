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
          fontSize: '18px',
          fontWeight: '500',
          textTransform: 'uppercase',
          letterSpacing: 2,
          mb: '8px',
        }}
      >
        features
      </Typography>
      <Typography
        variant="h1"
        sx={{ fontSize: '72px', lineHeight: '72px', mb: '12px' }}
      >
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '10px',
          }}
        >
          Profitable
        </span>{' '}
        Trade Opportunities
      </Typography>
      <Typography
        variant="body1"
        sx={{
          fontSize: '20px',
          fontWeight: '400',
          mb: '36px',
          textAlign: 'center',
          lineHeight: '30px',
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

import { Box, Typography } from '@mui/material';
import React from 'react';

const Header = () => {
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          height: { xs: '150px', md: '90px' },
          gap: '8px',
          padding: '10px',
        }}
      >
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '14px',
          }}
        >
          EVERYTHING AND MORE
        </Typography>
        <Typography
          sx={{
            fontWeight: '700',
            fontSize: { xs: '24px', lg: '32px' },
            textAlign: 'center',
          }}
        >
          <span
            style={{
              background:
                'linear-gradient(90deg, #634DFD 20.81%, #BF48F7 40.69%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Boost
          </span>{' '}
          your trading journey
        </Typography>
        <Typography
          sx={{
            fontWeight: '400',
            fontSize: '14px',
            textAlign: { xs: 'center' },
          }}
        >
          Unlock a wealth of benefits by joining our platform. From expert
          lessons to real-time signals, we have everything you need to succeed.
        </Typography>
      </Box>
    </Box>
  );
};

export default Header;

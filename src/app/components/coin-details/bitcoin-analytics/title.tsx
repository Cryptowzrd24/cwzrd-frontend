'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';

const Title = ({ name }: { name: string }) => {
  const [active, setActive] = useState('1 Month');
  const handleClick = (button: any) => {
    setActive(button);
  };

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(17, 17, 17, 1)',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: 1,
          letterSpacing: '2px',
          mb: '4px',
          ml: '4px',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        Analytics
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '16px', md: '0px' },
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: '32px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            {name}{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Analytics
            </span>{' '}
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '16px', md: '16px' },
            textAlign: { xs: 'center', md: 'left' },
            justifyContent: { xs: 'center', md: 'flex-end' },
          }}
        >
          <Box
            onClick={() => handleClick('1 Month')}
            sx={{
              padding: '6px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(114, 72, 247, 0.1)',
              cursor: 'pointer',
              border:
                active === '1 Month'
                  ? '1px solid rgba(114, 72, 247, 1)'
                  : 'none',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              1 Month
            </Typography>
          </Box>
          <Box
            onClick={() => handleClick('1 Year')}
            sx={{
              padding: '6px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(114, 72, 247, 0.1)',
              cursor: 'pointer',
              border:
                active === '1 Year'
                  ? '1px solid rgba(114, 72, 247, 1)'
                  : 'none',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              1 Year
            </Typography>
          </Box>
          <Box
            onClick={() => handleClick('All')}
            sx={{
              padding: '6px 16px',
              borderRadius: '8px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(114, 72, 247, 0.1)',
              cursor: 'pointer',
              border:
                active === 'All' ? '1px solid rgba(114, 72, 247, 1)' : 'none',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                color: 'rgba(114, 72, 247, 1)',
              }}
            >
              All
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Title;

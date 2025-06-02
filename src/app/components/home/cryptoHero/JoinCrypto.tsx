import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ChevronRightHead from '../../../../../public/icons/chevronRightHead';
import Image from 'next/image';

const JoinCrypto = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        maxWidth: '100%',
        height: '335px',
        background: '#020202',
        backgroundImage: 'url("/images/bitcoin.png")',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'contain',
        backgroundPosition: 'bottom',
        borderRadius: '16px',
        padding: '24px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          zIndex: 1,
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      >
        <Image
          src="/images/spotlight.png"
          alt=""
          fill
          style={{ objectFit: 'cover' }}
        />
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
            lineHeight: '130%',
            letterSpacing: '1.4px',
            color: '#FFF',
            textTransform: 'uppercase',
          }}
        >
          ⭐️ Membership
        </Typography>
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '24px',
            fontWeight: '600',
            lineHeight: '130%',
            letterSpacing: '0.48px',
          }}
        >
          Join the Cryptowzrd Community today!
        </Typography>
        <Typography
          sx={{
            color: 'rgba(255, 255, 255, 0.80)',
            fontSize: '14px',
            fontWeight: '400',
            lineHeight: '150%',
          }}
        >
          Access detailed daily analysis on the forex markets. Whether you're a
          beginner or seasoned trader.
        </Typography>
      </Box>
      <Box>
        <Button
          variant="contained"
          sx={{
            display: 'flex',
            padding: '12px 24px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            borderRadius: '56px',
            backgroundColor: '#FFF',
            cursor: 'pointer',

            '&:hover': {
              backgroundColor: '#F0F0F0',
            },
          }}
          onClick={() => {
            alert('working');
          }}
        >
          <Typography
            sx={{
              color: '#111',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '130%',
            }}
          >
            Get Started
          </Typography>
          <ChevronRightHead />
        </Button>
      </Box>
    </Box>
  );
};

export default JoinCrypto;

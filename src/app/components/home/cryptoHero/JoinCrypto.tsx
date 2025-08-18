import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';

const JoinCrypto = ({ isMainPage = false }: { isMainPage?: boolean }) => {
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
        '@media (max-width: 1024px)': {
          height: isMainPage ? '280px' : '335px',
          padding: isMainPage ? '20px' : '24px',
        },
        '@media (max-width: 768px)': {
          height: isMainPage ? '240px' : '335px',
          padding: isMainPage ? '16px' : '24px',
        },
        '@media (max-width: 576px)': {
          height: isMainPage ? '200px' : '335px',
          padding: isMainPage ? '12px' : '24px',
        },
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
            '@media (max-width: 768px)': {
              fontSize: isMainPage ? '12px' : '14px',
            },
            '@media (max-width: 576px)': {
              fontSize: isMainPage ? '10px' : '14px',
            },
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
            '@media (max-width: 1024px)': {
              fontSize: isMainPage ? '20px' : '24px',
            },
            '@media (max-width: 768px)': {
              fontSize: isMainPage ? '16px' : '24px',
            },
            '@media (max-width: 576px)': {
              fontSize: isMainPage ? '14px' : '24px',
            },
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
            '@media (max-width: 768px)': {
              fontSize: isMainPage ? '12px' : '14px',
            },
            '@media (max-width: 576px)': {
              fontSize: isMainPage ? '10px' : '14px',
            },
          }}
        >
          Access detailed daily analysis on the forex markets. Whether you're a
          beginner or seasoned trader.
        </Typography>
      </Box>
      <Box>
        <Button
          sx={{
            fontSize: { xs: '12px', sm: '14', md: '16px', lg: '18px' },
            fontWeight: '500',
            padding: {
              xs: '6px 12px !important',
              lg: '10px 20px !important',
            },
            backgroundColor: 'white',
            borderRadius: '25px',
            width: { xs: '120px', md: '140px', lg: '158px' },
            height: { xs: 'auto', md: 'auto', lg: '39px' },
          }}
        >
          <span>Get Started</span> <ArrowRightBlack width={16} height={16} />
        </Button>
      </Box>
    </Box>
  );
};

export default JoinCrypto;

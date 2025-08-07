import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import mask from '../../../../public/images/platform/Mask.png';
import Image from 'next/image';

const TradingPlatform = () => {
  return (
    <Box
      sx={{
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          paddingLeft: '40px',
          textAlign: 'left',
          marginBottom: '16px',

          '@media (max-width: 1024px)': {
            paddingLeft: '0px',
            width: '100%',
            textAlign: 'center',
          },
          '@media (max-width: 576px)': {
            lineHeight: '28.8px',
            letterSpacing: '0.24px',
          },
        }}
      >
        <Typography
          component={'span'}
          sx={{
            fontSize: '32px !important',
            fontWeight: '600',
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',

            '@media (max-width: 1024px)': { fontSize: '24px !important' },
            '@media (max-width: 576px)': {
              fontSize: '24px !important',
              fontWeight: 700,
            },
          }}
        >
          Trading
        </Typography>
      </Box>
      <Box
        sx={{
          padding: { xs: '0 16px 24px 16px', md: '0 0 54px 0' },
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '32px',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          width: { md: '100%', lg: '1060px' },
          height: { xs: 'auto', md: '413px' },
          overflow: 'hidden',
        }}
      >
        <Image src={mask} alt="mask" layout="responsive" width={1096} />
        <Stack
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            maxWidth: '1096px',
            width: '100%',
            margin: 'auto',
            marginTop: '36px',
            '@media (max-width: 576px)': {
              marginTop: '16px',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: { xs: '24px !important', md: '28px !important' },
              lineHeight: { xs: '24px', md: '30.8px' },
              mb: '16px',
              fontWeight: 700,
              fontFamily: 'Sf Pro Display',
              textAlign: ' center',
            }}
          >
            Dedicated Professional Mentorship
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '12px !important',
              fontWeight: '400',
              textAlign: 'center',
              color: 'rgba(17, 17, 17, 0.8)',
              lineHeight: { xs: '18px', md: '20px' },
              width: { xs: '100%', md: '750px' },
              '@media (max-width: 576px)': {
                width: '90%',
              },
            }}
          >
            We are fully committed to your success in every aspect of your
            journey. Through our daily life coaching sessions and uplifting
            write-ups, we provide unwavering support, ensuring that you never
            face any challenge alone.
          </Typography>
        </Stack>
      </Box>
    </Box>
  );
};

export default TradingPlatform;

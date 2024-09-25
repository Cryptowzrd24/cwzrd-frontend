import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import mask from '../../../../public/images/platform/Mask.png';
import Image from 'next/image';
const TradingPlatform = () => {
  return (
    <>
      <Typography
        sx={{
          fontSize: '32px',
          fontWeight: '600',
          backgroundImage:
            'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginLeft: '-860px',
          mb: '16px',
          width: 'min-content',
          // lineHeight: '32px',
        }}
      >
        Trading
      </Typography>
      <Box
        sx={{
          padding: '0 0 54px 0',
          backgroundColor: 'rgba(255, 255, 255, 1)',
          borderRadius: '32px',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          width: '1060px',
          height: '413px',
        }}
      >
        <Image
          src={mask}
          alt="mask"
          width={1060}
          style={{ marginBottom: '48px' }}
        />
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
            sx={{
              fontSize: '28px',
              lineHeight: '30.8px',
              mb: '16px',
              fontWeight: 700,
              fontFamily: 'Sf Pro Display',
            }}
          >
            Dedicated Professional Mentorship
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '12px',
              fontWeight: '400',
              textAlign: 'center',
              color: 'rgba(17, 17, 17, 0.8)',
              lineHeight: '18px',
              width: '750px',
            }}
          >
            We are fully committed to your success in every aspect of your
            journey. Through our daily life coaching sessions and uplifting
            write-ups, we provide unwavering support, ensuring that you never
            face any challenge alone.
          </Typography>
        </Stack>
      </Box>
    </>
  );
};

export default TradingPlatform;

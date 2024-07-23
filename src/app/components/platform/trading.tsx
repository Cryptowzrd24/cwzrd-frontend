import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import mask from '../../../../public/images/platform/Mask.png';
import Image from 'next/image';
const TradingPlatform = () => {
  return (
    <>
      <Typography
        variant="body1"
        sx={{
          fontSize: '56px',
          fontWeight: '600',
          backgroundImage:
            'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginLeft: '10px',
          mb: '48px',
        }}
      >
        Trading
      </Typography>
      <Box
        sx={{
          padding: '0 0 72px 0',
          backgroundColor: '#d7a2a2',
          borderRadius: '32px',
          boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        }}
      >
        <Image
          src={mask}
          alt="mask"
          width={1290}
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
            variant="h1"
            sx={{ fontSize: '40px', lineHeight: '72px', mb: '16px' }}
          >
            Dedicated Professional Mentorship
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '20px',
              fontWeight: '400',
              textAlign: 'center',
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

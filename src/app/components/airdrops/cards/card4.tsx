import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img1 from '../../../../../public/images/airdrops/4.png';
const Card4 = () => {
  return (
    <Box
      sx={{
        padding: '16px 16px 32px 16px',
        borderRadius: '16px',
        maxWidth: '300px',
        width: '100%',
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        cursor: 'pointer',
        background: '#0e0e0e',
        height: 'auto',
        backgroundImage: `url('/images/airdrops/7.png')`,
        backgroundSize: '125%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
      }}
    >
      <Box
        sx={{
          padding: '8px 12px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 1)',
          maxWidth: '18%',
          width: '100%',
          mb: '44px',
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: '14px', fontWeight: '700' }}
        >
          STEP 4
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: '12px',
        }}
      >
        <Image src={img1} alt="card1" width={220} height={190} />
      </Box>
      <Stack sx={{ textAlign: 'center' }}>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(17, 17, 17, 1)',
            fontWeight: '700',
            fontSize: '18px',
            mb: '8px',
          }}
        >
          Claim tokens
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(17, 17, 17, 1)',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '18.85px',
            maxWidth: '268px',
          }}
        >
          Pat yourself on the back as you click the "Claim" button and get
          rewarded with your free tokens.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Card4;

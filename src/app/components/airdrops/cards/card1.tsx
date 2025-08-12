import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img1 from '../../../../../public/images/airdrops/1.png';
const Card1 = () => {
  return (
    <Box
      sx={{
        padding: '16px 16px 32px 16px',
        borderRadius: '16px',
        // maxWidth: '300px',
        width: { xs: '100%', sm: '49%', md: '24%' },
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        cursor: 'pointer',
        background: '#0e0e0e',
        boxSizing: 'border-box',

        height: 'auto',
        backgroundImage:
          'linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)',
      }}
    >
      <Box
        sx={{
          padding: '8px 12px',
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 1)',
          width: 'fit-content',
          mb: '44px',
        }}
      >
        <Typography
          variant="body1"
          sx={{ fontSize: '14px !important', fontWeight: '700' }}
        >
          STEP 1
        </Typography>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          mb: '32px',
        }}
      >
        <Image src={img1} alt="card1" width={220} height={180} />
      </Box>
      <Stack sx={{ textAlign: 'center' }}>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '700',
            fontSize: '18px',
            mb: '8px',
          }}
        >
          Complete Tasks
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '400',
            fontSize: '13px',
            lineHeight: '18.85px',
          }}
        >
          Position yourself to be Airdropped tokens by performing tasks in our
          curated guides that are most likely to qualify you for an Airdrop.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Card1;

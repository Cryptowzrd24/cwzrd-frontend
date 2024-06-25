import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img2 from '../../../../../public/images/airdrops/2.png';
import { url } from 'inspector';

const Card2 = () => {
  return (
    <Box
      sx={{
        padding: '16px 16px 32px 16px',
        borderRadius: '16px',
        maxWidth: '300px',
        width: '100%',
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        cursor: 'pointer',
        height: 'auto',
        backgroundImage: `url('/images/airdrops/5.png')`,
        backgroundSize: 'auto',
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
          STEP 2
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
        <Image src={img2} alt="card1" width={220} height={180} />
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

export default Card2;

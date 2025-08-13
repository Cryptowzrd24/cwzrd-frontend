import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img2 from '../../../../../public/images/airdrops/2.png';

const Card2 = () => {
  return (
    <Box
      sx={{
        padding: '16px 16px 32px 16px',
        borderRadius: '16px',
        // maxWidth: '300px',
        boxSizing: 'border-box',

        width: { xs: '100%', sm: '49%', md: '24%' },

        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        cursor: 'pointer',
        height: 'auto',
        backgroundImage: `url('/images/airdrops/5.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
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
        <Image
          src={img2}
          alt="card1"
          style={{ height: 'auto', width: '260px', maxWidth: '100%' }}
        />
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
            maxWidth: '268',
          }}
        >
          Once you perform the initial tasks, you simply need to maintain
          activity within the network with transactions twice a week.
        </Typography>
      </Stack>
    </Box>
  );
};

export default Card2;

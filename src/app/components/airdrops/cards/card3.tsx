import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img1 from '../../../../../public/images/airdrops/3.png';
import PlusIcon from '../../../../../public/icons/collections/plusIcon';
const Card3 = () => {
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
        backgroundImage: `url('/images/airdrops/6.png')`,
        backgroundSize: 'auto',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <Box sx={{ display: 'flex', gap: '22px' }}>
        <Typography
          variant="body1"
          sx={{
            fontSize: '16px',
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            letterSpacing: '2px',
            textTransform: 'uppercase',
          }}
        >
          Wait for Airdrop Announcement
        </Typography>
        <Box
          sx={{
            padding: '8px 12px',
            borderRadius: '24px',
            background: 'rgba(255, 255, 255, 1)',
            maxWidth: '18%',
            width: '100%',
            mb: '44px',
            backgroundImage:
              'linear-gradient(180deg, #2BFF27 0%, #FBFF39 100%)',
          }}
        >
          <Typography
            variant="body1"
            sx={{ fontSize: '14px', fontWeight: '700' }}
          >
            STEP 3
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          //   justifyContent: 'center',
          alignItems: 'start',
          mb: '24px',
        }}
      >
        <Image src={img1} alt="card1" width={56} height={56} />
      </Box>
      <Stack
        sx={{
          //   textAlign: 'center',
          maxWidth: '244px',
          width: '100%',
          margin: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: 'rgba(255, 255, 255, 1)',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '38.4px',
            letterSpacing: '1px',
          }}
        >
          Stay tuned for a project to
        </Typography>
        <span
          style={{
            background: 'linear-gradient(180deg, #2BFF27 0%, #FBFF39 100%)',
            fontWeight: '700',
            fontSize: '32px',
            lineHeight: '38.4px',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // marginLeft: '8px',
            letterSpacing: '1px',
          }}
        >
          announce a date for their Airdrop.
        </span>

        <Box
          sx={{
            padding: ' 8px',
            borderRadius: '100px',
            background: 'rgba(255, 255, 255, 1)',
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            bottom: '12px',
            right: '12px',
          }}
        >
          <PlusIcon />
        </Box>
      </Stack>
    </Box>
  );
};

export default Card3;

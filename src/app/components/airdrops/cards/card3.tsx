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
        // maxWidth: '300px',
        width: { xs: '100%', sm: '49%', md: '24%' },

        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        cursor: 'pointer',
        background: '#0e0e0e',
        boxSizing: 'border-box',
        height: 'auto',
        backgroundImage: `url('/images/airdrops/6.png')`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'row', md: 'column', lg: 'row' },
          gap: '22px',
        }}
      >
        <Typography
          variant="body1"
          sx={{
            fontSize: { xs: '14px', md: '16px' },
            fontWeight: '400',
            color: 'rgba(255, 255, 255, 1)',
            letterSpacing: '1px',
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
            width: 'fit-content',
            mb: '44px',
            backgroundImage:
              'linear-gradient(180deg, #2BFF27 0%, #FBFF39 100%)',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px !important',
              fontWeight: '700',
              whiteSpace: 'nowrap',
            }}
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
            fontSize: { xs: '24px', lg: '32px' },
            lineHeight: '32.4px',
            letterSpacing: '1px',
          }}
        >
          Stay tuned for a project to
        </Typography>
        <Typography
          sx={{
            background: 'linear-gradient(180deg, #2BFF27 0%, #FBFF39 100%)',
            fontWeight: '700',
            fontSize: { xs: '24px', lg: '32px' },
            lineHeight: '32.4px',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            // marginLeft: '8px',
            letterSpacing: '1px',
          }}
        >
          announce a date for their Airdrop.
        </Typography>

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

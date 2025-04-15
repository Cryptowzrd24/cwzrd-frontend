import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import comments from '../../../../../../public/images/platform/comments.png';
const CommunityCard = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/images/platform/community.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '24px 0 23.75px 24px',
          borderRadius: '24px',
          minHeight: '250px',
          width: '295px',
          overflow: 'hidden',

          '@media (max-width: 576px)': {
            width: 'auto',
            display: 'flex',
            flexDirection: 'column',
          },
        }}
      >
        <Image
          src={comments}
          alt="deliver"
          width={308}
          height={114.75}
          style={{ marginLeft: 'auto' }}
        />
        <Box
          sx={{
            paddingRight: '24.75px',
            mt: 'auto',
            paddingLeft: '6px',

            '@media (max-width: 576px)': {
              mt: '20px',
            },
          }}
        >
          <Typography
            // variant="body1"
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '18.2px',
              mt: '16.75px',
            }}
          >
            Community Success
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '12px',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '16px',
              mt: '3px',
            }}
          >
            You will stay updated with the market in real-time, receive calls
            and setups, receive important market updates, and be able to chat
            with like-minded WZRDs{' '}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default CommunityCard;

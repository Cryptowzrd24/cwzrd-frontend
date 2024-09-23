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
          padding: '24px 0 24px 24px',
          borderRadius: '24px',
          height: '276px',
          width: '319px',
        }}
      >
        <Image src={comments} alt="deliver" width={318} height={135} />
        <Box
          sx={{
            paddingRight: '24px',
            maxWidth: '366px',
            width: '100%',
            mt: '18px',
            paddingLeft: '6px',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '18.2px',
              letterSpacing: '1px',
              mt: '4px',
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
              lineHeight: '18px',
              mt: '4px',
              width: '266.25px',
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

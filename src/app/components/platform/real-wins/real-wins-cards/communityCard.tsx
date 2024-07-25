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
          padding: '32px 0 32px 32px',
          borderRadius: '24px',
          height:"308px"
        }}
      >
        <Image src={comments} alt="deliver" width={386} />
        <Box sx={{ paddingRight: '32px', maxWidth: '355px', width: '100%',mt:"18px" }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '23.4px',
              letterSpacing: '1px',
              mt: '4px',
            }}
          >
            Community Success
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: '18px',
              fontWeight: '400',
              color: 'rgba(255, 255, 255, 0.8)',
              lineHeight: '27px',
              mt: '4px',
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

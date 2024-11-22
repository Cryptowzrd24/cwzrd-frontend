import { Box, Typography } from '@mui/material';
import React from 'react';

const CommunityChat = () => {
  return (
    <Box
      sx={{
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        borderRadius: '24px',
        width: '50%',
        height: '100%',
        backgroundImage: `url('/images/membership/communityChat.png')`,
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'column',
        py: '32px',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            color: 'rgba(17, 17, 17, 1)',
            lineHeight: '28px',
            fontWeight: '600',
          }}
        >
          Open Community Chats
        </Typography>
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'rgba(17, 17, 17, 0.8)',
            fontWeight: '400',
            lineHeight: '18px',
            textAlign: 'center',
            px: '40px',
            paddingBottom: '12px',
            fontFamily: 'Sf Pro Text',
          }}
        >
          Engage in open conversations with fellow traders. Our community chats
          foster collaboration, idea sharing, and collective growth.
        </Typography>
      </Box>
    </Box>
  );
};

export default CommunityChat;

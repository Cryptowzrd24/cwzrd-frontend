import { Box, Typography } from '@mui/material';
import React from 'react';

import Person from '../../../../../public/icons/membership/person.svg';
import Share from '../../../../../public/icons/membership/share.svg';
import Chat from '../../../../../public/icons/membership/chat.svg';
import Group from '../../../../../public/icons/membership/group.svg';
import Analytics from '../../../../../public/icons/membership/analytics.svg';
import Image from 'next/image';

const CommunityChat = () => {
  return (
    <Box
      sx={{
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        borderRadius: '24px',
        width: '50%',
        height: '100%',
        background: 'rgba(31, 31, 31, 1)',
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
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '28px',
            fontWeight: '600',
          }}
        >
          Open Community Chats
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Image src={Person} alt="person icon" />
        </Box>
        <Image src={Share} alt="share icon" />
        <Box
          sx={{
            background: 'rgba(31,215,115,1)',
            padding: '21px',
            borderRadius: '50%',
            boxShadow:
              '0px 3.318px 92.907px 0px rgba(31, 215, 115, 0.40), 0px 3.318px 285.358px 0px rgba(31, 215, 115, 0.40)',
          }}
        >
          <Image src={Chat} alt="chat icon" />
        </Box>
        <Image src={Group} alt="group icon" />
        <Image src={Analytics} alt="analytics icon" />
      </Box>

      <Box>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.8)',
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

import { Box, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

import Members from '../../../../../public/images/membership/members.png';
import Map from '../../../../../public/images/membership/map2.svg';

const CommunityMember = () => {
  return (
    <Box
      sx={{
        boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
        borderRadius: '24px',
        width: '50%',
        height: '100%',
        backgroundImage:
          'linear-gradient(180deg, rgba(55, 97, 251, 1), rgba(55, 169, 251, 1))',
      }}
    >
      <Box
        sx={{
          mt: '30px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <Image src={Members} alt="Multiple Members" />
        <Typography
          sx={{
            fontSize: '20px',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '26px',
            fontWeight: '700',
            mt: '24px',
            mb: '4px',
          }}
        >
          10,700+ Members
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            color: 'rgba(255, 255, 255, 0.8)',
            fontWeight: '400',
            lineHeight: '18px',
            display: 'flex',
            textAlign: 'center',
            px: '40px',
            fontFamily: 'Sf Pro Text',
          }}
        >
          Join a thriving community of over 10,700 traders. Learn from others,
          share strategies, and grow together.
        </Typography>
      </Box>

      <Box sx={{ mt: '-36px', position: 'relative', aspectRatio: '1' }}>
        <Image
          src={Map}
          alt="Multiple Members"
          fill
          objectFit="contain"
          objectPosition="top"
        />
      </Box>
    </Box>
  );
};

export default CommunityMember;

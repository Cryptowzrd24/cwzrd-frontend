import React from 'react';
import join from '../../../../../public/images/platform/Component.png';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowRight from '../../../../../public/icons/News-Letter/arrowRight';
const MemberCard = () => {
  return (
    <>
      <Box
        sx={{
          padding: '20px 48px',
          borderRadius: '32px',
          backgroundImage:
            'linear-gradient(116.74deg, #634DFD -4.07%, #7E44F1 100.68%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
          <Image src={join} alt="join" width={64} />
          <Typography variant="h1" sx={{ color: 'rgba(255, 255, 255, 1)' }}>
            We are the largest trading community. Join Now?
          </Typography>
        </Box>
        <Box>
          <Typography
            variant="body1"
            sx={{
              fontSize: '24px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
            }}
          >
            Become a member
            <span style={{ marginTop: '8px', marginLeft: '4px' }}>
              <ArrowRight />
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MemberCard;

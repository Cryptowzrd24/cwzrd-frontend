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
          padding: '10px 36px',
          borderRadius: '24px',
          backgroundImage:
            'linear-gradient(116.74deg, #634DFD -4.07%, #7E44F1 100.68%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          boxSizing: 'border-box',

          '@media (max-width: 824px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
            padding: '16px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '15px',

            '@media (max-width: 824px)': {
              alignItems: 'flex-start',
              flexDirection: 'column',
            },
          }}
        >
          <Image src={join} alt="join" width={36} height={36} />
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '21.6px',
              fontFamily: 'Sf Pro Display',

              '@media (max-width: 768px)': {
                textAlign: 'center',
              },
            }}
          >
            We are the largest trading community. Join Now?
          </Typography>
        </Box>
        <Box>
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '23.4px',
              color: 'rgba(255, 255, 255, 1)',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              fontFamily: 'Sf Pro Display',
            }}
          >
            Become a member
            <span style={{ marginTop: '6px', marginLeft: '4px' }}>
              <ArrowRight />
            </span>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default MemberCard;

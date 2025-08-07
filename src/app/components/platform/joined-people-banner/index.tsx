import React from 'react';
import join from '../../../../../public/images/platform/Joined.png';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import ArrowRight from '../../../../../public/icons/News-Letter/arrowRight';
const JoinedPeople = () => {
  return (
    <>
      <Box
        sx={{
          borderRadius: '24px',
          backgroundImage:
            'linear-gradient(116.74deg, #634DFD -4.07%, #7E44F1 100.68%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          boxSizing: 'border-box',

          '@media (max-width: 830px)': {
            padding: '10px',
          },

          '@media (max-width: 768px)': {
            flexDirection: 'column',
            padding: '16px',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: '32px',

            '@media (max-width: 830px)': {
              gap: '16px',
            },

            '@media (max-width: 768px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Image src={join} alt="join" width={189} height={42} />
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '18px',
              lineHeight: '21.6px',
              fontFamily: 'Sf Pro Display',
              fontWeight: 700,
            }}
          >
            10,700+ people already joined us
          </Typography>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Typography
            sx={{
              fontSize: '18px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              lineHeight: '23.4px',
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

export default JoinedPeople;

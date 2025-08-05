import React from 'react';
import join from '../../../../../public/images/platform/Component.png';
import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import ArrowRight from '../../../../../public/icons/News-Letter/arrowRight';
const MemberCard = () => {
  const isSmallScreen = useMediaQuery('(min-width: 576px)');
  return (
    <>
      <Box
        sx={{
          // padding: '20px 48px',
          borderRadius: '24px',
          backgroundImage:
            'linear-gradient(116.74deg, #634DFD -4.07%, #7E44F1 100.68%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          boxSizing:'border-box',

          '@media (max-width: 824px)': {
            flexDirection: 'column',
          },

          '@media (max-width: 576px)': {
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

            '@media (max-width: 576px)': {
              alignItems: 'flex-start',
              flexDirection: 'column',
            },
          }}
        >
          <Image
            src={join}
            alt="join"
            width={36}
            height={36}
            style={
              isSmallScreen ? { paddingBlock: '10px', paddingLeft: '36px' } : {}
            }
          />
          <Typography
            sx={{
              color: 'rgba(255, 255, 255, 1)',
              fontSize: '18px',
              fontWeight: 600,
              lineHeight: '21.6px',
              fontFamily: 'Sf Pro Display',
            }}
          >
            We are the largest trading community. Join Now?
          </Typography>
        </Box>
        <Box
          sx={{
            paddingRight: '36px',
            '@media (max-width: 824px)': {
              paddingRight: '0px',
            },
          }}
        >
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

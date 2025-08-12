import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ChevronRightHead from '../../../../public/icons/chevronRightHead';

const MainMembershipBanner = ({
  isMainPage = false,
}: {
  isMainPage?: boolean;
}) => {
  return (
    <Box
      sx={{
        width: 'auto',
        height: '100px',
        padding: '16px 24px',
        borderRadius: '16px',
        boxShadow: ' 0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        backgroundImage: 'url(/images/membershipBg.png)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: '16px',
        '@media (max-width: 1024px)': {
          height: isMainPage ? '80px' : '100px',
          padding: isMainPage ? '12px 20px' : '16px 24px',
        },
        '@media (max-width: 768px)': {
          height: isMainPage ? '70px' : '100px',
          padding: isMainPage ? '10px 16px' : '16px 24px',
          gap: isMainPage ? '12px' : '16px',
        },
        '@media (max-width: 576px)': {
          height: isMainPage ? '60px' : '100px',
          padding: isMainPage ? '8px 12px' : '16px 24px',
          gap: isMainPage ? '8px' : '16px',
        },
      }}
    >
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: '700',
            color: '#FFF',
            lineHeight: '130%',
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            mb: '8px',
            '@media (max-width: 768px)': {
              fontSize: isMainPage ? '12px' : '14px',
              mb: isMainPage ? '4px' : '8px',
            },
            '@media (max-width: 576px)': {
              fontSize: isMainPage ? '10px' : '14px',
              mb: isMainPage ? '2px' : '8px',
            },
          }}
        >
          Benefit of Membership
        </Typography>
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#FFF',
            lineHeight: '120%',
            letterSpacing: '0.24px',
            background: 'linear-gradient(180deg, #FFF 0%, #D6D6D6 100%)',
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            '@media (max-width: 1024px)': {
              fontSize: isMainPage ? '20px' : '24px',
            },
            '@media (max-width: 768px)': {
              fontSize: isMainPage ? '16px' : '24px',
            },
            '@media (max-width: 576px)': {
              fontSize: isMainPage ? '14px' : '24px',
            },
          }}
        >
          Explore Benefits of Wizard Membership
        </Typography>
      </Box>
      <Box>
        <Button
          sx={{
            display: 'flex',
            padding: '8px 16px',
            justifyContent: 'center',
            alignItems: 'center',
            gap: '4px',
            borderRadius: '56px',
            background: '#FFF',

            '&:hover': {
              background: '#F0F0F0',
            },
            '@media (max-width: 768px)': {
              padding: isMainPage ? '6px 12px' : '8px 16px',
            },
            '@media (max-width: 576px)': {
              padding: isMainPage ? '4px 8px' : '8px 16px',
            },
          }}
        >
          <Typography
            sx={{
              color: '#111',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '130%',
              '@media (max-width: 768px)': {
                fontSize: isMainPage ? '14px' : '18px',
              },
              '@media (max-width: 576px)': {
                fontSize: isMainPage ? '12px' : '18px',
              },
            }}
          >
            Get Started
          </Typography>
          <ChevronRightHead />
        </Button>
      </Box>
    </Box>
  );
};

export default MainMembershipBanner;

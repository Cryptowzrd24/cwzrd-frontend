import { Box, Button, Typography } from '@mui/material';
import React from 'react';
import ChevronRightHead from '../../../../public/icons/chevronRightHead';

const MainMembershipBanner = () => {
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
          }}
        >
          <Typography
            sx={{
              color: '#111',
              fontSize: '18px',
              fontWeight: '500',
              lineHeight: '130%',
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

import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import TradingDashboard from './TradingDashboard';

const CommunityHero = () => {
  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #2D1B69 0%, #1A103F 100%)',
        padding: { xs: '60px 0', sm: '70px 0', md: '80px 0' },
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          opacity: 0.2,
          background: `
            linear-gradient(180deg, #7E44F1 0%, #7E44F1 56%, #7E44F1 100%),
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 40px,
              rgba(17, 17, 17, 0.05) 40px,
              rgba(17, 17, 17, 0.05) 41px
            ),
            repeating-linear-gradient(
              90deg,
              transparent,
              transparent 40px,
              rgba(17, 17, 17, 0.05) 40px,
              rgba(17, 17, 17, 0.05) 41px
            )
          `,
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: { xs: '24px', sm: '32px', md: '40px' },
            position: 'relative',
            zIndex: 2,
          }}
        >
          {/* Main Heading */}
          <Typography
            variant="h1"
            sx={{
              fontSize: { xs: '28px', sm: '32px', md: '40px', lg: '48px', xl: '56px' },
              fontWeight: 700,
              lineHeight: 1.2,
              color: 'white',
              maxWidth: { xs: '100%', sm: '600px', md: '700px', lg: '800px' },
              margin: '0 auto',
            }}
          >
            Join the Cryptowzrd Community Today!
          </Typography>
          
          {/* Description */}
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: '14px', sm: '16px', md: '18px' },
              lineHeight: 1.6,
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: { xs: '100%', sm: '500px', md: '600px' },
              margin: '0 auto',
            }}
          >
            Unlock the door to trading success and become a part of the Cryptowzrd community! 
            Gain access to our comprehensive educational resources, powerful trading tools, and supportive community.
          </Typography>
          
          {/* Call to Action Button */}
          <Button
            variant="contained"
            sx={{
              background: 'white',
              color: '#2D1B69',
              padding: { xs: '12px 24px', sm: '14px 28px', md: '16px 32px' },
              fontSize: { xs: '16px', sm: '17px', md: '18px' },
              fontWeight: 600,
              borderRadius: '12px',
              textTransform: 'none',
              boxShadow: '0px 8px 24px rgba(255, 255, 255, 0.2)',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0px 12px 32px rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            Get Started &gt;
          </Button>

          {/* Trading Dashboard Mockup */}
          <Box
            sx={{
              marginTop: { xs: '24px', sm: '32px', md: '40px' },
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              maxWidth: { xs: '100%', sm: '500px', md: '600px', lg: '700px' },
            }}
          >
            <TradingDashboard />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunityHero;

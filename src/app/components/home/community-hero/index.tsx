import { Box, Button, Container, Typography } from '@mui/material';
import React from 'react';
import communityChart from '../../../../../public/images/home/join-community/community_chart.png';
import Image from 'next/image';
import { ArrowRight } from '../../../../../public/icons/arrowRight';
import NoOfUser from './NoOfUsers';
import CourseBox from './CourseBox';

const CommunityHero = () => {
  return (
    <Box
      sx={{
        background: '#14003B',
        // backgroundImage: 'url(/images/home/join-community/home_community_background_Vector.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'bottom',
        backgroundRepeat: 'no-repeat',
        backgroundImage: `
                    linear-gradient(
                    to bottom,
                    rgba(20, 0, 59, 0.95) 0%,
                    rgba(20, 0, 59, 0.85) 50%,
                    rgba(20, 0, 59, 0.7) 100%
                    ),
                    url(/images/home/join-community/home_community_background_Vector.png)
                `,
        padding: { xs: '60px 0 0', sm: '70px 0 0', md: '80px 0 0' },
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
          background: '#14003B',
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
              fontSize: {
                xs: '28px',
                sm: '32px',
                md: '40px',
                lg: '48px',
                xl: '56px',
              },
              fontWeight: 500,
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
              fontSize: { xs: '14px', sm: '16px', md: '16px' },
              lineHeight: '24px',
              color: 'rgba(255, 255, 255, 0.9)',
              maxWidth: { xs: '100%', sm: '500px', md: '600px' },
              margin: '0 auto',
            }}
          >
            Unlock the door to trading success and become a part of the
            Cryptowzrd community! Gain access to our comprehensive educational
            resources, powerful trading tools, and supportive community.
          </Typography>

          {/* Call to Action Button */}
          <Button
            variant="contained"
            sx={{
              background: 'white',
              color: '#2D1B69',
              padding: { xs: '10px 16px', sm: '14px 22px', md: '16px 24px' },
              fontSize: { xs: '12px', sm: '18px' },
              fontWeight: 500,
              borderRadius: '50px',
              textTransform: 'none',
              boxShadow: '0px 8px 24px rgba(255, 255, 255, 0.2)',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.95)',
                boxShadow: '0px 12px 32px rgba(255, 255, 255, 0.3)',
              },
            }}
          >
            <span>Get Started</span>
            <ArrowRight fill="black" width={18} height={18} />
          </Button>

          {/* Trading Dashboard Mockup */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              width: '100%',
              maxWidth: '75%',
              position: 'relative',
              backgrounColor: 'red',
            }}
          >
            <Image
              src={communityChart}
              alt="image"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <Box
              sx={{
                display: { xs: 'none', md: 'inline-block' },
                position: 'absolute',
                top: '60%',
                left: '-20%',
              }}
            >
              <NoOfUser />
            </Box>
            <Box
              sx={{
                display: { xs: 'none', md: 'inline-block' },
                position: 'absolute',
                top: '30%',
                right: '-15%',
              }}
            >
              <CourseBox />
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default CommunityHero;

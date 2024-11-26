import React from 'react';
import LogoWhite from '../../../../public/icons/logoWhite';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';
import './index.scss';

function Footer() {
  return (
    <Box
      id="footer"
      sx={{
        padding: '80px 0px 48px 0px',
        backgroundImage:
          'linear-gradient(to bottom, rgba(99, 77, 253, 1), rgba(126, 68, 241, 1))',
      }}
    >
      <Container
        maxWidth="xl"
        style={{
          maxWidth: 'calc(972px + 160px)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 auto',
            paddingBottom: '40px',
          }}
          id="footer-container"
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: '500',
              color: '#fff',
              maxWidth: '48%',
              lineHeight: '1.1',
              fontSize: '42px',
            }}
          >
            Join the Cryptowzrd Community Today!
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '40%' }}
          >
            Unlock the door to trading success and become a part of the
            Cryptowzrd community! Gain access to our comprehensive educational
            resources, powerful trading tools, and supportive community.
          </Typography>
        </div>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '40px',
            borderTop: '1px solid white',
          }}
        >
          <Link href="/">
            <LogoWhite />
          </Link>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

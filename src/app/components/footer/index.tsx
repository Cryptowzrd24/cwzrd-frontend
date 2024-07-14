import React from 'react';
import LogoWhite from '../../../../public/icons/logoWhite';
import { FooterData } from './data';
import Link from 'next/link';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
  return (
    <Box
      sx={{
        padding: '80px 75px 48px 75px',
        backgroundImage:
          'linear-gradient(to bottom, rgba(99, 77, 253, 1), rgba(126, 68, 241, 1))',
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            margin: '0 auto',
            paddingBottom: '40px',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              fontWeight: '500',
              color: '#fff',
              maxWidth: '646px',
              lineHeight: '70.4px',
              fontSize: '64px',
            }}
          >
            Join the Cryptowzrd Community Today!
          </Typography>
          <Typography
            variant="body1"
            sx={{ color: 'rgba(255, 255, 255, 0.8)', maxWidth: '525px' }}
          >
            Unlock the door to trading success and become a part of the
            Cryptowzrd community! Gain access to our comprehensive educational
            resources, powerful trading tools, and supportive community.
          </Typography>
        </Box>
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
          <Box sx={{ display: 'flex', gap: '32px' }}>
            {FooterData.map((item) => (
              <Link
                key={item.id}
                href="#"
                style={{
                  color: 'rgba(255, 255, 255, 1)',
                  cursor: 'pointer',
                  textDecoration: 'none',
                  textDecorationColor: 'none',
                }}
              >
                <Typography
                  variant="h5"
                  sx={{ fontWeight: '500', color: 'rgba(255, 255, 255, 1)' }}
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Footer;

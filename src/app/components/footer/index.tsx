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
        background:
          ' linear-gradient(117deg, #634DFD -4.07%, #7E44F1 100.68%), #EDF0FF',
        // backgroundImage:
        //   'linear-gradient(to bottom, rgba(99, 77, 253, 1), rgba(126, 68, 241, 1))',
        '@media (max-width: 1280px)': {
          padding: '40px 37.5px 24px 37.5px',
        },
        '@media (max-width: 978px)': {
          padding: '40px 0',
        },
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
            gap: '6px',

            '@media (max-width: 978px)': {
              paddingBottom: '20px',
            },

            '@media (max-width: 880px)': {
              flexDirection: 'column',
              gap: '32px',
            },
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
              '@media (max-width: 1360px)': {
                fontSize: '48px',
                lineHeight: '50.4px',
              },

              '@media (max-width: 1200px)': {
                fontSize: '32px',
                lineHeight: '38.4px',
              },
            }}
          >
            Join the Cryptowzrd Community Today!
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: 'rgba(255, 255, 255, 0.8)',
              maxWidth: '525px',
              '@media (max-width: 1280px)': {
                maxWidth: 'auto',
              },

              '@media (max-width: 576px)': {
                fontSize: '14px',
                fontWeight: 400,
                lineHeight: '150%',
              },
            }}
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
            '@media (max-width: 978px)': {
              paddingTop: '20px',
            },

            '@media (max-width: 880px)': {
              flexDirection: 'column',
              gap: '24px',
            },

            '@media (max-width: 576px)': {
              alignItems: 'flex-start',
            },
          }}
        >
          <Link href="/">
            <LogoWhite />
          </Link>
          <Box
            sx={{
              display: 'flex',
              gap: '32px',
              flexWrap: 'wrap',
              '@media (max-width: 880px)': {
                rowGap: '6px',
                columnGap: '24px',
              },
            }}
          >
            {FooterData.map((item) => (
              <Link
                key={item.id}
                href={
                  item.title === 'Market'
                    ? '/market/coin'
                    : `/${item.title.toLowerCase()}`
                }
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

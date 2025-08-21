import { Box } from '@mui/material';
import React from 'react';
import HeroContent from './heroContent';
import Hero from '../hero-section/hero';
import NewsLetterBanner from '../banners/newsLetterBanner';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import MemberShipBanner from '../banners/memberShipBanner';
import Table from '@/app/components/spotlight/table';
import Stats from '../stats';

const Spotlight = () => {
  return (
    <Box
      sx={{
        background: 'white',
        width: '100%',
        boxSizing: 'border-box',
        height: '100%',
      }}
    >
      <Box
        sx={{
          margin: '0 auto',
          overflow: 'hidden',
          width: {
            xs: '100%',
            sm: '95%',
            md: '900px',
            lg: '1150px',
            xl: '1290px',
          },
          boxSizing: 'border-box',
          padding: { xs: '12px', md: '12px', lg: '14px', xl: '16px' },
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '24px', md: '48px' },
        }}
      >
        <Box
          id="hero"
          sx={{
            width: '100%',
            display: 'flex',
            gap: { xs: '8px', md: '8px' },
            flexDirection: { xs: 'column' },
          }}
        >
          <Hero />
          <HeroContent />
          <Stats />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Table />
        </Box>
        <Box sx={{ width: '100%' }}>
          <NewsLetterBanner />
        </Box>
        <Box sx={{ width: '100%' }}>
          <NewsLetter />
        </Box>
        <Box sx={{ width: '100%' }}>
          <Technicals />
        </Box>
        <Box sx={{ width: '100%' }}>
          <MemberShipBanner />
        </Box>
      </Box>
    </Box>
  );
};

export default Spotlight;

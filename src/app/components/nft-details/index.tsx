import React from 'react';
import HeroSection from './heroSection';
import { Box } from '@mui/material';
import Sales from './sales';
import Market from './market';
import NftNavbar from './nftNavbar';
import NewsLetter from '../news-letter';
import MemberShipBanner from '../banners/memberShipBanner';
import Activity from './activity';
import PriceSales from './price-sales';
import GraphLayout from './graph/graphLayout';
// import Info from './info';
// import GraphCard from './graph/graphCard';
// import { cardData } from '../collections/data';

const NftDetails = ({ serverNftData }: any) => {
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
        <Box id="hero" sx={{ width: '100%' }}>
          <HeroSection serverNftData={serverNftData} />
        </Box>
        <Box id="overview" sx={{ width: '100%' }}>
          <NftNavbar />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '30px',
            width: '100%',
            alignItems: 'stretch',
            flexDirection: { xs: 'column', md: 'row' },
            boxSizing: 'border-box',
          }}
        >
          <Box
            sx={{
              flex: { xs: 3, md: 3 }, // Equal width distribution
              display: 'flex',
              flexDirection: 'column',
              borderRadius: '24px',
              overflow: 'hidden',
              boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
            }}
          >
            <GraphLayout coinSymbol={'BTC'} />
          </Box>
          <Box
            sx={{
              flex: 1, // Equal width distribution
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <PriceSales serverNftData={serverNftData} />
          </Box>
        </Box>
        {/* <Box
          sx={{
            position: 'absolute',
            top: '770px',
            left: '215px',
          }}
        >
          {cardData.map((card) => (
            <Box key={card.id} sx={{ px: 1 }}>
              <GraphCard serverNftData={serverNftData} {...card} />
            </Box>
          ))}
        </Box> */}
        {/* <Box id="about" sx={{ width: '100%' }}>
          <Info />
        </Box> */}
        <Box id="news" sx={{ width: '100%' }}>
          <NewsLetter />
        </Box>
        <Box id="sales" sx={{ width: '100%' }}>
          <Sales serverNftData={serverNftData} />
        </Box>
        <Box id="market" sx={{ width: '100%' }}>
          <Market serverNftData={serverNftData} />
        </Box>
        <Box id="activity" sx={{ width: '100%' }}>
          <Activity serverNftData={serverNftData} />
        </Box>
        <Box id="membership-banner" sx={{ width: '100%' }}>
          <MemberShipBanner />
        </Box>
      </Box>
    </Box>
  );
};

export default NftDetails;

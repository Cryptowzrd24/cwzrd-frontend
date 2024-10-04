import React from 'react';
import HeroSection from './heroSection';
import { Box, Container } from '@mui/material';
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
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box id="hero" sx={{ mt: '48px' }}>
          <HeroSection serverNftData={serverNftData} />
        </Box>
        <Box id="overview" sx={{ mt: '16px', mb: '16px' }}>
          <NftNavbar />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '30px',
            height: '718px',
          }}
        >
          <GraphLayout coinSymbol={'BTC'} />
          <PriceSales serverNftData={serverNftData} />
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
        {/* <Box id="about" sx={{ mt: '48px' }}>
          <Info />
        </Box> */}
        <Box id="news" sx={{ mt: '48px' }}>
          <NewsLetter />
        </Box>
        <Box id="sales" sx={{ mt: '48px' }}>
          <Sales serverNftData={serverNftData} />
        </Box>
        <Box id="market" sx={{ mt: '48px' }}>
          <Market serverNftData={serverNftData} />
        </Box>
        <Box id="activity" sx={{ mt: '48px' }}>
          <Activity serverNftData={serverNftData} />
        </Box>
        <Box sx={{ mt: '48px', mb: '48px' }}>
          <MemberShipBanner isNftDetail={true} />
        </Box>
      </Container>
    </>
  );
};

export default NftDetails;

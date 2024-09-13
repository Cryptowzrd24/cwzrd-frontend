import React from 'react';
import HeroSection from './heroSection';
import { Box, Container } from '@mui/material';
import Info from './info';
import Sales from './sales';
import Market from './market';
import NftNavbar from './nftNavbar';
import NewsLetter from '../news-letter';
import MemberShipBanner from '../banners/memberShipBanner';
import Activity from './activity';
import PriceSales from './price-sales';
import GraphLayout from './graph/graphLayout';
import GraphCard from './graph/graphCard';
import Verified from '../../../../public/icons/verified';

const NftDetails = () => {
  const cardData = [
    {
      id: '1',
      image: '/images/collections/Rectangle 40918.png',
      subtitle: 'zafGod.eth',
      icon: <Verified />,
      title: 'Dragon Street #47',
      status: 'Status',
      statusAction: 'Complete',
      price: 'Price',
      amount: '0.000069 ETH',
    },
  ];
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box id="hero" sx={{ mt: '48px' }}>
          <HeroSection />
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
          <PriceSales />
        </Box>
        <Box
          sx={{
            position: 'absolute',
            top: '770px',
            left: '215px',
          }}
        >
          {cardData.map((card) => (
            <Box key={card.id} sx={{ px: 1 }}>
              <GraphCard {...card} />
            </Box>
          ))}
        </Box>
        <Box id="about" sx={{ mt: '48px' }}>
          <Info />
        </Box>
        <Box id="news" sx={{ mt: '48px' }}>
          <NewsLetter />
        </Box>
        <Box id="sales" sx={{ mt: '48px' }}>
          <Sales />
        </Box>
        <Box id="market" sx={{ mt: '48px' }}>
          <Market />
        </Box>
        <Box id="activity" sx={{ mt: '48px' }}>
          <Activity />
        </Box>
        <Box sx={{ mt: '48px', mb: '48px' }}>
          <MemberShipBanner isNftDetail={true} />
        </Box>
      </Container>
    </>
  );
};

export default NftDetails;

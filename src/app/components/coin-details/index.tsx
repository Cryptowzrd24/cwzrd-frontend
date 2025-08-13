import { Box } from '@mui/material';
import React from 'react';
import CoinHeroSection from './coinHeroSection';
import CoinNavbar from './coinNavbar';
import CoinInfo from './coinInfo';
import CoinMarket from './coin-market';
import CoinAnalytics from './coin-analytics';
import BitcoinAnalytics from './bitcoin-analytics';
import Converter from './converter';
import NewsLetter from '../news-letter';
import Technicals from '../technicals';
import NewsLetterBanner from '../banners/newsLetterBanner';
import MemberShipBanner from '../banners/memberShipBanner';
import GraphLayout from './graph-layout';
// import { CoinDetailsTypes } from '@/app/models/coin-details';
import CoinDetailsCard from './coin-details-cards';
import Script from 'next/script';

const CoinDetails = ({ serverCoindata }: any) => {
  const coinName = serverCoindata?.name;
  const coinId = serverCoindata?.coin_id;
  const coinSymbol = serverCoindata?.about_coin?.symbol;

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
          gap: { xs: '48px', md: '48px' },
        }}
      >
        <Box id="hero" sx={{ width: '100%' }}>
          <CoinHeroSection coinDetails={serverCoindata} />
        </Box>
        <Box id="overview" sx={{ width: '100%' }}>
          <CoinNavbar />
        </Box>
        <Box
          id="details"
          sx={{
            display: 'flex',
            gap: '30px',
            width: '100%',
            alignItems: 'stretch',
            flexDirection: { xs: 'column', md: 'row' },
          }}
        >
          <Box
            sx={{
              flex: { xs: 3, md: 3 }, // Equal width distribution
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <GraphLayout coinSymbol={coinSymbol} />
          </Box>
          <Box
            sx={{
              flex: 1, // Equal width distribution
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            <CoinDetailsCard coinDetails={serverCoindata} />
          </Box>
        </Box>
        <Box id="about" sx={{ width: '100%' }}>
          <CoinInfo coinDetails={serverCoindata} />
        </Box>
        <Box id="news" sx={{ width: '100%' }}>
          <NewsLetter />
        </Box>
        <Box id="market" sx={{ width: '100%' }}>
          <CoinMarket coinName={coinName} />
        </Box>
        <Box id="technicals" sx={{ width: '100%' }}>
          <Technicals />
        </Box>
        <Box id="converter" sx={{ width: '100%' }}>
          <Converter coinDetails={serverCoindata} />
        </Box>
        <Box id="newsletter-banner" sx={{ width: '100%' }}>
          <NewsLetterBanner />
        </Box>
        <Box id="analytics" sx={{ width: '100%' }}>
          <BitcoinAnalytics name={coinName} />
        </Box>
        <Box id="historical" sx={{ width: '100%' }}>
          <CoinAnalytics coinId={coinId} />
        </Box>
        <Box id="membership-banner" sx={{ width: '100%' }}>
          <MemberShipBanner />
        </Box>
      </Box>
      <Script src="/coin_details_banner_websocket.js" />
    </Box>
  );
};

export default CoinDetails;

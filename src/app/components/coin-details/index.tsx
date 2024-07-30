'use client';
import { Box, Container } from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
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
import { useFetchCoinDetailsDataQuery } from '@/app/redux/coin-details';
import { usePathname } from 'next/navigation';
import { CoinDetailsTypes } from '@/app/models/coin-details';
import CoinDetailsCard from './coin-details-cards';

const CoinDetails = () => {
  const pathname = usePathname();
  const [coinDetails, setCoinDetails] = useState<CoinDetailsTypes | null>(null);
  const chartRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const id = pathname.split('/').pop();
  const { data } = useFetchCoinDetailsDataQuery({ coinId: id });
  const coinName = coinDetails?.name;
  const handleFullScreen = () => {
    if (chartRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullScreen(false);
      } else {
        chartRef.current.requestFullscreen();
        setIsFullScreen(true);
      }
    }
  };

  useEffect(() => {
    if (data) {
      setCoinDetails(data.results[0]);
    }
  }, [data]);
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box id="hero" sx={{ mt: '48px', mb: '16px' }}>
          <CoinHeroSection coinDetails={coinDetails} />
        </Box>
        <Box id="overview" sx={{ mb: '16px' }}>
          <CoinNavbar />
        </Box>
        <Box id="details" sx={{ display: 'flex', flexDirection: 'row', mb: '48px' }}>
          <Box>
            <GraphLayout
              chartRef={chartRef}
              isFullScreen={isFullScreen}
              handleFullScreen={handleFullScreen}
            />
          </Box>
          <Box sx={{ ml: '30px' }}>
            <CoinDetailsCard coinDetails={coinDetails} />
          </Box>
        </Box>
        <Box id="about"  sx={{ mb: '48px' }}>
          <CoinInfo coinDetails={coinDetails} />
        </Box>
        <Box id="news" sx={{ mb: '48px' }}>
          <NewsLetter />
        </Box>
        <Box id="market" sx={{ mb: '48px' }}>
          <CoinMarket coinName={coinName} />
        </Box>
        <Box id="technicals" sx={{ mb: '48px' }}>
          <Technicals />
        </Box>
        <Box  id="converter" sx={{ mb: '48px' }}>
          <Converter coinDetails={coinDetails} />
        </Box>
        <Box id="newsletter-banner" sx={{ mb: '48px' }}>
          <NewsLetterBanner />
        </Box>
        <Box id="analytics" sx={{ mb: '48px' }}>
          <BitcoinAnalytics />
        </Box>
        <Box id="historical" sx={{ mb: '48px' }}>
          <CoinAnalytics coinId={id} />
        </Box>
        <Box id="membership-banner" sx={{ mb: '48px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default CoinDetails;

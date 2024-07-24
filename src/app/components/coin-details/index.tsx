'use client';
import { Box, Container } from '@mui/material';
import React, { useEffect, useState } from 'react';
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

const CoinDetails = () => {
  const pathname = usePathname();
  const [coinDetails, setCoinDetails] = useState<CoinDetailsTypes | null>(null);
  const id = pathname.split('/').pop();
  const { data } = useFetchCoinDetailsDataQuery({ coinId: id });
  useEffect(() => {
    if (data) {
      setCoinDetails(data.results[0]);
    }
  }, [data]);
  return (
    <>
      <Container maxWidth="xl" sx={{ overflow: 'hidden' }}>
        <Box sx={{ mt: '48px', mb: '16px' }}>
          <CoinHeroSection coinDetails={coinDetails} />
        </Box>
        <Box sx={{ mb: '16px' }}>
          <CoinNavbar />
        </Box>
        <Box sx={{ mb: '16px' }}>
          <GraphLayout />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <CoinInfo />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <NewsLetter />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <CoinMarket />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <Technicals />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <Converter />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <NewsLetterBanner />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <BitcoinAnalytics />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <CoinAnalytics />
        </Box>
        <Box sx={{ mb: '48px' }}>
          <MemberShipBanner />
        </Box>
      </Container>
    </>
  );
};

export default CoinDetails;

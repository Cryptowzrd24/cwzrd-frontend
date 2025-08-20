'use client';
import { Box, useMediaQuery, styled } from '@mui/material';
import React, { useEffect } from 'react';
import PlatformHeader from './header';
import TradingPlatform from './trading';
import Feature from './feature';
import PlatformCards from './platform-cards';
import TradeOpportunities from './trade-opportunities';
import MemberShipBannerLarge from '../banners/memberShipBanner';
import RealWins from './real-wins';
import Education from './education';
import ExaminationPart from './examination';
import Coverage from './coverage';
import Portfolio from './portfolio-investing';
import JoinedPeople from './joined-people-banner';
import PersonalCalendar from './personal-calendar';
import RealTimeMarketData from './real-time-market-data';
import CoverageCards from './coverage-cards';
import Image from 'next/image';
import FrequentlyAskedQuestion from './frequently-question';
import ProgressCards from './progress-cards';
// import header from '../../../../public/images/platform/header.png';
import platformHeader from '../../../../public/images/platform/platformHeaderImg.png';

// import Macbook from '../../../../public/images/platform/MacBook.png';
import forexImg from '../../../../public/images/platform/forexImg.png';

import Forex from './forex-cryptocurrencies';
import MemberShipBanner from './membership-banner';
import BecomeMember from './become-member';

// Styled components
const CenteredBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '24px',
});

const MainLayoutBox = styled(Box)({
  display: 'flex',
  width: '970px',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '100px',
  overflow: 'hidden',
  marginX: 'auto',
  '@media (max-width: 1024px)': {
    width: '100%',
    gap: '24px',
  },
});

const SubLayoutBox = styled(MainLayoutBox)({
  width: '1010px',

  '@media (max-width: 1024px)': {
    width: '100%',
    gap: '24px',
    paddingInline: {xs:"0px",md:'16px'},
  },
});

const ForexLayoutBox = styled(Box)({
  overflow: 'hidden',
  display: 'flex',
  justifyContent: 'center',
  boxSizing: 'border-box',
  width: '100%',
  margin: '0 auto',
  paddingInline: '16px',
  '@media (max-width: 1024px)': {
    display: 'flex',
    justifyContent: 'center',
    paddingInline: '40px',
    width: '100%',
    boxSizing: 'border-box',
  },
  '@media (max-width: 599px)': {
    paddingInline: '20px',
  },
  '@media (max-width: 576px)': {
    paddingInline: '5px',
  },
});

const RootLayoutBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '100px',
  width: '100%',
  margin: '0 auto',
  boxSizing: 'border-box',
  paddingBlock: '24px',
  '@media (max-width: 1024px)': {
    width: '100%',
    paddingInline: '16px',
    gap: '24px',
  },

  '@media (max-width: 576px)': {
    gap: '24px',
  },
});

const Platform = () => {
  const isTabView = useMediaQuery('(min-width: 978px)');
  const isDesktopView = useMediaQuery('(min-width: 1025px)');
  useEffect(() => {
    document.body.style.backgroundColor = '#f5f5f7';

    return () => {
      document.body.style.backgroundColor = '';
    };
  }, []);
  return (
    <RootLayoutBox>
      <CenteredBox
        sx={{
          marginTop: { xs: "20px", lg: '61px' },
        }}
      >
        <PlatformHeader />
        <Image
          src={platformHeader}
          alt="header"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
        <BecomeMember />
      </CenteredBox>
      <MainLayoutBox>
        <CenteredBox>
          <TradeOpportunities />
          <RealWins />
        </CenteredBox>
        <CenteredBox>
          <TradingPlatform />
          <PlatformCards />
          <MemberShipBanner />
        </CenteredBox>
        <CenteredBox>
          <Feature />
        </CenteredBox>
        <CenteredBox>
          <Education />
          <ExaminationPart />
          <Coverage />
          <Portfolio />
          <ProgressCards />
          <JoinedPeople />
        </CenteredBox>
      </MainLayoutBox>
      <ForexLayoutBox>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '56px',

            '@media (max-width: 1024px)': {
              gap: '28px',
              width: '100%',
              background: 'white',
              borderRadius: '24px',
              flexDirection: 'column',
              padding: '36px 0 16px 16px',
            },
            '@media (max-width: 576px)': {
              padding: '24px 0 24px 16px',
            },
          }}
        >
          <Forex />
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              width: '100%',
            }}
          >
            <Image
              src={forexImg}
              alt="macbook"
              style={{
                width: isDesktopView ? '45%' : '90%',
                height: 'auto',
                flex: isDesktopView ? 1 : 0,
              }}
            />
          </Box>
        </Box>
      </ForexLayoutBox>
      <MainLayoutBox>
        <CenteredBox>
          <PersonalCalendar />
          {isTabView && <RealTimeMarketData />}
          <CoverageCards />
        </CenteredBox>
        <FrequentlyAskedQuestion />
      </MainLayoutBox>
      <SubLayoutBox>
        <MemberShipBannerLarge />
      </SubLayoutBox>
    </RootLayoutBox>
  );
};

export default Platform;

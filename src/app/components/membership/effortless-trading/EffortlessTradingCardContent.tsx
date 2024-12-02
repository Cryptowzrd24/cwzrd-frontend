'use client';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowLeftDark from '../../../../../public/icons/collections/arrowLeftDark';
import ArrowRightDark from '../../../../../public/icons/collections/arrowRightDark';
import { Box } from '@mui/material';
import PrivateCommunityCard from './PrivateCommunityCard';
import DailyTradeCard from './DailyTradeCard';
import SpotTradeCard from './SpotTradeCard';
import DayTradeCard from './DayTradeCard';
import MarketAnalysisCard from './MarketAnalysisCard';
import CryptoSecurityCard from './CryptoSecurityCard';
import TradeManagementCard from './TradeManagementCard';

const EffortlessTradingCardContent: React.FC = () => {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    // slidesToScroll: 1,
    arrows: false,
    touchMove: true,
    swipe: true,
    variableWidth: true,
    draggable: true,
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: '8px',
          overflowX: 'hidden',
          mb: '16px',
        }}
      >
        <Slider className="technicals-slick" ref={sliderRef} {...settings}>
          <PrivateCommunityCard />
          <DailyTradeCard />
          <SpotTradeCard />
          <DayTradeCard />
          <MarketAnalysisCard />
          <TradeManagementCard />
          <CryptoSecurityCard />
        </Slider>
      </Box>

      <Box
        sx={{
          display: 'flex',
          maxWidth: '104px',
          width: '100%',
          gap: '8px',
          margin: '0 75px 0 auto',
          '@media (max-width:855px)': {
            margin: '0 25px 0 auto',
          },
          '@media (max-width:660px)': {
            margin: '0 16px 0 auto',
          },
        }}
      >
        <Box
          onClick={handlePrev}
          sx={{
            cursor: 'pointer',
            background: 'rgba(17, 17, 17, 0.05)',
            borderRadius: '56px',
            padding: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              background: 'rgba(17, 17, 17, 0.10)',
            },
          }}
        >
          <ArrowLeftDark color="rgba(17, 17, 17, 1)" />
        </Box>
        <Box
          onClick={handleNext}
          sx={{
            cursor: 'pointer',
            background: 'rgba(17, 17, 17, 0.05)',
            borderRadius: '56px',
            padding: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              background: 'rgba(17, 17, 17, 0.10)',
            },
          }}
        >
          <ArrowRightDark color="rgba(17, 17, 17, 1)" />
        </Box>
      </Box>
    </>
  );
};

export default EffortlessTradingCardContent;

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
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };

  return (
    <Box
      style={{
        position: 'relative',
        width: '100%',
        display: 'flex',
        gap: '8px',
      }}
    >
      <Slider className="technicals-slick" ref={sliderRef} {...settings}>
        <PrivateCommunityCard />
        <DailyTradeCard />
        <SpotTradeCard />
        <DayTradeCard />
        <MarketAnalysisCard />
        <CryptoSecurityCard />
        <TradeManagementCard />
      </Slider>
      <Box
        style={{
          position: 'absolute',
          bottom: '-70px',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          width: '48px',
          gap: '8px',
          right: '75px',
        }}
      >
        <Box
          onClick={handlePrev}
          sx={{
            cursor: 'pointer',
            background: 'rgba(255, 255, 255, 0.10)',
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
          <ArrowLeftDark color="rgba(255, 255, 255, 1)" />
        </Box>
        <Box
          onClick={handleNext}
          sx={{
            cursor: 'pointer',
            background: 'rgba(255, 255, 255, 0.10)',
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
          <ArrowRightDark color="rgba(255, 255, 255, 1)" />
        </Box>
      </Box>
    </Box>
  );
};

export default EffortlessTradingCardContent;

'use client';
import React, { useRef, useState } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Box, Typography, useMediaQuery, useTheme } from '@mui/material';
import ArrowLeftDark from '../../../../../public/icons/collections/arrowLeftDark';
import ArrowRightDark from '../../../../../public/icons/collections/arrowRightDark';

import PrivateCommunity from './PrivateCommunity';
import DailyTradeSignals from './DailyTradeSignals';
import SpotTradeSignals from './SpotTradeSignals';
import DayTradeSetups from './DayTradeSetups';
import DailyModeSimplified from './DailyModeSimplified';
import CryptoSecurityEducation from './CryptoSecurityEducation';
import PortfolioInvesting from './PortfolioInvesting';
import TradeManagement from './TradeManagement';
import Header from './Header';

const WzrdMembershipBenefits = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md'));

  const cardsList = [
    <PrivateCommunity key="private-community" />,
    <DailyTradeSignals key="daily-trade-signals" />,
    <SpotTradeSignals key="spot-trade-signals" />,
    <DayTradeSetups key="day-trade-setups" />,
    <DailyModeSimplified key="daily-mode-simplified" />,
    <PortfolioInvesting key="portfolio-investing" />,
    <TradeManagement key="trade-management" />,
    <CryptoSecurityEducation key="crypto-security-education" />,
  ];

  const totalSlides = cardsList.length;

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 3,
    slidesToScroll: 1,
    arrows: false,
    afterChange: (current: any) => setCurrentSlide(current),
    variableWidth: false,
    centerMode: false,
    dots: false,
    responsive: [
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  const handlePrev = () => sliderRef.current?.slickPrev();
  const handleNext = () => sliderRef.current?.slickNext();

  return (
    <>
      <Box sx={{ position: 'relative', width: '100%', height: 'auto' }}>
        <Header />
      </Box>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          height: 'auto',
          marginBottom: '60px',
        }}
      >
        <Slider ref={sliderRef} {...settings}>
          {cardsList.map((card, index) => (
            <Box key={index} sx={{ padding:"0 2px", overflow:"hidden", width:'100%' }}>
              {card}
            </Box>
          ))}
        </Slider>

        {/* Arrows */}
        <Box
          sx={{
            position: 'absolute',
            bottom: { xs: '-64px', sm: '-60px' },
            right: { xs: '1%', lg: '5%' },
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '8px',
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
              '&:hover': { background: 'rgba(17, 17, 17, 0.15)' },
            }}
          >
            <ArrowLeftDark />
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
              '&:hover': { background: 'rgba(17, 17, 17, 0.15)' },
            }}
          >
            <ArrowRightDark />
          </Box>
        </Box>

        {/* Slide Counter */}
        {/* {!isMobile && ( */}
        <Typography
          variant="body2"
          sx={{
            position: 'absolute',
            left: 20,
            bottom: '-55px',
            color: 'rgba(17, 17, 17, 0.4)',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18.2px',
          }}
        >
          {`${currentSlide + 1}/${totalSlides}`}
        </Typography>
        {/* )} */}
      </Box>
    </>
  );
};

export default WzrdMembershipBenefits;

'use client';
import React from 'react';
import { Box, IconButton, useMediaQuery, Typography } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';

import NewsCard from '../../financial-news-card/newsCard';
import FinancialCardCarouselSec from './card';
import MiddleAnalysisCard from './middle-analysis-card';
import FinancialNewsCarousel from '../../financial-news-carousel';

import usaIcon from '../../../../../../public/images/technicals-page/usaIcon.png';
import ausIcon from '../../../../../../public/images/technicals-page/ausIcon.png';
import chainLinkImg from '../../../../../../public/images/coin-details/chain-link.png';

const PreviousArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: '101%',
      left: '6px',
      width: '40px',
      height: '40px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      background: '#f0f0f0',
      '&:hover': {
        background: '#f0f0f0',
      },
    }}
  >
    <ArrowBackIosNewIcon
      sx={{
        fontSize: '18px',
        color: 'rgba(17, 17, 17, 1)',
      }}
    />
  </IconButton>
);

const NextArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: '101%',
      right: '0px',
      width: '40px',
      height: '40px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      background: '#f0f0f0',
      '&:hover': {
        background: '#f0f0f0',
      },
    }}
  >
    <ArrowForwardIosIcon
      sx={{
        fontSize: '18px',
        color: 'rgba(17, 17, 17, 1)',
      }}
    />
  </IconButton>
);

const SectionCarousel = () => {
  const isSmallDesktop = useMediaQuery('(min-width: 1400px)');
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PreviousArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    dotsClass: 'slick-dots slick-thumb',
  };

  const renderCards = [1, 2, 3, 4].map(() => {
    return (
      <Box
        className="carousel-sec-fx"
        sx={{
          display: 'flex !important',
          gap: '16px',
          mt: '24px',
          mb: '24px',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <FinancialCardCarouselSec image={chainLinkImg} />
          <FinancialCardCarouselSec image={chainLinkImg} />
        </Box>
        <MiddleAnalysisCard isFxPage={true} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
        </Box>
      </Box>
    );
  });

  return isSmallDesktop ? (
    <Box
      sx={{
        '& .slick-dots': {
          bottom: '-22px !important',
        },
      }}
    >
      <Slider {...settings}>{renderCards}</Slider>
    </Box>
  ) : (
    <Box sx={{ mt: '10px' }}>
      <MiddleAnalysisCard isFxPage={true} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <NewsCard
          image={usaIcon}
          isShort={true}
          dualImg={ausIcon}
          isFxPage={true}
        />
        <NewsCard
          image={usaIcon}
          isShort={true}
          dualImg={ausIcon}
          isFxPage={true}
        />
        <NewsCard
          image={usaIcon}
          isShort={true}
          dualImg={ausIcon}
          isFxPage={true}
        />
        <NewsCard
          image={usaIcon}
          isShort={true}
          dualImg={ausIcon}
          isFxPage={true}
        />
        <NewsCard
          image={usaIcon}
          isShort={true}
          dualImg={ausIcon}
          isFxPage={true}
        />
      </Box>
      <Box sx={{ mt: '24px' }}>
        <FinancialNewsCarousel />
      </Box>
    </Box>
  );
};

export default SectionCarousel;

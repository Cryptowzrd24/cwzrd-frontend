'use client';
import React from 'react';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import GraphDetailsCard from '../../graph-detail-card';
import FinancialCard from '../../financial-card';
import NewsCard from '../../financial-news-card/newsCard';

const PreviousArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: '104%',
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
      top: '104%',
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
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PreviousArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    dotsClass: 'slick-dots slick-thumb',
  };

  const renderCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(() => {
    return (
      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box>
          <GraphDetailsCard />
          <Box sx={{ display: 'flex', gap: 1, marginTop: '12px' }}>
            <FinancialCard />
            <FinancialCard />
            <FinancialCard />
            <FinancialCard />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
        </Box>
      </Box>
    );
  });

  return (
    <Box>
      <Slider {...settings}>{renderCards}</Slider>
    </Box>
  );
};

export default SectionCarousel;

'use client';
import React from 'react';
import Slider from 'react-slick';
import { Box, fabClasses, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CardImage from '../../../../../public/images/news-letter/image-car-news.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TrendingNewsCard from '../../news/main/trending-news-card';

const PreviousArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: '110%',
      left: '0px',
      width: '40px',
      height: '40px',
      marginTop: '0px',
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
        fontSize: '15px',
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
      top: '110%',
      right: '0px',
      width: '40px',
      height: '40px',
      marginTop: '0px',
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
        fontSize: '15px',
        color: 'rgba(17, 17, 17, 1)',
      }}
    />
  </IconButton>
);

interface RelatedNewsCarouselProps {
  descriptionLines?: number;
  showSlider?: boolean;
}
const RelatedNewsCarousel = ({
  descriptionLines,
  showSlider,
}: RelatedNewsCarouselProps) => {
  const settings = {
    dots: !showSlider ? true : fabClasses,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: !showSlider ? true : false,
    prevArrow: !showSlider ? <PreviousArrow onClick={() => {}} /> : null,
    nextArrow: !showSlider ? <NextArrow onClick={() => {}} /> : null,
    dotsClass: !showSlider ? 'slick-dots slick-thumb' : null,
  };

  const renderCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => {
    return (
      <Box
        key={elem}
        sx={{
          width: '25%',
          padding: '0 5px',
          boxSizing: 'border-box',
          marginBottom: '5px',
        }}
      >
        <TrendingNewsCard
          descriptionLines={descriptionLines || 3}
          image={CardImage}
          title={
            'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip'
          }
          description={
            "Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization venture, CEO Paolo Ard.."
          }
          isDetailPage={true}
        />
      </Box>
    );
  });

  return (
    <Box
      sx={{
        padding: '20px 0',
        position: 'relative',
        '@media (max-width: 1500px)': {
          display: 'none',
        },
      }}
    >
      {/* @ts-expect-error TS2322: Type '{}' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<HTMLDivElement> & { children?: ReactNode; }'. */}
      <Slider {...settings}>{renderCards}</Slider>
    </Box>
  );
};

export default RelatedNewsCarousel;

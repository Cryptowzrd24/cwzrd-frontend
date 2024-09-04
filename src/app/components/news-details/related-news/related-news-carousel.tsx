import React from 'react';
import Slider from 'react-slick';
import { Box, IconButton } from '@mui/material';
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
      width: '48px',
      height: '48px',
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
        fontSize: '20px',
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
      width: '48px',
      height: '48px',
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
        fontSize: '20px',
        color: 'rgba(17, 17, 17, 1)',
      }}
    />
  </IconButton>
);

interface RelatedNewsCarouselProps {
  descriptionLines?: number;
}
const RelatedNewsCarousel = ({
  descriptionLines,
}: RelatedNewsCarouselProps) => {
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

  const renderCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => {
    return (
      <Box
        key={elem}
        sx={{
          width: '25%',
          padding: '0 5px',
          boxSizing: 'border-box',
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
    <Box sx={{ padding: '20px 0', position: 'relative' }}>
      <Slider {...settings}>{renderCards}</Slider>
    </Box>
  );
};

export default RelatedNewsCarousel;

'use client';

// Previous Code Not Responsive
{
  /*import React from 'react';
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
        // '@media (max-width: 1500px)': {
        //   display: 'none',
        // },
      }}
    >
      // @ts-expect-error TS2322: Type '{}' is not assignable to type 'IntrinsicAttributes & IntrinsicClassAttributes<HTMLDivElement> & { children?: ReactNode; }'.
      <Slider {...settings}>{renderCards}</Slider>
    </Box>
  );
};

export default RelatedNewsCarousel;*/
}

// Responsive React Slick Slider
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import CardImage from '../../../../../public/images/news-letter/image-car-news.png';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TrendingNewsCard from '../../news/main/trending-news-card';

interface RelatedNewsCarouselProps {
  descriptionLines?: number;
  showSlider?: boolean;
  showProgressSlider?: boolean;
  showDot?: boolean;
}

const RelatedNewsCarousel = ({
  descriptionLines = 3,
  showSlider = false,
  showProgressSlider = false,
  showDot = true,
}: RelatedNewsCarouselProps) => {
  const PreviousArrow = ({ onClick }: any) => (
    <IconButton
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        position: 'absolute',
        top: showProgressSlider ? '112%' : '110%',
        left: '5px',
        width: '40px',
        height: '40px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        background: '#f0f0f0',
        '&:hover': { background: '#e0e0e0' },
      }}
    >
      <ArrowBackIosNewIcon
        sx={{ fontSize: '15px', color: 'rgba(17, 17, 17, 1)' }}
      />
    </IconButton>
  );

  const NextArrow = ({ onClick }: any) => (
    <IconButton
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        position: 'absolute',
        top: showProgressSlider ? '112%' : '110%',
        right: '5px',
        width: '40px',
        height: '40px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        background: '#f0f0f0',
        '&:hover': { background: '#e0e0e0' },
      }}
    >
      <ArrowForwardIosIcon
        sx={{ fontSize: '15px', color: 'rgba(17, 17, 17, 1)' }}
      />
    </IconButton>
  );

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // width < 600px
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px - 960px

  const [slidesToShow, setSlidesToShow] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (isMobile) setSlidesToShow(1.5);
    else if (isTablet) setSlidesToShow(2);
    else setSlidesToShow(3);
  }, [isMobile, isTablet]);

  const totalSlides = 10;

  const settings = {
    dots: showDot,
    infinite: false,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    arrows: !showSlider,
    prevArrow: !showSlider ? <PreviousArrow onClick={() => {}} /> : null,
    nextArrow: !showSlider ? <NextArrow onClick={() => {}} /> : null,
    beforeChange: (_: number, next: number) => setCurrentSlide(next),
    dotsClass: 'slick-dots slick-thumb',
  };

  const renderCards = Array.from({ length: 10 }).map((_, index) => (
    <Box
      key={index}
      sx={{
        padding: '0 5px',
        boxSizing: 'border-box',
        marginBottom: '5px',
      }}
    >
      <TrendingNewsCard
        descriptionLines={descriptionLines}
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
  ));

  return (
    <Box sx={{ padding: '20px 0', position: 'relative' }}>
      <Slider {...settings}>{renderCards}</Slider>
      {showProgressSlider && (
        <Box
          sx={{
            width: '100%',
            height: '3px',
            background: '#e0e0e0',
            borderRadius: '10px',
            overflow: 'hidden',
            marginTop: '10px',
            marginBottom: '10px',
            position: 'relative',
          }}
        >
          <Box
            sx={{
              width: `${((currentSlide + slidesToShow) / totalSlides) * 100}%`,
              height: '100%',
              background: '#6200ea',
              transition: 'width 0.3s ease-in-out',
              borderRadius: '10px',
            }}
          />
        </Box>
      )}
    </Box>
  );
};

export default RelatedNewsCarousel;

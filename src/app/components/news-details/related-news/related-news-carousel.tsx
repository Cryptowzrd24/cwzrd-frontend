import React from 'react';
import Slider from 'react-slick';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const PreviousArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: '103%',
      left: '25px',
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
      top: '103%',
      right: '25px',
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

const RelatedNewsCarousel = () => {
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
          padding: '10px',
          boxSizing: 'border-box',
        }}
      >
        <Box
          sx={{
            background: '#fff',
            borderRadius: '8px',
            overflow: 'hidden',
            height: '100%',
          }}
        >
          <img
            src="https://via.placeholder.com/300x150"
            alt="News"
            style={{ width: '100%', height: 'auto' }}
          />
          <Box sx={{ padding: '10px' }}>
            <h4>News Title {1 + 1}</h4>
            <p>News description goes here...</p>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                fontSize: '12px',
                color: '#888',
              }}
            >
              <span>06/06/2023</span>
              <span>John Smith</span>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  });

  return (
    <Box sx={{ padding: '20px', position: 'relative' }}>
      <Slider {...settings}>{renderCards}</Slider>
    </Box>
  );
};

export default RelatedNewsCarousel;

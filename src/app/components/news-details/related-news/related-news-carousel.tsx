import React from 'react';
import Slider from 'react-slick';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import styles from './index.module.css';

// Custom Arrow components
const PreviousArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
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
        fontSize: '14px',
      }}
    />
  </IconButton>
);

const NextArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
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
        fontSize: '14px',
      }}
    />
  </IconButton>
);

const RelatedNewsCarousel = () => {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1, // Show one slide at a time
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PreviousArrow onClick={() => {}} />,
    nextArrow: <NextArrow onClick={() => {}} />,
    appendDots: (dots: any) => (
      <div
        style={{
          position: 'absolute',
          bottom: '-30px',
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    customPaging: (i: any) => (
      <div
        className={`${styles.slickDot} ${i === 0 ? styles.slickActiveDot : ''}`}
      />
    ),
    dotsClass: `${styles.slickDots}`,
  };

  const renderCards = (startIndex: number) => {
    const cards = [];
    for (let i = startIndex; i < startIndex + 4; i++) {
      cards.push(
        <Box
          key={i}
          sx={{
            width: '25%', // 4 cards per row
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
              <h4>News Title {i + 1}</h4>
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
        </Box>,
      );
    }
    return cards;
  };

  return (
    <Box sx={{ padding: '20px', position: 'relative' }}>
      <Slider {...settings}>
        {/* Each slide will contain 8 cards arranged in 2 rows of 4 cards each */}
        <Box>
          <Box sx={{ display: 'flex' }}>
            {renderCards(0)} {/* First 4 cards in the first row */}
          </Box>
          <Box sx={{ display: 'flex' }}>
            {renderCards(4)} {/* Next 4 cards in the second row */}
          </Box>
        </Box>
        {/* Add more slides as needed */}
      </Slider>
    </Box>
  );
};

export default RelatedNewsCarousel;

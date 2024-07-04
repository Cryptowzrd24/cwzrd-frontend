'use client';
import { Box, Typography } from '@mui/material';
import React from 'react';
import NotableCard from './notableCard';
import { NotableData } from './notableData';
import RightBlue from '../../../../../public/icons/collections/rightBlue';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
const NotableCardContent = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    arrows: true,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '48px',
        }}
      >
        <Typography variant="h5" sx={{ fontSize: '40px', fontWeight: '700' }}>
          {' '}
          Notable Collections
        </Typography>{' '}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Typography
            variant="caption"
            sx={{ fontSize: '18px', cursor: 'pointer' }}
          >
            View All
          </Typography>
          <RightBlue />
        </Box>
      </Box>
      <Slider {...settings}>
        {NotableData.map((card) => (
          <Box key={card.id} sx={{ px: 1 }}>
            <NotableCard {...card} />
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default NotableCardContent;

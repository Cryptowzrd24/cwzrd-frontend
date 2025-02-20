'use client';

import { Box, IconButton, useMediaQuery } from '@mui/material';
import React, { useRef } from 'react';
import ProgressCard from './progressCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ProgressCards = () => {
  const isSmallScreen = useMediaQuery('(max-width:768px)');
  const sliderRef = useRef<Slider | null>(null);

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    speed: 500,
  };

  return (
    <>
      {isSmallScreen ? (
        <Box sx={{ width: '100%', overflow: 'hidden' }}>
          <Slider ref={sliderRef} {...settings}>
            <ProgressCard
              completed={6}
              total={26}
              color="rgba(114, 72, 247, 1)"
              title="Course Progress"
            />
            <ProgressCard
              completed={49}
              total={76}
              color="rgba(247, 72, 72, 1)"
              title="Library Progress"
            />
            <ProgressCard
              completed={23}
              total={47}
              color="rgba(31, 215, 115, 1)"
              title="Exam Progress"
            />
          </Slider>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              gap: 2,
              mt: 2,
            }}
          >
            <IconButton
              sx={{
                width: '46px',
                height: '46px',
                padding: '8px',
                background: 'rgba(17, 17, 17, 0.05) !important',
              }}
              onClick={() => sliderRef.current?.slickPrev()}
            >
              <ChevronLeftIcon />
            </IconButton>
            <IconButton
              sx={{
                width: '46px',
                height: '46px',
                padding: '8px',
                background: 'rgba(17, 17, 17, 0.05) !important',
              }}
              onClick={() => sliderRef.current?.slickNext()}
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '22px',

            '@media (max-width: 978px)': {
              gap: '10px',
            },
          }}
        >
          <ProgressCard
            completed={6}
            total={26}
            color="rgba(114, 72, 247, 1)"
            title="Course Progress"
          />
          <ProgressCard
            completed={49}
            total={76}
            color="rgba(247, 72, 72, 1)"
            title="Library Progress"
          />
          <ProgressCard
            completed={23}
            total={47}
            color="rgba(31, 215, 115, 1)"
            title="Exam Progress"
          />
        </Box>
      )}
    </>
  );
};

export default ProgressCards;

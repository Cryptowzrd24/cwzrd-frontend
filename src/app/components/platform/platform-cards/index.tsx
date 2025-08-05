import { Box, IconButton, useMediaQuery } from '@mui/material';
import React, { useRef } from 'react';
import TradeManagement from './tradeManagement';
import MileStones from './mileStones';
import WzrdStrategy from './wzrdStrategy';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const PlatformCards = () => {
  const isMobile = useMediaQuery('(max-width:768px)');
  const sliderRef = useRef<Slider | null>(null);

  if (isMobile) {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
    };

    return (
      <Box sx={{
        width:'100%'
      }}>
        <Slider ref={sliderRef} {...settings}>
          <TradeManagement />
          <MileStones />
          <WzrdStrategy />
        </Slider>

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 1,
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
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '12px',
        width:"100%"
      }}
    >
      <TradeManagement />
      <MileStones />
      <WzrdStrategy />
    </Box>
  );
};

export default PlatformCards;

'use client';
import React, { useRef, useState } from 'react';
import { TechnicalCardData } from './data';
import TechnicalCard from './technicalCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ArrowLeftDark from '../../../../public/icons/collections/arrowLeftDark';
import ArrowRightDark from '../../../../public/icons/collections/arrowRightDark';
import { Box, Typography } from '@mui/material';

const TechnicalCardContent: React.FC = () => {
  const sliderRef = useRef<Slider>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    afterChange: (current: any) => setCurrentSlide(current),
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };
  const totalSlides = Math.ceil(
    TechnicalCardData.length / settings.slidesToShow,
  );

  return (
    <Box style={{ position: 'relative', width: '100%' }}>
      <Slider ref={sliderRef} {...settings}>
        {TechnicalCardData.map((card) => (
          <TechnicalCard
            key={card.id}
            id={card.id}
            date={card.date}
            title={card.title}
            desc={card.desc}
            icon1={card.icon1}
            icon2={card.icon2}
            value1={card.value1}
            value2={card.value2}
            image={card.image}
          />
        ))}
      </Slider>
      <Box
        style={{
          position: 'absolute',
          bottom: '-100px',
          right: '3%',
          transform: 'translateX(-50%)',
          display: 'flex',
          justifyContent: 'space-between',
          width: '64px',
          gap: '8px',
        }}
      >
        <Box
          onClick={handlePrev}
          sx={{
            cursor: 'pointer',
            background: 'rgba(17, 17, 17, 0.05)',
            borderRadius: '56px',
            padding: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              background: 'rgba(17, 17, 17, 0.15)',
            },
          }}
        >
          <ArrowLeftDark />
        </Box>
        <Box
          onClick={handleNext}
          sx={{
            cursor: 'pointer',
            background: 'rgba(17, 17, 17, 0.05)',
            borderRadius: '56px',
            padding: '12px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '&:hover': {
              background: 'rgba(17, 17, 17, 0.15)',
            },
          }}
        >
          <ArrowRightDark />
        </Box>
      </Box>
      <Typography
        variant="body2"
        sx={{
          position: 'absolute',
          left: '2%',
          bottom: '-83px',
          color: 'rgba(17, 17, 17, 0.4)',
          fontSize: '16px',
          fontWeight: '500',
        }}
      >
        {`${Math.ceil(currentSlide / settings.slidesToScroll) + 1}/${totalSlides}`}
      </Typography>
    </Box>
  );
};

export default TechnicalCardContent;

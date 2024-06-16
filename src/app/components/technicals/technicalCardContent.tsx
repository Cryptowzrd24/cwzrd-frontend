'use client';
import React from 'react';
import { TechnicalCardData } from './data';
import TechnicalCard from './technicalCard';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const TechnicalCardContent: React.FC = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: true,
  };
  return (
    <>
      <Slider {...settings}>
        {TechnicalCardData.map((card) => (
          <TechnicalCard
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
    </>
  );
};

export default TechnicalCardContent;

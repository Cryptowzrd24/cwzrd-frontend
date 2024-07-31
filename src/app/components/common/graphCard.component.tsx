'use client';
import React, { useState } from 'react';
import styled from 'styled-components';
import AreaChart from '../elements/areaGraphCard.element';
import {
  getGraphColor,
  getPositiveNegativeIcon,
} from '@/app/helpers/functions';
import styles from './index.module.scss';
import BarChart from '../elements/barGraphCard.element';
import { Card } from '@mui/material';
import CardHeader from './cardHeader.component';
import Card1 from './card1.component';
import frogImage from '@/app/assets/images/frogImage.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card2 from './card2.component';
import btc from '@/app/assets/images/btc.png';
import nft from '@/app/assets/images/nft.png';

const StyledSlider = styled(Slider)`
  .slick-track,
  .slick-list {
    transform: translate3d(0, 0, 0);
    background: white !important;
    margin-left: -0.5px;
  }
`;

const GraphCard = (props: IMarketCapCardProps) => {
  const { heading, value, percent, graphAttr } = props;
  const [currentStep, setCurrentStep] = useState(0);

  const totalSteps = 2;

  const settings = {
    dots: false,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    beforeChange: (current: any, next: any) => setCurrentStep(next),
  };

  return (
    <Card className={styles.market_cap_wrapper}>
      <div className={styles.stepper_dots}>
        {[...Array(totalSteps)].map((_, index) => (
          <div
            key={index}
            className={`${styles.dot} ${currentStep === index ? styles.active : ''}`}
          />
        ))}
      </div>
      <StyledSlider {...settings}>
        <div>
          <div className={styles.header_wrapper}>
            <CardHeader heading={heading} />
            <div className={styles.value}>
              {value?.prefix}
              {value.data}
              {value?.postfix}
            </div>
            <div
              style={{
                fontSize: '14px',
                fontFamily: 'Sf Pro Display',
                marginTop: '2px',
                lineHeight: '18.2px',
                color:
                  getPositiveNegativeIcon(percent) === '-'
                    ? '#F56D6D'
                    : '#45CA94',
              }}
            >
              {getPositiveNegativeIcon(percent)}
              {Math.abs(percent)}%
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '145px',
            }}
          >
            {graphAttr?.type === 'area' ? (
              <AreaChart
                data={graphAttr.data}
                color={getGraphColor(percent)}
                percent={value?.postfix ? true : false}
              />
            ) : null}
            {graphAttr?.type === 'bar' ? (
              <BarChart data={graphAttr.data} color={getGraphColor(percent)} />
            ) : null}
          </div>
        </div>
        <div>
          {graphAttr?.type === 'area' ? (
            <Card1
              stepperCount={2}
              type="time"
              heading="✨ Recently Added"
              items={[
                {
                  medal: '🥇',
                  image: frogImage,
                  text1: 'PEPI',
                  text2: 'PEPI',
                  time: 4,
                },
                {
                  medal: '🥇',
                  image: frogImage,
                  text1: 'PEPI',
                  text2: 'PEPI',
                  time: 4,
                },
                {
                  medal: '🥇',
                  image: frogImage,
                  text1: 'PEPI',
                  text2: 'PEPI',
                  time: 4,
                },
              ]}
            />
          ) : (
            <Card2
              stepperCount={2}
              heading="🎖 Top Categories"
              items={[
                {
                  medal: '🥇',
                  text1: 'Base Ecosystem',
                  images: [nft, btc, frogImage],
                },
                {
                  medal: '🥇',
                  text1: 'Base Ecosystem',
                  images: [nft, btc, frogImage],
                },
                {
                  medal: '🥇',
                  text1: 'Base Ecosystem',
                  images: [nft, btc, frogImage],
                },
              ]}
            />
          )}
        </div>
      </StyledSlider>
    </Card>
  );
};

export default GraphCard;

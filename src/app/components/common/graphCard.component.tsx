'use client';
import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import AreaChart from '../elements/areaGraphCard.element';
import {
  getBarGraphColor,
  getGraphColor,
  getPositiveNegativeIcon,
} from '@/app/helpers/functions';
import styles from './index.module.scss';
import BarChart from '../elements/barGraphCard.element';
import { Card, Typography, useMediaQuery, Box } from '@mui/material';
import CardHeader from './cardHeader.component';
import Card1 from './card1.component';
import frogImage from '@/app/assets/images/frogImage.png';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Card2 from './card2.component';
import btc from '@/app/assets/images/btc.png';
import nft from '@/app/assets/images/nft.png';
import { shrinkLargeNumber } from '@/utils/shrinkLargeNumber';

const StyledSlider = styled(Slider)`
  .slick-track,
  .slick-list {
    transform: translate3d(0, 0, 0);
    background: white !important;
    margin-left: -0.5px;
  }
`;

const GraphCard = (props: IMarketCapCardProps) => {
  const { showLargeCard = false, heading, value, percent, graphAttr } = props;
  const [currentStep, setCurrentStep] = useState(0);
  const sliderRef = useRef<Slider>(null);
  const isLargeScreen = useMediaQuery('(min-width: 1200px)');

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

  const handleDotClick = (index: number) => {
    setCurrentStep(index);
    sliderRef.current?.slickGoTo(index);
  };

  return isLargeScreen || showLargeCard ? (
    <div
      style={{
        boxSizing: 'border-box',
        width: showLargeCard ? '100%' : '24%',
        display: 'flex',
        borderRadius: '15px',
        border: '1px solid rgba(17, 17, 17, 0.05)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      <Card className={styles.market_cap_wrapper}>
        <div className={styles.stepper_dots}>
          {[...Array(totalSteps)].map((_, index) => (
            <div
              key={index}
              className={`${styles.dot} ${currentStep === index ? styles.active : ''}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </div>
        <StyledSlider ref={sliderRef} {...settings}>
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
                  marginLeft: '-8px',
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
                height: '170px',
                marginRight: '-4px',
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
                <BarChart
                  data={graphAttr.data}
                  color={getBarGraphColor(percent)}
                />
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
    </div>
  ) : (
    <Box
      sx={{
        p: '16px',
        boxSizing: 'border-box',
        borderRadius: '15px',
        width: { xs: '48%', md: '24%' },
        minWidth: '190px',
        height: '150px',
        // '@media (max-width: 400px)': { height: '120px' },
        // height: '150px',
        display: 'flex',
        rowGap: '5px',
        justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
      }}
    >
      <CardHeader heading={heading} />
      <Box
        sx={{
          display: 'flex',
          gap: '4px',
          fontSize: { xs: '12px !important', sm: '16px !important' },
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: '14px !important', sm: '16px !important' },
            fontWeight: 'bold',
          }}
        >
          {value?.prefix}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '14px !important', sm: '16px !important' },
            fontWeight: 'bold',
          }}
        >
          {shrinkLargeNumber(value.data)}
        </Typography>
        <Typography
          sx={{
            fontSize: { xs: '14px !important', sm: '16px !important' },
            fontWeight: 'bold',
          }}
        >
          {value?.postfix}
        </Typography>
      </Box>
      <Box
        style={{
          marginTop: '2px',
        }}
      >
        <Typography
          sx={{
            fontSize: '13px',
            fontFamily: 'Sf Pro Display',
            lineHeight: '18.2px',
            mt: '5px',
            // marginLeft: '-8px',
            color:
              getPositiveNegativeIcon(percent) === '-' ? '#F56D6D' : '#45CA94',
          }}
        >
          {getPositiveNegativeIcon(percent)}
          {Math.abs(percent)}%
        </Typography>
      </Box>
    </Box>
  );
};

export default GraphCard;

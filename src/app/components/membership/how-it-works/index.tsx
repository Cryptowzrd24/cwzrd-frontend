import React, { useRef } from 'react';
import { Box, Typography } from '@mui/material';
import HowItWorksCard from './HowItWorksCard';

import Slider from 'react-slick';
import ArrowLeftDark from '../../../../../public/icons/collections/arrowLeftDark';
import ArrowRightDark from '../../../../../public/icons/collections/arrowRightDark';

const howItWorksData = [
  {
    step: '01',
    title: 'Buy a Lifetime Membership',
    description: 'Pay with either a credit/debit card or via crypto',
    imagePath: '/images/membership/iPhoneBg.png',
  },
  {
    step: '02',
    title: 'Buy a Lifetime Membership',
    description:
      'Our platform provides insights and strategies for long-term wealth accumulation through smart portfolio investing.',
    imagePath: '/images/membership/mailBoxBg.png',
  },
  {
    step: '03',
    title: 'Follow Our Signals',
    description:
      'The WZRD Aggresive Scalping Strategy delivers consistent trades.',
    imagePath: '/images/membership/lockScreenBg.png',
  },
  {
    step: '04',
    title: 'Portfolio Investing',
    description:
      'Follow along with the trade signals in Discord. We trade using Bybit.',
    imagePath: '/images/membership/appBg.png',
  },
];
function HowItWorks() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    variableWidth: true,
  };

  const handlePrev = () => {
    sliderRef.current?.slickPrev();
  };

  const handleNext = () => {
    sliderRef.current?.slickNext();
  };
  return (
    <>
      <Box sx={{ mb: '40px' }}>
        <Typography
          sx={{
            mb: '4px',
            letterSpacing: '1.4px',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 1)',
            textAlign: 'center',
            '@media (max-width:660px)': {
              fontSize: '12px',
              lineHeight: '15px',
            },
          }}
        >
          Become a wzrd in minute{' '}
        </Typography>
        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '38px',
            color: 'rgba(255, 255, 255, 1)',
            textAlign: 'center',
            '@media (max-width:660px)': {
              fontSize: '24px',
              lineHeight: '28px',
            },
          }}
        >
          How It
          <span
            style={{
              color: 'rgba(99, 77 ,253, 1)',
              paddingLeft: '6px',
            }}
          >
            Works
          </span>
        </Typography>
      </Box>

      <Box
        sx={{
          display: 'none',
          '@media (max-width:1290px)': {
            display: 'block',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            maxWidth: '1290px',
            mx: 'auto',
            width: '100%',
            display: 'flex',
            gap: '8px',
          }}
        >
          <Slider className="technicals-slick" ref={sliderRef} {...settings}>
            {howItWorksData.map((data, index) => (
              <HowItWorksCard
                key={index}
                step={data.step}
                title={data.title}
                description={data.description}
                imagePath={data.imagePath}
              />
            ))}
          </Slider>
          <Box
            sx={{
              position: 'absolute',
              bottom: '-70px',
              transform: 'translateX(-50%)',
              display: 'flex',
              justifyContent: 'space-between',
              width: '48px',
              gap: '8px',
              right: '25px',
              '@media (max-width:660px)': {
                right: '50px',
              },
            }}
          >
            <Box
              onClick={handlePrev}
              sx={{
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.10)',
                borderRadius: '56px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  background: 'rgba(17, 17, 17, 0.10)',
                },
              }}
            >
              <ArrowLeftDark color="rgba(255, 255, 255, 1)" />
            </Box>
            <Box
              onClick={handleNext}
              sx={{
                cursor: 'pointer',
                background: 'rgba(255, 255, 255, 0.10)',
                borderRadius: '56px',
                padding: '12px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                '&:hover': {
                  background: 'rgba(17, 17, 17, 0.10)',
                },
              }}
            >
              <ArrowRightDark color="rgba(255, 255, 255, 1)" />
            </Box>
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          '@media (max-width:1290px)': {
            display: 'none',
          },
        }}
      >
        <Box
          sx={{
            position: 'relative',
            width: '1290px',
            mx: 'auto',
            display: 'flex',
            gap: '8px',
          }}
        >
          {howItWorksData.map((data, index) => (
            <HowItWorksCard
              key={index}
              step={data.step}
              title={data.title}
              description={data.description}
              imagePath={data.imagePath}
            />
          ))}
        </Box>
      </Box>
    </>
  );
}

export default HowItWorks;

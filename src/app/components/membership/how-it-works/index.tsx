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
    description:
      'Secure your lifetime membership today using your credit/debit card or pay seamlessly with cryptocurrency.',
    imagePath: '/images/membership/iPhoneBg.png',
  },
  {
    step: '02',
    title: 'Check Your Email',
    description:
      'Join our exclusive trading community with a one-time membership for lifetime access to expert resources, updates, and support—no recurring fees, just long-term success.',
    imagePath: '/images/membership/mailBoxBg.png',
  },
  {
    step: '03',
    title: 'Follow Our Signals',
    description:
      'Follow our expertly crafted trading signals to execute profitable trades with ease. Each clear, actionable signal is designed to help you maximize success in the markets.',
    imagePath: '/images/membership/lockScreenBg.png',
  },
  {
    step: '04',
    title: 'Portfolio Investing',
    description:
      'Build a strong, diversified portfolio with our expert investing guidance. We provide strategies to balance risk and reward, ensuring steady, long-term growth.',
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
            color: 'rgba(17, 17, 17, 1)',
            textAlign: 'center',
            '@media (max-width:660px)': {
              fontSize: '12px',
              lineHeight: '15px',
            },
          }}
        >
          Become a wzrd in a minute{' '}
        </Typography>
        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '38px',
            color: 'rgba(17, 17, 17, 1)',
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
              background:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
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
            ml: '32px',
            mb: '42px',
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
            overflowX: 'hidden',
            mb: '16px',
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
        </Box>

        <Box
          sx={{
            display: 'flex',
            maxWidth: '104px',
            width: '100%',
            gap: '8px',
            margin: '0 75px 0 auto',
            '@media (max-width:855px)': {
              margin: '0 25px 0 auto',
            },
            '@media (max-width:660px)': {
              margin: '0 16px 0 auto',
            },
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
                background: 'rgba(17, 17, 17, 0.10)',
              },
            }}
          >
            <ArrowLeftDark color="rgba(17, 17, 17, 1)" />
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
                background: 'rgba(17, 17, 17, 0.10)',
              },
            }}
          >
            <ArrowRightDark color="rgba(17, 17, 17, 1)" />
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mb: '120px',
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

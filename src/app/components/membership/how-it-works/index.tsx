import React from 'react';
import { Box, Typography } from '@mui/material';
import HowItWorksCard from './HowItWorksCard';

import iPhone from '../../../../../public/images/membership/iPhoneHIW.svg';

const howItWorksData = [
  {
    step: '01',
    title: 'Buy a Lifetime Membership',
    description: 'Pay with either a credit/debit card or via crypto',
    imagePath: iPhone,
  },
  {
    step: '02',
    title: 'Buy a Lifetime Membership',
    description:
      'Our platform provides insights and strategies for long-term wealth accumulation through smart portfolio investing.',
    imagePath: iPhone,
  },
  {
    step: '03',
    title: 'Follow Our Signals',
    description:
      'The WZRD Aggresive Scalping Strategy delivers consistent trades.',
    imagePath: iPhone,
  },
  {
    step: '04',
    title: 'Portfolio Investing',
    description:
      'Follow along with the trade signals in Discord. We trade using Bybit.',
    imagePath: iPhone,
    bg: 'linear-gradient(131deg, #BF48F7 -3.29%, #7E44F1 98.06%)',
  },
];
function HowItWorks() {
  return (
    <>
      <Box sx={{ mb: '40px' }}>
        <Typography
          variant="h4"
          sx={{
            mb: '4px',
            letterSpacing: '1.4px',
            fontSize: '14px',
            fontWeight: '500',
            lineHeight: '18px',
            textTransform: 'uppercase',
            color: 'rgba(255, 255, 255, 1)',
            textAlign: 'center',
          }}
        >
          Become a wzrd in minute{' '}
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '38px',
            color: 'rgba(255, 255, 255, 1)',
            textAlign: 'center',
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
          display: 'flex',
          gap: '24px',
          paddingInline: '75px',
          maxWidth: '1290px',
          width: '100%',
          mx: 'auto',
        }}
      >
        {howItWorksData.map((data, index) => (
          <HowItWorksCard
            key={index}
            step={data.step}
            title={data.title}
            description={data.description}
            imagePath={data.imagePath}
            bg={data.bg ?? ''}
          />
        ))}
      </Box>
    </>
  );
}

export default HowItWorks;

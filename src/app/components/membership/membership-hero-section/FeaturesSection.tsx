import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import Check from '../../../../../public/icons/membership/check.svg';

const featuresListLeft = [
  'Daily Trade Signals',
  'Day Trade Setups',
  'Trade Management',
  'Portfolio Investing',
  'Professional Mentorship',
  'Daily Market Analysis on 30 Cryptos',
  'Daily Market Analysis on Forex & Stocks',
  '24/7 Market Coverage',
  'Airdrop Calls',
  'Educational Guides',
];

const featuresListRight = [
  'Expert Lessons on Trading',
  'Market Outlooks',
  'WZRD Strategies',
  'Take Profit Guidance',
  'Risk Management Guidance',
  '76-Video (24 Hours) Trading Course',
  'Library With 26 Books',
  'WZRD Examinations',
  'Open Community Chats',
  'and 30+ features',
];

const FeaturesSection = () => {
  return (
    <Box
      sx={{
        background: 'rgba(248,248,248,1)',
        borderRadius: '24px',
        display: 'flex',
        gap: '24px',
        padding: '24px',
        width: '488px',
        boxSizing: 'border-box',
      }}
    >
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '50%',
        }}
      >
        {featuresListLeft.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Image src={Check} alt="tick" />
            <Typography
              sx={{
                color: 'rgba(0,0,0,1)',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '18px',
              }}
            >
              {feature}
            </Typography>
          </Box>
        ))}
      </Stack>
      <Stack
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          width: '50%',
        }}
      >
        {featuresListRight.map((feature, index) => (
          <Box
            key={index}
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Image src={Check} alt="tick" />
            <Box>
              <Typography
                sx={{
                  color: 'rgba(0,0,0,1)',
                  fontSize: '14px',
                  fontWeight: '600',
                  lineHeight: '18px',
                }}
              >
                {feature}
              </Typography>
            </Box>
          </Box>
        ))}
      </Stack>
    </Box>
  );
};

export default FeaturesSection;

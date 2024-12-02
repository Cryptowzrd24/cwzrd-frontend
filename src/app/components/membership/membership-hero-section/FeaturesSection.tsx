import { Box } from '@mui/material';
import React from 'react';
import FeaturesColumn from './FeaturesColumn';

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
        width: '100%',
        boxSizing: 'border-box',
        '@media (max-width:885px)': {
          gap: '8px',
          padding: '16px',
        },
      }}
    >
      <FeaturesColumn features={featuresListLeft} />
      <FeaturesColumn features={featuresListRight} />
    </Box>
  );
};

export default FeaturesSection;

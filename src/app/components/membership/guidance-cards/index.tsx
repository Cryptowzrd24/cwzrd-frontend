import { Box } from '@mui/material';
import React from 'react';

import RiskCard from './RiskCard';
import ProfitCard from './ProfitCard';
const GuidanceCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '24px',
        boxSizing: 'border-box',
        '@media (max-width:768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <RiskCard />
      <ProfitCard />
    </Box>
  );
};

export default GuidanceCards;

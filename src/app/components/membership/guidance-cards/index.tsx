import { Box } from '@mui/material';
import React from 'react';

import RiskCard from './RiskCard';
import ProfitCard from './ProfitCard';
const GuidanceCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '24px',
        height: '353px',
        boxSizing: 'border-box',
      }}
    >
      <RiskCard />
      <ProfitCard />
    </Box>
  );
};

export default GuidanceCards;

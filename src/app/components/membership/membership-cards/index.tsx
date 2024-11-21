import { Box } from '@mui/material';
import React from 'react';
import PortfolioInvestingCard from './PortfolioInvestingCard';
import MarketCoverageCard from './MarketCoverageCard';
import WzrdPlatformCard from './WzrdPlatformCard';

const MembershipCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: '24px',
        height: '423px',
        boxSizing: 'border-box',
      }}
    >
      <PortfolioInvestingCard />
      <MarketCoverageCard />
      <WzrdPlatformCard />
    </Box>
  );
};

export default MembershipCards;

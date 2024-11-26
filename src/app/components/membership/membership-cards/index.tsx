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
        gap: '24px',
        boxSizing: 'border-box',
        '@media (max-width:768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <PortfolioInvestingCard />
      <MarketCoverageCard />
      <WzrdPlatformCard />
    </Box>
  );
};

export default MembershipCards;

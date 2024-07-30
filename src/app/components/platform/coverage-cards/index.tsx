import { Box } from '@mui/material';
import React from 'react';
import TradersCard from './tradersCard';
import CommunityCard from './communityCard';
import DailyCoverageCard from './dailyCoverageCard';
import MemberCard from './memberCard';

const CoverageCards = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <TradersCard />
        <CommunityCard />
        <DailyCoverageCard />
      </Box>
      <Box sx={{ mt: '30px' }}>
        <MemberCard />
      </Box>
    </>
  );
};

export default CoverageCards;

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
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '30px',
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

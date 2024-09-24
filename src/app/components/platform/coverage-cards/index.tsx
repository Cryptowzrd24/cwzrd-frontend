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
          justifyContent: 'center',
          gap: '22px',
        }}
      >
        <TradersCard />
        <CommunityCard />
        <DailyCoverageCard />
      </Box>
      <Box sx={{ mt: '24px', display: 'flex', justifyContent: 'center' }}>
        <MemberCard />
      </Box>
    </>
  );
};

export default CoverageCards;

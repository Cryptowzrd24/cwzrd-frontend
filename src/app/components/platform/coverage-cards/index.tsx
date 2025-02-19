import { Box, useMediaQuery } from '@mui/material';
import React from 'react';
import TradersCard from './tradersCard';
import CommunityCard from './communityCard';
import DailyCoverageCard from './dailyCoverageCard';
import MemberCard from './memberCard';

const CoverageCards = () => {
  const isSmallScreen = useMediaQuery('(min-width: 717px)');
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '22px',
        }}
      >
        {isSmallScreen && <TradersCard />}
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

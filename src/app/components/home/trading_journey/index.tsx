import { Box } from '@mui/material';
import React from 'react';
import Header from './Header';
import DedicatedMentorship from './DedicatedMentorship';
import EducationalGuidesRow from './EducationalGuidesRow';
import WZRDStrategiesCard from './WZRDStrategiesCard';
import ProfitGuidance from './ProfitGuidance';
import Members from './Members';
import CommunityChats from './CommunityChats';

const TradingJourney = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '12px', md: '24px' },
      }}
    >
      <Header />
      <DedicatedMentorship />
      <EducationalGuidesRow />
      <Box
        sx={{
          display: 'flex',
          gap: { xs: '12px', md: '24px' },
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'stretch',
          height: { xs: 'auto', lg: '311px' },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', lg: '40%' },
            boxSizing: 'border-box',
          }}
        >
          <WZRDStrategiesCard />
        </Box>
        <Box
          sx={{
            width: { xs: '100%', lg: '60%' },
            boxSizing: 'border-box',
          }}
        >
          <ProfitGuidance />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          height: { xs: 'auto', lg: '423px' },
          gap: '20px',
          flexDirection: {
            xs: 'column',
            md: 'row',
          },
        }}
      >
        <Members />
        <CommunityChats />
      </Box>
    </Box>
  );
};

export default TradingJourney;

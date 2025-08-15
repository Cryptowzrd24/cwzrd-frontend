import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import RealTimeMarketCoverage from './RealTimeMarketCoverage';
import EcnomicBreakdowns from './EcnomicBreakdowns';
import ImproveSkillsAndStrategies from './ImproveSkillsAndStrategies';
import MarketOutlooksCard from './MarketOutlooksCard';
import RiskManagementCard from './RiskManagementCard';
import ExpertLessonsCard from './ExpertLessonsCard';

const index = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        gap: { xs: '12px', lg: '24px' },
      }}
    >
      <Header />
      <RealTimeMarketCoverage />
      <Box
        sx={{
          display: 'flex',
          gap: { xs: '12px', lg: '24px' },
          height: { xs: 'auto', lg: '311px' },
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'stretch',
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '70%' },
            height: '100%',
          }}
        >
          <EcnomicBreakdowns />
        </Box>
        <Box
          sx={{
            width: { xs: '100%', sm: '50%', md: '30%' },
            height: '100%',
          }}
        >
          <ImproveSkillsAndStrategies />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '12px',
          width: '100%',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', md: 'row' },
          flexWrap: { xs: 'no-wrap', sm: 'wrap', md: 'no-wrap' },
        }}
      >
        <MarketOutlooksCard />
        <RiskManagementCard />
        <ExpertLessonsCard />
      </Box>
    </Box>
  );
};

export default index;

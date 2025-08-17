import React from 'react';
import Header from './Header';
import { Box } from '@mui/material';
import RealTimeMarketCoverage from './RealTimeMarketCoverage';
import EcnomicBreakdowns from './EcnomicBreakdowns';
import ImproveSkillsAndStrategies from './ImproveSkillsAndStrategies';
import MarketOutlooksCard from './MarketOutlooksCard';
import RiskManagementCard from './RiskManagementCard';
import ExpertLessonsCard from './ExpertLessonsCard';

const CardWrapper = ({ children }: any) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: '48%', lg: '31%' },
        height: '100%',
      }}
    >
      {children}
    </Box>
  )
}

const index = () => {
  return (
    <Box
      sx={{
        width: '100%',
        height:"100%",
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
          // height: { xs: '100%', lg: '311px' },
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
          alignItems: 'stretch',
          width: '100%',
          flexWrap: { xs: 'no-wrap', sm: 'wrap', md: 'no-wrap' },
        }}
      >
        <Box
          sx={{
            width: { xs: '100%', sm: '100%', lg: '66%' },
            height: '100%',
          }}
        >
          <EcnomicBreakdowns />
        </Box>
        <CardWrapper>
          <ImproveSkillsAndStrategies />
        </CardWrapper>
        <CardWrapper>
          <MarketOutlooksCard />
        </CardWrapper>
        <CardWrapper>
          <RiskManagementCard />
        </CardWrapper>
        <CardWrapper>
          <ExpertLessonsCard />
        </CardWrapper>
      </Box>
    </Box>
  );
};

export default index;

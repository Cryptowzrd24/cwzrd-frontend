import { Box, Typography } from '@mui/material';
import React from 'react';
import AirdropCallsCard from './cards/AirdropCallsCard';
import ProfessionalMentorshipCard from './cards/ProfessionalMentorshipCard';
import MarketOutlooksCard from './cards/MarketOutlooksCard';
import RiskManagementCard from './cards/RiskManagementCard';
import ExpertLessonsCard from './cards/ExpertLessonsCard';
import EducationalGuidesRow from './cards/EducationalGuidesRow';
import WZRDStrategiesCard from './cards/WZRDStrategiesCard';
import TakeProfitCard from './cards/TakeProfitCard';

const BenefitsSection = () => {
  return (
    <Box
      sx={{
        background: '#EDF0FF',
        minHeight: { xs: 'auto', lg: '100vh' },
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: { xs: '60px 0px', lg: '60px' },
      }}
    >
      {/* Section Title */}
      <Box
        sx={{
          textAlign: 'center',
          marginBottom: { xs: '40px', sm: '50px', md: '60px' },
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontSize: { xs: '24px', sm: '28px', md: '32px' },
            fontWeight: 700,
            lineHeight: '38.40px',
            letterSpacing: '0.32px',
            fontFamily: 'SF Pro Display, sans-serif',
            marginBottom: '16px',
          }}
        >
          <Box component="span" sx={{ color: '#634DFD' }}>
            Benefits
          </Box>{' '}
          <Box component="span" sx={{ color: '#111111' }}>
            of Wizard Membership
          </Box>
        </Typography>
      </Box>

      {/* Benefits Grid */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '16px', sm: '20px', md: '24px' },
          width: '100%',
        }}
      >
        {/* Row 1 */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '16px', sm: '20px', md: '24px' },
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <AirdropCallsCard />
          <ProfessionalMentorshipCard />
        </Box>

        {/* Row 2 */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '16px', sm: '20px', md: '24px' },
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <MarketOutlooksCard />
          <RiskManagementCard />
          <ExpertLessonsCard />
        </Box>

        {/* Row 3 - Educational Guides */}
        <EducationalGuidesRow />

        {/* Row 4 */}
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '16px', sm: '20px', md: '24px' },
            flexWrap: 'wrap',
            justifyContent: 'space-between',
          }}
        >
          <WZRDStrategiesCard />
          <TakeProfitCard />
        </Box>
      </Box>
    </Box>
  );
};

export default BenefitsSection;

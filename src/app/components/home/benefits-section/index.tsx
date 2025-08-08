import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import BenefitCard from './BenefitCard';
import EducationalGuidesCard from './EducationalGuidesCard';
import { benefitsData, Benefit } from './benefitsData';

const BenefitsSection = () => {
  return (
    <Box
      sx={{
        background: '#F8F9FA',
        padding: { xs: '60px 0', sm: '70px 0', md: '80px 0' },
        minHeight: { xs: 'auto', lg: '100vh' },
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xl">
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
              fontSize: { xs: '24px', sm: '28px', md: '32px', lg: '36px', xl: '40px' },
              fontWeight: 700,
              background: 'linear-gradient(135deg, #8B5CF6 0%, #A855F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '16px',
            }}
          >
            Benefits of Wizard Membership
          </Typography>
        </Box>

        {/* Benefits Grid */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: { xs: '16px', sm: '20px', md: '24px' },
            maxWidth: '100%',
            margin: '0 auto',
          }}
        >
          {/* Row 1 */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: '16px', sm: '20px', md: '24px' },
              flexWrap: { xs: 'wrap', lg: 'nowrap' },
              justifyContent: { xs: 'center', lg: 'flex-start' },
            }}
          >
            {benefitsData.slice(0, 2).map((benefit: Benefit) => (
              <BenefitCard key={benefit.id} {...benefit} />
            ))}
          </Box>

          {/* Row 2 */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: '16px', sm: '20px', md: '24px' },
              flexWrap: { xs: 'wrap', lg: 'nowrap' },
              justifyContent: { xs: 'center', lg: 'flex-start' },
            }}
          >
            {benefitsData.slice(2, 5).map((benefit: Benefit) => (
              <BenefitCard key={benefit.id} {...benefit} />
            ))}
          </Box>

          {/* Row 3 - Educational Guides */}
          <EducationalGuidesCard subIcons={benefitsData[5].subIcons || []} />

          {/* Row 4 */}
          <Box
            sx={{
              display: 'flex',
              gap: { xs: '16px', sm: '20px', md: '24px' },
              flexWrap: { xs: 'wrap', lg: 'nowrap' },
              justifyContent: { xs: 'center', lg: 'flex-start' },
            }}
          >
            {benefitsData.slice(6, 8).map((benefit: Benefit) => (
              <BenefitCard key={benefit.id} {...benefit} />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default BenefitsSection;

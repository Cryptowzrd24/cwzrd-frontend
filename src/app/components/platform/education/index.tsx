import { Box, Stack } from '@mui/material';
import React from 'react';
import EducationCard from './educationCard';
import RiskCalculator from './riskCalculator';
import ProfitableCard from './profitableCard';

const Education = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'start',
          gap: '24px',
          width: '100%',
          justifyContent: 'center',

          '@media (max-width: 1023px)': {
            flexDirection: 'column',
          },
        }}
      >
        <EducationCard />
        <Stack
          sx={{
            '@media (max-width: 1023px)': {
              width: '100%',
            },
          }}
        >
          <Box sx={{ mb: '30px' }}>
            <RiskCalculator />
          </Box>
          <ProfitableCard />
        </Stack>
      </Box>
    </>
  );
};

export default Education;

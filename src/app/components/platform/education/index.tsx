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
        }}
      >
        <EducationCard />
        <Stack>
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

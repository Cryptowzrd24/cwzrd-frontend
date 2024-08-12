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
          alignItems: 'center',
          gap: '30px',
          width: '100%',
        }}
      >
        <EducationCard />
        <Stack sx={{ maxWidth: '30.5%', width: '100%' }}>
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

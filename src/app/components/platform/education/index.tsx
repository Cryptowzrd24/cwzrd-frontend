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
            display: 'flex',
            justifyContent: 'space-between',
            gap: '24px',
            '@media (max-width: 1023px)': {
              width: '100%',
            },
            '@media (max-width: 576px)': {
              display: 'none',
            },
          }}
        >
          <RiskCalculator />
          <ProfitableCard />
        </Stack>
      </Box>
    </>
  );
};

export default Education;

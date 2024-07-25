import { Box } from '@mui/material';
import React from 'react';
import EducationCard from './educationCard';
import RiskCalculator from './riskCalculator';

const Education = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <EducationCard />
        <RiskCalculator />
      </Box>
    </>
  );
};

export default Education;

import { Box } from '@mui/material';
import React from 'react';
import ExaminationCard from './examinationCard';
import WizardLibrary from './wizardLibrary';

const ExaminationPart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <ExaminationCard />
      <WizardLibrary />
    </Box>
  );
};

export default ExaminationPart;

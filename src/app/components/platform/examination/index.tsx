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
        gap: '30px',
        flex: 1,
        width: '100%',
      }}
    >
      <ExaminationCard />
      <WizardLibrary />
    </Box>
  );
};

export default ExaminationPart;

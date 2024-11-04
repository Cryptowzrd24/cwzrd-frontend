import { Box } from '@mui/material';
import React from 'react';
import AirdropCard from './AirdropCard';
import LessonCard from './LessonCard';

const LearningCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '972px',
        height: '380px',
        gap: '24px',
      }}
    >
      <AirdropCard />
      <LessonCard />
    </Box>
  );
};

export default LearningCards;

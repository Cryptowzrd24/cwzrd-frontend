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
        gap: '24px',
        '@media (max-width:768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <AirdropCard />
      <LessonCard />
    </Box>
  );
};

export default LearningCards;

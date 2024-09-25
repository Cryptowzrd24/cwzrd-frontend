import { Box } from '@mui/material';
import React from 'react';
import ProgressCard from './progressCard';

const ProgressCards = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '22px',
        }}
      >
        <ProgressCard
          completed={6}
          total={26}
          color="rgba(114, 72, 247, 1)"
          title="Course Progress"
        />
        <ProgressCard
          completed={49}
          total={76}
          color="rgba(247, 72, 72, 1)"
          title="Library Progress"
        />
        <ProgressCard
          completed={23}
          total={47}
          color="rgba(31, 215, 115, 1)"
          title="Exam Progress"
        />
      </Box>
    </>
  );
};

export default ProgressCards;

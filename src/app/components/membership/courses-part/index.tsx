import { Box } from '@mui/material';
import React from 'react';
import TradingCourse from './TradingCourse';
import WzrdBooks from './WzrdBooks';

const CoursesPart = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '26px',
        '@media (max-width:768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <TradingCourse />
      <WzrdBooks />
    </Box>
  );
};

export default CoursesPart;

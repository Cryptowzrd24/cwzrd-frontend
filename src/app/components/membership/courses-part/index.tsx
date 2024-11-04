import { Box } from '@mui/material';
import React from 'react';
import TradingCourse from './TradingCourse';
import WzrdBooks from './WzrdBooks';

const CoursesPart = () => {
  return (
    <Box
      sx={{
        width: '972px',
        minHeight: '353px',
        display: 'flex',
        gap: '26px',
      }}
    >
      <TradingCourse />
      <WzrdBooks />
    </Box>
  );
};

export default CoursesPart;

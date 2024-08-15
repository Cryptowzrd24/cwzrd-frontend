'use client';
import React from 'react';

import { LinearProgress, styled } from '@mui/material';

function ProgressBar() {
  const progress = 55;
  const CustomLinearProgress = styled(LinearProgress)(({}) => ({
    height: '10px !important',
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    border: '1px solid rgba(230, 230, 230, 1)',
    '& .MuiLinearProgress-bar': {
      borderRadius: 16,
      backgroundColor: 'rgba(230, 230, 230, 1)',
    },
  }));
  return <CustomLinearProgress variant="determinate" value={progress} />;
}

export default ProgressBar;

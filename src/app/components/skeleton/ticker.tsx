import React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';
import { Box, Container } from '@mui/material';
const TickerSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        height={56}
        sx={{ mb: '32px', width: '100%' }}
      />
    </>
  );
};

export default TickerSkeleton;

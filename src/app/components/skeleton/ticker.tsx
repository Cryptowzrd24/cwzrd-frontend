import React from 'react';
import Skeleton from '@mui/material/Skeleton';
const TickerSkeleton = () => {
  return (
    <>
      <Skeleton
        variant="rectangular"
        height={40}
        sx={{ mb: '32px', width: '100%' }}
      />
    </>
  );
};

export default TickerSkeleton;

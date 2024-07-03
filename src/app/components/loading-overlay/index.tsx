import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingOverlay = () => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      background: 'rgba(0, 0, 0, 0.8)',
    }}
  >
    <CircularProgress />
  </Box>
);

export default LoadingOverlay;

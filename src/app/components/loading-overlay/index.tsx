import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const LoadingOverlay = ({ background, color, size, borderRadius }: any) => (
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100%',
      width: '100%',
      background: background ? background : 'rgba(0, 0, 0, 0.8)',
      borderRadius: borderRadius ? borderRadius : '0px',
    }}
  >
    {size ? (
      <CircularProgress size={size} sx={color ? { color: color } : {}} />
    ) : (
      <CircularProgress sx={color ? { color: color } : {}} />
    )}
  </Box>
);

export default LoadingOverlay;

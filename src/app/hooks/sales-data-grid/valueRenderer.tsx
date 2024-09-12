import React from 'react';
import { Box } from '@mui/material';

function ValueRenderer(props: any) {
  return (
    <Box
      sx={{
        fontSize: '13px',
        fontWeight: 400,
        fontFamily: 'Sf Pro Display',
        color: 'rgba(17, 17, 17, 0.8)',
      }}
    >
      {props.value}
    </Box>
  );
}

export default ValueRenderer;

import { Box, Typography } from '@mui/material';
import React from 'react';

function TechnincalHeading() {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '32px',
          fontFamily: 'Sf Pro Display',
          lineHeight: '38.4px',
          letterSpacing: '1.32px',
          color: 'rgba(17, 17, 17, 1)',
        }}
      >
        Ethereum Daily Technicals
      </Typography>
    </Box>
  );
}

export default TechnincalHeading;

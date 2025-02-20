import { Box, Typography } from '@mui/material';
import React from 'react';

function TechnincalHeading() {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '24px',
          fontFamily: 'Sf Pro Display',
          lineHeight: '28.4px',
          letterSpacing: '1.32px',
          color: 'rgba(17, 17, 17, 1)',

          '@media (max-width: 978px)': {
            fontSize: '20px !important',
            lineHeight: '120% !important',
            letterSpacing: '0.2px !important',
          },
        }}
      >
        XRPUSDT Intraday Setup:
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '18.5px',
          fontFamily: 'Sf Pro Display',
          lineHeight: '27px',
          color: 'rgba(17, 17, 17, 0.8)',
          marginTop: '6px',

          '@media (max-width: 978px)': {
            fontSize: '16px !important',
            lineHeight: '145% !important',
          },
        }}
      >
        Bitcoin’s short-term holder realized price rose to $63,729, suggesting a
        definitive breakout above the $70,000 level next.
      </Typography>
    </Box>
  );
}

export default TechnincalHeading;

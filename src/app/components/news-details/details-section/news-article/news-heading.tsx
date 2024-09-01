import { Box, Typography } from '@mui/material';
import React from 'react';

function NewsHeading() {
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
        Bitcoin whale accumulation reaches pre-2020 bull run levels — Is BTC set
        to break $70K?
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: '16px',
          fontFamily: 'Sf Pro Display',
          lineHeight: '24px',
          color: 'rgba(17, 17, 17, 0.8)',
          marginTop: '8px',
        }}
      >
        Bitcoin’s short-term holder realized price rose to $63,729, suggesting a
        definitive breakout above the $70,000 level next.
      </Typography>
    </Box>
  );
}

export default NewsHeading;

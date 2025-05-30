import { Box, Typography } from '@mui/material';
import React from 'react';

function NewsHeading({ isArticleDetails }: { isArticleDetails?: boolean }) {
  return (
    <Box>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: '24px',
          fontFamily: 'Sf Pro Display',
          lineHeight: '28.8px',
          letterSpacing: '1px',
          color: 'rgba(17, 17, 17, 1)',

          '@media (max-width: 978px)': {
            fontSize: '20px !important',
            lineHeight: '120% !important',
            letterSpacing: '0.2px !important',
          },
        }}
      >
        Bitcoin whale accumulation reaches pre-2020 bull run levels — Is BTC set
        to break $70K?
      </Typography>
      <Typography
        sx={{
          fontWeight: 400,
          fontSize: isArticleDetails ? '16px' : '18.5px',
          fontFamily: 'Sf Pro Display',
          lineHeight: isArticleDetails ? '24px' : '27px',
          color: 'rgba(17, 17, 17, 0.8)',
          marginTop: '8px',

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

export default NewsHeading;

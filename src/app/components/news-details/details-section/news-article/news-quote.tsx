import { Box, Typography } from '@mui/material';
import React from 'react';

function NewsQuote({
  quote,
  isArticleDetails,
}: {
  quote: any;
  isArticleDetails?: boolean;
}) {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '24px',
        alignItems: 'start',
        '@media (max-width: 600px)': { gap: '12px' },
      }}
    >
      <Typography
        sx={{
          fontSize: isArticleDetails ? '40px' : '18.5px',
          fontWeight: 700,
          lineHeight: isArticleDetails ? '44px' : 'auto',
          letterSpacing: isArticleDetails ? '0.8px' : 'auto',
          color: 'rgba(17, 17, 17, 1)',
          fontStyle: 'italic',

          '@media (max-width: 978px)': {
            fontSize: '20px !important',
            fontWeight: '500 !important',
            lineHeight: '110% !important',
            letterSpacing: '0.2px !important',
          },
        }}
      >
        ''
      </Typography>
      <Typography
        sx={{
          fontSize: isArticleDetails ? '18px' : '18.5px',
          fontWeight: 700,
          color: 'rgba(17, 17, 17, 1)',
          lineHeight: isArticleDetails ? '23.4px' : '26px',
          letterSpacing: isArticleDetails ? '1px' : '1.35px',
          marginTop: '5px',

          '@media (max-width: 978px)': {
            fontSize: '16px !important',
            fontWeight: '700 !important',
            lineHeight: '130% !important',
            letterSpacing: '0.32px !important',
          },
        }}
      >
        {`${quote}"`}
      </Typography>
    </Box>
  );
}

export default NewsQuote;

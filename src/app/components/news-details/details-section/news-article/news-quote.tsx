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
    <Box sx={{ display: 'flex', gap: '48px', alignItems: 'start' }}>
      <Typography
        sx={{
          fontSize: isArticleDetails ? '40px' : '18.5px',
          fontWeight: 700,
          lineHeight: isArticleDetails ? '44px' : 'auto',
          letterSpacing: isArticleDetails ? '0.8px' : 'auto',
          color: 'rgba(17, 17, 17, 1)',
          fontStyle: 'italic',
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
        }}
      >
        {`"${quote}"`}
      </Typography>
    </Box>
  );
}

export default NewsQuote;

import { Box, Typography } from '@mui/material';
import React from 'react';

function NewsQuote({ quote }: any) {
  return (
    <Box sx={{ display: 'flex', gap: '24px', alignItems: 'start' }}>
      <Typography
        sx={{
          fontSize: '18.5px',
          fontWeight: 700,
          color: 'rgba(17, 17, 17, 1)',
          fontStyle: 'italic',
        }}
      >
        ''
      </Typography>
      <Typography
        sx={{
          fontSize: '18.5px',
          fontWeight: 700,
          color: 'rgba(17, 17, 17, 1)',
          lineHeight: '26px',
          letterSpacing: '1.35px',
          marginTop: '5px',
        }}
      >
        {`"${quote}"`}
      </Typography>
    </Box>
  );
}

export default NewsQuote;

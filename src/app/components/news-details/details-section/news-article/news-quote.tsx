import { Box, Typography } from '@mui/material';
import React from 'react';

function NewsQuote({ quote }: any) {
  return (
    <Box sx={{ display: 'flex', gap: '48px', alignItems: 'start' }}>
      <Typography
        sx={{
          fontSize: '40px',
          fontWeight: 700,
          color: 'rgba(17, 17, 17, 1)',
          fontStyle: 'italic',
        }}
      >
        ''
      </Typography>
      <Typography
        sx={{
          fontSize: '18px',
          fontWeight: 700,
          color: 'rgba(17, 17, 17, 1)',
          lineHeight: '23.4px',
          letterSpacing: '1.35px',
          marginTop: '5px',
          width: '671px',
        }}
      >
        {`"${quote}"`}
      </Typography>
    </Box>
  );
}

export default NewsQuote;

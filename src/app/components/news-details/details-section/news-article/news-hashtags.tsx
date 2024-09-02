import { Box, Typography } from '@mui/material';
import React from 'react';

function NewsHashtags() {
  const renderTags = [
    '#BITCOIN',
    '#cryptocurrencies',
    '#bitcoinprice',
    '#markets',
    '#bitcoinETF',
  ].map((tag) => {
    return (
      <Box
        key={tag}
        sx={{
          borderRadius: '100px',
          padding: '6px 12px',
          background:
            'linear-gradient(180deg, rgba(114, 72, 247, 0.1) 0%, rgba(191, 72, 247, 0.1) 100%)',
        }}
      >
        <Typography
          sx={{
            background: 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 500,
            fontSize: '12px',
            letterSpacing: '1px',
            fontFamily: 'Sf Pro Display',
            lineHeight: '15.6px',
          }}
        >
          {tag.toUpperCase()}
        </Typography>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        borderTop: '1px solid rgba(17, 17, 17, 0.1)',
        borderBottom: '1px solid rgba(17, 17, 17, 0.1)',
        padding: '16px 0',
        display: 'flex',
        gap: '12px',
      }}
    >
      {renderTags}
    </Box>
  );
}

export default NewsHashtags;

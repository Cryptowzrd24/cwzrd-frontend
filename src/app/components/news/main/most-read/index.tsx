import { Box, Divider, Typography } from '@mui/material';
import React from 'react';
import MostReadCard from './most-read-card';

function MostRead() {
  const renderCard = [1, 2, 3, 4].map(() => {
    return <MostReadCard />;
  });
  return (
    <Box
      sx={{
        width: '300px',
        height: '574px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        padding: '24px 20px 24px 20px',
        overflow: 'auto',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
        <Box>
          <Typography
            sx={{
              color: 'rgba(114, 72, 247, 1)',
              fontFamily: 'Sf Pro Display',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '20.8px',
            }}
          >
            📰 Most Read
          </Typography>
        </Box>
        <Divider
          orientation="vertical"
          flexItem
          sx={{
            height: '13px',
            marginTop: '3px',
            borderColor: 'rgba(17, 17, 17, 0.3)',
            borderWidth: '0.5px',
          }}
        />
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
          <Typography>🔥</Typography>
          <Typography
            sx={{
              color: 'rgba(17, 17, 17, 0.3)',
              fontFamily: 'Sf Pro Display',
              fontSize: '16px',
              fontWeight: 700,
              lineHeight: '20.8px',
            }}
          >
            Trending
          </Typography>
        </Box>
      </Box>
      {renderCard}
    </Box>
  );
}

export default MostRead;

import { Box, Divider, Typography, useMediaQuery } from '@mui/material';
import React from 'react';
import MostReadCard from './most-read-card';

function MostRead({
  height,
  width,
  isMainPage,
}: {
  height?: string;
  width?: string;
  isMainPage?: boolean;
}) {
  const renderCard = [1, 2, 3, 4, 5, 6, 7].map(() => {
    return <MostReadCard isMainPage={isMainPage} />;
  });
  const isTabView = useMediaQuery('(max-width: 978px)');
  return (
    <Box
      sx={{
        width: width ? width : '300px',
        height: height ? height : '480px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        padding: isMainPage ? '12px 0px 0px' : '18px 12px 24px 12px',
        overflow: 'auto',
        scrollbarWidth: 'none',

        '@media (max-width: 1380px)': {
          width: 'auto',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: isTabView ? 'space-evenly' : 'center',
          gap: '15px',
        }}
      >
        <Box>
          <Typography
            sx={{
              color: 'rgba(114, 72, 247, 1)',
              fontFamily: 'Sf Pro Display',
              fontSize: '14px !important',
              fontWeight: 600,
              lineHeight: '18.2px',
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <Typography>🔥</Typography>
          <Typography
            sx={{
              color: 'rgba(17, 17, 17, 0.3)',
              fontFamily: 'Sf Pro Display',
              fontSize: '14px !important',
              fontWeight: 600,
              lineHeight: '18.2px',
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

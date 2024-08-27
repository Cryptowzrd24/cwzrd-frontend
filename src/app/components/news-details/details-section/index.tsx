import { Box } from '@mui/material';
import React from 'react';
import ReadingCard from './reading-card';
import MarketNewsPanel from './market-news-panel';
import NewsArticle from './news-article';

function DetailsSection() {
  return (
    <Box sx={{ display: 'flex', gap: '30px', justifyContent: 'space-between' }}>
      <Box sx={{ flex: 0.5 }}>
        <ReadingCard />
      </Box>
      <Box sx={{ flex: 2 }}>
        <NewsArticle />
      </Box>
      <Box sx={{ flex: 0.5 }}>
        <MarketNewsPanel />
      </Box>
    </Box>
  );
}

export default DetailsSection;

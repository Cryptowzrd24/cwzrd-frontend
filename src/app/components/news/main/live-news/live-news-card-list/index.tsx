import React from 'react';
import { Box } from '@mui/material';
import { LiveCardData } from '@/app/components/news-letter/data';
import LiveNewsCard from './live-news-card';

function LiveNewsCardList() {
  return (
    <Box sx={{ overflowY: 'scroll',height:'350px' }}>
      {LiveCardData.slice(0,3).map((card) => (
        <LiveNewsCard
          key={card.id}
          title={card.title}
          desc={card.desc}
          image={card.image}
          id={card.id}
        />
      ))}
    </Box>
  );
}

export default LiveNewsCardList;

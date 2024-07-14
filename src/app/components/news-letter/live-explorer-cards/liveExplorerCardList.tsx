import React from 'react';
import { LiveCardData } from '../data';
import LiveExplorerCard from './liveExplorerCard';
import { Box } from '@mui/material';

function LiveExplorerCardList() {
  return (
    <Box sx={{ overflowY: 'scroll', height: '417px' }}>
      {LiveCardData.map((card) => (
        <LiveExplorerCard
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

export default LiveExplorerCardList;

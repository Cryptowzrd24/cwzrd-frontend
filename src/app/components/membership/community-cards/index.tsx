import { Box } from '@mui/material';
import React from 'react';
import CommunityMember from './CommunityMember';
import CommunityChat from './CommunityChat';
const CommunityCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        gap: '24px',
        boxSizing: 'border-box',
        '@media (max-width:768px)': {
          flexDirection: 'column',
        },
      }}
    >
      <CommunityMember />
      <CommunityChat />
    </Box>
  );
};

export default CommunityCards;

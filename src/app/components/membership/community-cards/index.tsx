import { Box } from '@mui/material';
import React from 'react';
import CommunityMember from './CommunityMember';
import CommunityChat from './CommunityChat';
const CommunityCards = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        gap: '24px',
        height: '423px',
        boxSizing: 'border-box',
      }}
    >
      <CommunityMember />
      <CommunityChat />
    </Box>
  );
};

export default CommunityCards;

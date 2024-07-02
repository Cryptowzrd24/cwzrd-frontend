import React from 'react';
import Card1 from './card1';
import { Box } from '@mui/material';
import Card2 from './card2';
import Card4 from './card4';
import Card3 from './card3';

const Card = () => {
  return (
    <>
      <Box sx={{ display: 'flex', gap: '30px' }}>
        <Card1 />
        <Card2 />
        <Card3 />
        <Card4 />
      </Box>
    </>
  );
};

export default Card;

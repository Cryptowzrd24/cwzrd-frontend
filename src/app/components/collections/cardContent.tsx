'use client';
import { Box, Grid } from '@mui/material';
import React from 'react';
import { cardData } from './data';
import Card from './card';

const CardContent = () => {
  return (
    <Box>
      <Grid container spacing={3}>
        {cardData.map((card) => (
          <Grid item xs={6} sm={4} md={3} key={card.id}>
            <Card {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContent;

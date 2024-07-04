'use client';
import { Grid } from '@mui/material';
import React from 'react';
import { cardData } from './data';
import Card from './card';

const CardContent = () => {
  return (
    <Grid container spacing={3}>
      {cardData.map((card) => (
        <Grid item xs={6} sm={4} md={3} key={card.id}>
          <Card {...card} />
        </Grid>
      ))}
    </Grid>
  );
};

export default CardContent;

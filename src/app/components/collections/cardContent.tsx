'use client';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { cardData } from './data';
import Card from './card';
import RightBlue from '../../../../public/icons/collections/rightBlue';

const CardContent = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '48px',
        }}
      >
        <Typography variant="h5" sx={{ fontSize: '40px', fontWeight: '700' }}>
          {' '}
          Notable Collections
        </Typography>{' '}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          <Typography
            variant="caption"
            sx={{ fontSize: '18px', cursor: 'pointer' }}
          >
            View All
          </Typography>
          <RightBlue />
        </Box>
      </Box>
      <Grid container spacing={3}>
        {cardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={card.id}>
            <Card {...card} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default CardContent;

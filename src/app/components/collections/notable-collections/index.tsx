'use client';
import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import NotableCard from './notableCard';
import { NotableData } from './notableData';
import RightBlue from '../../../../../public/icons/collections/rightBlue';

const NotableCardContent = () => {
  return (
    <Box>
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
        {NotableData.map((card) => (
          <Grid item xs={6} sm={4} md={3} key={card.id}>
            <NotableCard {...card} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NotableCardContent;

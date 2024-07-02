import { Box, Grid } from '@mui/material';
import React from 'react';
import { spotlightCardData } from './data';
import Card from '.';

const CardContent = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: '16px' }}>
      <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {spotlightCardData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card
              img={card.img}
              background={card.background}
              title={card.title}
              subtitle={card.subtitle}
              score={card.score}
              price={card.price}
              change={card.change}
              marketCap={card.marketCap}
              circulationSupply={card.circulationSupply}
              volume={card.volume}
              totalMaxSupply={card.totalMaxSupply}
              graph={card.graph}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContent;

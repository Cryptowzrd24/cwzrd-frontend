'use client';
import { Box, Grid } from '@mui/material';
import React from 'react';
import Card from '.';

type CardData = {
  id: string;
  name: string;
  price: string;
  volume_24h: string;
  percent_change_7d: string;
  market_cap: string;
  circulating_supply: string;
  max_supply: string;
  symbol: string;
  coin_id: string;
  index: number;
};

interface CardContentProps {
  cardsData: CardData[];
}

const CardContent = ({ cardsData }: CardContentProps) => {
  return (
    <Box sx={{ flexGrow: 1, padding: '16px' }}>
      <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {cardsData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card
              title={card.name}
              price={card.price}
              change={card.percent_change_7d}
              marketCap={card.market_cap}
              circulationSupply={card.circulating_supply}
              volume={card.volume_24h}
              totalMaxSupply={card.max_supply}
              symbol={card.symbol}
              coinId={card.coin_id}
              index={card.index}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContent;

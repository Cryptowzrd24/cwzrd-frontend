'use client';
import { Box, Grid } from '@mui/material';
import React from 'react';
import Card from '.';

type CardData = {
  id: string;
  exchange: string;
  score: string;
  trading_volume_24h: string;
  average_liquidity: string;
  weekly_visits: string;
  coins: string;
  markets: string;
  fiat_supported: string;
  ex_id: string;
  index: string;
};

interface CardContentProps {
  cardsData: CardData[];
}

const ExchangeCardContent = ({ cardsData }: CardContentProps) => {
  return (
    <Box sx={{ flexGrow: 1, padding: '16px' }}>
      <Grid container spacing={3} sx={{ display: 'flex', flexWrap: 'wrap' }}>
        {cardsData.map((card) => (
          <Grid item xs={12} sm={6} md={4} key={card.id}>
            <Card
              title={card.exchange}
              price={card.score}
              marketCap={card.average_liquidity}
              circulationSupply={card.markets}
              volume={card.trading_volume_24h}
              totalMaxSupply={card.weekly_visits}
              symbol={card.fiat_supported}
              coinId={card.ex_id}
              index={card.index}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ExchangeCardContent;

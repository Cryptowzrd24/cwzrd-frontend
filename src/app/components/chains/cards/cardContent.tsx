'use client';
import { Box, Grid } from '@mui/material';
import React from 'react';
import Card from './index';

type CardData = {
  id: string;
  name: string;
  market_cap_chain: string;
  market_cap_tvl: string;
  percent_change_1D: string;
  percent_change_1M: string;
  percent_change_1W: string;
  protocols: string;
  coin_id: string;
  index: number;
  tvl: string;
  market_cap: string;
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
              marketCapChain={card.market_cap_chain}
              marketCapTvl={card.tvl}
              percentChange1D={card.percent_change_1D}
              percentChange1M={card.percent_change_1M}
              percentChange1W={card.percent_change_1W}
              protocols={card.protocols}
              coinId={card.coin_id}
              index={card.index}
              marketCap={card.market_cap}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContent;

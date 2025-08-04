'use client';
import { Box, Grid } from '@mui/material';
import React from 'react';
import Card from '.';

type CardData = {
  id: string;
  name: string;
  new_price: string;
  volume_24h: string;
  percent_change_7d: string;
  market_cap: string;
  circulating_supply: string;
  max_supply: string;
  symbol: string;
  coin_id: string;
  index: number;
  chartData: number[];
};

interface CardContentProps {
  cardsData: CardData[];
}

const CardContent = ({ cardsData }: CardContentProps) => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: {
          xs: '8px',
          sm: '12px',
          md: '16px',
        },
      }}
    >
      <Grid
        container
        spacing={{
          xs: 1,
          sm: 2,
          md: 3,
        }}
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: {
            xs: 'center',
            sm: 'center',
            md: 'center',
          },
        }}
      >
        {cardsData.map((card) => (
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            lg={4}
            xl={4}
            key={card.id}
            sx={{
              display: 'flex',
              justifyContent: {
                xs: 'center',
                sm: 'center',
                md: 'center',
              },
            }}
          >
            <Card
              title={card.name}
              price={card.new_price}
              change={card.percent_change_7d}
              marketCap={card.market_cap}
              circulationSupply={card.circulating_supply}
              volume={card.volume_24h}
              totalMaxSupply={card.max_supply}
              symbol={card.symbol}
              coinId={card.coin_id}
              index={card.index}
              chartData={card.chartData}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContent;

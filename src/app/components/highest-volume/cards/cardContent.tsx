'use client';
import { Box, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Card from '.';
import { useFetchCoinDataQuery } from '@/app/redux/reducers/data-grid';

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
};

const CardContent = () => {
  const [itemStart] = useState(1);
  const pageSize = 10;
  const [cardsData, setCardsData] = useState<CardData[]>([]);

  const { data } = useFetchCoinDataQuery({ start: itemStart, pageSize });
  console.log('data----------------------', cardsData);

  useEffect(() => {
    if (data && data.data) {
      const res = data.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.quote.price,
        volume_24h: item.quote.volume_24h,
        percent_change_7d: item.quote.percent_change_30d,
        market_cap: item.quote.market_cap,
        circulating_supply: item.circulating_supply,
        max_supply: item.max_supply ?? 0,
        symbol: item.symbol,
        coin_id: item.coin_id,
      }));

      setCardsData(res);
    }
  }, [data]);
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
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CardContent;

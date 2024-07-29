
import React from 'react';
import Ticker from './ticker';

async function fetchTickerData() {
  const res = await fetch('https://backend.cwzrd.co.uk/api/tickers/');
  const data = await res.json();

  return data.data.map((item: any) => ({
    id: item.id,
    coin_id: item.coin_id,
    symbol: item.symbol,
    new_price: item.quote?.price,
    percent_change_24h: item.quote?.percent_change_24h,
    icon: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.coin_id}.png`,
  }));
}

const TickerServer = async () => {
  const initialData = await fetchTickerData();

  return <Ticker initialData={initialData} />;
};

export default TickerServer;

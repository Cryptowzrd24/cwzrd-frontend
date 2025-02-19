import React from 'react';
import Ticker from './ticker';

async function fetchTickerData() {
  const res = await fetch('https://backend.cwzrd.co.uk/api/tickers/', {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  return data.data.map((item: any) => ({
    id: item.id,
    coin_id: item.coin_id,
    symbol: item.symbol,
    new_price: item.quote?.price,
    percent_change_24h: item.quote?.percent_change_24h,
    icon: `https://backend.cwzrd.co.uk/api/coin-image/?id=${item.coin_id}`,
  }));
}

const TickerServer = async () => {
  // const initialData = await fetchTickerData();

  // return <Ticker initialData={initialData} />;
  return <div></div>;
};

export default TickerServer;

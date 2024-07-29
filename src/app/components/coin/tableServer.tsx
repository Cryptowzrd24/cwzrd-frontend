import React from 'react';
import Table from './table';

async function fetchCoinData(
  page: number,
  pageSize: number,
  filters: string,
  searchString: string,
) {
  const res = await fetch(
    `https://backend.cwzrd.co.uk/api/coins?start=${page}&limit=${pageSize}&filters=${filters}&search=${searchString}`,
    { next: { revalidate: 60 } },
  );
  const data = await res.json();

  console.log(data);

  return data.data.map((item: any, index: number) => ({
    id: item.id,
    coin_id: item.coin_id,
    name: item.name,
    new_price: item.quote.price,
    volume_24h: item.quote.volume_24h,
    percent_change_1h: item.quote.percent_change_1h,
    percent_change_24h: item.quote.percent_change_24h,
    percent_change_7d: item.quote.percent_change_7d,
    market_cap: item.quote.market_cap,
    circulating_supply: item.circulating_supply,
    symbol: item.symbol,
    max_supply: item.max_supply,
    index: (page - 1) * pageSize + 1 + index,
  }));
}

const TableServer = async ({ query }: { query: any }) => {
  const { start = 1, pageSize = 10, filters = '', searchString = '' } = query;
  const initialData = await fetchCoinData(
    start,
    pageSize,
    filters,
    searchString,
  );

  console.log('hello');
  console.log(initialData);

  return <Table initialData={initialData} />;
};

export default TableServer;

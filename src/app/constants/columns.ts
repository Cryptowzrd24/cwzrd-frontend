export const columnsTrending = [
  { field: 'index' },
  { field: 'name' },
  { field: 'price' },
  { field: 'percent_change_24h', headerName: '24h%' },
  { field: 'price_7d', headerName: '7d' },
  { field: 'price_30d', headerName: '30d' },
  { field: 'market_cap' },
  { field: 'volume_24h' },
  { field: 'last7Days' },
];

export const columnsCoin = [
  { field: 'index' },
  { field: 'name' },
  { field: 'price' },
  { field: 'percent_change_1h', headerName: '1h%' },
  { field: 'percent_change_24h', headerName: '24h%' },
  { field: 'percent_change_7d', headerName: '7d%' },
  { field: 'market_cap' },
  { field: 'volume_24h' },
  { field: 'circulating_supply' },
  { field: 'last7Days' },
];

export const columnsNewCoin = [
  { field: 'index' },
  { field: 'name' },
  { field: 'price' },
  { field: 'chain' },
  { field: 'percent_change_1h', headerName: '1h%' },
  { field: 'percent_change_24h', headerName: '24h%' },
  { field: 'volume_24h' },
  { field: 'fdv' },
  { field: 'last7Added' },
];

export const columnsChain = [
  { field: 'index' },
  { field: 'name' },
  { field: 'protocols' },
  { field: 'percent_change_1D', headerName: '1D Change' },
  { field: 'percent_change_1W', headerName: '1W Chg.' },
  { field: 'percent_change_1M', headerName: '1M Change' },
  { field: 'tvl' },
  { field: 'market_cap_chain' },
  { field: 'market_cap_tvl', headerName: 'Market Cap/TVL' },
];

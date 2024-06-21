'use client';
import React from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnChainsDefs from '@/app/hooks/data-grid/column-defination-chains';

const columns = [
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

const data = [
  {
    index: 1,
    name: 'Solana SOL',
    protocols: 930,
    percent_change_1D: 0.02,
    percent_change_1W: 12.58,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 2,
    name: 'Avalanche AVAX',
    protocols: 30,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 3,
    name: 'Terra LUNA',
    protocols: 45,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 4,
    name: 'Binance Coin BNB',
    protocols: 5,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 5,
    name: 'Polygon MATIC',
    protocols: 54,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 6,
    name: 'THETA THETA',
    protocols: 365,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 7,
    name: 'Algorand ALGO',
    protocols: 544,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 8,
    name: 'Tezos XTZ',
    protocols: 520,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 9,
    name: 'Elrond EGLD',
    protocols: 15,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 10,
    name: 'Harmony ONE',
    protocols: 113,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 11,
    name: 'Hedera HBAR',
    protocols: 45,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
  {
    index: 12,
    name: 'Celo CELO',
    protocols: 9,
    percent_change_1D: 0.12,
    percent_change_1W: 8.78,
    percent_change_1M: 12.58,
    tvl: 47.83,
    market_cap_tvl: 'graph',
  },
];

const Table = () => {
  const columnChainsDef = useColumnChainsDefs(columns);

  return (
    <div className="data-table-wrapper">
      <CustomHeader />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable rowData={data} columnDefs={columnChainsDef} width="100%" />
      </div>
    </div>
  );
};

export default Table;

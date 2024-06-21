'use client';
import React from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnNewCoinsDefs from '@/app/hooks/data-grid/column-defination-new-coins';

const columns = [
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

const data = [
  {
    index: 1,
    name: 'Solana SOL',
    price: 6.495,
    chain: 7.37983,
    percent_change_1h: 0.02,
    percent_change_24h: 12.58,
    volume_24h: 1319030534093,
    fdv: 1319030,
    last7Added: '3 Hours Ago',
  },
  {
    index: 2,
    name: 'Avalanche AVAX',
    price: 3.25,
    chain: 7.37983,
    percent_change_1h: 0.12,
    percent_change_24h: 8.78,
    volume_24h: 123123123123,
    fdv: 1319030,
    last7Added: '1 Day Ago',
  },
  {
    index: 3,
    name: 'Terra LUNA',
    price: 5.5,
    chain: 7.37983,
    percent_change_1h: 0.08,
    percent_change_24h: 10.58,
    volume_24h: 32123123123,
    fdv: 1319030,
    last7Added: '2 Days Ago',
  },
  {
    index: 4,
    name: 'Binance Coin BNB',
    price: 400.2,
    chain: 7.37983,
    percent_change_1h: 0.22,
    percent_change_24h: 6.98,
    volume_24h: 4123123123,
    fdv: 1319030,
    last7Added: '5 Days Ago',
  },
  {
    index: 5,
    name: 'Polygon MATIC',
    price: 1.5,
    chain: 7.37983,
    percent_change_1h: 0.3,
    percent_change_24h: 9.32,
    volume_24h: 523123123,
    fdv: 1319030,
    last7Added: '1 Week Ago',
  },
  {
    index: 6,
    name: 'THETA THETA',
    price: 7.8,
    chain: 7.37983,
    percent_change_1h: 0.05,
    percent_change_24h: 15.75,
    volume_24h: 634123123,
    fdv: 1319030,
    last7Added: '3 Days Ago',
  },
  {
    index: 7,
    name: 'Algorand ALGO',
    price: 0.9,
    chain: 7.37983,
    percent_change_1h: 0.18,
    percent_change_24h: 13.45,
    volume_24h: 743212312,
    fdv: 1319030,
    last7Added: '4 Days Ago',
  },
  {
    index: 8,
    name: 'Tezos XTZ',
    price: 4.5,
    chain: 7.37983,
    percent_change_1h: 0.12,
    percent_change_24h: 7.67,
    volume_24h: 85123123,
    fdv: 1319030,
    last7Added: '6 Days Ago',
  },
  {
    index: 9,
    name: 'Elrond EGLD',
    price: 110.0,
    chain: 7.37983,
    percent_change_1h: 0.2,
    percent_change_24h: 14.2,
    volume_24h: 9123123,
    fdv: 1319030,
    last7Added: '2 Weeks Ago',
  },
  {
    index: 10,
    name: 'Harmony ONE',
    price: 0.2,
    chain: 7.37983,
    percent_change_1h: 0.1,
    percent_change_24h: 11.1,
    volume_24h: 1023123,
    fdv: 1319030,
    last7Added: '5 Hours Ago',
  },
];

const Table = () => {
  const columnNewCoinsDef = useColumnNewCoinsDefs(columns);

  return (
    <div className="data-table-wrapper">
      <CustomHeader />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable rowData={data} columnDefs={columnNewCoinsDef} width="100%" />
      </div>
    </div>
  );
};

export default Table;

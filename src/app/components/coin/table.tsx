'use client';
import React from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import DataTable from '@/app/components/data-table';

const columns = [
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

const Table = () => {
  const columnCoinsDef = useColumnCoinDefs(columns);

  return (
    <div className="data-table-wrapper">
      <CustomHeader />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable
          rowData={[
            {
              index: 1,
              name: 'Bitcoin BTC',
              price: 64950,
              percent_change_1h: 0.28,
              percent_change_24h: -4.28,
              percent_change_7d: -2.28,
              market_cap: 13190305393,
              volume_24h: 1319030534093,
              circulating_supply: 1319030534093,
              last7Days: 'graph',
            },
          ]}
          columnDefs={columnCoinsDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

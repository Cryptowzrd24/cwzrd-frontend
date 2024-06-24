'use client';
import React, { useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnNewCoinsDefs from '@/app/hooks/data-grid/column-defination-new-coins';
import { columnsNewCoin } from '@/app/constants/columns';
import { rowDataNewCoins } from '@/app/constants/row';

const Table = () => {
  const columnNewCoinsDef = useColumnNewCoinsDefs(columnsNewCoin);

  const [search, setSearch] = useState('');

  return (
    <div className="data-table-wrapper">
      <CustomHeader search={search} setSearch={setSearch} />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable
          search={search}
          rowData={rowDataNewCoins}
          columnDefs={columnNewCoinsDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

'use client';
import React, { useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import DataTable from '@/app/components/data-table';
import { columnsCoin } from '@/app/constants/columns';
import { rowDataCoin } from '@/app/constants/row';
import { Pagination } from '@/app/components/data-table/pagination';

const Table = () => {
  const columnCoinsDef = useColumnCoinDefs(columnsCoin);

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
          rowData={rowDataCoin}
          columnDefs={columnCoinsDef}
          width="100%"
        />
      </div>
      <Pagination />
    </div>
  );
};

export default Table;

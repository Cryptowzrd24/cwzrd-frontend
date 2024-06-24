'use client';
import React, { useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsExchanges } from '@/app/constants/columns';
import { rowDataExchange } from '@/app/constants/row';
import useColumnExchangeDefs from '@/app/hooks/data-grid/column-defination-exchange';

const Table = () => {
  const columnExchangesDef = useColumnExchangeDefs(columnsExchanges);

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
          rowData={rowDataExchange}
          columnDefs={columnExchangesDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

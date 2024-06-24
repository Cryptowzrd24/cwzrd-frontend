'use client';
import React, { useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnChainsDefs from '@/app/hooks/data-grid/column-defination-chains';
import { columnsChain } from '@/app/constants/columns';
import { rowDataChains } from '@/app/constants/row';

const Table = () => {
  const columnChainsDef = useColumnChainsDefs(columnsChain);

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
          rowData={rowDataChains}
          columnDefs={columnChainsDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

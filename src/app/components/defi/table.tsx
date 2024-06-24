'use client';
import React, { useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsDefi } from '@/app/constants/columns';
import { rowDataDefi } from '@/app/constants/row';
import useColumnDefiDefs from '@/app/hooks/data-grid/column-defination-defi';

const Table = () => {
  const columnDefiDef = useColumnDefiDefs(columnsDefi);

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
          rowData={rowDataDefi}
          columnDefs={columnDefiDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

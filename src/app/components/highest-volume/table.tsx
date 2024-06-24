'use client';
import React, { useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsHighestVol } from '@/app/constants/columns';
import { rowDataHighestVol } from '@/app/constants/row';
import useColumnHighestVolDefs from '@/app/hooks/data-grid/column-defination-highest-vol';

const Table = () => {
  const columnDefiDef = useColumnHighestVolDefs(columnsHighestVol);

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
          rowData={rowDataHighestVol}
          columnDefs={columnDefiDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

'use client';
import React, { useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsTrending } from '@/app/constants/columns';
import useColumnTrendingDefs from '@/app/hooks/data-grid/column-defination-trending';
import { rowDataTrending } from '@/app/constants/row';

const Table = () => {
  const columnTrendingDef = useColumnTrendingDefs(columnsTrending);

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
          rowData={rowDataTrending}
          columnDefs={columnTrendingDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

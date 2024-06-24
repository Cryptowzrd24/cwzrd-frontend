'use client';
import React, { useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsAirdrops } from '@/app/constants/columns';
import { rowAirdrops } from '@/app/constants/row';
import useColumnAirdropsDefs from '@/app/hooks/data-grid/column-defination-airdrops';

import './index.css';

const Table = () => {
  const columnAirDropsDef = useColumnAirdropsDefs(columnsAirdrops);

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
          rowData={rowAirdrops}
          columnDefs={columnAirDropsDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

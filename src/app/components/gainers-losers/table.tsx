'use client';
import React, { useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnGainersDefs from '@/app/hooks/data-grid/column-defination-gainers';
import useColumnLosersDefs from '@/app/hooks/data-grid/column-defination-losers';
import { columnsGainers, columnsLosers } from '@/app/constants/columns';
import { rowDataGainers, rowDataLosers } from '@/app/constants/row';

const Table = () => {
  const columnGainersDef = useColumnGainersDefs(columnsGainers);
  const columnLosersDef = useColumnLosersDefs(columnsLosers);

  const [search, setSearch] = useState('');

  return (
    <div className="data-table-wrapper">
      <CustomHeader search={search} setSearch={setSearch} />
      <div
        style={{
          display: 'flex',
          gap: '36px',
          borderTop: '1px solid #1111111A',
          paddingTop: '24px',
        }}
      >
        <DataTable
          search={search}
          title={'Top Gainers'}
          rowData={rowDataGainers}
          columnDefs={columnGainersDef}
          width="50%"
        />
        <DataTable
          search={search}
          title={'Top Losers'}
          rowData={rowDataLosers}
          columnDefs={columnLosersDef}
          width="50%"
        />
      </div>
    </div>
  );
};

export default Table;

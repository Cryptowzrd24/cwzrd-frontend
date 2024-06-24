'use client';
import React, { useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsCategories } from '@/app/constants/columns';
import { rowDataCategory } from '@/app/constants/row';
import useColumnCategoryDefs from '@/app/hooks/data-grid/column-defination-categories';

const Table = () => {
  const columnCategoryDef = useColumnCategoryDefs(columnsCategories);

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
          rowData={rowDataCategory}
          columnDefs={columnCategoryDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

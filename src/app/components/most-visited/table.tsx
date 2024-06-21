'use client';
import React from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsMostVisited } from '@/app/constants/columns';
import { rowDataMostVisited } from '@/app/constants/row';
import useColumnMostVisitedDefs from '@/app/hooks/data-grid/column-defination-most-visit';

const Table = () => {
  const columnMostVisitedDef = useColumnMostVisitedDefs(columnsMostVisited);

  return (
    <div className="data-table-wrapper">
      <CustomHeader />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable
          rowData={rowDataMostVisited}
          columnDefs={columnMostVisitedDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

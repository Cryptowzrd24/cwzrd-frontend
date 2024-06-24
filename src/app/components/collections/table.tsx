'use client';
import React from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsCollections } from '@/app/constants/columns';
import { rowDataCollections } from '@/app/constants/row';
import useColumnCollectionsDefs from '@/app/hooks/data-grid/column-defination-collections';

const Table = () => {
  const columnCollectionsDef = useColumnCollectionsDefs(columnsCollections);

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
          rowData={rowDataCollections}
          columnDefs={columnCollectionsDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

'use client';
import React from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import DataTable from '@/app/components/data-table';
import { columnsCoin } from '@/app/constants/columns';
import { rowDataCoin } from '@/app/constants/row';

const Table = () => {
  const columnCoinsDef = useColumnCoinDefs(columnsCoin);

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
          rowData={rowDataCoin}
          columnDefs={columnCoinsDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

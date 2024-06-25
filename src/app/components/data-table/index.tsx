'use client';
import React, { memo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './index.css';
import { Typography } from '@mui/material';

interface DataTableProps {
  title?: string;
  rowData: any[];
  columnDefs: any[];
  height?: number;
  width?: string;
  search?: string;
}

const DataTable = memo(
  ({
    title,
    rowData,
    columnDefs,
    height = 907,
    width = '100%',
    search = '',
  }: DataTableProps) => {
    return (
      <div className="ag-theme-material" style={{ height, width }}>
        {title && (
          <Typography mb={'24px'} variant={'h6'}>
            {title}
          </Typography>
        )}
        <AgGridReact
          suppressHorizontalScroll={true}
          rowData={rowData}
          columnDefs={columnDefs}
          suppressRowClickSelection={true}
          pagination={true}
          suppressPaginationPanel={true}
          tooltipShowDelay={0}
          paginationPageSize={10}
          quickFilterText={search}
          rowStyle={{
            fontFamily: 'SF Pro Display',
            fontSize: 16,
            fontWeight: 400,
          }}
        />
      </div>
    );
  },
);

export default DataTable;

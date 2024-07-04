'use client';
import React, { memo, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './index.css';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { ArrowRight } from '../../../../public/icons/arrowRight';

interface DataTableProps {
  title?: string;
  rowData: any[];
  columnDefs: any[];
  width?: string;
  search?: string;
  seeMore?: string;
}

const DataTable = memo(
  ({
    title,
    rowData,
    columnDefs,
    width = '100%',
    search = '',
    seeMore = '',
  }: DataTableProps) => {
    const modifiedColumnDefs = useMemo(
      () =>
        columnDefs.map((colDef) => ({
          ...colDef,
          suppressMovable: true,
          resizable: false,
        })),
      [columnDefs],
    );

    return (
      <div
        className="ag-theme-material"
        style={{ width, height: 'auto', overflow: 'visible' }}
      >
        {title && (
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '24px',
            }}
          >
            <Typography variant={'h6'}>{title}</Typography>
            {seeMore && (
              <Link
                style={{
                  color: '#7248F7',
                  fontWeight: '700',
                  fontSize: '16px',
                  lineHeight: '26.4px',
                  textDecoration: 'none',
                  marginTop: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '4px',
                }}
                href={seeMore}
              >
                See More
                <ArrowRight />
              </Link>
            )}
          </Box>
        )}
        <AgGridReact
          suppressHorizontalScroll={true}
          rowData={rowData}
          columnDefs={modifiedColumnDefs}
          suppressRowClickSelection={true}
          pagination={true}
          suppressPaginationPanel={true}
          tooltipShowDelay={0}
          quickFilterText={search}
          tooltipInteraction={true}
          rowStyle={{
            fontFamily: 'SF Pro Display',
            fontSize: 16,
            fontWeight: 400,
          }}
          domLayout="autoHeight"
        />
      </div>
    );
  },
);

export default DataTable;

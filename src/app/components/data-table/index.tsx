'use client';
// import ReactDOMServer from 'react-dom/server';
import React, { memo, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './index.css';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { ArrowRight } from '../../../../public/icons/arrowRight';
// import LoadingOverlay from '../loading-overlay';

interface DataTableProps {
  title?: string;
  rowData: any[];
  columnDefs: any[];
  height?: number;
  width?: string;
  search?: string;
  seeMore?: string;
  // onGridReady?: any;
}

const DataTable = memo(
  ({
    title,
    rowData,
    columnDefs,
    height = 907,
    width = '100%',
    search = '',
    seeMore = '',
    // onGridReady,
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

    // const loadingOverlayTemplate = ReactDOMServer.renderToString(
    //   <LoadingOverlay />,
    // );
    return (
      <div className="ag-theme-material" style={{ height, width }}>
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
          // onGridReady={onGridReady}
          // overlayLoadingTemplate={loadingOverlayTemplate}
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

'use client';
import React, { memo, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './index.css';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { ArrowRight } from '../../../../public/icons/arrowRight';
import { priceNumberFormatter } from '@/utils/price-number-formater';
import { useRouter } from 'next/navigation';

interface DataTableProps {
  title?: string;
  rowData: any[];
  columnDefs: any[];
  width?: string;
  search?: string;
  seeMore?: string;
  gridApiRef?: React.MutableRefObject<any>;
  getRowId?: any;
  priceRefs?: React.MutableRefObject<{ [key: string]: HTMLDivElement | null }>;
  height?: string;
  rowHeight?: number;
}

const DataTable = memo(
  ({
    title,
    rowData,
    columnDefs,
    width = '100%',
    seeMore = '',
    gridApiRef,
    getRowId = undefined,
    priceRefs,
    height,
    rowHeight,
  }: DataTableProps) => {
    const router = useRouter();
    const modifiedColumnDefs = useMemo(
      () =>
        columnDefs.map((colDef) => {
          if (colDef.field === 'price') {
            return {
              ...colDef,
              cellRenderer: (params: any) => {
                const ref = (el: any) => {
                  if (priceRefs) {
                    priceRefs.current[params.data.coin_id] = el;
                  }
                  if (el) {
                    el.innerText = `$${priceNumberFormatter(params.value)}`;
                  }
                };
                return <div ref={ref} />;
              },
            };
          }
          return {
            ...colDef,
            suppressMovable: true,
            resizable: false,
          };
        }),
      [columnDefs, priceRefs],
    );

    return (
      <div
        className="ag-theme-material"
        style={{
          width,
          minHeight: height ? height : 'auto',
          overflow: 'hidden',
        }}
      >
        {title && (
          <Box
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '16px',
            }}
          >
            <Typography variant={'h6'}>{title}</Typography>
            {seeMore && (
              <Link
                style={{
                  color: '#7248F7',
                  fontWeight: '700',
                  fontSize: '14px',
                  lineHeight: 1,
                  textDecoration: 'none',
                  marginTop: '2px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '2px',
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
          tooltipInteraction={true}
          {...(rowHeight ? { rowHeight } : {})}
          rowStyle={{
            fontFamily: 'SF Pro Display',
            fontSize: 13,
            fontWeight: 400,
          }}
          domLayout={'autoHeight'}
          onGridReady={(params) => {
            if (gridApiRef) gridApiRef.current = params.api;
          }}
          {...(typeof getRowId !== 'undefined' ? { getRowId } : {})}
          onRowClicked={(event: any) => {
            if (event.data.coin_id === undefined) return;
            if (event?.event && event?.event?.target?.src?.includes('Star'))
              return;
            router.push(`/market/coin-details/${event.data.coin_id}`);
          }}
        />
      </div>
    );
  },
);

export default DataTable;

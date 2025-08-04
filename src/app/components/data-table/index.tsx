'use client';
import React, { memo, useMemo } from 'react';
import { AgGridReact } from 'ag-grid-react';
import './index.css';
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import { ArrowRight } from '../../../../public/icons/arrowRight';
import { priceNumberFormatter } from '@/utils/price-number-formater';
import { usePathname, useRouter } from 'next/navigation';

/**
 * DataTable Component with Pinned Columns Support
 * 
 * To use pinned columns, pass the pinnedColumns prop with an array of column field names:
 * 
 * Example usage:
 * <DataTable
 *   rowData={data}
 *   columnDefs={columns}
 *   pinnedColumns={['index', 'name']} // These columns will stay visible when scrolling horizontally
 * />
 * 
 * The pinned columns will remain visible on the left side while the rest of the table scrolls horizontally.
 * By default, 'index' and 'name' columns are pinned if no pinnedColumns prop is provided.
 */

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
  getAirDropMain?: boolean;
  pinnedColumns?: string[]; // Array of column field names to pin
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
    getAirDropMain = false,
    pinnedColumns = ['index', 'name'], // Default pinned columns
  }: DataTableProps) => {
    const router = useRouter();
    const pathname = usePathname();

    const modifiedColumnDefs = useMemo(
      () =>
        columnDefs.map((colDef) => {
          // Add pinned property for specified columns
          const isPinned = pinnedColumns.includes(colDef.field);
          
          if (colDef.field === 'price') {
            return {
              ...colDef,
              pinned: isPinned ? 'left' : undefined,
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
            pinned: isPinned ? 'left' : undefined,
            suppressMovable: true,
            resizable: false,
          };
        }),
      [columnDefs, priceRefs, pinnedColumns],
    );

    return (
      <div
        className="ag-theme-material"
        style={{
          width,
          height,
          maxHeight: '400px',
          minHeight: height ? height : 'auto',
          overflowX: 'auto',
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
          suppressHorizontalScroll={false}
          rowData={rowData}
          columnDefs={modifiedColumnDefs}
          suppressRowClickSelection={false}
          pagination={true}
          suppressPaginationPanel={true}
          tooltipShowDelay={400}
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
            if (
              pathname.includes(`market/coin-details/`) ||
              pathname.includes(`market/nft-details`)
            ) {
              return;
            }

            if (event?.data?.contract_id && event?.data?.alias) {
              router.push(
                `/market/nft-details/${event?.data?.contract_id}/${event?.data?.alias}`,
              );
            }

            if (getAirDropMain) {
              router.push('/market/airdrops-main');
            }

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

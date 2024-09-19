'use client';
import { SalesAddresses } from '@/app/components/data-table/sales-data/addresses';
import { SalesItems } from '@/app/components/data-table/sales-data/items';
import { useMemo } from 'react';

import ValueRenderer from '../sales-data-grid/valueRenderer';

const useColumnActivityDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            width: 70,
          };
        case 'item':
          return {
            field: 'item',
            headerName: 'Items',
            cellRenderer: SalesItems,
            width: 180,
          };
        case 'transaction':
          return {
            field: 'transaction',
            headerName: 'Transaction Type',
            width: 160,
          };

        case 'addresses':
          return {
            field: 'addresses',
            cellRenderer: SalesAddresses,
            width: 385,
          };
        case 'Price':
          return {
            field: 'Price',
            headerName: 'Price',
            cellRenderer: ValueRenderer,
            width: 165,
          };
        case 'gas':
          return {
            field: 'gas',
            cellRenderer: ValueRenderer,
            width: 115,
          };
        case 'ago_1h':
          return {
            field: 'ago_1h',
            headerName: '1hAgo',

            width: 115,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnActivityDefs;

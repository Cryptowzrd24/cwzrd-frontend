'use client';
import { SalesAddresses } from '@/app/components/data-table/sales-data/addresses';
import { SalesItems } from '@/app/components/data-table/sales-data/items';
import { useMemo } from 'react';

import ValueRenderer from './valueRenderer';
import { DateAdded } from '@/app/components/data-table/date-component';

const useColumnSalesDefs = (columns: any) => {
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
        case 'rarity':
          return {
            field: 'rarity',
            headerName: 'Rarity',
            width: 50,
          };

        case 'addresses':
          return {
            field: 'addresses',
            cellRenderer: SalesAddresses,
            width: 485,
          };
        case 'Price':
          return {
            field: 'Price',
            headerName: 'Price',
            cellRenderer: ValueRenderer,
            width: 285,
          };
        case 'gas':
          return {
            field: 'gas',
            cellRenderer: ValueRenderer,
            width: 300,
          };
        case 'ago_1h':
          return {
            field: 'ago_1h',
            headerName: 'Date',
            cellRenderer: DateAdded,
            width: 115,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnSalesDefs;

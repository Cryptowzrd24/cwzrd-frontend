'use client';
import { SalesAddresses } from '@/app/components/data-table/sales-data/addresses';
import { SalesItems } from '@/app/components/data-table/sales-data/items';
import { useMemo } from 'react';

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

            width: 385,
          };
        case 'price':
          return {
            field: 'price',
            width: 65,
          };
        case 'gas':
          return {
            field: 'gas',
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

export default useColumnSalesDefs;

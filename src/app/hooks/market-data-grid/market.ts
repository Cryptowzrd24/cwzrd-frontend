'use client';

import { Hash } from '@/app/components/data-table/market-data/hash';
import MarketPlace from '@/app/components/data-table/market-data/market-place';
import { useMemo } from 'react';

const useColumnMarketDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            cellRenderer: Hash, 
            width: 70,
          };

        case 'market_place':
          return {
            field: 'market_place',
            headerName: 'Market Place',
            width: 320,
            cellRenderer: MarketPlace,
          };
        case 'distribution_7d':
          return {
            field: 'distribution_7d',
            headerName: '7D Distribution',
            width: 250,
          };

        case 'royalty':
          return {
            field: 'royalty',
            headerName: 'Royalty',

            width: 185,
          };
        case 'service_fee':
          return {
            field: 'service_fee',
            width: 125,
            headerName: 'Service Fee',

          };
        case 'floor_price':
          return {
            field: 'floor_price',
            width: 175,
            headerName: 'Floor Price',
          };

        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnMarketDefs;

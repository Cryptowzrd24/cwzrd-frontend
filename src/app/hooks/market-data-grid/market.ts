'use client';

import { Hash } from '@/app/components/data-table/market-data/hash';
import MarketPlace from '@/app/components/data-table/market-data/market-place';
import { getResponsiveWidth } from '@/utils/getTableResponsiveWidth';
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
            pinned: 'left',
            cellClass: 'tight-cell',
            width: getResponsiveWidth(70, 70, 50),
          };

        case 'market_place':
          return {
            field: 'market_place',
            headerName: 'Market Place',
            cellRenderer: MarketPlace,
            pinned: 'left',
            cellClass: 'tight-cell',
            width: getResponsiveWidth(320, 140, 110),
          };
        case 'distribution_7d':
          return {
            field: 'distribution_7d',
            headerName: '7D Distribution',
            width: 270,
            valueFormatter: (p: any) => {
              const value = p.value;
              return value !== undefined ? value + '%' : '--';
            },
          };
        case 'distribution_24h':
          return {
            field: 'distribution_24h',
            headerName: '24h Distribution',
            width: 270,
            valueFormatter: (p: any) => {
              const value = p.value;
              return value !== undefined ? value + '%' : '--';
            },
          };
        case 'distribution_30d':
          return {
            field: 'distribution_30d',
            headerName: '30d Distribution',
            width: 270,
            valueFormatter: (p: any) => {
              const value = p.value;
              return value !== undefined ? value + '%' : '--';
            },
          };

        case 'royalty':
          return {
            field: 'royalty',
            headerName: 'Royalty',
            width: 270,
            valueFormatter: (p: any) => {
              const value = p.value;

              if (value !== undefined && value !== null) {
                return value;
              } else {
                return '--';
              }
            },
          };
        case 'service_fee':
          return {
            field: 'service_fee',
            width: 270,
            headerName: 'Service Fee',
            valueFormatter: (p: any) => {
              const value = p.value;

              return value + '%';
            },
          };
        case 'floor_price':
          return {
            field: 'floor_price',
            width: 175,
            headerName: 'Floor Price',
            valueFormatter: (p: any) => {
              const value = p.value;

              if (value !== undefined && value !== null) {
                return value + ' ' + p.data.trade_symbol;
              } else {
                return '--';
              }
            },
          };

        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnMarketDefs;

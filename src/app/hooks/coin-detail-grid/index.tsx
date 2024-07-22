import { useMemo } from 'react';

import { ID } from '@/app/components/data-table/id';
import { Exchange } from '@/app/components/data-table/coin-detail/exchange';

const useColumnCoinDetailDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            cellRenderer: ID,
            width: 70,
          };
        case 'exchange':
          return {
            field: 'exchange',
            headerName: 'Exchange',
            cellRenderer: Exchange,
            width: 125,
          };
        case 'pair':
          return {
            field: 'pair',
            headerName: 'Pair',
            width: 120,
            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'new_price':
          return {
            field: 'new_price',
            headerName: 'Price',
            width: 130,

            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'depth_positive2':
          return {
            field: 'depth_positive2',
            headerName: '+2% Depth',
            width: 130,
            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'depth_negative2':
          return {
            field: 'depth_negative2',
            headerName: '-2% Depth',
            width: 130,
            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'volume_24h':
          return {
            field: 'volume_24h',
            headerName: 'Volume(24h)',
            width: 145,
            // cellRenderer: VolumeComponent,
          };
        case 'volume':
          return {
            field: 'volume',
            headerName: 'Volume%',
            width: 125,
          };
        case 'confidence':
          return {
            field: 'confidence',
            headerName: 'Confidence',

            width: 120,
          };
        case 'liquidity_store':
          return {
            field: 'liquidity_store',
            width: 150,
            headerName: 'Liquidity Store',
            // cellRenderer: GraphComp,
          };
        case 'updated':
          return {
            field: 'updated',
            width: 100,
            headerName: 'Updated',
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnCoinDetailDefs;

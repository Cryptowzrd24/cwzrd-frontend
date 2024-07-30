import { useMemo } from 'react';

import { ID } from '@/app/components/data-table/id';
import { Exchange } from '@/app/components/data-table/coin-detail/exchange';
import NewCoin from '@/app/components/data-table/price';
import {
  priceNumberFormatDigits,
  priceNumberFormatter,
} from '@/utils/price-number-formater';
import { DateAdded } from '@/app/components/data-table/date-component';

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
            width: 165,
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
            cellRenderer: NewCoin,

            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'index_price':
          return {
            field: 'index_price',
            headerName: 'Index price',
            width: 130,
            cellRenderer: NewCoin,

            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'depth_positive2':
          return {
            field: 'depth_positive2',
            headerName: '+2% Depth',
            width: 130,
            valueFormatter: (p: any) => priceNumberFormatDigits(p.value),
            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'depth_negative2':
          return {
            field: 'depth_negative2',
            headerName: '-2% Depth',
            width: 130,
            valueFormatter: (p: any) => priceNumberFormatDigits(p.value),
            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'volume_24h':
          return {
            field: 'volume_24h',
            headerName: 'Volume(24h)',
            width: 145,
            valueFormatter: (p: any) => priceNumberFormatDigits(p.value),
            // cellRenderer: VolumeComponent,
          };
        case 'volume':
          return {
            field: 'volume',
            headerName: 'Volume%',
            width: 135,
            valueFormatter: (p: any) => {
              return priceNumberFormatter(p.value) + '%';
            },
          };
        case 'basis':
          return {
            field: 'basis',
            headerName: 'Basis',
            width: 135,
            valueFormatter: (p: any) => {
              return priceNumberFormatter(p.value) + '%';
            },
          };
        case 'confidence':
          return {
            field: 'confidence',
            headerName: 'Confidence',
            width: 110,
          };
        case 'liquidity_store':
          return {
            field: 'liquidity_store',
            width: 130,
            headerName: 'Liquidity Store',
            // cellRenderer: GraphComp,
          };
        case 'funding_rate':
          return {
            field: 'funding_rate',
            width: 130,
            headerName: 'Funding rate',
            // cellRenderer: GraphComp,
          };
        case 'open_interest':
          return {
            field: 'open_interest',
            width: 130,
            headerName: 'Open interest',
            // cellRenderer: GraphComp,
          };
        case 'expiry_date':
          return {
            field: 'expiry_date',
            width: 130,
            headerName: 'Expiry date',
            // cellRenderer: GraphComp,
          };
        case 'updated':
          return {
            field: 'updated',
            width: 100,
            headerName: 'Updated',
            cellRenderer: DateAdded,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnCoinDetailDefs;

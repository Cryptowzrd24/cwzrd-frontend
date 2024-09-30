import { useMemo } from 'react';

import { ID } from '@/app/components/data-table/id';
import { Exchange } from '@/app/components/data-table/coin-detail/exchange';
import NewCoin from '@/app/components/data-table/price';
import {
  priceNumberFormatDigits,
  priceNumberFormatter,
} from '@/utils/price-number-formater';
import { DateAdded } from '@/app/components/data-table/date-component';
import ThresholdCellRenderer from './thresholdCellRenderer';
import Confidence from './confidence';

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
            width: 185,
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
            width: 110,
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
            width: 135,
            valueFormatter: (p: any) => priceNumberFormatDigits(p.value),
            // cellRenderer: VolumeComponent,
          };
        case 'volume':
          return {
            field: 'volume',
            headerName: 'Volume%',
            width: 100,
            valueFormatter: (p: any) => {
              return priceNumberFormatter(p.value) + '%';
            },
          };
        case 'basis':
          return {
            field: 'basis',
            headerName: 'Basis',
            width: 75,
            cellRenderer: ThresholdCellRenderer,
          };
        case 'confidence':
          return {
            field: 'confidence',
            headerName: 'Confidence',
            width: 110,
            cellRenderer: Confidence,
          };
        case 'liquidity_store':
          return {
            field: 'liquidity_store',
            width: 130,
            headerName: 'Liquidity Store',
            valueFormatter: (p: any) => {
              return Math.floor(p.value);
            },
            // cellRenderer: GraphComp,
          };
        case 'funding_rate':
          return {
            field: 'funding_rate',
            width: 130,
            headerName: 'Funding rate',
            cellRenderer: ThresholdCellRenderer,
            // cellRenderer: GraphComp,
          };
        case 'open_interest':
          return {
            field: 'open_interest',
            width: 150,
            headerName: 'Open interest',
            valueFormatter: (p: any) => {
              return '$' + priceNumberFormatDigits(p.value);
            },
            // cellRenderer: GraphComp,
          };
        case 'expiry_date':
          return {
            field: 'expiry_date',
            width: 170,
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

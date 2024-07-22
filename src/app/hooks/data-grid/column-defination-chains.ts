import { useMemo } from 'react';
import { HeaderComponent } from '@/app/components/data-table/header';
import { CurrencyNameComponent } from '@/app/components/data-table/name';
import { ID } from '@/app/components/data-table/id';
import { GraphComp } from '../../components/data-table/graph';

import {
  priceNumberFormatDigits,
  priceNumberFormatter,
} from '@/utils/price-number-formater';
import { getPercentStyle } from '@/utils/profit-loss-color';
import { profitLossCheck } from '@/utils/profit-loss-val-check';

const useColumnChainsDefs = (columns: any) => {
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
        case 'name':
          return {
            field: 'name',
            headerName: 'Name',
            cellRenderer: CurrencyNameComponent,
            width: 260,
          };

        case 'protocols':
          return {
            field: 'protocols',
            headerName: 'Protocols',
            width: 120,
            valueFormatter: (p: any) => priceNumberFormatter(p.value),
          };
        case 'percent_change_1D':
        case 'percent_change_1W':
        case 'percent_change_1M':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 120,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;
              const formattedValue = priceNumberFormatDigits(value) + ' %';
              return profitLossCheck(formattedValue);
            },
          };
        case 'market_cap_tvl':
          return {
            field: 'market_cap_tvl',
            width: 165,
            // headerComponent: HeaderComponent,
            headerName: 'Market Cap/TVL',
            cellRenderer: GraphComp,
          };
        case 'market_cap_chain':
          return {
            field: 'market_cap',
            headerComponent: HeaderComponent,
            width: 165,
            cellRenderer: GraphComp,
          };
        case 'tvl':
          return {
            field: 'tvl',
            width: 190,
            headerName: 'TVL',
            // headerComponent: HeaderComponent,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnChainsDefs;

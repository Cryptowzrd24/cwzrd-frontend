import { useMemo } from 'react';
import { HeaderComponent } from '@/app/components/data-table/header';
import { CurrencyNameComponent } from '@/app/components/data-table/name';
import { ID } from '@/app/components/data-table/id';
import { GraphComp } from '../../components/data-table/graph';

import { priceNumberFormatter } from '@/utils/price-number-formater';
import { getPercentStyle } from '@/utils/profit-loss-color';
import { profitLossCheck } from '@/utils/profit-loss-val-check';
import { priceNumberFormatDigits } from '@/utils/price-number-formatter-4digits';

const useColumnTrendingDefs = (columns: any) => {
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
            width: 200,
          };
        case 'price':
          return {
            field: 'price',
            headerName: 'Price',
            width: 160,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'percent_change_1h':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 95,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;
              const formattedValue = priceNumberFormatter(value) + ' %';
              return profitLossCheck(formattedValue);
            },
          };
        case 'percent_change_7d':
        case 'percent_change_24h':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 155,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;
              const formattedValue = priceNumberFormatDigits(value) + ' %';
              return profitLossCheck(formattedValue);
            },
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerComponent: HeaderComponent,
            width: 185,
            valueFormatter: (p: any) =>
              '$' + Math.round(p.value).toLocaleString(),
          };
        case 'volume_24h':
          return {
            field: 'volume_24h',
            headerComponent: HeaderComponent,
            width: 170,
            valueFormatter: (p: any) =>
              '$' + Math.round(p.value).toLocaleString(),
          };
        case 'last7Days':
          return {
            field: 'last7Days',
            width: 155,
            headerName: 'Last 7 Days',
            cellRenderer: GraphComp,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnTrendingDefs;

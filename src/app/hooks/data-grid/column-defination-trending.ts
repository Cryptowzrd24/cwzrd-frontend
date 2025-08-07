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
import NewCoin from '@/app/components/data-table/price';
import { getResponsiveWidth } from '@/utils/getTableResponsiveWidth';

const useColumnTrendingDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            cellRenderer: ID,
            pinned: 'left',
            width: getResponsiveWidth(70, 70, 60),
            cellClass: 'tight-cell',
          };
        case 'name':
          return {
            field: 'name',
            headerName: 'Name',
            cellRenderer: CurrencyNameComponent,
            width: getResponsiveWidth(220, 170, 125),
            pinned: 'left',
            headerClass: 'left-align-header',
            cellClass: 'tight-cell',
          };
        case 'new_price':
          return {
            field: 'new_price',
            headerName: 'Price',
            width: 170,
            cellRenderer: NewCoin,
          };
        case 'percent_change_1h':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 120,
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
            width: 120,
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

import { useMemo } from 'react';
import { HeaderComponent } from '@/app/components/data-table/header';
import { ID } from '@/app/components/data-table/id';
import { GraphComp } from '../../components/data-table/graph';

import { priceNumberFormatter } from '@/utils/price-number-formater';
import { getPercentStyle } from '@/utils/profit-loss-color';
import { profitLossCheck } from '@/utils/profit-loss-val-check';
import { TopGainers } from '@/app/components/data-table/top-gainers';
import { CategoryName } from '@/app/components/data-table/category-name';
import { priceNumberFormatDigits } from '@/utils/price-number-formatter-4digits';

const useColumnCategoryDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            cellRenderer: ID,
            width: 40,
          };
        case 'category':
          return {
            field: 'category',
            headerName: 'Category',
            cellRenderer: CategoryName,
            width: 140,
          };
        case 'top_gainers':
          return {
            field: 'top_gainers',
            headerName: 'Top Gainers',
            width: 140,
            cellRenderer: TopGainers,
          };
        case 'percent_change_1h':
          return {
            field: col.field,
            headerName: col.headerName,
            width: 100,
            cellStyle: (p: any) => getPercentStyle(p.value),
            valueFormatter: (p: any) => {
              const value = p.value;
              const formattedValue = priceNumberFormatDigits(value) + ' %';
              return profitLossCheck(formattedValue);
            },
          };
        case 'price_24h':
          return {
            field: 'price_24h',
            headerName: '24h',
            width: 110,
            valueFormatter: (p: any) => '$' + priceNumberFormatDigits(p.value),
          };
        case 'price_7d':
          return {
            field: 'price_7d',
            headerName: '7d',
            width: 120,
            valueFormatter: (p: any) => '$' + priceNumberFormatDigits(p.value),
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerComponent: HeaderComponent,
            width: 115,
            valueFormatter: (p: any) =>
              '$' + Math.round(p.value).toLocaleString(),
          };
        case 'dominance':
          return {
            field: 'dominance',
            headerName: 'Dominance',
            // headerComponent: HeaderComponent,
            width: 125,
            valueFormatter: (p: any) => '$' + priceNumberFormatDigits(p.value),
          };
        case 'volume_24h':
          return {
            field: 'volume_24h',
            headerComponent: HeaderComponent,
            width: 145,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case '24h_volume':
          return {
            field: '24h_volume',
            width: 145,
            headerName: '24h Volume',
            valueFormatter: (p: any) => '$' + priceNumberFormatDigits(p.value),
          };
        case 'last7Days':
          return {
            field: 'last7Days',
            width: 145,
            headerName: 'Last 7 Days',
            cellRenderer: GraphComp,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnCategoryDefs;

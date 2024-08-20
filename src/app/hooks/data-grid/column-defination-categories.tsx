import { useMemo } from 'react';
import { HeaderComponent } from '@/app/components/data-table/header';
import { ID } from '@/app/components/data-table/id';
import { GraphComp } from '../../components/data-table/graph';

import { priceNumberFormatter } from '@/utils/price-number-formater';
import { TopGainers } from '@/app/components/data-table/top-gainers';
import { CategoryName } from '@/app/components/data-table/category-name';
import NewCoin from '@/app/components/data-table/price';

const NumOfTokens = ({ value }: { value: any }) => {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: '13px',
          fontFamily: 'Sf Pro Display',
        }}
      >
        {value}
      </span>
    </div>
  );
};

const useColumnCategoryDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'index':
          return {
            field: 'index',
            headerName: '#',
            width: 50,
            valueFormatter: (p: any) => {
              return p.rowIndex;
            },
          };
        case 'category':
          return {
            field: 'category',
            headerName: 'Category',
            cellRenderer: CategoryName,
            width: 240,
          };
        case 'top_gainers':
          return {
            field: 'top_gainers',
            headerName: 'Top Gainers',
            width: 160,
            cellRenderer: TopGainers,
          };
        case 'avg_price_change':
          return {
            field: 'avg_price_change',
            headerName: 'Average Price Change',
            width: 205,
            cellRenderer: NewCoin,
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerComponent: HeaderComponent,
            width: 165,
            valueFormatter: (p: any) =>
              '$' + Math.round(p.value).toLocaleString(),
          };
        case 'volume_24':
          return {
            field: 'volume_24',
            headerName: 'Volume',
            width: 155,
            valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'num_of_tokens':
          return {
            field: 'num_of_tokens',
            headerName: 'Number of Tokens',
            width: 155,
            cellRenderer: NumOfTokens,
          };
        case 'last7Days':
          return {
            field: 'last7Days',
            width: 205,
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

import { useMemo } from 'react';
import { HeaderComponent } from '@/app/components/data-table/header';
import { ID } from '@/app/components/data-table/id';
import { GraphComp } from '../../components/data-table/graph';

import { priceNumberFormatter } from '@/utils/price-number-formater';
import { Score } from '@/app/components/data-table/score';
import { ExchangeNameComponent } from '@/app/components/data-table/exchange-name';
import { FiatSupported } from '@/app/components/data-table/fiat-supported';

const useColumnExchangeDefs = (columns: any) => {
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
        case 'exchange':
          return {
            field: 'exchange',
            headerName: 'Exchanges',
            cellRenderer: ExchangeNameComponent,
            width: 240,
          };
        case 'score':
          return {
            field: 'score',
            headerName: 'Score',
            headerComponent: HeaderComponent,
            cellRenderer: Score,
            width: 90,
          };
        case 'trading_volume_24h':
          return {
            field: 'trading_volume_24h',
            headerName: 'Trading Volume(24h)',
            width: 200,
            valueFormatter: (p: any) =>
              '$' + Math.round(p.value).toLocaleString(),
          };
        case 'average_liquidity':
          return {
            field: 'average_liquidity',
            headerName: 'Avg.Liquidity',
            width: 135,
            valueFormatter: (p: any) => priceNumberFormatter(p.value),
          };
        case 'weekly_visits':
          return {
            field: 'weekly_visits',
            headerName: 'Weekly Visits',
            width: 135,
            valueFormatter: (p: any) => priceNumberFormatter(p.value),
          };
        case 'markets':
          return {
            field: 'markets',
            headerName: '#Markets',
            width: 110,
            valueFormatter: (p: any) => priceNumberFormatter(p.value),
          };
        case 'coins':
          return {
            field: 'coins',
            headerName: '#Coins',
            width: 120,
            valueFormatter: (p: any) => priceNumberFormatter(p.value),
          };
        case 'fiat_supported':
          return {
            field: 'fiat_supported',
            headerName: 'Fiat Supported',
            width: 155,
            cellRenderer: FiatSupported,
          };
        case 'last7Days':
          return {
            field: 'last7Days',
            width: 105,
            headerName: 'Last 7 Days',
            cellRenderer: GraphComp,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnExchangeDefs;

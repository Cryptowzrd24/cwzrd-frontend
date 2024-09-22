import { useMemo } from 'react';

import { CurrencyNameComponent } from '@/app/components/data-table/name';
import { ID } from '@/app/components/data-table/id';
import { Volume24 } from '@/app/components/data-table/volume-24';

const useColumnCollectionsDefs = (columns: any) => {
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
        case 'name':
          return {
            field: 'name',
            headerName: 'Name',
            cellRenderer: CurrencyNameComponent,
            width: 200,
          };
        case 'volume_24':
          return {
            field: 'volume_24',
            headerName: 'Volume (24h)',
            width: 175,
            cellRenderer: Volume24,
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerName: 'Est. Market Cap',
            valueFormatter: (props: any) => `${props.value}`,
            width: 175,
          };
        case 'floor_price':
          return {
            field: 'floor_price',
            headerName: 'Floor Price',
            valueFormatter: (props: any) => `${props.value}`,
            width: 135,
          };
        case 'avg_price':
          return {
            field: 'avg_price',
            headerName: 'Avg. Price(24h)',
            cellRenderer: Volume24,
            width: 155,
          };
        case 'sales':
          return {
            field: 'sales',
            headerName: 'Sales (24h)',
            cellRenderer: Volume24,
            width: 135,
          };
        case 'assets':
          return {
            field: 'assets',
            headerName: 'Assets',
            width: 95,
          };
        case 'owners':
          return {
            field: 'owners',
            headerName: 'Owners',
            width: 95,
          };
        case 'owners_percent':
          return {
            field: 'owners_percent',
            headerName: 'Owners%',
            width: 105,
            valueFormatter: (props: any) => `${props.value}%`,
          };
        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnCollectionsDefs;

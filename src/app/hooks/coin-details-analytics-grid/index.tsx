import NewCoin from '@/app/components/data-table/price';
import { useMemo } from 'react';

const useColumnCoinDetailAnalyticsDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'date':
          return {
            field: 'date',
            headerName: 'Date',
            width: 220,
            cellStyle: {
              fontSize: '13px',
              fontWeight: '500',
              fontFamily: 'Sf Pro Display',
            },
          };
        case 'open':
          return {
            field: 'open',
            headerName: 'Open',
            width: 180,
            cellRenderer: NewCoin,
          };
        case 'high':
          return {
            field: 'high',
            headerName: 'High',
            width: 180,
            cellRenderer: NewCoin,
          };
        case 'low':
          return {
            field: 'low',
            headerName: 'Low',
            width: 180,
            cellRenderer: NewCoin,
          };
        case 'close':
          return {
            field: 'close',
            headerName: 'Close',
            width: 180,
            cellRenderer: NewCoin,
          };
        case 'volume':
          return {
            field: 'volume',
            headerName: 'Volume',
            width: 180,
            cellRenderer: NewCoin,
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerName: 'Market Cap',
            width: 180,
            cellRenderer: NewCoin,
          };

        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnCoinDetailAnalyticsDefs;

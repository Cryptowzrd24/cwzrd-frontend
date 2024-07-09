import { useMemo } from 'react';

const useColumnCoinDetailAnalyticsDefs = (columns: any) => {
  return useMemo(() => {
    return columns.map((col: any) => {
      switch (col.field) {
        case 'date':
          return {
            field: 'date',
            headerName: 'Date',
            width: 180,
          };
        case 'open':
          return {
            field: 'open',
            headerName: 'Open',
            width: 180,
            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'high':
          return {
            field: 'high',
            headerName: 'High',
            width: 180,
            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'low':
          return {
            field: 'low',
            headerName: 'Low',
            width: 180,
            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'close':
          return {
            field: 'close',
            headerName: 'Close',
            width: 180,
            // valueFormatter: (p: any) => '$' + priceNumberFormatter(p.value),
          };
        case 'volume':
          return {
            field: 'volume',
            headerName: 'Volume',
            width: 180,
            // cellRenderer: VolumeComponent,
          };
        case 'market_cap':
          return {
            field: 'market_cap',
            headerName: 'Market Cap',
            width: 180,
          };

        default:
          return col;
      }
    });
  }, [columns]);
};

export default useColumnCoinDetailAnalyticsDefs;

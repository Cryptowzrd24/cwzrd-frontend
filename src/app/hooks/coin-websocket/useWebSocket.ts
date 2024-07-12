import { useEffect, useRef } from 'react';

const useWebSocket = (
  url: string,
  updateRowData: (updatedRow: any) => void,
  rowData: any[],
) => {
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    const ws = new WebSocket(url);
    wsRef.current = ws;

    ws.addEventListener('open', () => {
      console.log('WebSocket connection opened.');
    });

    ws.onmessage = (event) => {
      const message: any = JSON.parse(event.data);

      // Find the existing row data for the coin
      const existingRow: any = rowData.find(
        (row: any) => row.coin_id === message.id,
      );

      if (existingRow) {
        const updatedRow = {
          ...existingRow,
          percent_change_1h:
            message.p1h !== null ? message.p1h : existingRow.percent_change_1h,
          percent_change_24h:
            message.p24h !== null
              ? message.p24h
              : existingRow.percent_change_24h,
          percent_change_7d:
            message.p7d !== null ? message.p7d : existingRow.percent_change_7d,
          market_cap: message.mc !== null ? message.mc : existingRow.market_cap,
        };

        updateRowData(updatedRow);
      }
    };

    ws.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    return () => {
      if (wsRef.current) {
        wsRef.current.close();
      }
    };
  }, [url, rowData, updateRowData]);

  return wsRef.current;
};

export default useWebSocket;

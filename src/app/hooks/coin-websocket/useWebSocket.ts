import { useEffect, useRef } from 'react';

const useWebSocket = (
  url: string,
  rowData: any[],
  updateRowData: (updatedRow: any) => void,
  mapData: (message: any, existingRow: any) => any,
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
        const updatedRow = mapData(message, existingRow);
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
  }, [url, rowData, updateRowData, mapData]);

  return wsRef.current;
};

export default useWebSocket;

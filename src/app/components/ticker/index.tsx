'use client';
import React, { useEffect, useState, useRef } from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import { useFetchTickerDataQuery } from '@/app/redux/reducers/data-grid';
import Image from 'next/image';
import TickerSkeleton from '../skeleton/ticker';

const TickerContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#7248F7',
  overflow: 'hidden',
  height: 40,
  justifyContent: 'center',
  marginBottom: 32,
});

const TickerItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  margin: '0 8px',
  color: '#fff',
});

const TickerInfo = styled(Typography)(() => ({
  color: 'white',
  fontWeight: 500,
  fontSize: 14,
  lineHeight: '18.2px',
  marginLeft: 8,
}));

const PriceChange = styled(Typography)(() => ({
  marginLeft: '8px',
  color: 'white',
  fontSize: 11,
  fontWeight: 500,
  lineHeight: '14.3px',
  padding: '2px 4px',
  borderRadius: 11,
}));

interface TickerData {
  id: string;
  symbol: string;
  new_price: string;
  percent_change_24h: any;
  icon: JSX.Element | any;
}

const Ticker = () => {
  const [rowData, setRowData] = useState<TickerData[]>([]);
  const { data: tickerData } = useFetchTickerDataQuery({});
  const wsRef = useRef<WebSocket | null>(null);

  useEffect(() => {
    if (tickerData && tickerData.data) {
      const res = tickerData.data.map((item: any) => ({
        id: item.id,
        coin_id: item.coin_id,
        symbol: item.symbol,
        new_price: item.quote?.price,
        percent_change_24h: item.quote?.percent_change_24h,
        icon: `https://s2.coinmarketcap.com/static/img/coins/64x64/${item.coin_id}.png`,
      }));
      setRowData(res);
    }
  }, [tickerData]);

  useEffect(() => {
    const ws = new WebSocket('wss://backend.cwzrd.co.uk/ws/data/');
    wsRef.current = ws;

    ws.addEventListener('open', () => {
      console.log('WebSocket connection opened.');
    });

    ws.onmessage = (event) => {
      const message: any = JSON.parse(event.data);

      setRowData((prevData) => {
        const existingRow = prevData.find(
          (row: any) => row.coin_id === message.id,
        );

        if (existingRow) {
          const updatedRow: any = {
            ...existingRow,
            new_price: message.p !== null ? message.p : existingRow.new_price,
            percent_change_24h:
              message.p24h !== null
                ? message.p24h
                : existingRow.percent_change_24h,
          };

          return prevData.map((row: any) =>
            row.coin_id === updatedRow?.coin_id ? updatedRow : row,
          );
        }

        return prevData;
      });
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
  }, []);

  return rowData.length > 0 ? (
    <TickerContainer>
      <Marquee autoFill={true} gradient={false}>
        {rowData.map((item, index) => (
          <TickerItem key={index}>
            <Image
              loader={() => item.icon}
              src={item.icon}
              alt={item.symbol}
              width={24}
              height={24}
              style={{ borderRadius: '50%' }}
            />
            <TickerInfo>
              {item.symbol} ${Number(item.new_price).toFixed(2)}
            </TickerInfo>
            <PriceChange
              sx={{
                backgroundColor:
                  item.percent_change_24h > 0 ? '#1FD773' : '#F74848',
              }}
            >
              {item.percent_change_24h > 0
                ? `+${Number(item.percent_change_24h)?.toFixed(2)}%`
                : `${Number(item.percent_change_24h)?.toFixed(2)}%`}
            </PriceChange>
          </TickerItem>
        ))}
      </Marquee>
    </TickerContainer>
  ) : (
    <TickerSkeleton />
  );
};

export default Ticker;

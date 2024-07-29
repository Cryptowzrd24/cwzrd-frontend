// components/Table.tsx
'use client';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import DataTable from '@/app/components/data-table';
import { columnsCoin } from '@/app/constants/columns';
import { Pagination } from '@/app/components/data-table/pagination';
import CardContent from '../highest-volume/cards/cardContent';
import { Box } from '@mui/material';
import { scrollToTop } from '@/utils/scroll-to-top';
import { constructQueryParams } from '@/utils/construct-filter-query-param';
import { useSelector } from 'react-redux';
import useWebSocket from '@/app/hooks/coin-websocket/useWebSocket';
import debounce from 'debounce';

interface CoinData {
  id: string;
  coin_id: string;
  name: string;
  new_price: number;
  volume_24h: number;
  percent_change_1h: number;
  percent_change_24h: number;
  percent_change_7d: number;
  market_cap: number;
  circulating_supply: number;
  symbol: string;
  max_supply: number;
  index: number;
}

interface TableProps {
  initialData: CoinData[];
}

const Table = ({ initialData }: TableProps) => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState<CoinData[]>(initialData);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const [showCards, setShowCards] = useState(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const columnCoinsDef = useColumnCoinDefs(columnsCoin);
  const [activeIcon, setActiveIcon] = useState('ListIcon');
  const filters = useSelector((state: any) => state.filters.filters);
  const queryParams = constructQueryParams(filters as Filters);
  const gridApiRef = useRef<any>(null);
  const priceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const previousPrices = useRef<{ [key: string]: number }>({});

  const totalCount = initialData?.length;

  const debouncedFetchCoinData = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 600),
    [],
  );

  const handleSetSearch = useCallback(
    (value: any) => {
      debouncedFetchCoinData(value);
    },
    [debouncedFetchCoinData],
  );

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
    setItemStart((value - 1) * pageSize + 1);
    scrollToTop();
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    setItemStart(1);
  };

  const handleToggleCards = () => {
    setShowCards((prevShowCards) => !prevShowCards);
    setActiveIcon((prevActiveIcon) =>
      prevActiveIcon === 'ListIcon' ? 'BoxIcon' : 'ListIcon',
    );
  };

  // useEffect(() => {
  //   const ws = new WebSocket('wss://backend.cwzrd.co.uk/ws/data/');
  //   wsRef.current = ws;

  //   ws.addEventListener('open', () => {
  //     console.log('WebSocket connection opened.');
  //   });

  //   ws.onmessage = (event) => {
  //     const message: any = JSON.parse(event.data);

  //     setRowData((prevData) => {
  //       const existingRow = prevData.find(
  //         (row: any) => row.coin_id === message.id,
  //       );

  //       if (existingRow) {
  //         const updatedRow: any = {
  //           ...existingRow,
  //           new_price: message.p !== null ? message.p : existingRow.new_price,
  //           percent_change_1h:
  //             message.p1h !== null
  //               ? message.p1h
  //               : existingRow.percent_change_1h,
  //           percent_change_24h:
  //             message.p24h !== null
  //               ? message.p24h
  //               : existingRow.percent_change_24h,
  //           percent_change_7d:
  //             message.p7d !== null
  //               ? message.p7d
  //               : existingRow.percent_change_7d,
  //           market_cap:
  //             message.mc !== null ? message.mc : existingRow.market_cap,
  //         };

  //         return prevData.map((row: any) =>
  //           row.coin_id === updatedRow?.coin_id ? updatedRow : row,
  //         );
  //       }

  //       return prevData;
  //     });
  //   };

  //   ws.onerror = (error) => {
  //     console.error('WebSocket error:', error);
  //   };

  //   ws.onclose = (event) => {
  //     console.log('WebSocket connection closed:', event);
  //   };

  //   return () => {
  //     if (wsRef.current) {
  //       wsRef.current.close();
  //     }
  //   };
  // }, []);

  const updateRowData = (updatedRow: any) => {
    const previousPrice = previousPrices.current[updatedRow.coin_id];
    const currentPrice = updatedRow.price;

    if (previousPrice !== undefined && previousPrice !== currentPrice) {
      const priceCell = priceRefs.current[updatedRow.coin_id];
      if (priceCell) {
        if (currentPrice > previousPrice) {
          priceCell.classList.add('price-increase');
          priceCell.classList.remove('price-decrease');
        } else {
          priceCell.classList.add('price-decrease');
          priceCell.classList.remove('price-increase');
        }
        setTimeout(() => {
          priceCell.classList.remove('price-increase', 'price-decrease');
        }, 3000);
      }
    }
    previousPrices.current[updatedRow.coin_id] = currentPrice;

    if (gridApiRef.current) {
      gridApiRef.current.applyTransactionAsync({ update: [updatedRow] });
    }
  };

  const mapCoinData = (message: any, existingRow: any) => ({
    ...existingRow,
    percent_change_1h:
      message.p1h !== null ? message.p1h : existingRow.percent_change_1h,
    percent_change_24h:
      message.p24h !== null ? message.p24h : existingRow.percent_change_24h,
    percent_change_7d:
      message.p7d !== null ? message.p7d : existingRow.percent_change_7d,
    market_cap: message.mc !== null ? message.mc : existingRow.market_cap,
    new_price: message.p !== null ? message.p : existingRow.price,
  });

  useWebSocket(
    'wss://backend.cwzrd.co.uk/ws/data/',
    rowData,
    updateRowData,
    mapCoinData,
  );

  return (
    <div className="data-table-wrapper">
      <CustomHeader
        filter={true}
        view={true}
        search={search}
        setSearch={handleSetSearch}
        onToggleView={handleToggleCards}
        activeIcon={activeIcon}
        setPagination={handlePageSizeChange}
      />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        {showCards ? (
          <Box>
            <CardContent cardsData={rowData} />
          </Box>
        ) : (
          <DataTable
            search={search}
            rowData={rowData}
            columnDefs={columnCoinsDef}
            width="100%"
            gridApiRef={gridApiRef}
            getRowId={(params: any) => params.data.coin_id}
            priceRefs={priceRefs}
          />
        )}
      </div>
      <Pagination
        length={totalCount}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;

'use client';
import React, { useCallback, useEffect, useState, useRef } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import DataTable from '@/app/components/data-table';
import { columnsCoin } from '@/app/constants/columns';
import { useFetchCoinDataQuery } from '@/app/redux/reducers/data-grid';
import { Pagination } from '@/app/components/data-table/pagination';
import CardContent from '../highest-volume/cards/cardContent';
import { Box } from '@mui/material';
import { scrollToTop } from '@/utils/scroll-to-top';
import { constructQueryParams } from '@/utils/construct-filter-query-param';
import { useSelector } from 'react-redux';
import { Filters } from '@/app/models/filters';
import useWebSocket from '@/app/hooks/coin-websocket/useWebSocket';
import debounce from 'debounce';

const Table = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const [showCards, setShowCards] = useState(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const columnCoinsDef = useColumnCoinDefs(columnsCoin);
  const [activeIcon, setActiveIcon] = useState('ListIcon');
  const filters = useSelector((state: any) => state.filters.filters);

  const queryParams = constructQueryParams(filters as Filters);
  const { data } = useFetchCoinDataQuery({
    start: currentPage,
    pageSize,
    filters: queryParams,
    searchString: search,
  });
  const gridApiRef = useRef<any>(null);
  const priceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const previousPrices = useRef<{ [key: string]: number }>({});

  const totalCount = data?.count || 0;

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
    if (showCards) {
      setPageSize(10);
      setActiveIcon('ListIcon');
    } else {
      setPageSize(12);
      setActiveIcon('BoxIcon');
    }
  };

  useEffect(() => {
    if (data && data.data) {
      if (data.data.length >= currentPage * pageSize) setCurrentPage(1);
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data.data.map((item: any, index: number) => ({
        id: item.id,
        coin_id: item.coin_id,
        name: item.name,
        new_price: item?.quote?.price,
        volume_24h: item?.quote?.volume_24h,
        percent_change_1h: item?.quote?.percent_change_1h,
        percent_change_24h: item?.quote?.percent_change_24h,
        percent_change_7d: item?.quote?.percent_change_7d,
        market_cap: item?.quote?.market_cap,
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        max_supply: item.max_supply,
        index: startIndex + index,
      }));
      setRowData(res);
    }
  }, [data, currentPage, itemStart, pageSize, filters]);

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
      message.p1h !== null
        ? message.p1h.toFixed(2)
        : existingRow.percent_change_1h,
    percent_change_24h:
      message.p24h !== null
        ? message.p24h.toFixed(2)
        : existingRow.percent_change_24h,
    percent_change_7d:
      message.p7d !== null
        ? message.p7d.toFixed(2)
        : existingRow.percent_change_7d,
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
        getCardsPagination={showCards}
        pageSize={pageSize}
      />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        {showCards ? (
          <Box sx={{ borderTop: '1px solid #1111111A ', mt: '0px', ml: '0px' }}>
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

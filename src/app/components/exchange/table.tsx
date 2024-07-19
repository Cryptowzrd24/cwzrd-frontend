'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsExchanges } from '@/app/constants/columns';
import useColumnExchangeDefs from '@/app/hooks/data-grid/column-defination-exchange';
import { Pagination } from '@/app/components/data-table/pagination';
import { scrollToTop } from '@/utils/scroll-to-top';
import {
  useFetchExchangesDataQuery,
  useFetchMostVisitedDataQuery,
} from '@/app/redux/reducers/data-grid';
import CardContent from '../highest-volume/cards/cardContent';
import { Box } from '@mui/material';

const Table = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const [showCards, setShowCards] = useState(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const [activeIcon, setActiveIcon] = useState('ListIcon');
  const columnExchangesDef = useColumnExchangeDefs(columnsExchanges);
  const [apiData, setApiData] = useState([]);

  const { data: cardsApiData } = useFetchMostVisitedDataQuery({
    start: currentPage,
    pageSize,
  });
  console.log('most visited data--------------', cardsApiData);

  const { data } = useFetchExchangesDataQuery({
    start: currentPage,
    pageSize,
  });
  const totalCount = data?.count || 0;

  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

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
  // const paginatedRowData = rowDataExchange.slice(
  //   (currentPage - 1) * pageSize,
  //   currentPage * pageSize,
  // );
  useEffect(() => {
    if (data && data.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data.data.map((item: any, index: number) => ({
        id: item.ex_id,
        exchange: item.name,
        score: item.score,
        trading_volume_24h: item.spotVol24h,
        average_liquidity: item.liquidity,
        weekly_visits: item.visits,
        coins: item.numCoins,
        markets: item.numMarkets,
        fiat_supported: item.fiats,

        index: startIndex + index,
      }));
      setRowData(res);
    }
  }, [data, currentPage, itemStart, pageSize]);

  // ------------------------------------------------------------

  useEffect(() => {
    if (cardsApiData && cardsApiData?.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = cardsApiData.data?.map((item: any, index: number) => ({
        id: item.id,
        name: item.name,
        price: item.quote?.USD?.price,
        volume_24h: item.quote?.USD?.volume_24h,
        percent_change_1h: item.quote?.USD?.percent_change_1h,
        percent_change_24h: item.quote?.USD?.percent_change_24h,
        percent_change_7d: item.quote?.USD?.percent_change_7d,
        market_cap: item.quote?.USD?.market_cap,
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        max_supply: item.max_supply,
        index: startIndex + index,
        coin_id: item.coin_id,
      }));
      setApiData(res);
    }
  }, [data, currentPage, pageSize, itemStart]);
  return (
    <div className="data-table-wrapper">
      <CustomHeader
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
            <CardContent cardsData={apiData} />
          </Box>
        ) : (
          <DataTable
            search={search}
            rowData={rowData}
            columnDefs={columnExchangesDef}
            width="100%"
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

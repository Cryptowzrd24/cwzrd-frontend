'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsExchanges } from '@/app/constants/columns';
import useColumnExchangeDefs from '@/app/hooks/data-grid/column-defination-exchange';
import { Pagination } from '@/app/components/data-table/pagination';
import { scrollToTop } from '@/utils/scroll-to-top';
import { Box } from '@mui/material';
import ExchangeCardContent from './cards/cardContent';
import { useFetchExchangesDataQuery } from '@/app/redux/reducers/data-grid';
import debounce from 'debounce';

const Table = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const [showCards, setShowCards] = useState(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const [activeIcon, setActiveIcon] = useState('ListIcon');
  const columnExchangesDef = useColumnExchangeDefs(columnsExchanges);

  const { data } = useFetchExchangesDataQuery({
    start: currentPage,
    pageSize,
    searchString: search,
  });

  const totalCount = data?.count || 0;

  const debouncedFetchExhchangesData = useCallback(
    debounce((value) => {
      setSearch(value);
    }, 600),
    [],
  );

  const handleSetSearch = useCallback(
    (value: any) => {
      debouncedFetchExhchangesData(value);
    },
    [debouncedFetchExhchangesData],
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

  useEffect(() => {
    if (data && data.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data.data.map((item: any, index: number) => ({
        ex_id: item.ex_id,
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

  return (
    <div className="data-table-wrapper">
      <CustomHeader
        view={true}
        search={search}
        setSearch={handleSetSearch}
        onToggleView={handleToggleCards}
        activeIcon={activeIcon}
        setPagination={handlePageSizeChange}
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
            <ExchangeCardContent cardsData={rowData} />
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

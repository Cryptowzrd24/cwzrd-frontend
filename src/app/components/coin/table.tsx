'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import DataTable from '@/app/components/data-table';
import { columnsCoin } from '@/app/constants/columns';
import { useFetchCoinDataQuery } from '@/app/redux/reducers/data-grid';
import { Pagination } from '@/app/components/data-table/pagination';
import CardContent from '../highest-volume/cards/cardContent';

import { Box } from '@mui/material';
import { scrollToTop } from '@/utils/scroll-to-top';

const Table = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  // const [gridApi, setGridApi] = useState<GridApi | null>(null);
  const [showCards, setShowCards] = useState(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const columnCoinsDef = useColumnCoinDefs(columnsCoin);
  const [activeIcon, setActiveIcon] = useState('ListIcon');
  const { data } = useFetchCoinDataQuery({ start: itemStart, pageSize });

  const totalCount = data?.count || 0;
  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    const itemsNumber = value * 10 - 9;
    setItemStart(itemsNumber);
    setCurrentPage(value);
    scrollToTop();
    // if (gridApi) {
    //   gridApi.showLoadingOverlay();
    // }
  };

  const handlePagination = (page: number) => {
    setPageSize(page);
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
        id: item.id,
        coin_id: item.coin_id,
        name: item.name,
        price: item.quote.price,
        volume_24h: item.quote.volume_24h,
        percent_change_1h: item.quote.percent_change_1h,
        percent_change_24h: item.quote.percent_change_24h,
        percent_change_7d: item.quote.percent_change_7d,
        market_cap: item.quote.market_cap,
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        max_supply: item.max_supply,
        index: startIndex + index,
      }));
      setRowData(res);
      // if (gridApi) {
      //   gridApi.hideOverlay();
      // }
    }
  }, [data, currentPage, itemStart, pageSize]);

  // const onGridReady = (params: any) => {
  //   setGridApi(params.api);
  //   params.api.showLoadingOverlay();
  // };

  return (
    <div className="data-table-wrapper">
      <CustomHeader
        filter={true}
        view={true}
        search={search}
        setSearch={handleSetSearch}
        onToggleView={handleToggleCards}
        activeIcon={activeIcon}
        setPagination={handlePagination}
      />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        {showCards ? (
          <Box sx={{ height: '960px', overflowY: 'scroll' }}>
            <CardContent
              setPagination={handlePagination}
              currentPage={currentPage}
              pageSize={pageSize}
              totalCount={totalCount}
              onPageChange={handlePageChange}
            />
          </Box>
        ) : (
          <DataTable
            search={search}
            rowData={rowData}
            columnDefs={columnCoinsDef}
            width="100%"
            // onGridReady={onGridReady}
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

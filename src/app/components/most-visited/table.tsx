'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsMostVisited } from '@/app/constants/columns';
import useColumnMostVisitedDefs from '@/app/hooks/data-grid/column-defination-most-visit';
import { Pagination } from '@/app/components/data-table/pagination';
import { useFetchMostVisitedDataQuery } from '@/app/redux/reducers/data-grid';
import { Box } from '@mui/material';
import CardContent from '../highest-volume/cards/cardContent';

const Table = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState<number>(10);
  const [activeIcon, setActiveIcon] = useState('ListIcon');
  const [showCards, setShowCards] = useState(false);
  const [itemStart, setItemStart] = useState(1);

  const columnMostVisitedDef = useColumnMostVisitedDefs(columnsMostVisited);
  const { data } = useFetchMostVisitedDataQuery({
    start: currentPage,
    pageSize,
  });

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
        id: item.id,
        name: item.name,
        new_price: item.quote.USD.price,
        volume_24h: item.quote.USD.volume_24h,
        percent_change_1h: item.quote.USD.percent_change_1h,
        percent_change_24h: item.quote.USD.percent_change_24h,
        percent_change_7d: item.quote.USD.percent_change_7d,
        market_cap: item.quote.USD.market_cap,
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        max_supply: item.max_supply,
        index: startIndex + index,
        coin_id: item.coin_id,
      }));
      setRowData(res);
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
        filter={true}
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
            columnDefs={columnMostVisitedDef}
            width="100%"
            // onGridReady={onGridReady}
          />
        )}
      </div>
      <Pagination
        length={1200}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;

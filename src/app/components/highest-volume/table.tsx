'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsHighestVol } from '@/app/constants/columns';
import useColumnHighestVolDefs from '@/app/hooks/data-grid/column-defination-highest-vol';
import { Pagination } from '@/app/components/data-table/pagination';
import { useFetchHighestVolumeCoinsDataQuery } from '@/app/redux/reducers/data-grid';
import { Box } from '@mui/material';
import CardContent from './cards/cardContent';

const HighestVolumeCoinsTable = () => {
  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemStart, setItemStart] = useState(1);
  const [showCards, setShowCards] = useState(false);
  const [pageSize, setPageSize] = useState<number>(10);

  const [activeIcon, setActiveIcon] = useState('ListIcon');
  const columnDefiDef = useColumnHighestVolDefs(columnsHighestVol);
  const { data } = useFetchHighestVolumeCoinsDataQuery({
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
    const itemsNumber = value * 10 - 9;
    setItemStart(itemsNumber);
    setCurrentPage(value);
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
  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    setCurrentPage(1);
    setItemStart(1);
  };
  useEffect(() => {
    if (data && data.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data.data.map((item: any, index: number) => ({
        id: item.id,
        name: item.name,
        coin_id: item.coin_id,
        new_price: item.quote.price,
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
      const sortedRes = res.sort(
        (a: any, b: any) => b.volume_24h - a.volume_24h,
      );
      setRowData(sortedRes);
    }
  }, [data, currentPage, itemStart]);

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
        pageSize={pageSize}
        getCardsPagination={showCards}
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
            columnDefs={columnDefiDef}
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

export default HighestVolumeCoinsTable;

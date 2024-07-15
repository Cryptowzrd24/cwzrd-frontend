'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnChainsDefs from '@/app/hooks/data-grid/column-defination-chains';
import { columnsChain } from '@/app/constants/columns';
import { Pagination } from '@/app/components/data-table/pagination';
import { useFetchChainDataQuery } from '@/app/redux/reducers/data-grid';
import { Box } from '@mui/material';
import CardContent from '../highest-volume/cards/cardContent';
import { scrollToTop } from '@/utils/scroll-to-top';

const Table = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const [showCards, setShowCards] = useState(false);
  const [pageSize, setPageSize] = useState<number>(10);
  const [activeIcon, setActiveIcon] = useState('ListIcon');
  const [rowData, setRowData] = useState([]);
  const [cardData] = useState([]);
  const columnChainsDef = useColumnChainsDefs(columnsChain);

  const { data: chainData } = useFetchChainDataQuery({
    start: currentPage,
    pageSize,
  });

  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);
  const totalCount = chainData?.count || 0;

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
    debugger;
    if (chainData && chainData.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;

      const res = chainData.data.map((item: any, index: number) => ({
        id: item.id,
        name: item.name,
        protocols: item.protocolsCount,
        percent_change_1D: item.tvlPrevDay,
        percent_change_1W: item.tvlPrevWeek,
        percent_change_1M: item.tvlPrevMonth,
        tvl: item.tvl,
        market_cap_tvl: item.mcap,
        market_cap_chain: item.mcapTvlRatio,
        index: startIndex + index,
        coin_id: item.cryptoId,
      }));
      console.log(res);
      setRowData(res);
    }
  }, [chainData, currentPage, itemStart, pageSize]);
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
            <CardContent cardsData={cardData} />
          </Box>
        ) : (
          <DataTable
            search={search}
            rowData={rowData}
            columnDefs={columnChainsDef}
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

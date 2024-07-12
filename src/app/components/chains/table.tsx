'use client';
import React, { useState, useCallback, useEffect } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnChainsDefs from '@/app/hooks/data-grid/column-defination-chains';
import { columnsChain } from '@/app/constants/columns';
import { Pagination } from '@/app/components/data-table/pagination';
import {
  useFetchChainDataQuery,
  useFetchHighestVolumeCoinsDataQuery,
} from '@/app/redux/reducers/data-grid';
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
  const [cardData, setCardData] = useState([]);
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
  const { data: highestVolumeData } = useFetchHighestVolumeCoinsDataQuery({
    start: currentPage,
    pageSize,
  });

  useEffect(() => {
    if (highestVolumeData && highestVolumeData.data) {
      const startIndex = (currentPage - 1) * pageSize;
      const res = highestVolumeData.data.map((item: any, index: number) => ({
        id: item.id,
        name: item.name,
        coin_id: item.coin_id,
        price: item.quote.price,
        volume_24h: item.quote.volume_24h,
        percent_change_1h: item.quote.percent_change_1h,
        percent_change_24h: item.quote.percent_change_24h,
        percent_change_7d: item.quote.percent_change_7d,
        market_cap: item.quote.market_cap,
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        max_supply: item.max_supply,
        index: startIndex + index + 1,
      }));
      setCardData(res);
    }
  }, [showCards, highestVolumeData, currentPage, pageSize]);

  useEffect(() => {
    if (chainData && chainData.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const endIndex = startIndex + pageSize;

      const res = chainData.data
        .slice(startIndex, endIndex)
        .map((item: any, index: number) => ({
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

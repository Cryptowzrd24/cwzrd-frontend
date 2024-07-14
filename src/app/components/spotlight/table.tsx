'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnCompactTrendingDefs from '@/app/hooks/data-grid/column-defination-compact-trending';
import {
  columnsCompactGainers,
  columnsCompactHighestVolume,
  columnsCompactLosers,
  columnsCompactMostVisited,
  columnsCompactRecentlyAdded,
  columnsCompactTrending,
} from '@/app/constants/columns';
import useColumnCompactGainersDefs from '@/app/hooks/data-grid/column-defination-compact-gainers';
import useColumnCompactLosersDefs from '@/app/hooks/data-grid/column-defination-compact-losers';
import useColumnCompactRecentlyAddedDefs from '@/app/hooks/data-grid/column-defination-compact-recently-added';
import useColumnCompactHighestVolumeDefs from '@/app/hooks/data-grid/column-defination-compact-highest-volume';
import useColumnCompactMostVisitedDefs from '@/app/hooks/data-grid/column-defination-compact-most-visited';
import { Pagination } from '@/app/components/data-table/pagination';
import { useFetchSpotlightDataQuery } from '@/app/redux/reducers/data-grid';
import { scrollToTop } from '@/utils/scroll-to-top';

const Table = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemStart, setItemStart] = useState(1);
  const [spotlightData, setSpotlightData] = useState({
    trending: [],
    top_gainers: [],
    top_losers: [],
    most_visited: [],
    recently_added: [],
    highest_volume: [],
  });
  const [pageSize, setPageSize] = useState<number>(10);

  const { data } = useFetchSpotlightDataQuery({
    start: currentPage,
    pageSize,
  });
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
  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

  // const handlePageChange = (
  //   event: React.ChangeEvent<unknown>,
  //   value: number,
  // ) => {
  //   const itemsNumber = value * 10 - 9;
  //   setItemStart(itemsNumber);
  //   setCurrentPage(value);
  // };

  // Column Definations
  const columnTrendingDef = useColumnCompactTrendingDefs(
    columnsCompactTrending,
  );
  const columnGainersDef = useColumnCompactGainersDefs(columnsCompactGainers);
  const columnLosersDef = useColumnCompactLosersDefs(columnsCompactLosers);
  const columnRecentlyAddedDef = useColumnCompactRecentlyAddedDefs(
    columnsCompactRecentlyAdded,
  );
  const columnHighestVolumeDef = useColumnCompactHighestVolumeDefs(
    columnsCompactHighestVolume,
  );
  const columnMostVisitedDefs = useColumnCompactMostVisitedDefs(
    columnsCompactMostVisited,
  );

  useEffect(() => {
    if (data?.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const trending = data.data.trending.map((item: any, index: number) => ({
        id: item.id,
        name: item.name,
        coin_id: item.coin_id,
        price: item.quote.price,
        volume_24h: item.quote.volume_24h,
        percent_change_24h: item.quote.percent_change_24h,
        index: startIndex + index,
      }));

      const topGainers = data.data.top_gainers.map(
        (item: any, index: number) => ({
          id: item.id,
          name: item.name,
          coin_id: item.coin_id,
          price: item.quote.price,
          volume_24h: item.quote.volume_24h,
          percent_change_24h: item.quote.percent_change_24h,
          index: startIndex + index,
        }),
      );

      const topLosers = data.data.top_losers.map(
        (item: any, index: number) => ({
          id: item.id,
          name: item.name,
          coin_id: item.coin_id,
          price: item.quote.price,
          volume_24h: item.quote.volume_24h,
          percent_change_24h: item.quote.percent_change_24h,
          index: startIndex + index,
        }),
      );

      const mostVisited = data.data.most_visited.map(
        (item: any, index: number) => ({
          id: item.id,
          name: item.name,
          coin_id: item.coin_id,
          price: item.quote.price,
          volume_24h: item.quote.volume_24h,
          percent_change_24h: item.quote.percent_change_24h,
          index: startIndex + index,
        }),
      );

      const recentlyAdded = data.data.recently_added.map(
        (item: any, index: number) => ({
          id: item.id,
          name: item.name,
          coin_id: item.coin_id,
          price: item.quote.price,
          volume_24h: item.quote.volume_24h,
          percent_change_24h: item.quote.percent_change_24h,
          index: startIndex + index,
        }),
      );

      const highestVolume = data.data.highest_volume.map(
        (item: any, index: number) => ({
          id: item.id,
          name: item.name,
          coin_id: item.coin_id,
          price: item.quote.price,
          volume_24h: item.quote.volume_24h,
          percent_change_24h: item.quote.percent_change_24h,
          index: startIndex + index,
        }),
      );

      setSpotlightData({
        trending,
        top_gainers: topGainers,
        top_losers: topLosers,
        most_visited: mostVisited,
        recently_added: recentlyAdded,
        highest_volume: highestVolume,
      });
    }
  }, [data, currentPage, itemStart, pageSize]);

  return (
    <div className="data-table-wrapper">
      <CustomHeader
        search={search}
        setSearch={handleSetSearch}
        setPagination={handlePageSizeChange}
      />
      <div
        style={{
          display: 'flex',
          gap: '72px',
          borderTop: '1px solid #1111111A',
          paddingTop: '16px',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            display: 'flex',
            gap: '24px',
            width: '100%',
          }}
        >
          <DataTable
            search={search}
            title={'Trending'}
            rowData={spotlightData.trending}
            columnDefs={columnTrendingDef}
            width="33%"
            seeMore={'/market/trending'}
          />
          <DataTable
            search={search}
            title={'Biggest Gainers'}
            rowData={spotlightData.top_gainers}
            columnDefs={columnGainersDef}
            width="33%"
            seeMore={'/market/gainers-losers'}
          />
          <DataTable
            search={search}
            title={'Biggest Losers'}
            rowData={spotlightData.top_losers}
            columnDefs={columnLosersDef}
            width="33%"
            seeMore={'/market/gainers-losers'}
          />
        </div>
        <div
          style={{
            display: 'flex',
            gap: '24px',
            width: '100%',
          }}
        >
          <DataTable
            search={search}
            title={'Most Visited'}
            rowData={spotlightData.most_visited}
            columnDefs={columnMostVisitedDefs}
            width="33%"
            seeMore={'/market/most-visited'}
          />
          <DataTable
            search={search}
            title={'Recently Added'}
            rowData={spotlightData.recently_added}
            columnDefs={columnRecentlyAddedDef}
            width="33%"
            seeMore={'/market/new-coin'}
          />
          <DataTable
            search={search}
            title={'Highest Volume'}
            rowData={spotlightData.highest_volume}
            columnDefs={columnHighestVolumeDef}
            width="33%"
            seeMore={'/market/highest-volume'}
          />
        </div>
      </div>
      <Pagination
        length={data?.count}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;

'use client';
import React, { useCallback, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import {
  rowCompactGainers,
  rowCompactHighestVolume,
  rowCompactLosers,
  rowCompactMostVisited,
  rowCompactRecentlyAdded,
  rowCompactTrending,
} from '@/app/constants/row';
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

const Table = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  const paginateData = (data: any) => {
    return data.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  };

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

  const maxLength = Math.max(
    rowCompactTrending.length,
    rowCompactGainers.length,
    rowCompactLosers.length,
    rowCompactMostVisited.length,
    rowCompactRecentlyAdded.length,
    rowCompactHighestVolume.length,
  );

  return (
    <div className="data-table-wrapper">
      <CustomHeader search={search} setSearch={handleSetSearch} />
      <div
        style={{
          display: 'flex',
          gap: '72px',
          borderTop: '1px solid #1111111A',
          paddingTop: '24px',
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
            rowData={paginateData(rowCompactTrending)}
            columnDefs={columnTrendingDef}
            width="33%"
            height={550}
          />
          <DataTable
            search={search}
            title={'Biggest Gainers'}
            rowData={paginateData(rowCompactGainers)}
            columnDefs={columnGainersDef}
            width="33%"
            height={550}
          />
          <DataTable
            search={search}
            title={'Biggest Losers'}
            rowData={paginateData(rowCompactLosers)}
            columnDefs={columnLosersDef}
            width="33%"
            height={550}
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
            rowData={paginateData(rowCompactMostVisited)}
            columnDefs={columnMostVisitedDefs}
            width="33%"
            height={550}
          />
          <DataTable
            search={search}
            title={'Recently Added'}
            rowData={paginateData(rowCompactRecentlyAdded)}
            columnDefs={columnRecentlyAddedDef}
            width="33%"
            height={550}
          />
          <DataTable
            search={search}
            title={'Highest Volume'}
            rowData={paginateData(rowCompactHighestVolume)}
            columnDefs={columnHighestVolumeDef}
            width="33%"
            height={550}
          />
        </div>
      </div>
      <Pagination
        length={maxLength}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;

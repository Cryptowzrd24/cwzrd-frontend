'use client';
import React from 'react';
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

const Table = () => {
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

  return (
    <div className="data-table-wrapper">
      <CustomHeader />
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
            title={'Trending'}
            rowData={rowCompactTrending}
            columnDefs={columnTrendingDef}
            width="33%"
            height={550}
          />
          <DataTable
            title={'Biggest Gainers'}
            rowData={rowCompactGainers}
            columnDefs={columnGainersDef}
            width="33%"
            height={550}
          />
          <DataTable
            title={'Biggest Losers'}
            rowData={rowCompactLosers}
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
            title={'Most Visited'}
            rowData={rowCompactMostVisited}
            columnDefs={columnMostVisitedDefs}
            width="33%"
            height={550}
          />
          <DataTable
            title={'Recently Added'}
            rowData={rowCompactRecentlyAdded}
            columnDefs={columnRecentlyAddedDef}
            width="33%"
            height={550}
          />
          <DataTable
            title={'Highest Volume'}
            rowData={rowCompactHighestVolume}
            columnDefs={columnHighestVolumeDef}
            width="33%"
            height={550}
          />
        </div>
      </div>
    </div>
  );
};

export default Table;

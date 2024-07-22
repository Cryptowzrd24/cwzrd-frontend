'use client';
import React, { useEffect, useState, useRef } from 'react';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import DataTable from '@/app/components/data-table';
import { columnsCoin } from '@/app/constants/columns';
import { useFetchCoinDataQuery } from '@/app/redux/reducers/data-grid';
import { constructQueryParams } from '@/utils/construct-filter-query-param';
import { useSelector } from 'react-redux';
import { Filters } from '@/app/models/filters';

const Table = () => {
  const [search] = useState('');
  const [rowData, setRowData] = useState([]);
  const [currentPage] = useState(1);
  const [itemStart] = useState(1);
  const [pageSize] = useState<number>(10);
  const columnCoinsDef = useColumnCoinDefs(columnsCoin);
  const filters = useSelector((state: any) => state.filters.filters);

  const queryParams = constructQueryParams(filters as Filters);
  const { data } = useFetchCoinDataQuery({
    start: currentPage,
    pageSize,
    filters: queryParams,
  });
  const gridApiRef = useRef<any>(null);
  const priceRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    if (data && data.data) {
      const startIndex = (currentPage - 1) * pageSize + 1;
      const res = data.data.slice(0, 3).map((item: any, index: number) => ({
        id: item.id,
        coin_id: item.coin_id,
        name: item.name,
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
      setRowData(res);
    }
  }, [data, currentPage, itemStart, pageSize, filters]);

  return (
    <div className="data-table-wrapper">
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable
          search={search}
          rowData={rowData}
          columnDefs={columnCoinsDef}
          width="100%"
          gridApiRef={gridApiRef}
          getRowId={(params: any) => params.data.coin_id}
          priceRefs={priceRefs}
          height="400px"
        />
      </div>
    </div>
  );
};

export default Table;

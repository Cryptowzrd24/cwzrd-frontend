'use client';
import React, { useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsMostVisited } from '@/app/constants/columns';
import useColumnMostVisitedDefs from '@/app/hooks/data-grid/column-defination-most-visit';
import { useFetchMostVisitedDataQuery } from '@/app/redux/reducers/data-grid';

const Table = () => {
  const columnMostVisitedDef = useColumnMostVisitedDefs(columnsMostVisited);
  const [rowData, setRowData] = useState([]);
  const { data } = useFetchMostVisitedDataQuery({});
  useEffect(() => {
    if (data && data.data) {
      const res = data.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.quote.USD.price,
        volume_24h: item.quote.USD.volume_24h,
        percent_change_1h: item.quote.USD.percent_change_1h,
        percent_change_24h: item.quote.USD.percent_change_24h,
        percent_change_7d: item.quote.USD.percent_change_7d,
        market_cap: item.quote.USD.market_cap,
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        max_supply: item.max_supply,
      }));
      setRowData(res);
    }
  }, [data]);

  return (
    <div className="data-table-wrapper">
      <CustomHeader />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable
          rowData={rowData}
          columnDefs={columnMostVisitedDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

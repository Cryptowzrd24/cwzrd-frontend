'use client';
import React, { useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import useColumnCoinDefs from '@/app/hooks/data-grid/column-defination-coin';
import DataTable from '@/app/components/data-table';
import { columnsCoin } from '@/app/constants/columns';
import { useFetchCoinDataQuery } from '@/app/redux/reducers/data-grid';
import { Pagination } from '@/app/components/data-table/pagination';

const Table = () => {
  const columnCoinsDef = useColumnCoinDefs(columnsCoin);

  const [search, setSearch] = useState('');
  const [rowData, setRowData] = useState([]);
  const { data } = useFetchCoinDataQuery({});
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
      <CustomHeader search={search} setSearch={setSearch} />
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
        />
      </div>
      <Pagination />
    </div>
  );
};

export default Table;

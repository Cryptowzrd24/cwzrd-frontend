'use client';
import React, { useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnNewCoinsDefs from '@/app/hooks/data-grid/column-defination-new-coins';
import { columnsNewCoin } from '@/app/constants/columns';
import { useFetchNewCoinDataQuery } from '@/app/redux/reducers/data-grid';

const Table = () => {
  const columnNewCoinsDef = useColumnNewCoinsDefs(columnsNewCoin);

  const [rowData, setRowData] = useState([]);
  const { data } = useFetchNewCoinDataQuery({});

  useEffect(() => {
    if (data && data.data) {
      const res = data.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.quote.USD.price,
        volume_24h: item.quote.USD.volume_24h,
        percent_change_1h: item.quote.USD.percent_change_1h,
        percent_change_24h: item.quote.USD.percent_change_24h,
        circulating_supply: item.circulating_supply,
        symbol: item.symbol,
        fdv: item.quote.USD.fully_diluted_market_cap,
        date_added: item.date_added,
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
          columnDefs={columnNewCoinsDef}
          width="100%"
        />
      </div>
    </div>
  );
};

export default Table;

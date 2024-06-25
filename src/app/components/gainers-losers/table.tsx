'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import useColumnGainersDefs from '@/app/hooks/data-grid/column-defination-gainers';
import useColumnLosersDefs from '@/app/hooks/data-grid/column-defination-losers';
import { columnsGainers, columnsLosers } from '@/app/constants/columns';
import { Pagination } from '@/app/components/data-table/pagination';
import { useFetchGainersLosersDataQuery } from '@/app/redux/reducers/data-grid';

const Table = () => {
  const columnGainersDef = useColumnGainersDefs(columnsGainers);
  const columnLosersDef = useColumnLosersDefs(columnsLosers);
  const { data: dataGainers } = useFetchGainersLosersDataQuery('desc');
  const { data: dataLosers } = useFetchGainersLosersDataQuery('asc');

  const [search, setSearch] = useState('');
  const [rowGainersData, setRowGainersData] = useState([]);
  const [rowLosersData, setRowLosersData] = useState([]);
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

  const paginatedRowDataGainers = rowGainersData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  const paginatedRowDataLosers = rowLosersData.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );

  useEffect(() => {
    if (dataGainers && dataGainers.data) {
      const res = dataGainers.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.quote.USD.price,
        volume_24h: item.quote.USD.volume_24h,
        percent_change_24h: item.quote.USD.percent_change_24h,
        symbol: item.symbol,
      }));
      setRowGainersData(res);
    }

    if (dataLosers && dataLosers.data) {
      const res = dataLosers.data.map((item: any) => ({
        id: item.id,
        name: item.name,
        price: item.quote.USD.price,
        volume_24h: item.quote.USD.volume_24h,
        percent_change_24h: item.quote.USD.percent_change_24h,
        symbol: item.symbol,
      }));
      setRowLosersData(res);
    }
  }, [dataGainers, dataLosers]);

  return (
    <div className="data-table-wrapper">
      <CustomHeader search={search} setSearch={handleSetSearch} />
      <div
        style={{
          display: 'flex',
          gap: '36px',
          borderTop: '1px solid #1111111A',
          paddingTop: '24px',
        }}
      >
        <DataTable
          search={search}
          title={'Top Gainers'}
          rowData={paginatedRowDataGainers}
          columnDefs={columnGainersDef}
          width="50%"
        />
        <DataTable
          search={search}
          title={'Top Losers'}
          rowData={paginatedRowDataLosers}
          columnDefs={columnLosersDef}
          width="50%"
        />
      </div>
      <Pagination
        length={Math.max(rowGainersData.length, rowLosersData.length)}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;

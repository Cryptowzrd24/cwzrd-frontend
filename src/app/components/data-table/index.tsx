'use client';
import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import axios from 'axios';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './index.css';

import { CustomHeader } from './custom-header';
import { getColumnDef } from '@/utils/get-column-defination';
import { getRowData } from '@/utils/get-grid-row-data';

const DataTable = () => {
  const pathname = usePathname();

  const colDef = getColumnDef(pathname);
  const rowData = getRowData(pathname);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const options = {
  //         method: 'GET',
  //         url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  //       };

  //       const response = await axios(options);
  //       const data = response.data.data.map((item: any) => ({
  //         id: item.id,
  //         name: item.name,
  //         price: item.quote.USD.price,
  //         volume_24h: item.quote.USD.volume_24h,
  //         percent_change_1h: item.quote.USD.percent_change_1h,
  //         percent_change_24h: item.quote.USD.percent_change_24h,
  //         percent_change_7d: item.quote.USD.percent_change_7d,
  //         market_cap: item.quote.USD.market_cap,
  //         circulating_supply: item.circulating_supply,
  //       }));
  //       // setRowData(data);
  //     } catch (error) {
  //       // setError(error);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <div className="data-table-wrapper">
      <CustomHeader />
      <div className="ag-theme-material" style={{ height: 907 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDef}
          suppressRowClickSelection={true}
          pagination={true}
          paginationAutoPageSize={true}
          tooltipShowDelay={0}
          paginationPageSize={10}
          rowStyle={{
            fontFamily: 'SF Pro Display',
            fontSize: 16,
            fontWeight: 400,
          }}
        />
      </div>
    </div>
  );
};

export default DataTable;

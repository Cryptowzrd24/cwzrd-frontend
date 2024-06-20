'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './index.css';

import useColumnDefs from '@/app/hooks/column-definations';
import { CustomHeader } from './custom-header';

const DataTable = ({ showNewCoins = false }) => {
  const [rowData, setRowData] = useState([
    {
      index: 1,
      name: 'Bitcoin BTC',
      price: 64950,
      percent_change_1h: 0.28,
      percent_change_24h: -4.28,
      percent_change_7d: -2.28,
      market_cap: 13190305393,
      volume_24h: 1319030534093,
      circulating_supply: 1319030534093,
      last7Days: 'graph',
    },
  ]);

  const [rowDataNewCoins] = useState([
    {
      index: 1,
      name: 'Solana SOL',
      price: 6.495,
      chain: 7.37983,
      percent_change_1h: 0.02,
      percent_change_24h: 12.58,
      volume_24h: 1319030534093,
      last7Added: '3 Hours Ago',
    },
  ]);

  const columns = [
    { field: 'index' },
    { field: 'name' },
    { field: 'price' },
    { field: 'percent_change_1h', headerName: '1h%' },
    { field: 'percent_change_24h', headerName: '24h%' },
    { field: 'percent_change_7d', headerName: '7d%' },
    { field: 'market_cap' },
    { field: 'volume_24h' },
    { field: 'circulating_supply' },
    { field: 'last7Days' },
  ];

  const columnsNewCoin = [
    { field: 'index' },
    { field: 'name' },
    { field: 'price' },
    { field: 'chain' },
    { field: 'percent_change_1h', headerName: '1h%' },
    { field: 'percent_change_24h', headerName: '24h%' },
    { field: 'volume_24h' },
    { field: 'fdv' },
    { field: 'last7Added' },
  ];

  const columnDefs = useColumnDefs(showNewCoins ? columnsNewCoin : columns);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
        };

        const response = await axios(options);
        const data = response.data.data.map((item: any) => ({
          id: item.id,
          name: item.name,
          price: item.quote.USD.price,
          volume_24h: item.quote.USD.volume_24h,
          percent_change_1h: item.quote.USD.percent_change_1h,
          percent_change_24h: item.quote.USD.percent_change_24h,
          percent_change_7d: item.quote.USD.percent_change_7d,
          market_cap: item.quote.USD.market_cap,
          circulating_supply: item.circulating_supply,
        }));
        setRowData(data);
      } catch (error) {
        // setError(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="data-table-wrapper">
      <CustomHeader /> {/* Add the Custom Header component here */}
      <div className="ag-theme-material" style={{ height: 907 }}>
        <AgGridReact
          // @ts-expect-error it's a type misconfigurd in ag-grid-react
          rowData={showNewCoins ? rowDataNewCoins : rowData}
          columnDefs={columnDefs}
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
          frameworkComponents={{
            agColumnHeader: CustomHeader,
          }}
        />
      </div>
    </div>
  );
};

export default DataTable;

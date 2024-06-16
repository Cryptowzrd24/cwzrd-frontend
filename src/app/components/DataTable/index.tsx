'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import './index.css';

import useColumnDefs from '@/app/hooks/column-definations';

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
    {
      index: 2,
      name: 'Ethereum ETH',
      price: 2500,
      percent_change_1h: 0.15,
      percent_change_24h: -2.34,
      percent_change_7d: -1.15,
      market_cap: 20349083923,
      volume_24h: 121239493123,
      circulating_supply: 9999999932,
      last7Days: 'graph',
    },
    {
      index: 3,
      name: 'Cardano ADA',
      price: 2.35,
      percent_change_1h: 0.1,
      percent_change_24h: -1.12,
      percent_change_7d: -0.9,
      market_cap: 4532908392,
      volume_24h: 34234234232,
      circulating_supply: 4532908392,
      last7Days: 'graph',
    },
    {
      index: 4,
      name: 'Ripple XRP',
      price: 1.1,
      percent_change_1h: 0.25,
      percent_change_24h: -0.75,
      percent_change_7d: -0.5,
      market_cap: 2129839032,
      volume_24h: 12312312312,
      circulating_supply: 2129839032,
      last7Days: 'graph',
    },
    {
      index: 5,
      name: 'Dogecoin DOGE',
      price: 0.25,
      percent_change_1h: 0.12,
      percent_change_24h: -0.3,
      percent_change_7d: -0.2,
      market_cap: 129839038,
      volume_24h: 1231231231,
      circulating_supply: 129839038,
      last7Days: 'graph',
    },
    {
      index: 6,
      name: 'Polkadot DOT',
      price: 20.5,
      percent_change_1h: 0.18,
      percent_change_24h: -0.45,
      percent_change_7d: -0.35,
      market_cap: 983930320,
      volume_24h: 981231231,
      circulating_supply: 983930320,
      last7Days: 'graph',
    },
    {
      index: 7,
      name: 'Uniswap UNI',
      price: 25.3,
      percent_change_1h: 0.2,
      percent_change_24h: -0.5,
      percent_change_7d: -0.4,
      market_cap: 83930320,
      volume_24h: 81231231,
      circulating_supply: 83930320,
      last7Days: 'graph',
    },
    {
      index: 8,
      name: 'Litecoin LTC',
      price: 150.5,
      percent_change_1h: 0.3,
      percent_change_24h: -0.6,
      percent_change_7d: -0.5,
      market_cap: 6930320,
      volume_24h: 62312312,
      circulating_supply: 6930320,
      last7Days: 'graph',
    },
    {
      index: 9,
      name: 'Chainlink LINK',
      price: 30.2,
      percent_change_1h: 0.15,
      percent_change_24h: -0.25,
      percent_change_7d: -0.15,
      market_cap: 5930320,
      volume_24h: 5123123,
      circulating_supply: 5930320,
      last7Days: 'graph',
    },
    {
      index: 10,
      name: 'Stellar XLM',
      price: 0.35,
      percent_change_1h: 0.22,
      percent_change_24h: -0.35,
      percent_change_7d: -0.25,
      market_cap: 493032,
      volume_24h: 423123,
      circulating_supply: 493032,
      last7Days: 'graph',
    },
    {
      index: 11,
      name: 'VeChain VET',
      price: 0.1,
      percent_change_1h: 0.12,
      percent_change_24h: -0.22,
      percent_change_7d: -0.12,
      market_cap: 393032,
      volume_24h: 323123,
      circulating_supply: 393032,
      last7Days: 'graph',
    },
    {
      index: 12,
      name: 'Filecoin FIL',
      price: 40.0,
      percent_change_1h: 0.1,
      percent_change_24h: -0.2,
      percent_change_7d: -0.1,
      market_cap: 303032,
      volume_24h: 223123,
      circulating_supply: 303032,
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
    {
      index: 2,
      name: 'Avalanche AVAX',
      price: 3.25,
      chain: 7.37983,
      percent_change_1h: 0.12,
      percent_change_24h: 8.78,
      volume_24h: 123123123123,
      last7Added: '1 Day Ago',
    },
    {
      index: 3,
      name: 'Terra LUNA',
      price: 5.5,
      chain: 7.37983,
      percent_change_1h: 0.08,
      percent_change_24h: 10.58,
      volume_24h: 32123123123,
      last7Added: '2 Days Ago',
    },
    {
      index: 4,
      name: 'Binance Coin BNB',
      price: 400.2,
      chain: 7.37983,
      percent_change_1h: 0.22,
      percent_change_24h: 6.98,
      volume_24h: 4123123123,
      last7Added: '5 Days Ago',
    },
    {
      index: 5,
      name: 'Polygon MATIC',
      price: 1.5,
      chain: 7.37983,
      percent_change_1h: 0.3,
      percent_change_24h: 9.32,
      volume_24h: 523123123,
      last7Added: '1 Week Ago',
    },
    {
      index: 6,
      name: 'THETA THETA',
      price: 7.8,
      chain: 7.37983,
      percent_change_1h: 0.05,
      percent_change_24h: 15.75,
      volume_24h: 634123123,
      last7Added: '3 Days Ago',
    },
    {
      index: 7,
      name: 'Algorand ALGO',
      price: 0.9,
      chain: 7.37983,
      percent_change_1h: 0.18,
      percent_change_24h: 13.45,
      volume_24h: 743212312,
      last7Added: '4 Days Ago',
    },
    {
      index: 8,
      name: 'Tezos XTZ',
      price: 4.5,
      chain: 7.37983,
      percent_change_1h: 0.12,
      percent_change_24h: 7.67,
      volume_24h: 85123123,
      last7Added: '6 Days Ago',
    },
    {
      index: 9,
      name: 'Elrond EGLD',
      price: 110.0,
      chain: 7.37983,
      percent_change_1h: 0.2,
      percent_change_24h: 14.2,
      volume_24h: 9123123,
      last7Added: '2 Weeks Ago',
    },
    {
      index: 10,
      name: 'Harmony ONE',
      price: 0.2,
      chain: 7.37983,
      percent_change_1h: 0.1,
      percent_change_24h: 11.1,
      volume_24h: 1023123,
      last7Added: '5 Hours Ago',
    },
    {
      index: 11,
      name: 'Hedera HBAR',
      price: 0.3,
      chain: 7.37983,
      percent_change_1h: 0.22,
      percent_change_24h: 12.5,
      volume_24h: 1123123,
      last7Added: '8 Hours Ago',
    },
    {
      index: 12,
      name: 'Celo CELO',
      price: 4.2,
      chain: 7.37983,
      percent_change_1h: 0.25,
      percent_change_24h: 5.55,
      volume_24h: 123123123,
      last7Added: '10 Hours Ago',
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
          headers: {
            // 'X-CMC_PRO_API_KEY': API_KEY,
            // Accept: 'application/json',
          },
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
        />
      </div>
    </div>
  );
};

export default DataTable;

'use client';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';

import { LinearProgress } from '@mui/material';

import { AgGridReact } from 'ag-grid-react'; // React Data Grid Component
import 'ag-grid-community/styles/ag-grid.css'; // Mandatory CSS required by the grid
import 'ag-grid-community/styles/ag-theme-material.css';
import { ColDef, ColumnApi, IHeaderParams } from 'ag-grid-community';
import './index.css';
import unselectedStar from '@/app/assets/icons/unselectedStar.svg';
import selectedStar from '@/app/assets/icons/selectedStar.svg';

import graph from '@/app/assets/icons/graph.svg';
import infoIcon from '@/app/assets/icons/infoIcon.svg';

interface MarketCapComponentProps extends IHeaderParams {
  columnApi: ColumnApi;
  column: ColDef;
}

interface VolumeComponentProps extends IHeaderParams {
  columnApi: ColumnApi;
  column: ColDef;
}

interface CirculatingSupplyComponentProps extends IHeaderParams {
  columnApi: ColumnApi;
  column: ColDef;
}

function DataTable() {
  const API_KEY = '6a86da5e-65c2-4bf9-afd0-3906d6f7ca21';
  const [isSelected, setIsSelected] = useState(false);
  const [rowData, setRowData] = useState([]);

  const IndexNumberComp = (props: any) => {
    return (
      <div className="index-comp-main">
        <Image
          className="star-image"
          src={isSelected ? selectedStar : unselectedStar}
          alt=""
          onClick={() => setIsSelected(true)}
        />
        <p>{props.rowIndex + 1}</p>
      </div>
    );
  };

  const CurrencyNameComp = (props: any) => {
    return (
      <div className="currency-comp">
        <p>{props.value}</p>
      </div>
    );
  };

  const GraphComp = (props: any) => {
    return (
      <div>
        <Image src={graph} alt="" />
      </div>
    );
  };

  const InfoIcon = () => {
    return <Image src={infoIcon} alt="" />;
  };

  const Tooltip = () => {
    return (
      <div className="tooltip">
        <p>
          {' '}
          The total market value of a cryptocurrency's circulating supply. It is
          analogous to the free- float capitalization in the stock market
        </p>
        <p>
          Market Cap = Current Price x Circulating Supply.
        </p>
      </div>
    );
  };

  const RowTooltip = () => {
    return (
      <div className="row-tooltip">
        <div className="row-tooltip-percent">
          <p>Percentage</p>
          <p>53.56%</p>
        </div>
        <div className="row-tooltip-progress-bar">
          <LinearProgress
            variant="determinate"
            value={70}
            sx={{
              borderRadius: '5px',
              width: '100%',
              height: '5px',
              backgroundColor: 'rgba(17, 17, 17, 0.1)',
              '& .MuiLinearProgress-bar': {
                backgroundColor: 'rgba(17, 17, 17, 0.2)',
              },
            }}
          />
        </div>
        <div className="row-tooltip-circulating-supply">
          <p>Circulating Supply</p>
          <p className="text-light">19,720,370 BTC</p>
        </div>
        <div className="row-tooltip-max-supply">
          <p>Max Supply</p>
          <p className="text-light text-sm">21,000,000 BTC</p>
        </div>
      </div>
    );
  };

  const priceNumberFormatter = (price: number) => {
    return price
      ?.toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  };

  const getPercentStyle = (value: number) => {
    if (!value.toLocaleString().includes('-')) {
      return { color: 'rgba(69, 202, 148, 1)' };
    } else {
      return { color: 'rgba(245, 109, 109, 1)' };
    }
  };

  const MarketCapComponent: React.FC<MarketCapComponentProps> = (
    props: any,
  ) => {
    const onSortRequested = useCallback(
      (
        order: 'asc' | 'desc' | null,
        event: React.MouseEvent<HTMLDivElement>,
      ) => {
        props.columnApi.applyColumnState({
          state: [{ colId: props.column.getColId(), sort: order }],
          applyOrder: false,
        });
      },
      [props.columnApi, props.column],
    );

    const onHeaderClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const currentSort = props.column.getSort();
      let nextSort: 'asc' | 'desc' | null;
      if (currentSort === 'asc') {
        nextSort = 'desc';
      } else if (currentSort === 'desc') {
        nextSort = null;
      } else {
        nextSort = 'asc';
      }
      onSortRequested(nextSort, event);
    };

    return (
      <div
        className="market-cap-component"
        onClick={onHeaderClick}
      >
        <p className="text-primary text-sm font-semibold">Market Cap</p>
        <InfoIcon />
      </div>
    );
  };

  const VolumeComponent: React.FC<VolumeComponentProps> = (props: any) => {
    const onSortRequested = useCallback(
      (
        order: 'asc' | 'desc' | null,
        event: React.MouseEvent<HTMLDivElement>,
      ) => {
        props.columnApi.applyColumnState({
          state: [{ colId: props.column.getColId(), sort: order }],
          applyOrder: false,
        });
      },
      [props.columnApi, props.column],
    );

    const onHeaderClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const currentSort = props.column.getSort();
      let nextSort: 'asc' | 'desc' | null;
      if (currentSort === 'asc') {
        nextSort = 'desc';
      } else if (currentSort === 'desc') {
        nextSort = null;
      } else {
        nextSort = 'asc';
      }
      onSortRequested(nextSort, event);
    };

    return (
      <div
        className="volume-component"
        onClick={onHeaderClick}
      >
        <p className="text-primary text-sm font-semibold">Volume(24h)</p>
        <InfoIcon />
      </div>
    );
  };

  const CirculatingSupplyComponent: React.FC<
    CirculatingSupplyComponentProps
  > = (props: any) => {
    const onSortRequested = useCallback(
      (
        order: 'asc' | 'desc' | null,
        event: React.MouseEvent<HTMLDivElement>,
      ) => {
        props.columnApi.applyColumnState({
          state: [{ colId: props.column.getColId(), sort: order }],
          applyOrder: false,
        });
      },
      [props.columnApi, props.column],
    );

    const onHeaderClick = (event: React.MouseEvent<HTMLDivElement>) => {
      const currentSort = props.column.getSort();
      let nextSort: 'asc' | 'desc' | null;
      if (currentSort === 'asc') {
        nextSort = 'desc';
      } else if (currentSort === 'desc') {
        nextSort = null;
      } else {
        nextSort = 'asc';
      }
      onSortRequested(nextSort, event);
    };

    return (
      <div
        className="circulating-supply-component"
        onClick={onHeaderClick}
      >
        <p className="text-primary text-sm font-semibold">Circulating Supply</p>
        <InfoIcon />
      </div>
    );
  };

  const colDefs: ColDef[] = [
    {
      field: 'index',
      headerName: '#',
      cellRenderer: IndexNumberComp,
      width: 70,
    },
    {
      field: 'name',
      headerName: 'Name',
      cellRenderer: CurrencyNameComp,
      width: 180,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 120,
      valueFormatter: (p) => '$' + priceNumberFormatter(p.value),
    },
    {
      field: 'percent_change_1h',
      headerName: '1h%',
      width: 90,
      cellStyle: (p) => getPercentStyle(p.value),
      valueFormatter: (p) => {
        const value = p.value;
        const formattedValue = priceNumberFormatter(value) + '%';
        if (formattedValue.includes('-')) {
          return formattedValue;
        } else {
          return `+${formattedValue}`;
        }
      },
    },
    {
      field: 'percent_change_24h',
      headerName: '24h%',
      width: 90,
      cellStyle: (p) => getPercentStyle(p.value),
      valueFormatter: (p) => {
        const value = p.value;
        const isLoss =
          getPercentStyle(value).color === 'rgba(245, 109, 109, 1)';
        const formattedValue = priceNumberFormatter(value) + '%';
        if (formattedValue.includes('-')) {
          return formattedValue;
        } else {
          return `+${formattedValue}`;
        }
      },
    },
    {
      field: 'percent_change_7d',
      headerName: '7d%',
      width: 90,
      cellStyle: (p) => getPercentStyle(p.value),
      valueFormatter: (p) => {
        const value = p.value;
        const formattedValue = priceNumberFormatter(value) + '%';
        if (formattedValue.includes('-')) {
          return formattedValue;
        } else {
          return `+${formattedValue}`;
        }
      },
    },
    {
      field: 'market_cap',
      headerComponent: MarketCapComponent,
      width: 165,
      valueFormatter: (p) => '$' + priceNumberFormatter(p.value),
      tooltipComponent: Tooltip,
      headerTooltip: 'Market Cap',
    },
    {
      field: 'volume_24h',
      headerComponent: VolumeComponent,
      width: 165,
      valueFormatter: (p) => '$' + priceNumberFormatter(p.value),
    },
    {
      field: 'circulating_supply',
      headerComponent: CirculatingSupplyComponent,
      width: 165,
      valueFormatter: (p) => '$' + priceNumberFormatter(p.value),
      tooltipComponent: RowTooltip,
      tooltipValueGetter: (params) =>
        params.value == null || params.value === ''
          ? '- Missing -'
          : params.value,
    },
    {
      field: 'last7Days',
      width: 165,
      headerName: 'Last 7 Days',
      cellRenderer: GraphComp,
    },
  ];

  const gridOptions = {
    onGridReady: (params: any) => {
      params.api.sizeColumnsToFit();
    },
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const options = {
          method: 'GET',
          url: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
          headers: {
            'X-CMC_PRO_API_KEY': API_KEY,
            // Accept: 'application/json',
          },
        };

        const response = await axios(options);
        console.log(response.data);
        const data = response.data.data.map((item: any) => ({
          id:item.id,
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
      <div className="ag-theme-material" style={{ height: 800 }}>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          suppressRowClickSelection={true}
          pagination={true}
          paginationAutoPageSize={true}
          gridOptions={gridOptions}
          tooltipShowDelay={0}
        />
      </div>
    </div>
  );
}

export default DataTable;

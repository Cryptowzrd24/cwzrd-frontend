'use client';
import React, { useCallback, useEffect, useState } from 'react';
import { CustomHeader } from '@/app/components/data-table/custom-header';
import DataTable from '@/app/components/data-table';
import { columnsCollections } from '@/app/constants/columns';
import useColumnCollectionsDefs from '@/app/hooks/data-grid/column-defination-collections';
import { Pagination } from '@/app/components/data-table/pagination';
import { getNftList } from '@/app/services/collections';

const Table = () => {
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const [rowData, setRowData] = useState<any>([]);
  const [pageSize, setPageSize] = useState(10);
  const [count, setCount] = useState(10);

  const extractNftData = (data: any) => {
    return data.map((nft: any, index: number) => ({
      logo: nft.logo,
      index: index + 1,
      name: nft.name || '',
      volume_24: {
        amount:
          nft.oneDay?.volume?.toLocaleString() + ' ' + nft.floorPriceToken ||
          'N/A',
        percent: `${(nft.oneDay?.volumeChangePercentage ?? 0).toFixed(2)}%`,
      },
      market_cap:
        nft.marketCapUsd?.toLocaleString() + ' ' + nft.floorPriceToken || 'N/A',
      floor_price:
        nft.floorPriceUsd?.toFixed(2) + ' ' + nft.floorPriceToken || 'N/A',
      avg_price: {
        amount: `${nft.oneDay?.averagePrice?.toLocaleString() || 'N/A'} ${nft.floorPriceToken || ''}`,
        percent: `${(nft.oneDay?.averagePriceChangePercentage ?? 0).toFixed(2)}%`,
      },
      sales: {
        amount:
          nft.oneDay?.sales?.toLocaleString() + ' ' + nft.floorPriceToken ||
          'N/A',
        percent: `${(nft.oneDay?.salesChangePercentage ?? 0).toFixed(2)}%`,
      },
      assets: nft.assets?.toLocaleString() || 'N/A',
      owners: nft.owners?.toLocaleString() || 'N/A',
      owners_percent: `${(nft.ownerAssetsPercentage ?? 0).toFixed(2)}`,
      symbol: nft.floorPriceToken,
    }));
  };

  const fetchData = async () => {
    const data = await getNftList(currentPage, pageSize);
    const nftData = await extractNftData(data?.results);
    // setCount(Math.ceil(data?.count / pageSize));
    setCount(data?.count);
    setRowData(nftData);
  };
  useEffect(() => {
    fetchData();
  }, [currentPage, count, pageSize]);

  const columnCollectionsDef = useColumnCollectionsDefs(columnsCollections);

  const handleSetSearch = useCallback((value: any) => {
    setSearch(value);
  }, []);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value - 1);
  };

  // const paginatedRowData = rowDataCollections.slice(
  //   (currentPage - 1) * pageSize,
  //   currentPage * pageSize,
  // );

  return (
    <div className="data-table-wrapper">
      <CustomHeader
        search={search}
        setSearch={handleSetSearch}
        pageSize={pageSize}
        setPagination={setPageSize}
      />
      <div
        style={{
          display: 'flex',
          gap: '36px',
        }}
      >
        <DataTable
          search={search}
          rowData={rowData}
          columnDefs={columnCollectionsDef}
          width="100%"
        />
      </div>
      <Pagination
        length={count}
        pageSize={pageSize}
        currentPage={currentPage + 1}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default Table;

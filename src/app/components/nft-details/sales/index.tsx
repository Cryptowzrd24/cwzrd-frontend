'use client';
import { columnsSales } from '@/app/constants/columns';
import useColumnSalesDefs from '@/app/hooks/sales-data-grid/sales';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DataTable from '../../data-table';
import { Pagination } from '../../data-table/pagination';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';

const Sales = ({ serverNftData }: any) => {
  const colDef = useColumnSalesDefs(columnsSales);
  const pageSize = 10;
  const totalCount = 50;

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowData, setRowData] = useState([]);

  const handlePageChange = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setCurrentPage(value);
  };

  useEffect(() => {
    fetch('https://1f98-182-188-106-153.ngrok-free.app/api/nft/activities/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        platformAlias: 'polygon',
        contract: '0xa28640d322019217ecd27ebf90cd27b1978c6038',
        pageSize: pageSize,
        txType: 'sale',
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length >= currentPage * pageSize) setCurrentPage(1);
        const startIndex = (currentPage - 1) * pageSize + 1;
        const res = data.data.activities.map((item: any, index: number) => ({
          item: item?.tokenId,
          transaction: item?.txType,
          addresses: { from: item?.receive, to: item?.send },
          Price: item?.tradePrice,
          gas: item?.gas,
          ago_1h: new Date(item?.timestamp * 1000).toISOString().split('.')[0],
          logo: item?.nftImage,
          tradeSymbol: item?.tradeSymbol,
          index: startIndex + index,
        }));
        setRowData(res);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  return (
    <>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(17, 17, 17, 1)',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: 1,
          letterSpacing: '2px',
          mb: '4px',
        }}
      >
        SALES
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: '-42px',
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: '32px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            {serverNftData?.name}{' '}
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Sales
            </span>{' '}
          </Typography>
        </Box>

        <Typography
          variant="body1"
          sx={{
            background: 'rgba(17, 17, 17, 0.05)',
            padding: '10px 12px 10px 16px',
            fontWeight: '600',
            display: 'flex',
            justifyContent: 'center',
            fontSize: '14px',
            alignItems: 'center',
            gap: '4px',
            borderRadius: '56px',
            cursor: 'pointer',
            transition: 'background 0.3s ease',
            lineHeight: 1,
            ':hover': {
              background: 'rgba(17, 17, 17, 0.2)',
            },
          }}
        >
          View More
          <ArrowRightBlack />
        </Typography>
      </Box>
      <Box
        sx={{
          mt: '16px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          width: '100%',
          borderRadius: '24px',
          padding: '20px 24px 20px 24px',
          '& .ag-header': {
            borderTop: 'none',
          },
          '& .ag-header-cell:last-child .ag-header-cell-label': {
            justifyContent: 'flex-start',
            textAlign: 'left',
          },
          '& .ag-theme-material .ag-row ': {
            width: '1400px',
          },
        }}
      >
        <DataTable rowData={rowData} columnDefs={colDef} />
        <Pagination
          length={totalCount}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />{' '}
      </Box>
    </>
  );
};

export default Sales;

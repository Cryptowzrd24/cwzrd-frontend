'use client';
import { columnsSales } from '@/app/constants/columns';
import useColumnSalesDefs from '@/app/hooks/sales-data-grid/sales';
import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import DataTable from '../../data-table';
import ArrowRightBlack from '../../../../../public/icons/News-Letter/arrowRightBlack';
import { usePathname } from 'next/navigation';

const Sales = ({ serverNftData }: any) => {
  const colDef = useColumnSalesDefs(columnsSales);
  const pageSize = 10;
  const pathname = usePathname();
  const contractId = pathname.split('/')[3];
  const platformAlias = pathname.split('/')[4];

  const [currentPage, setCurrentPage] = useState<number>(1);
  const [rowData, setRowData] = useState<any>([]);
  const [nextToken, setNextToken] = useState(null);

  const fetchData = () => {
    fetch('https://backend.cwzrd.co.uk/api/nft/activities/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        platformAlias: platformAlias,
        contract: contractId,
        pageSize: pageSize,
        txType: 'sale',
        next: nextToken ? nextToken : null,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.data.length >= currentPage * pageSize) setCurrentPage(1);
        const startIndex = (currentPage - 1) * pageSize + 1;
        console.log(data.data.activities);
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
        setNextToken(data.data.next);
        setRowData((prevRowData: any) => {
          const combinedData = [...prevRowData, ...res];
          const uniqueData = Array.from(
            new Map(combinedData.map((item) => [item.item, item])).values(),
          );
          return uniqueData;
        });
      })
      .catch((error) => console.error('Error:', error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Box sx={{ width: '100%' }}>
      <Typography
        variant="body1"
        sx={{
          color: 'rgba(17, 17, 17, 1)',
          fontSize: '16px',
          fontWeight: '400',
          lineHeight: 1,
          letterSpacing: '2px',
          mb: '4px',
          textAlign: { xs: 'center', md: 'left' },
        }}
      >
        SALES
      </Typography>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: {xs:0,lg:'-42px'},
          flexDirection: { xs: 'column', md: 'row' },
          gap: { xs: '16px', md: '0px' },
        }}
      >
        <Box>
          <Typography
            variant="h2"
            sx={{
              fontSize: '32px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
              textAlign: { xs: 'center', md: 'left' },
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

        {/* <Typography
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
        </Typography> */}
      </Box>
      <Box
        sx={{
          mt: '16px',
          background: 'rgba(255, 255, 255, 1)',
          width: '100%',
          borderRadius: '24px',
          padding: {xs:'12px', md:'20px', lg:'24px'},
          overflow: 'hidden',
          boxShadow: '0px 4px 28px 0px rgba(0,0,0,0.05)',
          boxSizing: 'border-box',
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
      </Box>
      <Box
        onClick={fetchData}
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '15px' }}
      >
        <Typography
          variant="body1"
          sx={{
            width: '120px',
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
    </Box>
  );
};

export default Sales;

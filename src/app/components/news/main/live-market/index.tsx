'use client';
import React from 'react';
import RightRed from '../../../../../../public/icons/News-Letter/rightRed';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Bitcoin from '../../../../../../public/images/coin-details/bitcoin.png';
import Ethereum from '../../../../../../public/images/coin-details/ether.png';
import Tether from '../../../../../../public/images/coin-details/usdt.png';
import Xrp from '../../../../../../public/images/coin-details/xrp.png';
import Image from 'next/image';
import AreaChart from '@/app/components/elements/areaGraphCard.element';
import { getGraphColor } from '@/app/helpers/functions';

const liveCoinData = [
  {
    id: '1',
    name: 'Bitcoin',
    symbol: 'BTC',
    price: '123,710.68',
    percent: '+4.11',
    image: Bitcoin,
  },
  {
    id: '2',
    name: 'Ethereum',
    symbol: 'ETH',
    price: '123,710.68',
    percent: '+4.11',
    image: Ethereum,
  },
  {
    id: '3',
    name: 'Tether',
    symbol: 'USDT',
    price: '123,710.68',
    percent: '-0.12',
    image: Tether,
  },
  {
    id: '4',
    name: 'XRP',
    symbol: 'XRP',
    price: '123,710.68',
    percent: '+4.11',
    image: Xrp,
  },
];

const areachartData = [
  { x: 1, y: 5 },
  { x: 2, y: 10 },
  { x: 3, y: 15 },
  { x: 4, y: 8 },
  { x: 5, y: 1 },
  { x: 6, y: 6 },
  { x: 7, y: 2 },
  { x: 8, y: 3 },
  { x: 9, y: 9 },
  { x: 10, y: 7 },
  { x: 11, y: 1 },
  { x: 12, y: 12 },
  { x: 13, y: 2 },
  { x: 14, y: 5 },
  { x: 15, y: 1 },
  { x: 16, y: 15 },
  { x: 17, y: 7 },
];

function LiveMarket() {
  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        borderRadius: '16px',
        overflow: 'hidden',
        paddingInline: '16px',
        marginBottom: '20px',
        background:
          'linear-gradient(to right, rgba(254, 231, 226, 0.8), rgba(254, 231, 226, 0) 50px)',
        backdropFilter: 'blur(10px)',
        boxShadow: '0px 4px 28px 0px #0000000D',
      }}
    >
      <Box
        sx={{
          paddingTop: '12px',
          display: 'flex',
          mb: '12px',
          marginTop: '12px',
          justifyContent: 'space-between',
          width: '100%',
          paddingBottom: '12px',
          borderBottom: '1px solid #FFFFFF1A',
        }}
      >
        <Typography variant="subtitle2" sx={{ color: 'black' }}>
          🚀 LIVE MARKET
        </Typography>
        <Box
          sx={{
            display: 'flex',
            // gap: '4px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              background:
                'linear-gradient(to left, rgba(247, 132, 26, 1), rgba(247, 72, 72, 1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline',
              fontWeight: '600',
              mb: '3px',
              letterSpacing: 'normal',
            }}
          >
            See All
          </Typography>
          <span>
            <RightRed />
          </span>
        </Box>
      </Box>
      <Divider
        sx={{ width: '100%', marginTop: '-13px', marginBottom: '10px' }}
      />
      {liveCoinData?.map((item) => (
        <>
          <Box
            sx={{
              paddingRight: '12px',
              borderRadius: '16px',
              mb: '8px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                gap: '8px',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Box sx={{ position: 'relative', width: '50%' }}>
                <Image
                  src={item?.image.src}
                  alt="picture"
                  width={32}
                  height={32}
                  style={{
                    objectFit: 'cover',
                    borderRadius: '12px',
                  }}
                ></Image>
              </Box>
              <Stack maxHeight={'100px'}>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '220px',
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '18.2px',
                      marginBottom: '2px',
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '18.2px',
                      marginBottom: '2px',
                    }}
                  >
                    {'$' + item?.price}
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '220px',
                  }}
                >
                  <Typography
                    variant="caption"
                    sx={{
                      color: '#111111',
                      fontSize: '12px',
                      fontWeight: '400',
                      lineHeight: '15.6px',
                    }}
                  >
                    {item?.symbol}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '14px',
                      fontWeight: '500',
                      lineHeight: '18.2px',
                      marginBottom: '2px',
                      color: item?.percent.includes('+')
                        ? 'rgb(61,194,136)'
                        : 'rgb(243,57,57)',
                    }}
                  >
                    {item?.percent + ' '}%
                  </Typography>
                </Box>
              </Stack>
            </Box>
          </Box>
          {item?.id === '1' && (
            <AreaChart
              data={areachartData}
              color={getGraphColor(20)}
              percent={true}
            />
          )}
          <Divider sx={{ width: '100%', marginBottom: '20px' }} />
        </>
      ))}
    </Box>
  );
}

export default LiveMarket;

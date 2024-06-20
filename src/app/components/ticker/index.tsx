'use client';
import React from 'react';
import Marquee from 'react-fast-marquee';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';
import BitcoinIcon from '../../../../public/icons/Ticker-Section/bitcoin';
import LtcIcon from '../../../../public/icons/Ticker-Section/ltc';
import EthereumIcon from '../../../../public/icons/Ticker-Section/ethereum';
import SolanaIcon from '../../../../public/icons/Ticker-Section/solana';
import NgnIcon from '../../../../public/icons/Ticker-Section/ngn';
import BnbIcon from '../../../../public/icons/Ticker-Section/bnb';

const TickerContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: '#7248F7',
  overflow: 'hidden',
  height: 56,
  justifyContent: 'center',
  marginBottom: 32,
});

const TickerItem = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  margin: '0 8px',
  color: '#fff',
});

const TickerInfo = styled(Typography)(() => ({
  color: 'white',
  fontWeight: 500,
  fontSize: 16,
  lineHeight: '20.8px',
  marginLeft: 8,
}));

const PriceChange = styled(Typography)(() => ({
  marginLeft: '8px',
  color: 'white',
  fontSize: 11,
  fontWeight: 500,
  lineHeight: '14.3px',
  padding: '2px 4px',
  borderRadius: 11,
}));

const Ticker = () => {
  const data = [
    { icon: <BitcoinIcon />, name: 'BTC', price: '2984.08', change: 7.37 },
    { icon: <LtcIcon />, name: 'LTC', price: '2984.08', change: -7.37 },
    { icon: <EthereumIcon />, name: 'ETH', price: '2984.08', change: -7.37 },
    { icon: <SolanaIcon />, name: 'SOL', price: '2984.08', change: -7.37 },
    { icon: <NgnIcon />, name: 'NGN', price: '2984.08', change: -7.37 },
    { icon: <BnbIcon />, name: 'BNB', price: '2984.08', change: 7.37 },
  ];

  return (
    <TickerContainer>
      <Marquee autoFill={true} gradient={false}>
        {data.map((item, index) => (
          <TickerItem key={index}>
            {item.icon}
            <TickerInfo>
              {item.name} ${item.price}
            </TickerInfo>
            <PriceChange
              sx={{ backgroundColor: item.change > 0 ? '#1FD773' : '#F74848' }}
            >
              {item.change > 0 ? `+${item.change}%` : `${item.change}%`}
            </PriceChange>
          </TickerItem>
        ))}
      </Marquee>
    </TickerContainer>
  );
};

export default Ticker;

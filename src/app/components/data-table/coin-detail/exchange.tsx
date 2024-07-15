import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';

import exchangeImg from '../../../../../public/images/coin-details/exchange.png';
import okImg from '../../../../../public/images/coin-details/ok.png';
import coinbaseImg from '../../../../../public/images/coin-details/coin.png';
import tokyoCryptoImg from '../../../../../public/images/coin-details/tokyo.png';
import krakenImg from '../../../../../public/images/coin-details/karaken.png';

export const Exchange = () => {
  const exchanges = [
    { name: 'Binance', imageSrc: exchangeImg, currency: 'BTC' },
    { name: 'OKX', imageSrc: okImg, currency: 'ETH' },
    { name: 'Coinbase', imageSrc: coinbaseImg, currency: 'LTC' },
    { name: 'TokyoCrypto', imageSrc: tokyoCryptoImg, currency: 'XRP' },
    { name: 'Kraken', imageSrc: krakenImg, currency: 'ADA' },
  ];

  return (
    <>
      {exchanges.map((exchange) => (
        <Box
          key={exchange.name}
          sx={{ display: 'flex', alignItems: 'center', gap: '8px', mt: '16px' }}
        >
          <Image
            src={exchange.imageSrc}
            alt={exchange.name}
            width={32}
            height={32}
          />
          <Stack>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {exchange.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.6)',
              }}
            >
              {exchange.currency}
            </Typography>
          </Stack>
        </Box>
      ))}
    </>
  );
};

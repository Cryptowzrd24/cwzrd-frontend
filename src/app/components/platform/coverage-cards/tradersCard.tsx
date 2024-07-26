import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import macbook from '../../../../../public/images/platform/MacBook-traders.png';
import Image from 'next/image';
const TradersCard = () => {
  return (
    <>
      <Box
        sx={{
          // padding: '24px',
          borderRadius: '32px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          maxWidth: '410px',
          width: '100%',
        }}
      >
        <Stack sx={{ maxWidth: '314px', padding: '48px 48px 26px 48px' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              letterSpacing: '2px',
              color: 'rgba(17, 17, 17, 1)',
              mb: '8px',
              // maxWidth: '314px',
            }}
          >
            WZRD Traders Hub
          </Typography>
          <Typography
            variant="h1"
            sx={{
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            Real-time prices of Cryptocurrencies and key metrics
          </Typography>
        </Stack>
        <Box sx={{ paddingBottom: '32px' }}>
          <Image src={macbook} alt="macbook" width={362} />
        </Box>
      </Box>
    </>
  );
};

export default TradersCard;

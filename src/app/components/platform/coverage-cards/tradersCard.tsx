import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import macbook from '../../../../../public/images/platform/MacBook-traders.png';
import Image from 'next/image';
const TradersCard = () => {
  return (
    <>
      <Box
        sx={{
          borderRadius: '32px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          maxWidth: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '26px',
          alignItems: 'center',
        }}
      >
        <Stack sx={{ maxWidth: '314px', padding: '48px 0px 26px 24px' }}>
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              letterSpacing: '2px',
              color: 'rgba(17, 17, 17, 1)',
              mb: '8px',
              textTransform: 'uppercase',
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
        <Box sx={{ padding: '0 0 32px' }}>
          <Image src={macbook} alt="macbook" width={362} />
        </Box>
      </Box>
    </>
  );
};

export default TradersCard;

import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import macbook from '../../../../../public/images/platform/MacBook-traders.png';
import Image from 'next/image';
const TradersCard = () => {
  return (
    <>
      <Box
        sx={{
          borderRadius: '24px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          width: '307.5px',
          height: '352.5px',
          display: 'flex',
          flexDirection: 'column',
          gap: '17.5px',
          alignItems: 'center',
        }}
      >
        <Stack
          sx={{
            maxWidth: '235.5px',
            paddingInline: '36px',
            paddingTop: '36px',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              fontWeight: '400',
              letterSpacing: '2px',
              color: 'rgba(17, 17, 17, 1)',
              mb: '6px',
              textTransform: 'uppercase',
              lineHeight: '15.6px',
            }}
          >
            WZRD Traders Hub
          </Typography>
          <Typography
            sx={{
              fontSize: '24px',
              lineHeight: '28.8px',
              fontFamily: 'Sf Pro Display',
              fontWeight: 700,
              color: 'rgba(17, 17, 17, 1)',
            }}
          >
            Real-time prices of Cryptocurrencies and key metrics
          </Typography>
        </Stack>
        <Box sx={{ paddingInline: '18px', paddingBottom: '24.44px' }}>
          <Image src={macbook} alt="macbook" width={271.5} />
        </Box>
      </Box>
    </>
  );
};

export default TradersCard;

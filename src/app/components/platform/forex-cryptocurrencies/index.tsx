import { Box, Container, Typography } from '@mui/material';
import React from 'react';
import macbook from '../../../../../public/images/platform/MacBook.png';
const Forex = () => {
  return (
    <>
      <Container  maxWidth="xl">
        <Box>
          <Typography
            variant="h1"
            sx={{
              fontWeight: '600',
              fontSize: '56px',
              lineHeight: '61.6px',
              color: 'rgba(17, 17, 17, 1)',
              maxWidth: '590px',
              mb: '16px',
            }}
          >
            Daily Technical Analysis on Cryptocurrencies and Forex{' '}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontWeight: '400',
              fontSize: '20px',
              lineHeight: '30px',
              color: 'rgba(17, 17, 17, 0.8)',
              maxWidth: '590px',
            }}
          >
            Our daily technical analysis feed provides key insights on current
            market trends in forex, cryptocurrencies, commodities and indices
          </Typography>
        </Box>
      </Container>
    </>
  );
};

export default Forex;

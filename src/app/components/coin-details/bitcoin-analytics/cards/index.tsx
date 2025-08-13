import { Box, Grid } from '@mui/material';
import React from 'react';
import PossessionCard from './possessions';
import WhaleAssetsCard from './whaleAssests';
import OwnershipCard from './ownershipCard';
import TransactionCard from './transactionCard';

const BitcoinCard = () => {
  return (
    <Box sx={{ flexGrow: 1, width: '100%' }}>
      <Grid
        container
        spacing={3}
        sx={{
          alignItems: 'stretch', // This makes all items stretch to equal height
        }}
      >
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <PossessionCard />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <WhaleAssetsCard />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <OwnershipCard />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6} sx={{ display: 'flex' }}>
          <Box sx={{ width: '100%', height: '100%' }}>
            <TransactionCard />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BitcoinCard;

import { Box, Grid } from '@mui/material';
import React from 'react';
import PossessionCard from './possessions';
import WhaleAssetsCard from './whaleAssests';
import OwnershipCard from './ownershipCard';
import TransactionCard from './transactionCard';

const BitcoinCard = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <PossessionCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <WhaleAssetsCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <OwnershipCard />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TransactionCard />
        </Grid>
      </Grid>
    </Box>
  );
};

export default BitcoinCard;

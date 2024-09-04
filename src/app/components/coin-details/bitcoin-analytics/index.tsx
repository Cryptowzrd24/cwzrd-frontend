import { Box } from '@mui/material';
import React from 'react';
import Title from './title';
import BitcoinCard from './cards';

const BitcoinAnalytics = ({ name }: { name: string }) => {
  return (
    <>
      <Box sx={{ mt: '48px', mb: '16px' }}>
        <Title name={name} />
      </Box>
      <Box sx={{ display: 'flex', gap: '30px' }}>
        <BitcoinCard />
      </Box>
    </>
  );
};

export default BitcoinAnalytics;

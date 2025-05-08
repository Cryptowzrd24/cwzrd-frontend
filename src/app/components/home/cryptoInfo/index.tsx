import React from 'react';
import { cryptoData, gainerData } from './data';
import CryptoInfoCard from './CryptoInfoCard';
import { Box } from '@mui/material';

const CryptoInfo = ({ type }: { type: 'crypto' | 'gain' }) => {
  const data = type === 'crypto' ? cryptoData : gainerData;
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {data.map((item, index) => (
        <CryptoInfoCard key={index} {...item} />
      ))}
    </Box>
  );
};

export default CryptoInfo;

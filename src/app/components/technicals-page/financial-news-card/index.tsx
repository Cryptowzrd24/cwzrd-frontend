import { Box } from '@mui/material';
import React from 'react';
import NewsCard from './newsCard';

function FinancialNewsCardList() {
  const renderCards = [1, 2, 3, 4, 5].map((item) => {
    return (
      <Box sx={{ marginBottom: '8px' }} key={item}>
        <NewsCard />
      </Box>
    );
  });
  return <Box>{renderCards}</Box>;
}

export default FinancialNewsCardList;

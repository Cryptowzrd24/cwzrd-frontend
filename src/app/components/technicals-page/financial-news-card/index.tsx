import { Box } from '@mui/material';
import React from 'react';
import NewsCard from './newsCard';

interface FinancialNewsCardListProps {
  isRenderFour?: boolean;
}

function FinancialNewsCardList({ isRenderFour }: FinancialNewsCardListProps) {
  const numberOfCards = isRenderFour ? [1, 2, 3, 4] : [1, 2, 3, 4, 5];
  const renderCards = numberOfCards.map((item) => {
    return (
      <Box sx={{ marginBottom: '8px' }} key={item}>
        <NewsCard />
      </Box>
    );
  });
  return <Box>{renderCards}</Box>;
}

export default FinancialNewsCardList;

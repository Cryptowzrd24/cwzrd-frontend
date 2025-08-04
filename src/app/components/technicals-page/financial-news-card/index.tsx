import { Box } from '@mui/material';
import React from 'react';
import NewsCard from './newsCard';

interface FinancialNewsCardListProps {
  isRenderFour?: boolean;
  renderList?: boolean;
}

function FinancialNewsCardList({
  isRenderFour,
  renderList,
}: FinancialNewsCardListProps) {
  const numberOfCards = isRenderFour ? [1, 2, 3, 4] : [1, 2, 3, 4, 5];
  const renderCards = numberOfCards.map((item) => {
    return (
      // <Box key={item}>
      <Box sx={{ marginBottom: renderList ? '0px' : '8px' }} key={item}>
        <NewsCard />
      </Box>
    );
  });
  return (
    <Box
      sx={{
        ...(renderList && {
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          height: '460px',
          width: '428px',
          overflow: 'auto',
          scrollbarWidth: 'none',
        }),
      }}
    >
      {renderCards}
    </Box>
  );
}

export default FinancialNewsCardList;

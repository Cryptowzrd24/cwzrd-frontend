'use client';

import React from 'react';
import { CustomCellRendererProps } from 'ag-grid-react';
import { Box } from '@mui/material';
import StarRank from '../../../../../../public/icons/nft/starRank';

export const Hash = (props: CustomCellRendererProps) => {
  const { value } = props;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
      <StarRank />
      <div>{value}</div>
    </Box>
  );
};

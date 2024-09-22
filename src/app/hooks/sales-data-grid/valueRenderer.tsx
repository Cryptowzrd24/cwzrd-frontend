import React from 'react';
import { Box } from '@mui/material';
import { CustomCellRendererProps } from 'ag-grid-react';

function ValueRenderer(props: CustomCellRendererProps) {
  return (
    <Box
      sx={{
        fontSize: '13px',
        fontWeight: 400,
        fontFamily: 'Sf Pro Display',
        color: 'rgba(17, 17, 17, 0.8)',
      }}
    >
      {props?.colDef?.field === 'gas' ? props?.value.toFixed(6) : props?.value}{' '}
      {props?.data?.tradeSymbol}
    </Box>
  );
}

export default ValueRenderer;

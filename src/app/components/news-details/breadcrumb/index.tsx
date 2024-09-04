import { Box, Typography } from '@mui/material';
import React from 'react';
import { ChevronsRight } from '../../../../../public/icons/chevronsRight';

function BreadCrumb({
  origin,
  description,
}: {
  origin: string;
  description: string;
}) {
  return (
    <Box
      sx={{
        padding: '16px 24px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Box sx={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'Sf Pro Display',
            lineHeight: '18.2px',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          {origin}
        </Typography>
        <ChevronsRight />
        <Typography
          sx={{
            fontSize: '14px',
            fontWeight: 500,
            fontFamily: 'Sf Pro Display',
            lineHeight: '18.2px',
            color: 'rgba(114, 72, 247, 1)',
          }}
        >
          {description}
        </Typography>
      </Box>
    </Box>
  );
}

export default BreadCrumb;

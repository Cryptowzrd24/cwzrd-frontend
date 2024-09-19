import { Box, Typography } from '@mui/material';
import React from 'react';

import { CustomCellRendererProps } from 'ag-grid-react';

export const SalesItems = (props: CustomCellRendererProps) => {
  return (
    <>
      <Box
        sx={{ display: 'flex', alignItems: 'center', gap: '10px', mt: '14px' }}
      >
        <Box
          sx={{
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            overflow: 'hidden',
          }}
        >
          <img src={props?.data?.logo} alt="elipse" width={32} height={32} />
        </Box>
        <Typography
          variant="body1"
          sx={{
            fontSize: '13px',
            fontWeight: '600',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          #{props.value}
        </Typography>
      </Box>
    </>
  );
};

import { Box } from '@mui/material';
import { ReactNode } from 'react';

function GaugeChartWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        width: '24%',
        minWidth: '180px',
        height: { xs: '150px', lg: '185px' },

        // '@media (max-width: 400px)': { height: '120px' },
      }}
      className="custom-gauge"
    >
      {children}
    </Box>
  );
}

export default GaugeChartWrapper;

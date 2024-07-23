import React from 'react';
import styles from './index.module.css';
import StockChart from '../stock-chart';
import GraphCustomHeader from '../graph-custom-header';
import { Box } from '@mui/material';
import GraphFilter from '../graph-filter';

function GraphLayout() {
  return (
    <div className={styles.graphLayout}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <GraphCustomHeader />
        <GraphFilter />
      </Box>
      <StockChart />
    </div>
  );
}

export default GraphLayout;

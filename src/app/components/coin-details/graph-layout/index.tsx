'use client';
import React, { useState } from 'react';
import styles from './index.module.css';
import StockChart from '../stock-chart';
import GraphCustomHeader from '../graph-custom-header';
import { Box } from '@mui/material';
import GraphFilter from '../graph-filter';

function GraphLayout() {
  const [selectedTab, setSelectedTab] = useState('Price');
  const [selectedFilter, setSelectedFilter] = useState('filter');
  const [volumeValue, setVolumeValue] = useState('24h');
  return (
    <div className={styles.graphLayout}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <GraphCustomHeader
          selectedTab={selectedTab}
          setSelectedTab={setSelectedTab}
        />
        <GraphFilter
          selectedFilter={selectedFilter}
          setSelectedFilter={setSelectedFilter}
          volumeValue={volumeValue}
          setVolumeValue={setVolumeValue}
        />
      </Box>
      <StockChart
        selectedGraph={selectedTab}
        selectedFilter={selectedFilter}
        volumeValue={volumeValue}
      />
    </div>
  );
}

export default GraphLayout;

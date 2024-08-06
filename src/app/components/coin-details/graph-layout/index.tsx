'use client';
import React, { useState } from 'react';
import styles from './index.module.css';
import StockChart from '../stock-chart';
import GraphCustomHeader from '../graph-custom-header';
import { Box } from '@mui/material';
import GraphFilter from '../graph-filter';

function GraphLayout({
  chartRef,
  isFullScreen,
  handleFullScreen,
  setIsFullScreen,
}: any) {
  const [selectedTab, setSelectedTab] = useState('Price');
  const [selectedFilter, setSelectedFilter] = useState('filter');
  const [volumeValue, setVolumeValue] = useState('1D');
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
          handleFullScreen={handleFullScreen}
        />
      </Box>
      <StockChart
        selectedGraph={selectedTab}
        selectedFilter={selectedFilter}
        volumeValue={volumeValue}
        isFullScreen={isFullScreen}
        chartRef={chartRef}
        setIsFullScreen={setIsFullScreen}
      />
    </div>
  );
}

export default GraphLayout;

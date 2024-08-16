'use client';
import React, { useRef, useState } from 'react';
import styles from './index.module.css';
import StockChart from '../stock-chart';
import GraphCustomHeader from '../graph-custom-header';
import { Box } from '@mui/material';
import GraphFilter from '../graph-filter';

function GraphLayout() {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [selectedTab, setSelectedTab] = useState('Price');
  const [selectedFilter, setSelectedFilter] = useState('filter');
  const [volumeValue, setVolumeValue] = useState('1D');
  const handleFullScreen = () => {
    if (chartRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
        setIsFullScreen(false);
      } else {
        chartRef.current.requestFullscreen();
        setIsFullScreen(true);
      }
    }
  };
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
          selectedTab={selectedTab}
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

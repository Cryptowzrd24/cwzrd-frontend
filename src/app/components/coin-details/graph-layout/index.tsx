'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import StockChart from '../stock-chart';
import GraphCustomHeader from '../graph-custom-header';
import { Box } from '@mui/material';
import GraphFilter from '../graph-filter';
import CompareCoin from '../compare-coin';
import { useFetchCoinsListQuery } from '@/app/redux/reducers/data-grid';

function GraphLayout({ coinSymbol }: any) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [selectedTab, setSelectedTab] = useState('Price');
  const [selectedFilter, setSelectedFilter] = useState('filter');
  const [selectedCompareCoinId, setSelectedCompareCoinId] = useState();
  const [volumeValue, setVolumeValue] = useState('1D');

  const { data } = useFetchCoinsListQuery({});

  const foundCoin = data?.find(
    (coin: any) => coin.coin_id === selectedCompareCoinId,
  );

  const compareCoinSymbol = foundCoin ? foundCoin.symbol : '';

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
  useEffect(() => {
    if (selectedTab !== 'Compare with') {
      setSelectedCompareCoinId(undefined);
    }
  }, [selectedTab]);
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
          selectedFilter={selectedFilter}
        />
        {selectedTab === 'Compare with' && (
          <CompareCoin
            compareData={data}
            setSelectedCompareCoinId={setSelectedCompareCoinId}
          />
        )}
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
        selectedCompareCoinId={selectedCompareCoinId}
        coinSymbol={coinSymbol}
        compareCoinSymbol={compareCoinSymbol}
      />
    </div>
  );
}

export default GraphLayout;

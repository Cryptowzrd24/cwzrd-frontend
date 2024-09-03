'use client';
import React, { useEffect, useRef, useState } from 'react';
import styles from './index.module.css';
import StockChart from '../stock-chart';
import GraphCustomHeader from '../graph-custom-header';
import { Box } from '@mui/material';
import GraphFilter from '../graph-filter';
import CompareCoin from '../compare-coin';
import { useFetchCoinsListQuery } from '@/app/redux/reducers/data-grid';
import { ResolutionString } from '../../../../../public/static/charting_library/datafeed-api';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';

function GraphLayout({ coinSymbol }: any) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [selectedTab, setSelectedTab] = useState('Price');
  const [selectedFilter, setSelectedFilter] = useState('filter');
  const [selectedCompareCoinId, setSelectedCompareCoinId] = useState();
  const [volumeValue, setVolumeValue] = useState('1D');
  const [isScriptReady, setIsScriptReady] = useState(false);

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
    if (selectedTab === 'Market Cap') {
      setSelectedFilter('filter');
    }
  }, [selectedTab]);

  const TradingView = dynamic(
    () => import('../trading-view').then((mod) => mod.TradingView),
    { ssr: false },
  );

  return (
    <>
      <AnimatePresence>
        {isScriptReady && selectedTab === 'TradingView' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TradingView
              setShow={setSelectedTab}
              config={{
                symbol: 'AAPL',
                interval: '1D' as ResolutionString,
                library_path: '/static/charting_library/',
                locale: 'en',
                charts_storage_url: 'https://saveload.tradingview.com',
                charts_storage_api_version: '1.1',
                client_id: 'tradingview.com',
                user_id: 'public_user_id',
                fullscreen: false,
                autosize: true,
                height: 610,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
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
        <Script
          src="/static/datafeeds/udf/dist/bundle.js"
          strategy="lazyOnload"
          onReady={() => {
            setIsScriptReady(true);
          }}
        />
      </div>
    </>
  );
}

export default GraphLayout;

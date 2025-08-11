'use client';
import React, { useEffect, useRef, useState } from 'react';
import StockChart from '../stock-chart';
import GraphCustomHeader from '../graph-custom-header';
import { Box, Button, useMediaQuery } from '@mui/material';
import GraphFilter from '../graph-filter';
import CompareCoin from '../compare-coin';
import { useFetchCoinsListQuery } from '@/app/redux/reducers/data-grid';
import { ResolutionString } from '../../../../../public/static/charting_library/datafeed-api';
import Script from 'next/script';
import dynamic from 'next/dynamic';
import { AnimatePresence, motion } from 'framer-motion';

import { TradingViewIcon } from '../../../../../public/icons/tradingView';

function GraphLayout({ coinSymbol }: any) {
  const chartRef = useRef<HTMLDivElement>(null);
  const [isFullScreen, setIsFullScreen] = useState(false);

  const [selectedTab, setSelectedTab] = useState('Price');
  const [selectedFilter, setSelectedFilter] = useState('filter');
  const [selectedCompareCoinId, setSelectedCompareCoinId] = useState();
  const [volumeValue, setVolumeValue] = useState('1D');
  const [isScriptReady, setIsScriptReady] = useState(false);
  const [tradingViewClicked, setTradingViewClicked] = useState('close');

  const { data } = useFetchCoinsListQuery({});
  const isMobile = useMediaQuery('(max-width: 600px)');

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
    if (selectedFilter === 'candlestick') {
      setSelectedCompareCoinId(undefined);
    }
  }, [selectedTab, selectedFilter]);

  const TradingView = dynamic(
    () => import('../trading-view').then((mod) => mod.TradingView),
    { ssr: false },
  );

  const handleOpenTradingView = () => {
    setTradingViewClicked('open');
  };

  return (
    <Box sx={{ width: '100%', height: '100%', overflow: 'hidden' }}>
      <AnimatePresence>
        {isScriptReady && tradingViewClicked === 'open' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <TradingView
              setShow={setTradingViewClicked}
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
      <Box sx={{ width: '100%', height: '100%', overflow: 'hidden', backgroundColor: 'white', boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px', borderRadius: '24px' }}>
        <Box
          sx={{
            display: 'flex',
            justifyContent: { xs: 'center', md: 'space-between' },
            alignItems: { xs: 'flex-start', md: 'center' },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: '16px', md: '24px' },
            boxSizing: 'border-box',
            width: '100%',
            flexWrap: 'wrap',
            padding: { xs: '8px', sm: '10px' },

          }}
        >
          <Box sx={{ width: { xs: "100%", md: '22%' }, flex: { xs: 1, md: 1 } }}>
            <GraphCustomHeader
              selectedTab={selectedTab}
              setSelectedTab={setSelectedTab}
            />
          </Box>
          <Box sx={{ width: { xs: "100%", md: '19%' }, flex: { xs: 1, md: 1 } }}>
            <Button
              onClick={handleOpenTradingView}
              sx={{
                width: '100%',
                background: '#f3f3f3',
                height: '40px',
                // top: '20px',
                // left: selectedFilter === 'candlestick' ? '150px' : '50px',
                borderRadius: '8px',
                fontSize: '14px',
                color: 'rgba(17, 17, 17, 0.6)',
                fontFamily: 'Sf Pro Display',
                fontWeight: 600,
                lineHeight: '18.2px',
                padding: '14px 18px',
              }}
              startIcon={<TradingViewIcon />}
            >
              TradingView
            </Button>
          </Box>
          <Box sx={{ width: { xs: "100%", md: '19%' }, flex: { xs: 1, md: 1 } }}>
            {selectedFilter !== 'candlestick' && (
              <CompareCoin
                compareData={data}
                setSelectedCompareCoinId={setSelectedCompareCoinId}
              />
            )}
          </Box>
          <Box sx={{ width: { xs: '100%', md: '40%' }, flex: { xs: 1, md: 2 }, boxSizing: 'border-box' }}>
            <GraphFilter
              selectedFilter={selectedFilter}
              setSelectedFilter={setSelectedFilter}
              volumeValue={volumeValue}
              setVolumeValue={setVolumeValue}
              handleFullScreen={handleFullScreen}
              selectedTab={selectedTab}
              width={selectedTab === 'Market Cap' || selectedTab === 'Compare with' || isMobile ? '100%' : '260px'}
            />
          </Box>
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
      </Box>
    </Box>
  );
}

export default GraphLayout;

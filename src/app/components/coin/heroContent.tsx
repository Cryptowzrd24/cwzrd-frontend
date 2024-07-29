'use client';

import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import GraphCard from '@/app/components/common/graphCard.component';
import { areaChartData } from '@/app/constants/charts';
import { useAppSelector } from '@/app/redux/store';
import { AnimatePresence, motion } from 'framer-motion';
import GaugeChart from '../common/guage-chart';
import { useFetchStatsDataQuery } from '@/app/redux/reducers/data-grid';
import numeral from 'numeral';

const HeroContent = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { showStats } = useAppSelector((state) => state.market);
  const { data } = useFetchStatsDataQuery({});

  const handleToggle = () => setIsExpanded(!isExpanded);

  const marketCap = numeral(data?.results[0].quote.USD.total_market_cap)
    .format('0.00a')
    .toUpperCase();
  const marketCapChange =
    data?.results[0].quote.USD.total_market_cap_yesterday_percentage_change.toFixed(
      2,
    );
  const volumeCap = numeral(data?.results[0].quote?.USD?.total_volume_24h ?? 0)
    .format('0.00a')
    .toUpperCase();
  const volumeCapChange =
    data?.results[0].quote.USD.total_volume_24h_yesterday_percentage_change.toFixed(
      2,
    );

  const isMarketCapPositiveChange = parseFloat(marketCapChange) > 0;
  const marketCapChangeColor = isMarketCapPositiveChange
    ? '#1FD773'
    : '#F74848';
  const marketCapChangeText = isMarketCapPositiveChange
    ? 'an increase of'
    : 'a decrease of';

  const isVolumeCapPositiveChange = parseFloat(volumeCapChange) > 0;
  const volumeCapChangeColor = isVolumeCapPositiveChange
    ? '#1FD773'
    : '#F74848';
  const volumeCapChangeText = isVolumeCapPositiveChange
    ? 'an increase of'
    : 'a decrease of';

  const defiVolume = numeral(data?.results[0].quote.USD.defi_volume_24h)
    .format('0.00a')
    .toUpperCase();
  const defiVolumePercent = (
    (data?.results[0].quote.USD.defi_volume_24h /
      data?.results[0].quote.USD.total_volume_24h) *
    100
  ).toFixed(2);
  const isDefiVolumePositiveChange =
    parseFloat(data?.results[0].quote.USD.defi_24h_percentage_change) > 0;
  const defiVolumeChangeColor = isDefiVolumePositiveChange
    ? '#1FD773'
    : '#F74848';
  const defiVolumeChangeText = isDefiVolumePositiveChange
    ? 'an increase of'
    : 'a decrease of';
  const defiVolumeChange =
    data?.results[0].quote.USD.defi_24h_percentage_change.toFixed(2);

  const stablecoinVolume = numeral(
    data?.results[0].quote.USD.stablecoin_volume_24h,
  )
    .format('0.00a')
    .toUpperCase();
  const stablecoinVolumePercent = (
    (data?.results[0].quote.USD.stablecoin_volume_24h /
      data?.results[0].quote.USD.total_volume_24h) *
    100
  ).toFixed(2);
  const isStablecoinVolumePositiveChange =
    parseFloat(data?.results[0].quote.USD.stablecoin_24h_percentage_change) > 0;
  const stablecoinVolumeChangeColor = isStablecoinVolumePositiveChange
    ? '#1FD773'
    : '#F74848';
  const stablecoinVolumeChangeText = isStablecoinVolumePositiveChange
    ? 'an increase of'
    : 'a decrease of';
  const stablecoinVolumeChange =
    data?.results[0].quote.USD.stablecoin_24h_percentage_change.toFixed(2);

  const btcDominance = parseFloat(
    data?.results[0].btc_dominance || '0',
  ).toFixed(2);
  const btcDominanceChange =
    data?.results[0].quote.USD.total_market_cap_yesterday_percentage_change.toFixed(
      2,
    );

  const isBtcDominancePositiveChange = parseFloat(btcDominanceChange) > 0;
  const btcDominanceChangeColor = isBtcDominancePositiveChange
    ? '#1FD773'
    : '#F74848';
  const btcDominanceChangeText = isBtcDominancePositiveChange
    ? 'an increase of'
    : 'a decrease of';

  return (
    <>
      <Typography variant="h1" sx={{ maxWidth: '960px', marginTop: '-10px' }}>
        Today{' '}
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Cryptocurrency prices
        </span>{' '}
        by Market Cap
      </Typography>

      <Box
        sx={{
          fontSize: '15px',
          lineHeight: '24px',
          color: 'rgba(17, 17, 17, 0.8)',
          mt: '8px',
        }}
      >
        The overall market capitalization of the crypto market is
        <span style={{ color: '#808A9D', fontWeight: '600', fontSize: '15px' }}>
          {' '}
          +${marketCap}
        </span>
        , {marketCapChangeText}{' '}
        <span
          style={{
            color: marketCapChangeColor,
            fontWeight: '600',
            fontSize: '15px',
          }}
        >
          {marketCapChange}%
        </span>{' '}
        in the last 24 hours.{' '}
        {isExpanded && (
          <>
            <br />
            The total crypto market volume over the last 24 hours is
            <span
              style={{ color: '#808A9D', fontWeight: '600', fontSize: '15px' }}
            >
              {' '}
              +${volumeCap}
            </span>
            , {volumeCapChangeText}{' '}
            <span
              style={{
                color: volumeCapChangeColor,
                fontWeight: '600',
                fontSize: '15px',
              }}
            >
              {volumeCapChange}%
            </span>
            . The total volume in DeFi is currently
            <span
              style={{ color: '#808A9D', fontWeight: '600', fontSize: '15px' }}
            >
              {' '}
              +${defiVolume}
            </span>
            , {defiVolumeChangeText}{' '}
            <span
              style={{
                color: defiVolumeChangeColor,
                fontWeight: '600',
                fontSize: '15px',
              }}
            >
              {defiVolumeChange}%
            </span>
            , which <br /> is{' '}
            <span style={{ fontWeight: 600 }}>{defiVolumePercent}%</span> of the
            total crypto market 24-hour volume. The volume of all stable coins
            is now
            <span
              style={{ color: '#808A9D', fontWeight: '600', fontSize: '15px' }}
            >
              {' '}
              +${stablecoinVolume}
            </span>
            , {stablecoinVolumeChangeText}{' '}
            <span
              style={{
                color: stablecoinVolumeChangeColor,
                fontWeight: '600',
                fontSize: '15px',
              }}
            >
              {stablecoinVolumeChange}%
            </span>
            , which is{' '}
            <span style={{ fontWeight: 600 }}>{stablecoinVolumePercent}%</span>{' '}
            of the total crypto market 24-hour volume. <br />
            Bitcoin’s dominance is currently
            <span
              style={{ color: '#808A9D', fontWeight: '600', fontSize: '15px' }}
            >
              {' '}
              +{btcDominance}%
            </span>
            , {btcDominanceChangeText}{' '}
            <span
              style={{
                color: btcDominanceChangeColor,
                fontWeight: '600',
                fontSize: '15px',
              }}
            >
              {btcDominanceChange}%
            </span>
            . <br />
          </>
        )}
        <span
          style={{
            color: '#808A9D',
            cursor: 'pointer',
            fontSize: '15px',
            fontWeight: '400',
            textDecoration: 'underline',
          }}
          onClick={handleToggle}
        >
          {isExpanded ? ' Read Less' : ' Read More'}
        </span>
      </Box>

      <AnimatePresence>
        {showStats && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, marginTop: 0 }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                gap: '10px',
                alignItems: 'center',
              }}
            >
              <GraphCard
                heading="🔥 Market CAP"
                value={{ data: '36,606,531,750.36', prefix: '$' }}
                percent={6.32}
                graphAttr={{ type: 'area', data: areaChartData }}
              />
              <GraphCard
                heading="🔥 24 hour volume"
                value={{ data: '41,606,531,750.36', prefix: '$' }}
                percent={0.32}
                graphAttr={{ type: 'bar', data: areaChartData }}
              />
              <GraphCard
                heading="🔥 Bitcoin Dominance"
                value={{ data: '51.88', postfix: '%' }}
                percent={-0.32}
                graphAttr={{ type: 'area', data: areaChartData }}
              />
              <GaugeChart value={0} />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default HeroContent;

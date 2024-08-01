'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import GaugeChart from '../common/guage-chart';
import GraphCard from '../common/graphCard.component';
import { areaChartData } from '@/app/constants/charts';

function HeroContent() {
  return (
    <>
      <Typography variant="h1" sx={{ maxWidth: '960px', marginTop: '-10px' }}>
        Highest
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '10px',
          }}
        >
          Volume
        </span>{' '}
        Cryptocurrencies
      </Typography>
      <Box
        sx={{
          fontSize: '15px',
          lineHeight: '24px',
          color: 'rgba(17, 17, 17, 0.8)',
          mt: '8px',
        }}
      >
        Listed below are the highest volume cryptocurrencies, based on real-time
        data from Crypto WZRD. Discover which coins and tokens are leading the
        market in trading activity.
      </Box>
      <AnimatePresence>
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
              maxWidth: '100%',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
            className="high_volume__container"
          >
            <GraphCard
              heading="🔥 24 hour volume"
              value={{ data: '$41,606,531,750.36', prefix: '$' }}
              percent={0.32}
              graphAttr={{ type: 'bar', data: areaChartData }}
            />
            <GraphCard
              heading="🔥 Market CAP"
              value={{ data: '36,606,531,750.36', prefix: '$' }}
              percent={6.32}
              graphAttr={{ type: 'area', data: areaChartData }}
            />
            <GraphCard
              heading="🔥 24 hour volume"
              value={{ data: '$41,606,531,750.36', prefix: '$' }}
              percent={0.32}
              graphAttr={{ type: 'bar', data: areaChartData }}
            />
            <GaugeChart value={0} />
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HeroContent;

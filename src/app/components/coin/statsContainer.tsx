'use client';

import React from 'react';
import GraphCard from '@/app/components/common/graphCard.component';
import { areaChartData } from '@/app/constants/charts';
import { AnimatePresence, motion } from 'framer-motion';
import GaugeChart from '../common/guage-chart';
import { useAppSelector } from '@/app/redux/store';
import { Box } from '@mui/material';

const StatsContainer = () => {
  const { showStats } = useAppSelector((state) => state.market);
  return (
    <AnimatePresence>
      {showStats && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
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
            className="coin__container"
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
            <GaugeChart />
          </Box>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StatsContainer;

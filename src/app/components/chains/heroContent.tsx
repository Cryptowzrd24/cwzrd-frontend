'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import { areaChartData } from '@/app/constants/charts';

import React from 'react';
import KpiGuageChart from '../common/kpi-guage-chart';
import GraphCard from '../common/graphCard.component';
import GaugeChart from '../common/guage-chart';

function HeroContent() {
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          maxWidth: '960px',
          '@media (max-width: 576px)': {
            fontSize: '24px !important',
            fontWeight: '700 !important',
            mt: '10px',
          },
        }}
      >
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Top Blockchains
        </span>{' '}
        by Total Value Locked (TVL){' '}
      </Typography>
      <Box
        sx={{
          fontSize: '14px',
          lineHeight: '24px',
          color: 'rgba(17, 17, 17, 0.8)',
          mt: '8px',
          mb: '12px',
        }}
      >
        Listed below are the statistics for various blockchains, including their
        Total Value Locked (TVL) and the number of protocols. The data is
        organized by TVL in descending order.
      </Box>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Box
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              flexDirection: 'row',
              gap: '10px',
              alignItems: 'center',
              maxWidth: '100%',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
            className="chains__container"
          >
            <Box
              sx={{
                width: { xs: '100%', sm: '48%', lg: '24%' },
              }}
            >
              <KpiGuageChart isDarkTheme={false} />
            </Box>
            <Box
              sx={{
                width: { xs: '100%', sm: '48%', lg: '24%' },
              }}
            >
              <GraphCard
                showLargeCard={true}
                heading="🔥 24 hour volume"
                value={{ data: '51.88', prefix: '$' }}
                percent={-0.32}
                graphAttr={{ type: 'bar', data: areaChartData }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: '100%', sm: '48%', lg: '24%' },
              }}
            >
              <GraphCard
                showLargeCard={true}
                heading="🔥 Bitcoin Dominance"
                value={{ data: '51.88', postfix: '%' }}
                percent={-0.32}
                graphAttr={{ type: 'area', data: areaChartData }}
              />
            </Box>
            <Box
              sx={{
                width: { xs: '100%', sm: '48%', lg: '24%' },
                height: { xs: '185px' },

                // '@media (max-width: 400px)': { height: '120px' },
              }}
              className="custom-gauge"
            >
              <GaugeChart />
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HeroContent;

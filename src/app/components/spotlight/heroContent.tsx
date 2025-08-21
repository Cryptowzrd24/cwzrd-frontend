'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import Card1 from '../common/card1.component';
import GaugeChart from '../common/guage-chart';
import btc from '@/app/assets/images/btc.png';
import GaugeChartWrapper from '../common/GaugeChartWrapper';

function HeroContent() {
  return (
    <>
      <Typography
        variant="h1"
        sx={{ maxWidth: '960px', marginTop: { xs: '0', md: '-10px' } }}
      >
        Best{' '}
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Crypto
        </span>{' '}
        Based On The Latest Data
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
        Our 'Cryptocurrencies to Watch' lists are based on the most recent price
        and user behavior data.
      </Box>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Box
            sx={{ overflow: 'auto', marginBottom: { xs: '10px', lg: '20px' } }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                width: '99.5%',
                gap: '10px',
                height: { xs: '155px', lg: '190px' },
                alignItems: 'center',
                maxWidth: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ width: '24%', minWidth: '190px' }}>
                <Card1
                  type="percent"
                  heading="⭐️ Trending"
                  items={[
                    {
                      medal: '🥇',
                      image: btc,
                      text1: 'Bitcoin',
                      text2: 'BTC',
                      percent: 29.32,
                    },
                    {
                      medal: '🥇',
                      image: btc,
                      text1: 'Bitcoin',
                      text2: 'BTC',
                      percent: 29.32,
                    },
                    {
                      medal: '🥇',
                      image: btc,
                      text1: 'Bitcoin',
                      text2: 'BTC',
                      percent: -0.12,
                    },
                  ]}
                />
              </Box>
              <Box sx={{ width: '24%', minWidth: '200px' }}>
                <Card1
                  type="visited"
                  heading="👁️ Most Visited"
                  items={[
                    {
                      medal: '🥇',
                      image: btc,
                      text1: 'Bitcoin',
                      text2: 'BTC',
                      count: 1900,
                    },
                    {
                      medal: '🥇',
                      image: btc,
                      text1: 'Bitcoin',
                      text2: 'BTC',
                      count: 500,
                    },
                    {
                      medal: '🥇',
                      image: btc,
                      text1: 'Bitcoin',
                      text2: 'BTC',
                      count: 2600,
                    },
                  ]}
                />
              </Box>
              <Box sx={{ width: '24%', minWidth: '200px' }}>
                <Card1
                  type="percent"
                  heading="🚀 Top Gain"
                  items={[
                    {
                      medal: '🥇',
                      image: btc,
                      text1: 'Bitcoin',
                      text2: 'BTC',
                      percent: 29.32,
                    },
                    {
                      medal: '🥇',
                      image: btc,
                      text1: 'Bitcoin',
                      text2: 'BTC',
                      percent: 29.32,
                    },
                    {
                      medal: '🥇',
                      image: btc,
                      text1: 'Bitcoin',
                      text2: 'BTC',
                      percent: 0.12,
                    },
                  ]}
                />
              </Box>
              <GaugeChartWrapper>
                <GaugeChart />
              </GaugeChartWrapper>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HeroContent;

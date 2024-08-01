'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import Card1 from '../common/card1.component';
import GaugeChart from '../common/guage-chart';
import btc from '@/app/assets/images/btc.png';

function HeroContent() {
  return (
    <>
      <Typography variant="h1" sx={{ maxWidth: '960px', marginTop: '-10px' }}>
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
            sx={{
              display: 'flex',
              flexDirection: 'row',
              gap: '10px',
              alignItems: 'center',
              maxWidth: '100%',
              justifyContent: 'space-between',
              marginBottom: '20px',
            }}
          >
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
            <GaugeChart value={0} />
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HeroContent;

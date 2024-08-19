'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import GaugeChart from '../common/guage-chart';
import GraphCardTop from '../common/graph-card-top';
import { areaChartData } from '@/app/constants/charts';
import Card3 from '../common/card3.component';
import { colorConfig } from '@/app/helpers/config';
import cardBgImage7 from '@/app/assets/images/cardImagebg7.png';

function HeroContent() {
  return (
    <>
      <Typography variant="h1" sx={{ maxWidth: '960px', marginTop: '-10px' }}>
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Gainers
        </span>{' '}
        & Losers{' '}
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
        Which crypto coins and tokens with a 24-hour volume exceeding US$50,000
        have experienced the most significant gains or losses in the past 24
        hours?
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
            <GraphCardTop
              heading="🚀 Top Gain"
              percent={0.32}
              graphAttr={{ type: 'area', data: areaChartData }}
            />
            <GraphCardTop
              heading="🚨 Top Losers"
              percent={-0.32}
              graphAttr={{ type: 'area', data: areaChartData }}
            />
            <Card3
              transparentButton={true}
              bgImage={cardBgImage7}
              staticTextColor={colorConfig.white}
              textColor={colorConfig.green}
              heading="Top Gain"
              name="Dogwifhat"
              desc="took first place with a gain of"
              value="+29.32%"
              end="in 7 days."
            />
            <GaugeChart />
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HeroContent;

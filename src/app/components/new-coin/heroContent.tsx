'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import GaugeChart from '../common/guage-chart';
import Card3 from '../common/card3.component';
import { colorConfig } from '@/app/helpers/config';
import cardBgImage from '@/app/assets/images/cardImagebg.png';
import Card1 from '../common/card1.component';
import frogImage from '@/app/assets/images/frogImage.png';
import GraphCardTop from '../common/graph-card-top';
import { areaChartData } from '@/app/constants/charts';

function HeroContent() {
  return (
    <>
      <Typography variant="h1" sx={{ maxWidth: '960px', marginTop: '-10px' }}>
        New{' '}
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Cryptocurrencies
        </span>{' '}
      </Typography>
      <Box
        sx={{
          fontSize: '16px',
          lineHeight: '24px',
          color: 'rgba(17, 17, 17, 0.8)',
          mt: '8px',
        }}
      >
        New cryptocurrencies added to Crypto WZRD in the last 30 days.
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
            }}
          >
            <Card1
              type="time"
              heading="✨ Recently Added"
              items={[
                {
                  medal: '🥇',
                  image: frogImage,
                  text1: 'PEPI',
                  text2: 'PEPI',
                  time: 4,
                },
                {
                  medal: '🥇',
                  image: frogImage,
                  text1: 'PEPI',
                  text2: 'PEPI',
                  time: 4,
                },
                {
                  medal: '🥇',
                  image: frogImage,
                  text1: 'PEPI',
                  text2: 'PEPI',
                  time: 4,
                },
              ]}
            />
            <GraphCardTop
              heading="🚨 Top Losers"
              percent={-0.32}
              graphAttr={{ type: 'area', data: areaChartData }}
            />
            <Card3
              transparentButton={true}
              bgImage={cardBgImage}
              staticTextColor={colorConfig.white}
              textColor={colorConfig.green}
              heading="Trending"
              name="Bitcoin"
              value="+29.32%"
              desc="are placing in the first place with"
              end="in 7 days."
            />
            <GaugeChart value={0} />
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HeroContent;

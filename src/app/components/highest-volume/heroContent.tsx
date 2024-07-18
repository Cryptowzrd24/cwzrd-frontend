'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import GaugeChart from '../common/guage-chart';
import GraphCard from '../common/graphCard.component';
import { areaChartData } from '@/app/constants/charts';

function HeroContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
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
          fontSize: '16px',
          lineHeight: '24px',
          color: 'rgba(17, 17, 17, 0.8)',
          mt: '8px',
        }}
      >
        CoinMarketCap ranks and scores exchanges based on traffic, liquidity,
        trading volumes, and confidence in the legitimacy of trading volumes
        reported.
        {isExpanded && (
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            corrupti iure optio facilis voluptatum similique corporis doloribus
            laborum iusto, cupiditate eveniet dolore tempore eaque rerum
            delectus provident porro nisi? Similique.
          </span>
        )}
        <span
          style={{
            color: '#7248F7',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: '700',
          }}
          onClick={handleToggle}
        >
          {isExpanded ? ' Read Less' : ' Read More'}
        </span>
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
              justifyContent: 'space-between',
            }}
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

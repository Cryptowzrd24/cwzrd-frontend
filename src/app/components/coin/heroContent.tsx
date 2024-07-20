'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import GraphCard from '@/app/components/common/graphCard.component';
import { areaChartData } from '@/app/constants/charts';
import { useAppSelector } from '@/app/redux/store';
import { AnimatePresence, motion } from 'framer-motion';
import GaugeChart from '../common/guage-chart';

function HeroContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const { showStats } = useAppSelector((state) => state.market);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
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
          fontSize: '16px',
          lineHeight: '24px',
          color: 'rgba(17, 17, 17, 0.8)',
          mt: '8px',
        }}
      >
        The overall market capitalization of the crypto market is
        <span style={{ color: '#7248F7', fontWeight: '600', fontSize: '16px' }}>
          {' '}
          €2.26T
        </span>
        . an increase of{' '}
        <span style={{ color: '#1FD773', fontWeight: '600', fontSize: '16px' }}>
          +3.75%
        </span>{' '}
        in the last 24 hours.{' '}
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
            color: '#808A9D',
            cursor: 'pointer',
            fontSize: '16px',
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
                // justifyContent: 'center',
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
}

export default HeroContent;

'use client';
import { Box, Typography } from '@mui/material';
import React, { useState } from 'react';
import GraphCard from '@/app/components/common/graphCard.component';
import { areaChartData } from '@/app/constants/charts';
import frogImage from '@/app/assets/images/frogImage.png';
import Card1 from '@/app/components/common/card1.component';
import { useAppSelector } from '@/app/redux/store';
import { AnimatePresence, motion } from 'framer-motion';

function HeroContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const { showStats } = useAppSelector((state) => state.market);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Typography variant="h1" sx={{ maxWidth: '960px' }}>
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
          fontSize: '20px',
          maxWidth: '600px',
          lineHeight: '30px',
          color: 'rgba(17, 17, 17, 0.8)',
          mt: '32px',
        }}
      >
        The overall market capitalization of the crypto market is
        <span style={{ color: '#7248F7', fontWeight: '600', fontSize: '20px' }}>
          €2.26T.
        </span>{' '}
        an increase of{' '}
        <span style={{ color: '#1FD773', fontWeight: '600', fontSize: '20px' }}>
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
            color: '#7248F7',
            cursor: 'pointer',
            fontSize: '18px',
            fontWeight: '500',
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
            animate={{ opacity: 1, height: 'auto', marginTop: '48px' }}
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
                value={{ data: '51.88', prefix: '$' }}
                percent={-0.32}
                graphAttr={{ type: 'bar', data: areaChartData }}
              />
              <GraphCard
                heading="🔥 Bitcoin Dominance"
                value={{ data: '51.88', postfix: '%' }}
                percent={-0.32}
                graphAttr={{ type: 'area', data: areaChartData }}
              />
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
                    medal: '🥈',
                    image: frogImage,
                    text1: 'RING AI',
                    text2: 'RING',
                    time: 31,
                  },
                  {
                    medal: '🥉',
                    image: frogImage,
                    text1: 'HE-MAN',
                    text2: 'HE-MAN',
                    time: 45,
                  },
                ]}
              />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default HeroContent;

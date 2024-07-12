'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import GaugeChart from '../common/guage-chart';
import GraphCardTop from '../common/graph-card-top';
import { areaChartData } from '@/app/constants/charts';
import Card3 from '../common/card3.component';
import { colorConfig } from '@/app/helpers/config';
import cardBgImage7 from '@/app/assets/images/cardImagebg7.png';

function HeroContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Typography variant="h1">
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
          fontSize: '20px',
          maxWidth: '600px',
          lineHeight: '30px',
          mt: '32px',
        }}
      >
        Insights into the biggest events shaping the crypto industry.{' '}
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
              justifyContent: 'space-between',
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
              desc="took the first place with a gain of"
              value="+29.32%"
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

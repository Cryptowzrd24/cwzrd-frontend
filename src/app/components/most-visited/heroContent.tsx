'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import GaugeChart from '../common/guage-chart';
import btc from '@/app/assets/images/btc.png';
import Card1 from '../common/card1.component';
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
      <Typography variant="h1" sx={{ maxWidth: '754px', width: '100%' }}>
        Most
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '10px',
          }}
        >
          Visited
        </span>{' '}
        Cryptocurrencies
      </Typography>
      <Box
        sx={{
          fontSize: '20px',
          maxWidth: '830px',
          lineHeight: '30px',
          mt: '32px',
        }}
      >
        CoinMarketCap ranks and scores exchanges based on traffic, liquidity,
        trading volumes, and confidence in the legitimacy of trading volumes
        reported.{' '}
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

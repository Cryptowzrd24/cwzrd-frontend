'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import GaugeChart from '../common/guage-chart';
import Card3 from '../common/card3.component';
import cardBgImage7 from '@/app/assets/images/cardImagebg7.png';
import { colorConfig } from '@/app/helpers/config';
import Card2 from '../common/card2.component';

import btc from '@/app/assets/images/btc.png';
import nft from '@/app/assets/images/nft.png';
import frogImage from '@/app/assets/images/frogImage.png';
import TopNftCollection from '../common/top-nft-collections-card';
import { areaChartData } from '@/app/constants/charts';

function HeroContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Typography
        variant="h4"
        sx={{ mb: '12px', letterSpacing: '1.5px', fontSize: 18 }}
      >
        MARKET CAP
      </Typography>
      <Typography variant="h1" sx={{ maxWidth: '830px', width: '100%' }}>
        Top NFT
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '10px',
          }}
        >
          Collections{' '}
        </span>{' '}
      </Typography>
      <Box
        sx={{
          fontSize: '20px',
          maxWidth: '600px',
          lineHeight: '24px',
          mt: '32px',
        }}
      >
        Listed below are the stats for NFT collections{' '}
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
            <TopNftCollection
              heading="🎖 Top NFT Colllections"
              percent={-0.32}
              graphAttr={{ type: 'area', data: areaChartData }}
            />
            <Card2
              heading="🎖 Top Categories"
              items={[
                {
                  medal: '🥇',
                  text1: 'Base Ecosystem',
                  images: [nft, btc, frogImage],
                },
                {
                  medal: '🥇',
                  text1: 'Base Ecosystem',
                  images: [nft, btc, frogImage],
                },
                {
                  medal: '🥇',
                  text1: 'Base Ecosystem',
                  images: [nft, btc, frogImage],
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
              desc="took first place with a gain of"
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

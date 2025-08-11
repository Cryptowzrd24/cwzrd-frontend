'use client';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';
import GaugeChart from '../common/guage-chart';
import btc from '@/app/assets/images/btc.png';
import nft from '@/app/assets/images/nft.png';
import frogImage from '@/app/assets/images/frogImage.png';
import Card2 from '../common/card2.component';
import Card4 from '../common/card4.component';
import { colorConfig } from '@/app/helpers/config';
import newsImage from '@/app/assets/images/newsBgImage.png';
import TopNftCollection from '../common/top-nft-collections-card';
import { areaChartData } from '@/app/constants/charts';
import GaugeChartWrapper from '../common/GaugeChartWrapper';

function HeroContent() {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <>
      <Typography
        variant="h1"
        sx={{
          maxWidth: '960px',
          '@media (max-width: 576px)': {
            fontSize: '24px !important',
            fontWeight: '700 !important',
            mt: '10px',
          },
        }}
      >
        Top Crypto{' '}
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Categories
        </span>{' '}
        By Market Cap{' '}
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
            fontSize: '15px',
            fontWeight: '700',
          }}
          onClick={handleToggle}
        >
          {isExpanded ? ' Read Less' : ' Read More'}
        </span>
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
                width: '99%',
                height: { xs: '155px', lg: '190px' },
                gap: '10px',
                alignItems: 'center',
                maxWidth: '100%',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  width: '24%',
                  minWidth: '250px',
                }}
              >
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
              </Box>
              <Box sx={{ width: '24%', minWidth: '250px' }}>
                <TopNftCollection
                  heading="🎖 Top NFT Collections"
                  percent={-0.32}
                  graphAttr={{ type: 'area', data: areaChartData }}
                />
              </Box>
              <Box sx={{ width: '24%', minWidth: '240px' }}>
                <Card4
                  bgImage={newsImage}
                  heading={'📈️ News'}
                  staticTextColor={colorConfig.white}
                  mainText="Gucci Burberry join Booming Scotland."
                  date={new Date()}
                  name={'John Smith'}
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

'use client';
import { areaChartData } from '@/app/constants/charts';
import { Box, Typography } from '@mui/material';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';
import GraphCard from '../common/graphCard.component';
import GaugeChart from '../common/guage-chart';
import CandlestickCard from '../common/candlestickCard';
import Card3 from '../common/card3.component';
import { colorConfig } from '@/app/helpers/config';
import cardBgImage from '@/app/assets/images/cardImagebg.png';

function HeroContent() {
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
        Top
        <span
          style={{
            backgroundImage:
              'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            marginLeft: '8px',
          }}
        >
          DeFi Tokens
        </span>{' '}
        by Market Capitalization{' '}
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
        Discover the top DeFi tokens ranked by CryptoWZRD, based on market
        performance, user activity, liquidity, and trading volumes.
      </Box>

      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Box
            sx={{ overflowX: 'auto', marginBottom: { xs: '10px', lg: '20px' } }}
          >
            <Box
              sx={{
                display: 'flex',
                // flexWrap: 'wrap',
                width: '99%',
                minHeight: { xs: '155px', lg: '190px' },
                flexDirection: 'row',
                gap: '10px',
                alignItems: 'center',
                maxWidth: '100%',
                justifyContent: 'space-between',
              }}
              className="defi__container"
            >
              <Box
                sx={{
                  width: '24%',
                  minWidth: '220px',
                  boxSizing: 'border-box',
                }}
              >
                <CandlestickCard
                  heading="Bitcoin"
                  value={{ data: '36,606,531,750.36', prefix: '$' }}
                  percent={6.32}
                />
              </Box>
              {/* <Box
              sx={{
                width: { xs: '100%', sm: '48%', lg: '24%' },
              }}
            > */}
              <GraphCard
                heading="👀 Popularity"
                value={{ data: '41,606,531,750.36', prefix: '' }}
                percent={-0.32}
                graphAttr={{ type: 'bar', data: areaChartData }}
              />
              {/* </Box> */}
              <Box
                sx={{
                  width: '24%',
                  minWidth: '230px',
                  boxSizing: 'border-box',
                }}
              >
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
              </Box>
              <Box
                sx={{
                  width: '24%',
                  height: { xs: '150px', lg: '185px' },
                  boxSizing: 'border-box',
                  minWidth: '180px',

                  // '@media (max-width: 400px)': { height: '120px' },
                }}
                className="custom-gauge"
              >
                <GaugeChart />
              </Box>
            </Box>
          </Box>
        </motion.div>
      </AnimatePresence>
    </>
  );
}

export default HeroContent;

import { Box, Typography } from '@mui/material';
import React from 'react';
import AnalysisCard from './analysis-card';
import FinancialNewsCardList from './financial-news-card';
import FinancialNewsCarousel from './financial-news-carousel';
import TechnicalsBanner from './technicals-banner';
import NewsLetterBanner from '../banners/newsLetterBanner';
import TechnicalGraphCarousel from './technicals-graph-carousel';

import bitcoinImg from '../../../../public/images/coin-details/bitcoin.png';
import etheriumImg from '../../../../public/images/coin-details/ether.png';
import TechnicalsGraph from './technicals-graph';
import PicksForPanel from './picks-for-card';
// import LiveNewsExplorer from '../../../app/components/news/components/main/live-news';

function TechnicalsPage() {
  return (
    <>
      <Box>
        <Box>
          <TechnicalsGraph />
        </Box>
        <Box sx={{ position: 'relative', top: '-150px' }}>
          <TechnicalGraphCarousel />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '21.5px',
          marginTop: '-110px',
        }}
      >
        <Typography
          sx={{
            fontSize: '24px',
            fontWeight: 700,
            fontFamily: 'Sf Pro Display',
          }}
          left={0}
        >
          New{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Technicals
          </span>{' '}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-start',
            marginRight: '38px',
          }}
        >
          <Typography
            sx={{
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginRight: '5px',
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '18.2px',
              fontFamily: 'Sf Pro Display',
            }}
            variant="body2"
            right={1}
          >
            Read More
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '16px' }}>
        <AnalysisCard />
        <FinancialNewsCardList />
        <Box
          sx={{
            width: '368px',
            backgroundImage: `url('/images/news-letter/card-background1.png')`,
            backgroundSize: '100% 100%',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            borderRadius: '16px',
            height: '505px',
          }}
        >
          <PicksForPanel />
        </Box>
      </Box>
      <Box sx={{ mb: '120px' }}>
        <FinancialNewsCarousel />
      </Box>
      <Box
        sx={{ display: 'flex', justifyContent: 'center', marginTop: '-50px' }}
      >
        <TechnicalsBanner
          bgColor="brown"
          coinName="Bitcoin"
          coinImg={bitcoinImg}
        />
      </Box>
      {/* //second sec// */}
      <Box>
        <Box sx={{ display: 'flex', gap: '16px', marginTop: '16px' }}>
          <AnalysisCard />
          <FinancialNewsCardList />
          <Box
            sx={{
              width: '400px',
              height: '507px',
              background: 'white',
              boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
            }}
          >
            Render Card here
          </Box>
        </Box>
        <Box sx={{ mb: '120px' }}>
          <FinancialNewsCarousel />
        </Box>
        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '-50px' }}
        >
          <TechnicalsBanner
            bgColor="blue"
            coinName="Etherium"
            coinImg={etheriumImg}
          />
        </Box>
      </Box>

      {/* //second sec// */}

      {/* //third sec// */}
      <Box>
        <Box sx={{ display: 'flex', gap: '15px', marginTop: '24px' }}>
          <AnalysisCard isThird={true} />
          <FinancialNewsCardList isRenderFour={true} />
          <FinancialNewsCardList isRenderFour={true} />
        </Box>
        <Box sx={{ mb: '120px' }}>
          <FinancialNewsCarousel />
        </Box>
        <Box sx={{ marginTop: '-42px' }}>
          <NewsLetterBanner />
        </Box>
      </Box>
      {/* //third sec// */}
    </>
  );
}

export default TechnicalsPage;

import { Box, Typography } from '@mui/material';
import React from 'react';
import TechnicalsGraph from '../technicals-graph';
import TechnicalGraphCarousel from '../technicals-graph-carousel';
import AnalysisCard from '../analysis-card';
import FinancialNewsCardList from '../financial-news-card';
import PicksForPanel from '../picks-for-card';
import FinancialNewsCarousel from '../financial-news-carousel';
import TechnicalsBanner from '../technicals-banner';

import bitcoinImg from '../../../../../public/images/coin-details/bitcoin.png';
import etheriumImg from '../../../../../public/images/coin-details/ether.png';
import xrpImg from '../../../../../public/images/coin-details/xrp-coin.png';
import litecoinImg from '../../../../../public/images/coin-details/lite-coin.png';
import chainLinkImg from '../../../../../public/images/coin-details/chain-link.png';

import RightCard from '../card-right';
import NewsLetterBanner from '../../banners/newsLetterBanner';
import GraphDetailsCard from '../graph-detail-card';
import FinancialCard from '../financial-card';
import NewsCard from '../financial-news-card/newsCard';
import FinancialCarBig from '../financial-card-big';
import MentorshipCard from '../mentorship-card';
import MemberShipBanner from '../../banners/memberShipBanner';
import FinancialRight from '../financial-right';

function TechnicalsPageCrypto() {
  return (
    <Box>
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
        <AnalysisCard isFirst={true} />
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
          <AnalysisCard isFirst={true} />
          <FinancialNewsCardList />
          <Box
            sx={{
              width: '360px',
              height: '507px',
              background: 'white',
              boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
              borderRadius: '24px',
            }}
          >
            <RightCard />
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
          <FinancialNewsCarousel noBackground={true} />
        </Box>
        <Box sx={{ marginTop: '-42px' }}>
          <NewsLetterBanner />
        </Box>
      </Box>
      {/* //third sec// */}
      <Box sx={{ marginBlock: '24px' }}>
        <TechnicalsBanner
          bgColor="purple"
          coinName="Litecoin"
          coinImg={litecoinImg}
        />
      </Box>

      <Box sx={{ display: 'flex', gap: 2 }}>
        <Box>
          <GraphDetailsCard />
          <Box sx={{ display: 'flex', gap: 1, marginTop: '12px' }}>
            <FinancialCard />
            <FinancialCard />
            <FinancialCard />
            <FinancialCard />
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
        </Box>
      </Box>
      <Box sx={{ marginBlock: '24px' }}>
        <TechnicalsBanner bgColor="green" coinName="XRP" coinImg={xrpImg} />
      </Box>
      <Box sx={{ display: 'flex', gap: 2 }}>
        <AnalysisCard isFourth={true} image={xrpImg} />
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <FinancialCarBig image={xrpImg} />
          <NewsCard image={xrpImg} isShort={true} />
          <NewsCard image={xrpImg} isShort={true} />
          <NewsCard image={xrpImg} isShort={true} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <NewsCard image={xrpImg} isShort={true} />
          <NewsCard image={xrpImg} isShort={true} />
          <MentorshipCard />
        </Box>
      </Box>
      <Box sx={{ marginBottom: '24px' }}>
        <TechnicalsBanner
          bgColor="green"
          coinName="Chainlink"
          coinImg={chainLinkImg}
        />
      </Box>

      <Box sx={{ marginBlock: '24px', display: 'flex' }}>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <FinancialRight />
          </Box>
          <Box>
            <GraphDetailsCard isInverted={true} image={chainLinkImg} />
            <Box sx={{ display: 'flex', gap: 1, marginTop: '12px' }}>
              <FinancialCard image={chainLinkImg} />
              <FinancialCard image={chainLinkImg} />
              <FinancialCard image={chainLinkImg} />
              <FinancialCard image={chainLinkImg} />
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginBottom: '24px' }}>
        <MemberShipBanner />
      </Box>
    </Box>
  );
}

export default TechnicalsPageCrypto;

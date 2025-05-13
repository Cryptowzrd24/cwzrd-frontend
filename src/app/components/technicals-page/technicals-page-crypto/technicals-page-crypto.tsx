import { Box, Typography, useMediaQuery } from '@mui/material';
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

function TechnicalsPageCrypto({
  isMainPage = false,
}: {
  isMainPage?: boolean;
}) {
  const isTablet = useMediaQuery('(min-width: 768px)');
  return (
    <Box>
      <Box sx={{ marginBottom: '30px' }}>
        <Box
          sx={{
            borderRadius: '24px',
            background: isMainPage ? '#FFF' : 'transparent',
            boxShadow: '0px 4px 28px 0px #0000000D',
          }}
        >
          <TechnicalsGraph />
        </Box>
        <Box>
          <TechnicalGraphCarousel />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '21.5px',

          '@media (max-width: 576px)': {
            paddingInline: '10px',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '24px !important',
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

            '@media (max-width: 576px)': {
              marginRight: '0px',
            },
          }}
        >
          <Typography
            sx={{
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginRight: '5px',
              fontWeight: '600',
              fontSize: '14px !important',
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
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          '@media (max-width: 1360px)': { flexDirection: 'column' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            '@media (max-width: 1024px)': { flexDirection: 'column' },
          }}
        >
          <AnalysisCard isFirst={true} />
          <FinancialNewsCardList />
        </Box>
        <Box
          sx={{
            width: '100%',
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
      <Box sx={{ mb: '70px', mt: '16px' }}>
        <FinancialNewsCarousel noBackground={true} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: '10px',
        }}
      >
        <TechnicalsBanner
          bgColor="brown"
          coinName="Bitcoin"
          coinImg={bitcoinImg}
        />
      </Box>
      {/* //second sec// */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            marginTop: '16px',
            '@media (max-width: 1360px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
              '@media (max-width: 1024px)': {
                flexDirection: 'column',
              },
            }}
          >
            <AnalysisCard isFirst={true} />
            <FinancialNewsCardList />
            <Box
              sx={{
                width: '300px',
                height: '507px',
                background: 'white',
                boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
                borderRadius: '24px',

                '@media (max-width: 1360px)': {
                  height: 'auto',
                },
              }}
            >
              <RightCard />
            </Box>
          </Box>
        </Box>
        <Box sx={{ mb: '70px', mt: '16px' }}>
          <FinancialNewsCarousel />
        </Box>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '10px' }}
        >
          <TechnicalsBanner
            bgColor="blue"
            coinName="Etherium"
            coinImg={etheriumImg}
            width="100%"
          />
        </Box>
      </Box>
      {/* //second sec// */}
      {/* //third sec// */}
      <Box>
        <Box
          sx={{
            display: 'flex',
            marginTop: '24px',
            '@media (max-width: 1360px)': { flexDirection: 'column' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
              maxWidth: '1278px',
              '@media (max-width: 768px)': {
                flexDirection: 'column',
                marginTop: '24px',
              },
            }}
          >
            <AnalysisCard isThird={true} />
            <FinancialNewsCardList isRenderFour={true} />
            <FinancialNewsCardList isRenderFour={true} />
          </Box>
        </Box>
        <Box sx={{ mb: '120px', mt: '16px' }}>
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
      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          '@media (max-width: 1400px)': { flexDirection: 'column' },
        }}
      >
        <Box>
          <GraphDetailsCard />
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              marginTop: '12px',
              marginBottom: isTablet ? '0px' : '50px',

              '@media (max-width: 1360px)': {
                flexWrap: 'wrap',
                justifyContent: 'center',
              },
            }}
          >
            {isTablet ? (
              <>
                <FinancialCard />
                <FinancialCard />
                <FinancialCard />
                <FinancialCard />
              </>
            ) : (
              <FinancialNewsCarousel />
            )}
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
      <Box sx={{ my: '16px' }}>
        <TechnicalsBanner bgColor="green" coinName="XRP" coinImg={xrpImg} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          '@media (max-width: 1360px)': {
            flexDirection: 'column',
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            '@media (max-width: 1024px)': {
              flexDirection: 'column',
            },
          }}
        >
          <AnalysisCard isFourth={true} image={xrpImg} />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <FinancialCarBig image={xrpImg} />
            <NewsCard image={xrpImg} isShort={true} />
            <NewsCard image={xrpImg} isShort={true} />
            <NewsCard image={xrpImg} isShort={true} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            '@media (max-width: 1360px)': {
              flexDirection: 'row',
            },
            '@media (max-width: 1024px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <NewsCard image={xrpImg} isShort={true} />
            <NewsCard image={xrpImg} isShort={true} />
          </Box>
          <MentorshipCard />
        </Box>
      </Box>
      <Box sx={{ my: '16px' }}>
        <TechnicalsBanner
          bgColor="green"
          coinName="Chainlink"
          coinImg={chainLinkImg}
        />
      </Box>
      <Box sx={{ marginBlock: '24px', display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            gap: 1.25,
            '@media (max-width: 1360px)': {
              flexDirection: 'column',
              width: '100%',
            },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <FinancialRight isMainPage={false} />
          </Box>
          <Box>
            <GraphDetailsCard isInverted={true} image={chainLinkImg} />
            <Box
              sx={{
                display: 'flex',
                gap: 1,
                marginTop: '12px',
                marginBottom: isTablet ? '0px' : '50px',
                '@media (max-width: 1360px)': {
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                },
              }}
            >
              {isTablet ? (
                <>
                  <FinancialCard image={chainLinkImg} />
                  <FinancialCard image={chainLinkImg} />
                  <FinancialCard image={chainLinkImg} />
                  <FinancialCard image={chainLinkImg} />
                </>
              ) : (
                <FinancialNewsCarousel image={chainLinkImg} />
              )}
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

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
  const isSmallLaptop = useMediaQuery('(max-width: 1024px)');
  const isMediumLaptop = useMediaQuery('(min-width: 1361px)');
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
          marginBottom: '16px',

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
          }}
        >
          <Typography
            sx={{
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              fontWeight: '600',
              fontSize: '14px !important',
              lineHeight: '18.2px',
              fontFamily: 'Sf Pro Display',
            }}
            variant="body2"
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
        <Box>
          <AnalysisCard isFirst={true} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            '@media (max-width: 1024px)': { flexDirection: 'column' },
          }}
        >
          <FinancialNewsCardList />
          <Box
            sx={{
              width: '300px',
              backgroundImage: `url('/images/news-letter/card-background1.png')`,
              backgroundSize: '100% 100%',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              borderRadius: '16px',
              height: '505px',

              '@media (max-width: 1360px)': { width: '50%' },
              '@media (max-width: 1024px)': { width: '100%' },
            }}
          >
            <PicksForPanel />
          </Box>
        </Box>
      </Box>
      <Box sx={{ mb: '70px', mt: '16px' }}>
        <FinancialNewsCarousel
          noBackground={true}
          titleWidth="auto"
          descriptionWidth="auto"
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          marginTop: '16px',
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
              '@media (max-width: 1360px)': {
                flexDirection: 'column',
              },
            }}
          >
            <AnalysisCard isFirst={true} height="505px" />
            <Box
              sx={{
                display: 'flex',
                gap: '16px',
                '@media (max-width: 1024px)': { flexDirection: 'column' },
              }}
            >
              <FinancialNewsCardList />
              <Box
                sx={{
                  width: '300px',
                  height: '507px',
                  background: 'white',
                  boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
                  borderRadius: '24px',

                  '@media (max-width: 1360px)': {
                    width: '45%',
                  },
                  '@media (max-width: 1024px)': {
                    height: 'auto',
                    width: '100%',
                  },
                }}
              >
                <RightCard />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mb: '70px', mt: '16px' }}>
          <FinancialNewsCarousel titleWidth="auto" descriptionWidth="auto" />
        </Box>

        <Box
          sx={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}
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
            marginTop: '16px',
            '@media (max-width: 1360px)': { flexDirection: 'column' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
              maxWidth: '1278px',
              '@media (max-width: 1410px) and (min-width: 1360px)': {
                maxWidth: '1230px',
              },
              '@media (max-width: 1024px)': {
                flexDirection: 'column',
                marginTop: '16px',
              },
            }}
          >
            <AnalysisCard isThird={true} />
            {isSmallLaptop ? (
              <Box
                sx={{
                  display: 'flex',
                  gap: '16px',

                  '@media (max-width: 768px)': {
                    gap: '0px',
                    flexDirection: 'column',
                  },
                }}
              >
                <FinancialNewsCardList isRenderFour={true} />
                <FinancialNewsCardList isRenderFour={true} />
              </Box>
            ) : (
              <>
                <FinancialNewsCardList renderList={true} />
                <FinancialNewsCardList renderList={true} />
              </>
            )}
          </Box>
        </Box>
        <Box sx={{ mb: '120px', mt: '16px' }}>
          <FinancialNewsCarousel
            noBackground={true}
            titleWidth="auto"
            descriptionWidth="auto"
          />
        </Box>
        <Box sx={{ marginTop: '-42px' }}>
          <NewsLetterBanner />
        </Box>
      </Box>
      {/* //third sec// */}
      <Box sx={{ marginBlock: '16px' }}>
        <TechnicalsBanner
          bgColor="purple"
          coinName="Litecoin"
          coinImg={litecoinImg}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          '@media (max-width: 1400px)': { flexDirection: 'column' },
        }}
      >
        <Box>
          <GraphDetailsCard />
          <Box
            sx={{
              display: 'flex',
              gap: 1,
              marginTop: '16px',
              marginBottom: isMediumLaptop ? '0px' : '50px',

              '@media (max-width: 1360px)': {
                flexWrap: 'wrap',
                justifyContent: 'center',
              },
            }}
          >
            {isMediumLaptop ? (
              <>
                <FinancialCard titleMaxWidth="auto" />
                <FinancialCard titleMaxWidth="auto" />
                <FinancialCard titleMaxWidth="auto" />
                <FinancialCard titleMaxWidth="auto" />
              </>
            ) : (
              <FinancialNewsCarousel
                titleWidth="auto"
                descriptionWidth="auto"
              />
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
          height: '550px',
          '@media (max-width: 1400px)': {
            flexDirection: 'column',
            height: 'auto',
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
          <Box>
            <AnalysisCard isFourth={true} image={xrpImg} height="100%" />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FinancialCarBig image={xrpImg} />
            <Box
              sx={{
                display: 'flex',
                gap: '8px',
                flexDirection: 'column',
                overflow: 'auto',
                height: '300px',
                scrollbarWidth: 'none',
              }}
            >
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            '@media (max-width: 1400px)': {
              flexDirection: 'row',
            },
            '@media (max-width: 1024px)': {
              flexDirection: 'column-reverse',
            },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Box sx={{ '@media (max-width: 1400px)': { display: 'none' } }}>
              <NewsCard image={xrpImg} isShort={true} />
              <NewsCard image={xrpImg} isShort={true} />
            </Box>
            <Box
              sx={{
                display: 'none',
                gap: '8px',
                flexDirection: 'column',
                overflow: 'auto',
                height: '380px',
                scrollbarWidth: 'none',
                '@media (max-width: 1400px)': { display: 'flex' },
              }}
            >
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
              <NewsCard image={xrpImg} isShort={true} rightTextPadding="0px" />
            </Box>
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
      <Box sx={{ marginBlock: '16px', display: 'flex' }}>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
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
                marginBottom: isMediumLaptop ? '0px' : '50px',
                '@media (max-width: 1360px)': {
                  flexWrap: 'wrap',
                  justifyContent: 'center',
                },
              }}
            >
              {isMediumLaptop ? (
                <>
                  <FinancialCard image={chainLinkImg} />
                  <FinancialCard image={chainLinkImg} />
                  <FinancialCard image={chainLinkImg} />
                  <FinancialCard image={chainLinkImg} />
                </>
              ) : (
                <FinancialNewsCarousel
                  image={chainLinkImg}
                  titleWidth="auto"
                  descriptionWidth="auto"
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginBottom: '16px' }}>
        <MemberShipBanner />
      </Box>
    </Box>
  );
}

export default TechnicalsPageCrypto;

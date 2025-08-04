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
import usaIcon from '../../../../../public/images/technicals-page/usaIcon.png';
import ausIcon from '../../../../../public/images/technicals-page/ausIcon.png';

import RightCard from '../card-right';
import NewsLetterBanner from '../../banners/newsLetterBanner';
import GraphDetailsCard from '../graph-detail-card';
import FinancialCard from '../financial-card';
import NewsCard from '../financial-news-card/newsCard';
import FinancialCarBig from '../financial-card-big';
import MentorshipCard from '../mentorship-card';
import MemberShipBanner from '../../banners/memberShipBanner';
import FinancialRight from '../financial-right';
import AnalysisCardCompressed from '../analysis-card-compressed';
import FinancialCardWide from '../financial-card-wide';
import SectionCarousel from './section-carousel';

function TechnicalsPageFx() {
  const screenSize1400 = useMediaQuery('(max-width: 1400px)');
  const isMediumLaptop = useMediaQuery('(min-width: 1361px)');
  return (
    <Box>
      <Box sx={{ marginBottom: '30px' }}>
        <Box
          sx={{
            borderRadius: '24px',
            background: '#FFF',
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
              width: '100%',
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
      <Box sx={{ mb: '70px' }}>
        <FinancialNewsCarousel titleWidth="auto" descriptionWidth="auto" />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginTop: '16px',
          flexDirection: 'column',
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
        {/* <Box sx={{ mb: '120px' }}> */}
        <Box sx={{ mb: '70px', mt: '16px' }}>
          <FinancialNewsCarousel titleWidth="auto" descriptionWidth="auto" />
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
      {/* //carousel section// */}
      <Box>
        <Box sx={{ mb: '50px' }}>
          <SectionCarousel />
        </Box>
        {/* //carousel section// */}
        <Box sx={{ mt: '60px' }}>
          <NewsLetterBanner />
        </Box>
      </Box>
      {/* //third sec// */}
      <Box sx={{ marginBlock: '16px' }}>
        <TechnicalsBanner
          bgColor="purple"
          coinName="Litecoin"
          coinImg={litecoinImg}
          isFxPage={true}
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
          <GraphDetailsCard isFxPage={true} dualImg={ausIcon} image={usaIcon} />
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
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
                <FinancialCard
                  isFxPage={true}
                  image={usaIcon}
                  dualImg={ausIcon}
                  titleMaxWidth="auto"
                />
                <FinancialCard
                  isFxPage={true}
                  image={usaIcon}
                  dualImg={ausIcon}
                  titleMaxWidth="auto"
                />
                <FinancialCard
                  isFxPage={true}
                  image={usaIcon}
                  dualImg={ausIcon}
                  titleMaxWidth="auto"
                />
                <FinancialCard
                  isFxPage={true}
                  image={usaIcon}
                  dualImg={ausIcon}
                  titleMaxWidth="auto"
                />
              </>
            ) : (
              <FinancialNewsCarousel
                titleWidth="auto"
                descriptionWidth="auto"
              />
            )}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
          <NewsCard
            image={usaIcon}
            isShort={true}
            dualImg={ausIcon}
            isFxPage={true}
          />
        </Box>
      </Box>
      <Box sx={{ marginBlock: '16px' }}>
        <TechnicalsBanner
          bgColor="green"
          coinName="XRP"
          coinImg={xrpImg}
          isFxPage={true}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          mb: '16px',
          '@media (max-width: 1400px)': {
            flexDirection: 'column',
            height: 'auto',
            gap: 0,
          },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            mb: '8px',
            '@media (max-width: 1024px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Box>
            <AnalysisCard
              isFourth={true}
              image={ausIcon}
              dualImg={usaIcon}
              isFxPage={true}
              height="100%"
            />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <FinancialCarBig
              image={usaIcon}
              isFxPage={true}
              dualImg={ausIcon}
            />
            <NewsCard
              image={usaIcon}
              isShort={true}
              dualImg={ausIcon}
              isFxPage={true}
            />
            <NewsCard
              image={usaIcon}
              isShort={true}
              dualImg={ausIcon}
              isFxPage={true}
            />
            <NewsCard
              image={usaIcon}
              isShort={true}
              dualImg={ausIcon}
              isFxPage={true}
            />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
            '@media (max-width: 1400px)': {
              flexDirection: 'row',
            },
            '@media (max-width: 1024px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              gap: 1,
              '@media (max-width: 1400px)': { display: 'none' },
            }}
          >
            <NewsCard
              image={usaIcon}
              isShort={true}
              dualImg={ausIcon}
              isFxPage={true}
            />
            <NewsCard
              image={usaIcon}
              isShort={true}
              dualImg={ausIcon}
              isFxPage={true}
            />
            {screenSize1400 && (
              <>
                <NewsCard
                  image={usaIcon}
                  isShort={true}
                  dualImg={ausIcon}
                  isFxPage={true}
                />
                <NewsCard
                  image={usaIcon}
                  isShort={true}
                  dualImg={ausIcon}
                  isFxPage={true}
                />
              </>
            )}
          </Box>
          <MentorshipCard />
        </Box>
      </Box>
      <Box sx={{ marginBottom: '16px' }}>
        <TechnicalsBanner
          bgColor="bronze"
          coinName="Chainlink"
          coinImg={chainLinkImg}
          isFxPage={true}
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
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <FinancialRight isMainPage={false} />
          </Box>
          <Box>
            <GraphDetailsCard
              isInverted={true}
              isFxPage={true}
              dualImg={ausIcon}
              image={usaIcon}
            />
            <Box
              sx={{
                display: 'flex',
                gap: '16px',
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
                  <FinancialCard
                    isFxPage={true}
                    image={usaIcon}
                    dualImg={ausIcon}
                  />
                  <FinancialCard
                    isFxPage={true}
                    image={usaIcon}
                    dualImg={ausIcon}
                  />
                  <FinancialCard
                    isFxPage={true}
                    image={usaIcon}
                    dualImg={ausIcon}
                  />
                  <FinancialCard
                    isFxPage={true}
                    image={usaIcon}
                    dualImg={ausIcon}
                  />
                </>
              ) : (
                <FinancialNewsCarousel
                  image={usaIcon}
                  titleWidth="auto"
                  descriptionWidth="auto"
                />
              )}
            </Box>
          </Box>
        </Box>
      </Box>
      <Box>
        <Box sx={{ marginBottom: '16px' }}>
          <TechnicalsBanner
            bgColor="purple"
            coinName="Chainlink"
            coinImg={chainLinkImg}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            '@media (max-width: 1400px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
              '@media (max-width: 1200px)': {
                flexDirection: 'column',
              },
            }}
          >
            <AnalysisCardCompressed />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                ml: '12px',
                flex: 1,
              }}
            >
              <NewsCard image={xrpImg} isShort={true} />
              <NewsCard image={xrpImg} isShort={true} />
              <NewsCard image={xrpImg} isShort={true} />
              <NewsCard image={xrpImg} isShort={true} />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <NewsCard image={xrpImg} isShort={true} />
            <NewsCard image={xrpImg} isShort={true} />
            <NewsCard image={xrpImg} isShort={true} />
            <NewsCard image={xrpImg} isShort={true} />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '16px',
            marginTop: '16px',
            marginBottom: isMediumLaptop ? '0px' : '60px',
            '@media (max-width: 1400px)': {
              flexWrap: 'wrap',
              justifyContent: 'center',
            },
          }}
        >
          {isMediumLaptop ? (
            <>
              <FinancialCardWide image={chainLinkImg} />
              <FinancialCardWide image={chainLinkImg} />
              <FinancialCardWide image={chainLinkImg} />
              <FinancialCardWide image={chainLinkImg} />
            </>
          ) : (
            <FinancialNewsCarousel
              image={usaIcon}
              titleWidth="auto"
              descriptionWidth="auto"
            />
          )}
        </Box>
        <Box sx={{ marginBottom: '70px' }}>
          <FinancialNewsCarousel titleWidth="auto" descriptionWidth="auto" />
        </Box>
      </Box>
      <Box sx={{ marginBottom: '16px', mt: '54px' }}>
        <TechnicalsBanner
          bgColor="blue"
          coinName="Chainlink"
          coinImg={chainLinkImg}
        />
      </Box>
      <Box
        sx={{
          display: 'flex',
          gap: 2,
          '@media (max-width: 1400px)': { flexDirection: 'column' },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
          <NewsCard isShort={true} />
        </Box>
        <Box>
          <GraphDetailsCard />
          <Box
            sx={{
              display: 'flex',
              gap: '16px',
              marginTop: '16px',
              marginBottom: isMediumLaptop ? '0px' : '50px',
              '@media (max-width: 1400px)': {
                flexWrap: 'wrap',
                justifyContent: 'center',
              },
            }}
          >
            {isMediumLaptop ? (
              <>
                <FinancialCard />
                <FinancialCard />
                <FinancialCard />
                <FinancialCard />
              </>
            ) : (
              <FinancialNewsCarousel
                image={usaIcon}
                titleWidth="auto"
                descriptionWidth="auto"
              />
            )}
          </Box>
        </Box>
      </Box>
      <Box sx={{ marginBottom: '16px', mt: '16px' }}>
        <MemberShipBanner />
      </Box>
    </Box>
  );
}

export default TechnicalsPageFx;

import { Box, Divider, useMediaQuery } from '@mui/material';
import React from 'react';
import styled from 'styled-components';
import TagCard from '../../news/main/tag-card';
import TagCardImage from '../../../../../public/images/tagCard.png';
import CardImage from '../../../../../public/images/news-letter/image-car-news.png';
import NewsCard from '../../news/main/news-card';
import MainMembershipBanner from '../../banners/mainMembershipBanner';
import JoinCrypto from './JoinCrypto';
import MostRead from '../../news/main/most-read';
import LiveMarket from '../../news/components/main/live-market';
import Card from '../../news-letter/news-letter-cards/card';
import CarouselWrapper from '../../common/ReusableCarousel/CarouselWrapper';
import { responsiveConfigs } from '../../common/ReusableCarousel/responsiveConfigs';

// Styled components for the right sidebar with height distribution
const RightSidebarContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 300px;
  height: 100%;

  @media (max-width: 1200px) {
    width: 100%;
    gap: 16px;
  }

  @media (max-width: 900px) {
    gap: 12px;
  }

  @media (max-width: 600px) {
    gap: 8px;
  }
`;

const TallComponentWrapper = styled(Box)`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  // flex: 2; // Takes 2x height on large screens
  // min-height: 0; // Allows flex shrinking
  height:700px;
  @media (max-width: 1200px) {
    height:auto;
  }
`;

const ShortComponentWrapper = styled(Box)`
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;
  // flex: 1; // Takes 1x height on large screens
  // min-height: 0; // Allows flex shrinking
  height:350px;
  @media (max-width: 1200px) {
    height:auto;
  }
`;

const CryptoHero = () => {
  const isTabletScreen = useMediaQuery('(max-width: 600px)');
  const isTabScreen = useMediaQuery('(max-width: 900px)');

  // Card data for the grid section
  const gridCards = Array.from({ length: 4 }, (_, index) => (
    <Card
      key={index}
      img1="/image/news-letter/main.png"
      img2={TagCardImage.src}
      title1="TRADE"
      title2="BITCOIN"
      title3="CRYPTO"
      heading="Buy These 5 Crypto Stcks Before the Next Bitcoin Rally"
      description="Users can mint new tokens using the company's new Alloy plateform, which be p"
      date="06/06/2023 at 00:06 AM"
      author="John Smith"
      isMainPage
    />
  ));

  // Card data for the bottom sections
  const bottomCards = Array.from({ length: 4 }, (_, index) => (
    <Card
      key={index}
      img1="/image/news-letter/main.png"
      img2={`${TagCardImage.src}`}
      title1="TRADE"
      title2="BITCOIN"
      title3="CRYPTO"
      heading="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
      description="NASA's Drew Feusted and Ricky Arnold are to spend more..."
      date="06/06/2023 at 00:06 AM"
      author="John Smith"
      isNewsDetail
    />
  ));

  // News cards for the side section
  const newsCards = Array.from({ length: 2 }, (_, index) => (
    <NewsCard
      key={index}
      image={CardImage}
      showChips={true}
      title="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
      description="Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin {{BTC}}, has acquired another 11,931 BTC for"
      isVertical
      isTransparent
      imageMargin="0px"
      imageWidth="100%"
      containerWidth={isTabScreen ? "100%" : "252px"}
      justifyContent="flex-start"
      isMainPage
    />
  ));

  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: {xs:"8px",sm:"12px",md:"16px",lg:'24px'},
        flexDirection:{xs:"column",lg:"row"},
      }}
    >
      <Box
        sx={{
          maxWidth: '957px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          '@media (max-width: 1024px)': {
            maxWidth: '100%',
            gap: '16px',
          },
          '@media (max-width: 768px)': {
            gap: '12px',
          },
          '@media (max-width: 576px)': {
            gap: '8px',
          },
        }}
      >
        <Box
          sx={{
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            border: '0.5px solid #FFFFFF',
            borderRadius: '20px',
            background: '#FFF',
            '@media (max-width: 768px)': {
              padding: '8px',
              gap: '12px',
              borderRadius: '16px',
            },
            '@media (max-width: 576px)': {
              padding: '6px',
              gap: '8px',
              borderRadius: '12px',
            },
          }}
        >
          <Box sx={{
            display: 'flex',
            gap: '16px',
            height: '560px',
            overflow: 'hidden',
            boxSizing: 'border-box',
            paddingBottom: '16px',
            '@media (max-width: 1024px)': {
              width: '100%',
              flexDirection: 'column',
              height: 'auto',
              gap: '12px',
              paddingBottom: '12px',
            },
            '@media (max-width: 768px)': {
              width: '100%',
              gap: '8px',
              paddingBottom: '8px',
            },
            '@media (max-width: 576px)': {
              width: '100%',
              gap: '6px',
              paddingBottom: '6px',
            },
          }}>
            <TagCard
              height={'100%'}
              width={'73%'}
              title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
              description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization ventures platform"
              image={TagCardImage}
              isMainPage
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                height: '100%',
                width: '28%',
                overflow: 'hidden',
                boxSizing: 'border-box',
                '@media (max-width: 1024px)': {
                  width: '100%',
                  flexDirection: 'row',
                  gap: '8px',
                },
                '@media (max-width: 768px)': {
                  width: '100%',
                  flexDirection: 'column',
                  gap: '6px',
                },
                '@media (max-width: 576px)': {
                  width: '100%',
                  gap: '4px',
                },
              }}
            >
              {isTabletScreen ? (
                <CarouselWrapper
                  items={newsCards}
                  responsiveConfig={responsiveConfigs.singleItem}
                  overrideResponsive={true}
                  itemPadding="8px"
                />
              ) : (
                newsCards
              )}
            </Box>
          </Box>
          <Divider />

          {/* Grid Section - Use carousel for mobile/tablet, grid for desktop */}
          {isTabScreen ? (
            <CarouselWrapper
              items={gridCards}
              responsiveConfig={responsiveConfigs.heroCards}
              overrideResponsive={true}
              itemPadding="8px"
            />
          ) : (
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '8px',
              }}
            >
              {gridCards}
            </Box>
          )}

          <Divider />

          {/* Bottom Section - Use carousel for mobile/tablet, columns for desktop */}
          {isTabScreen ? (
            <CarouselWrapper
              items={bottomCards}
              responsiveConfig={responsiveConfigs.heroCards}
              overrideResponsive={true}
              itemPadding="8px"
            />
          ) : (
            <Box sx={{ display: 'flex', gap: '16px' }}>
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {bottomCards.map((card, idx) => (
                  <React.Fragment key={idx}>
                    {card}
                    {idx !== 3 && <Divider />}
                  </React.Fragment>
                ))}
              </Box>
              <Box
                sx={{
                  flex: 1,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                }}
              >
                {bottomCards.map((card, idx) => (
                  <React.Fragment key={idx}>
                    {card}
                    {idx !== 3 && <Divider />}
                  </React.Fragment>
                ))}
              </Box>
            </Box>
          )}
        </Box>
        <MainMembershipBanner isMainPage={true} />
      </Box>
      <RightSidebarContainer>
        <TallComponentWrapper>
          <MostRead height="100%" width="auto" isMainPage />
        </TallComponentWrapper>
        <ShortComponentWrapper>
          <JoinCrypto isMainPage />
        </ShortComponentWrapper>
        <TallComponentWrapper>
          <LiveMarket isMainPage />
        </TallComponentWrapper>
      </RightSidebarContainer>
    </Box>
  );
};

export default CryptoHero;

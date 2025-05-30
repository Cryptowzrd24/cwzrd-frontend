'use client';
import React from 'react';
import { Box } from '@mui/material';
import NewsCarousel from '../news/main/news-carousel';
import NewsLetterBanner from '../banners/newsLetterBanner';
import NewsCarouselBig from '../news/main/carouel-big';
import TrendingNewsCard from '../news/main/trending-news-card';
import TrendingNewsList from '../news/main/trending-news-list';
import NewsMileStones from '../news/main/news-miletones';
import MemberShipBanner from '../banners/memberShipBanner';
import CardImage from '../../../../public/images/news-letter/image-car-news.png';
import MostRead from '../news/main/most-read';

const ArticlesPage = () => {
  const items = Array.from({ length: 20 }, (_, index) => index);
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          gap: 4,
          '@media (max-width: 1380px)': { flexDirection: 'column' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '77%',
            gap: '16px',
            '@media (max-width: 1380px)': { width: '100%' },
          }}
        >
          <NewsCarousel isFirst={true} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 1,
          }}
        >
          <MostRead height={'440px'} />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          rowGap: '30px',
          columnGap: '16px',
          padding: '42px 0px 0px 0px',
        }}
      >
        {items.map((item) => (
          <Box
            key={item}
            sx={{
              boxSizing: 'border-box',
            }}
          >
            <TrendingNewsCard
              descriptionLines={1}
              image={CardImage} // Ensure the path is correct
              title={
                'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip'
              }
              description={
                "Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization venture, CEO Paolo Ard."
              }
              isDetailPage={true}
            />
          </Box>
        ))}
      </Box>

      <Box sx={{ marginBlock: '51px' }}>
        <NewsLetterBanner />
      </Box>

      <Box
        sx={{
          display: 'flex',
          gap: 2.2,
          maxHeight: '850px',
          '@media (max-width: 978px)': {
            flexDirection: 'column',
            maxHeight: '100%',
          },
        }}
      >
        <Box
          sx={{
            width: '51%',
            '@media (max-width: 978px)': {
              width: '100%',
            },
          }}
        >
          <NewsCarouselBig isDetailPage={true} height={'535px'} />
        </Box>
        <Box
          sx={{
            width: '22%',
            display: 'flex',
            alignItems: 'center',
            jusstifyContent: 'center',
            flexDirection: 'column',

            '@media (max-width: 978px)': {
              width: '100%',
              flexDirection: 'row',
              gap: '8px',
            },

            '@media (max-width: 768px)': {
              flexDirection: 'column',
            },
          }}
        >
          <Box sx={{ marginBottom: '16px' }}>
            <TrendingNewsCard
              descriptionLines={1}
              isMainPage={true}
              image={CardImage}
              title={
                "VanEck's Spot Bitcoin ETF Goes Live on Australia's Biggest Stock Exchange"
              }
              description={
                "Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization venture, CEO Paolo Ard.."
              }
            />
          </Box>
          <Box maxHeight={'240px'}>
            <TrendingNewsList height="250px" maxCards={3} marginLeft="10px" />
          </Box>
        </Box>
        <Box
          sx={{
            width: '24%',
            '@media (max-width: 978px)': {
              width: '100%',
              display: 'flex',
              gap: '8px',
              alignItems: 'center',
            },

            '@media (max-width: 768px)': {
              flexDirection: 'column',
              marginTop: '10px',
            },
          }}
        >
          <TrendingNewsList height="200px" maxCards={2} marginLeft="0px" />

          <NewsMileStones />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
          rowGap: '30px',
          columnGap: '16px',
          padding: '35px 0px 0px 0px',
        }}
      >
        {items.slice(0, 10).map((item) => (
          <Box
            key={item}
            sx={{
              boxSizing: 'border-box',
            }}
          >
            <TrendingNewsCard
              descriptionLines={1}
              image={CardImage}
              title={
                'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip'
              }
              description={
                "Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization venture, CEO Paolo Ard."
              }
              isDetailPage={true}
            />
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          margin: '72px 0px 80px 0px',
          '@media (max-width: 768px)': { margin: '48px 0px' },
        }}
      >
        <MemberShipBanner />
      </Box>
    </>
  );
};

export default ArticlesPage;

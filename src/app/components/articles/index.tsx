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
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '77%',
            gap: '16px',
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
          gridTemplateColumns: 'repeat(5, 1fr)',
          rowGap: '30px',
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

      <Box sx={{ display: 'flex', gap: 2.2, maxHeight: '850px' }}>
        <Box sx={{ width: '51%' }}>
          <NewsCarouselBig isCrypto={true} />
        </Box>
        <Box
          sx={{
            width: '22%',
            display: 'flex',
            alignItems: 'center',
            jusstifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ marginBottom: '24px' }}>
            <TrendingNewsCard
              image={CardImage}
              title={
                "Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
              }
              description={
                "Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization venture, CEO Paolo Ard.."
              }
            />
          </Box>

          <TrendingNewsList height="450px" maxCards={4} marginLeft="8px" />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2,
            width: '24%',
          }}
        >
          <TrendingNewsList height="350px" maxCards={3} marginLeft="0px" />
          <NewsMileStones isCrypto={true} />
        </Box>
      </Box>

      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          rowGap: '30px',
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
      <Box sx={{ margin: '72px 0px 80px 0px' }}>
        <MemberShipBanner />
      </Box>
    </>
  );
};

export default ArticlesPage;

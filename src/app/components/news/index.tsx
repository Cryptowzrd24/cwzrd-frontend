import React from 'react';
import NewsHeader from './header';
import { Box, Container, Typography } from '@mui/material';
import { NewsCategory } from './main/news-categories';
import NewsCarousel from './main/news-carousel';
import NewsGrid from './main/news-card-grid';
import NewsLetterBanner from '../banners/newsLetterBanner';
import CardImage from '../../../../public/images/news-letter/image-car-news.png';
import MemberShipBanner from '../banners/memberShipBanner';
import LiveNewsExplorer from './main/live-news';
import NewsTradingPlatform from './main/news-trading-platform';
import TopPicks from './main/top-picks';
import { ArrowRight } from '../../../../public/icons/arrowRight';
import NewsMileStones from './main/news-miletones';
import NewsCarouselBig from './main/carouel-big';
import TrendingNewsCard from './main/trending-news-card';
import TrendingNewsList from './main/trending-news-list';
import LiveMarket from './main/live-market';

const NewsComponent = () => {
  return (
    <Container maxWidth="xl">
      <NewsHeader />
      <NewsCategory />
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '77%',
            gap: '18px',
          }}
        >
          <NewsCarousel />
          <NewsGrid height={'392px'} width={'105%'} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '23%' }}>
          <LiveMarket />
          <LiveNewsExplorer />
        </Box>
      </Box>
      <Box sx={{ marginBlock: '80px' }}>
        <NewsLetterBanner />
      </Box>

      <Box sx={{ display: 'flex', marginBottom: '80px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '75%' }}>
          <NewsGrid height={'900px'} />
        </Box>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '25%' }}>
          <TopPicks />
          <NewsTradingPlatform />
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBlock: '10px',
        }}
      >
        <Typography variant="h2" left={0}>
          Trending{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            News
          </span>{' '}
        </Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Typography
            sx={{
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              marginRight: '5px',
            }}
            variant="body2"
            right={0}
          >
            Read More
          </Typography>
          <ArrowRight fill="#7248F7" />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', height: '800px', gap: 1 }}>
        <Box sx={{ width: '54%' }}>
          <NewsCarouselBig />
        </Box>
        <Box
          sx={{
            width: '21%',
            display: 'flex',
            alignItems: 'center',
            jusstifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Box sx={{ marginBottom: '20px' }}>
            <TrendingNewsCard
              image={CardImage}
              title={
                "Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
              }
              description={
                "Users can mint new tokens using the company's new Alloy platform, CrtptoWzrd is helping million."
              }
            />
          </Box>

          <TrendingNewsList height="500px" maxCards={4} />
        </Box>
        <Box sx={{ width: '22%' }}>
          <TrendingNewsList height="300px" maxCards={3} />
          <NewsMileStones />
        </Box>
      </Box>
      <Box sx={{ marginBlock: '70px' }}>
        <MemberShipBanner />
      </Box>
    </Container>
  );
};

export default NewsComponent;

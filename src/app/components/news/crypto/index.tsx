import React from 'react';
import { Box, Typography } from '@mui/material';
import NewsCarousel from '../components/main/news-carousel';
import NewsGrid from '../components/main/news-card-grid';
import NewsLetterBanner from '../../banners/newsLetterBanner';
import CardImage from '../../../../public/images/news-letter/image-car-news.png';
import MemberShipBanner from '../../banners/memberShipBanner';
import LiveNewsExplorer from '../components/main/live-news';
import NewsTradingPlatform from '../components/main/news-trading-platform';
import TopPicks from '../components/main/top-picks';
import { ArrowRight } from '../../../../../public/icons/arrowRight';
import NewsMileStones from '../components/main/news-miletones';
import NewsCarouselBig from '../components/main/carouel-big';
import TrendingNewsCard from '../components/main/trending-news-card';
import TrendingNewsList from '../components/main/trending-news-list';
import LiveMarket from '../components/main/live-market';

const NewsComponent = () => {
  return (
    <>
      <Box sx={{ display: 'flex', gap: 4 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '77%',
            gap: '4px',
          }}
        >
          <NewsCarousel />
          <NewsGrid height={'377px'} width={'103%'} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '23%',
          }}
        >
          <LiveMarket />
          <LiveNewsExplorer />
        </Box>
      </Box>
      <Box sx={{ marginTop: '54px', marginBottom: '80px' }}>
        <NewsLetterBanner />
      </Box>

      <Box sx={{ display: 'flex', marginBottom: '80px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '75%' }}>
          <NewsGrid height={'893px'} width={'99%'} />
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
          marginBottom: '24px',
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
            justifyContent: 'flex-start',
            marginRight: '35px',
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
            right={1}
          >
            Read More
          </Typography>
          <ArrowRight fill="#7248F7" />
        </Box>
      </Box>

      <Box sx={{ display: 'flex', gap: 2.2, maxHeight: '850px' }}>
        <Box sx={{ width: '51%' }}>
          <NewsCarouselBig />
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

          <TrendingNewsList height="450px" maxCards={4} marginLeft="24px" />
        </Box>
        <Box sx={{ width: '24%' }}>
          <TrendingNewsList height="300px" maxCards={3} marginLeft="0px" />
          <NewsMileStones />
        </Box>
      </Box>
      <Box sx={{ marginBlock: '80px' }}>
        <MemberShipBanner />
      </Box>
    </>
  );
};

export default NewsComponent;

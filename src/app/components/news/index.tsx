import React from 'react';
import { Box, Typography } from '@mui/material';
import NewsCarousel from './main/news-carousel';
import NewsGrid from './main/news-card-grid';
import NewsLetterBanner from '../banners/newsLetterBanner';
import CardImage from '../../../../public/images/news-letter/image-car-news.png';
import MemberShipBanner from '../banners/memberShipBanner';
import LiveNewsExplorer from './main/live-news';
import NewsTradingPlatform from './main/news-trading-platform';
import TopPicks from './main/top-picks';
import NewsMileStones from './main/news-miletones';
import NewsCarouselBig from './main/carouel-big';
import TrendingNewsCard from './main/trending-news-card';
import TrendingNewsList from './main/trending-news-list';
import LiveMarket from './main/live-market';
import { ReadMoreIcon } from '../../../../public/icons/readMoreIcon';

const NewsComponent = () => {
  return (
    <>
      <Box sx={{ display: 'flex', gap: 4, marginTop: '-20px' }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '77%',
            gap: '16px',
          }}
        >
          <NewsCarousel isFirst={true} />
          <NewsGrid isCrypto={true} height={'301px'} width={'101%'} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '23%',
            gap: 3 / 2,
          }}
        >
          <LiveMarket isFirst={true} />
          <LiveNewsExplorer isFirst={true} />
        </Box>
      </Box>
      <Box sx={{ marginTop: '54px', marginBottom: '80px' }}>
        <NewsLetterBanner />
      </Box>

      <Box sx={{ display: 'flex', marginBottom: '80px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '75%' }}>
          <NewsGrid isCrypto={true} height={'800px'} width={'99%'} />
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: 1,
            flexDirection: 'column',
            width: '25%',
          }}
        >
          <TopPicks isCrypoPage={true} />
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
            marginRight: '12px',
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
            }}
            variant="body2"
            right={1}
          >
            Read More
          </Typography>
          <Box
            sx={{
              ml: '10px',
              mr: '20px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ReadMoreIcon />
          </Box>
        </Box>
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
      <Box sx={{ marginBlock: '80px' }}>
        <MemberShipBanner />
      </Box>
    </>
  );
};

export default NewsComponent;

'use client';
import NewsLetterBanner from '@/app/components/banners/newsLetterBanner';
import RelatedNewsCarousel from '../../../app/components/news-details/related-news/related-news-carousel';
import React from 'react';
import RelatedNewsCards from '@/app/components/news-details/related-news/related-news-cards';
import MemberShipBanner from '@/app/components/banners/memberShipBanner';
import { Box, Typography } from '@mui/material';
import TrendingNewsCard from '@/app/components/news/main/trending-news-card';
import TrendingNewsList from '@/app/components/news/main/trending-news-list';
import NewsMileStones from '@/app/components/news/main/news-miletones';
import NewsCarouselBig from '@/app/components/news/main/carouel-big';

import { ArrowRight } from '../../../../public/icons/arrowRight';
import CardImage from '../../../../public/images/news-letter/image-car-news.png';
import NewsCarousel from '@/app/components/news/main/news-carousel';

const News = () => {
  return (
    <>
      <>
        <NewsCarousel />
      </>
      <>
        <RelatedNewsCarousel />
      </>
      <>
        <NewsLetterBanner />
      </>
      <>
        <RelatedNewsCards />
        <RelatedNewsCarousel />
      </>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          marginTop: '64px',
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
      <>
        <MemberShipBanner />
      </>
    </>
  );
};

export default News;

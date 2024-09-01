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
import TagCardImage from '../../../../public/images/tagCard.png';
import VerticalCardImage from '../../../../public/images/verticalCardImage.png';
import { ArrowRight } from '../../../../public/icons/arrowRight';
import CardImage from '../../../../public/images/news-letter/image-car-news.png';
import NewsCarousel from '@/app/components/news/main/news-carousel';
import NewsRightPanel from '@/app/components/news/main/news-right-panel';
import TopPicks from '@/app/components/news/main/top-picks';
import TagCard from '@/app/components/news/main/tag-card';
import NewsCard from '@/app/components/news/main/news-card';
import LiveMarket from '@/app/components/news/main/live-market';
import MostRead from '@/app/components/news/main/most-read';
import VerticalTagCard from '@/app/components/news/main/vertical-tag-card';
import GlobalNews from '@/app/components/news/main/global-news';

const News = () => {
  return (
    <>
      <>
        <NewsCarousel showAudience={true} />
      </>
      <Box sx={{ display: 'flex', gap: 2, marginTop: '48px' }}>
        <TopPicks showAll={true} />
        <TagCard
          title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
          description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization ventures platform"
          image={TagCardImage}
        />
        <NewsRightPanel />
      </Box>
      <Box sx={{ marginTop: '-28px' }}>
        <RelatedNewsCarousel />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          marginTop: '84px',
        }}
      >
        <Typography variant="h2" left={0}>
          Trending in{' '}
          <span
            style={{
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            De-Fi
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
              fontSize: '14px',
              lineHeight: '18.2px',
            }}
            variant="body2"
            right={1}
          >
            Read More
          </Typography>
          <ArrowRight fill="#7248F7" />
        </Box>
      </Box>

      <>
        {/* ///defi */}
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TagCard
            height={'620px'}
            width={'570px'}
            title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
            description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization ventures platform"
            image={TagCardImage}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
            <NewsCard
              allNews={true}
              image={CardImage}
              title="Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip"
              description="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."
            />
            <NewsCard
              allNews={true}
              image={CardImage}
              title="Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip"
              description="NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."
            />
          </Box>

          <NewsRightPanel isDetailPage={true} />
        </Box>
      </>

      <>
        <Box sx={{ display: 'flex', marginTop: '32px', gap: 3 }}>
          <Box sx={{ width: '300px' }}>
            <LiveMarket isPageDetails={true} />
          </Box>
          <TagCard
            height={'622px'}
            width={'680px'}
            title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
            description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization ventures platform"
            image={TagCardImage}
          />
          <MostRead />
        </Box>
      </>

      <Box sx={{ marginTop: '80px' }}>
        <NewsLetterBanner />
      </Box>

      <>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            marginTop: '80px',
          }}
        >
          <Typography variant="h2" left={0}>
            Trending in{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Crypto
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
                fontSize: '14px',
                lineHeight: '18.2px',
              }}
              variant="body2"
              right={1}
            >
              Read More
            </Typography>
            <ArrowRight fill="#7248F7" />
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box>
            <VerticalTagCard
              height={'300px'}
              width={'300px'}
              title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
              description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization ventures platform"
              image={VerticalCardImage}
            />
          </Box>
          <TagCard
            height={'626px'}
            width={'730px'}
            title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
            description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization ventures platform"
            image={TagCardImage}
          />
          <Box
            sx={{ display: 'flex', flexDirection: 'column', maxWidth: '300px' }}
          >
            <Box minWidth={'300px'} marginBottom={'20px'}>
              <TrendingNewsCard
                title="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="Users can mint new tokens using the company'"
                image={CardImage}
              />
            </Box>
            <Box>
              <TrendingNewsCard
                title="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="Users can mint new tokens using the company'"
                image={CardImage}
              />
            </Box>
          </Box>
        </Box>
      </>

      <>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '24px',
            marginTop: '42px',
          }}
        >
          <Typography variant="h2" left={0}>
            All News About{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              AI
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
                fontSize: '14px',
                lineHeight: '18.2px',
              }}
              variant="body2"
              right={1}
            >
              Read More
            </Typography>
            <ArrowRight fill="#7248F7" />
          </Box>
        </Box>

        <Box sx={{ marginBottom: '10px' }}>
          <NewsCarouselBig height={'670px'} hideButtons={true} />
        </Box>
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
          marginTop: '84px',
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
              fontWeight: '600',
              fontSize: '14px',
              lineHeight: '18.2px',
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

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          marginTop: '48px',
        }}
      >
        <Typography variant="h2" left={0}>
          <span
            style={{
              background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Latest
          </span>{' '}
          News
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
          <ArrowRight fill="#7248F7" />
        </Box>
      </Box>

      <>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <NewsCarouselBig height={'680px'} />
          <Box maxWidth={'300px'}>
            <GlobalNews />
          </Box>
        </Box>
        <RelatedNewsCarousel />
      </>
      <Box sx={{ marginTop: '110px', marginBottom: '80px' }}>
        <MemberShipBanner />
      </Box>
    </>
  );
};

export default News;

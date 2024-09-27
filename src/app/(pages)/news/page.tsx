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
import { ReadMoreIcon } from '../../../../public/icons/readMoreIcon';

const News = () => {
  return (
    <>
      <>{/* <NewsCarousel showAudience={true} /> */}</>
      <Box sx={{ display: 'flex', gap: 2, marginTop: '18px' }}>
        <TagCard
          title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
          description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization venture, CEO Paolo Ardoino said. CoinDesk Flash give more money to the investors"
          image={TagCardImage}
        />
        <NewsRightPanel isMainPage={true} />
        <MostRead />
        {/* <TopPicks showAll={true} /> */}
      </Box>
      <Box sx={{ marginTop: '-16px' }}>
        <RelatedNewsCarousel descriptionLines={1} showSlider={true} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '24px',
          marginTop: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: '32px',
            fontWeight: '700',
            lineHeight: '38.4px',
            letterSpacing: '1px',
          }}
          variant="h2"
          left={0}
        >
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
            marginRight: '30px',
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
            // right={1}
          >
            Read More
          </Typography>
          <Box
            sx={{
              ml: '10px',
              mr: '-7px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ReadMoreIcon />
          </Box>
        </Box>
      </Box>

      <>
        {/* ///defi */}
        <NewsCarousel showAudience={true} isMainPage={true} />
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            marginTop: '22px',
            marginLeft: '5px',
          }}
        >
          <TagCard
            height={'520px'}
            width={'560px'}
            title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
            description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization ventures platform"
            image={TagCardImage}
          />
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.8 }}>
            <NewsCard
              allNews={true}
              image={CardImage}
              showChips={true}
              title="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
              description="Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin {{BTC}}, has acquired another 11,931 BTC for"
            />
            <NewsCard
              allNews={true}
              image={CardImage}
              showChips={true}
              title="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
              description="Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin {{BTC}}, has acquired another 11,931 BTC for"
            />
          </Box>

          <NewsRightPanel isMainPage={true} />
        </Box>
      </>

      <>
        <Box
          sx={{
            marginLeft: '5px',
            display: 'flex',
            marginTop: '12px',
            gap: '16px',
          }}
        >
          <Box sx={{ width: '300px' }}>
            <LiveMarket isPageDetails={true} />
          </Box>
          <TagCard
            height={'540px'}
            width={'680px'}
            title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
            description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization ventures platform"
            image={TagCardImage}
          />
          <TopPicks showAll={true} />
        </Box>
      </>

      <Box sx={{ marginTop: '24px' }}>
        <NewsLetterBanner />
      </Box>

      <>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: '16px',
            marginTop: '24px',
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
            <Box
              sx={{
                ml: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ReadMoreIcon />
            </Box>
          </Box>
        </Box>

        <Box sx={{ display: 'flex', gap: 3 }}>
          <Box>
            <VerticalTagCard
              height={'300px'}
              width={'437px'}
              title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
              description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization ventures platform"
              image={VerticalCardImage}
            />
          </Box>
          <TagCard
            height={'638px'}
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
            <Box
              sx={{
                ml: '10px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <ReadMoreIcon />
            </Box>
          </Box>
        </Box>

        <Box sx={{ marginBottom: '10px' }}>
          <NewsCarouselBig height={'670px'} hideButtons={true} />
        </Box>
      </>
      <>
        <RelatedNewsCards />
        <RelatedNewsCarousel descriptionLines={1} />
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
            marginRight: '11px',
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
              mr: '3px',
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

          <TrendingNewsList height="450px" maxCards={4} marginLeft="10px" />
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
          <Box
            sx={{
              ml: '7px',
              mr: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <ReadMoreIcon />
          </Box>
        </Box>
      </Box>

      <>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <NewsCarouselBig isDetailPage={true} height={'440px'} />
          <Box maxWidth={'300px'}>
            <GlobalNews />
          </Box>
        </Box>
        <RelatedNewsCarousel descriptionLines={1} />
      </>
      <Box sx={{ marginBlock: '24px' }}>
        <MemberShipBanner />
      </Box>
    </>
  );
};

export default News;

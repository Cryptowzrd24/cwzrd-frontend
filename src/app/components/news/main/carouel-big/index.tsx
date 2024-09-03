'use client';
import React, { useEffect, useState } from 'react';
import { Box, IconButton, Typography, Chip } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CarouselImage1 from '../../../../../../public/images/news-letter/carousel1.png';
import PeopleImage from '../../../../../../public/images/news-letter/people.svg';
import Image from 'next/image';
import ArrowRightDark from '../../../../../../public/icons/collections/arrowRightDark';
import ArrowLeftDark from '../../../../../../public/icons/collections/arrowLeftDark';

const content = [
  {
    title:
      'Italy to Increase Surveillance of Crypto Market With Fines as High as 5M Euros: Reuters',
    description:
      'That will include high fines for those who manipulate the crypto asset market as part of a wider scheme to beef up surveillance of risks tied to the sector, Reuters reported, citing a draft decree it reviewed.',
    tags: ['Economy', 'Finance', 'Breaking'],
    image: CarouselImage1,
  },
  {
    title: 'Crypto Boom Continues',
    description:
      'Cryptocurrencies are on the rise again as investors flock to digital assets...',
    tags: ['Crypto', 'Investment', 'Trending'],
    image:
      'https://academy.education.investing.com/wp-content/uploads/2022/03/bitcoin-what-is-crypto-scaled.jpg',
  },
  {
    title: 'Breaking News: Market Crash',
    description:
      'The stock market has experienced a significant downturn today...',
    tags: ['Economy', 'Finance', 'Breaking'],
    image:
      'https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg',
  },
  {
    title: 'Crypto Boom Continues',
    description:
      'Cryptocurrencies are on the rise again as investors flock to digital assets...',
    tags: ['Crypto', 'Investment', 'Trending'],
    image:
      'https://www.imf.org/-/media/Images/IMF/Blog/Migrated/BLOG-2099x600-Crypto-da-kuk-iStock-by-Getty-Images-iStock-1317587887.ashx',
  },
  {
    title: 'Breaking News: Market Crash',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi velit aspernatur sit quo nihil quibusdam, eius quis consequatur quod illo repudiandae iure magni libero, atque illum laudantium impedit nostrum! Tempore deleniti voluptatum voluptate atque minus sequi, exercitationem quia rem veniam maiores, ut eius esse ab eum quasi tempora repellendus animi, omnis molestias eaque! Atque porro velit dolorem sunt veniam!',
    tags: ['Economy', 'Finance', 'Breaking'],
    image:
      'https://academy.education.investing.com/wp-content/uploads/2022/03/bitcoin-what-is-crypto-scaled.jpg',
  },
];

const NewsCarouselBig = ({ height, hideButtons }: any) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? content.length - 1 : prevIndex - 1,
    );
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  useEffect(() => {
    const interval = setInterval(handleNext, 30000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      color={'white'}
      position="relative"
      width="100%"
      height={{ xs: '300px', sm: '400px', md: height ? height : '800px' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="img"
        src={CarouselImage1.src}
        alt={`Carousel image ${currentIndex + 1}`}
        width="100%"
        height="100%"
        sx={{
          objectFit: 'cover',
          borderRadius: '25px',
          zIndex: '-1',
          opacity: '1',
        }}
      />
      <Box
        position="absolute"
        top="0"
        right="0"
        display="flex"
        marginTop={'12px'}
        zIndex={1}
        marginRight={'12px'}
      >
        <Chip
          sx={{
            background:
              'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            height: '33px',
          }}
          key={'123'}
          label={
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4.5px',
                fontSize: '16px',
                lineHeight: '20.8px',
                width: '87px',
                fontWeight: '600',
              }}
            >
              <Image
                src={PeopleImage.src}
                height={12}
                width={12}
                alt="people watching image"
              />
              {'374,039'}
            </Box>
          }
          color="primary"
          size="small"
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          position="absolute"
          top={hideButtons ? '60%' : '65%'}
          left="0"
          display="flex"
          gap="8px"
          zIndex={1}
          paddingInline={'32px'}
        >
          {content[currentIndex].tags.map((tag, index) => (
            <Chip
              sx={{
                background:
                  'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
                backdropFilter: 'blur(10px)',
              }}
              key={index}
              label={tag}
              color="primary"
              size="small"
            />
          ))}
        </Box>

        <Box
          position="absolute"
          paddingInline={'32px'}
          top={hideButtons ? '65%' : '70%'}
          left="0"
          color="white"
          zIndex={1}
        >
          <Typography
            variant="h4"
            sx={
              hideButtons
                ? {
                    mt: '16px',
                    color: 'white',
                    fontSize: '32px',
                    fontWeight: '700',
                    letterSpacing: '1px',
                    lineHeight: '38.4px',
                    opacity: '100%',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }
                : {
                    fontWeight: '700',
                    color: 'white',
                    fontSize: '24px',
                    lineHeight: '28.8px',
                    letterSpacing: '1%',
                  }
            }
          >
            {hideButtons
              ? '1 Top Cryptocurrency to Buy Before It Soars 1,415% to $1 Million, According to Certain Wall Street Analysts'
              : content[currentIndex].title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: 'white',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '24px',
              opacity: '80%',
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {hideButtons
              ? "Bitcoin (CRYPTO: BTC) returned 150% over the past year, easily outpacing the U.S. stock market. But Bernstein analysts Gautam Chhugani and Mahika Sapra expect the cryptocurrency to move much higher in the next decade. Their price targets are listed below, along with the implied upside based on Bitcoin's current price of $66,000."
              : content[currentIndex].description}
          </Typography>
          <Box marginTop={'24px'} marginBottom={'8px'} display="flex" gap="8px">
            <Typography
              sx={{
                color: 'white',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '20.8px',
              }}
            >
              19/06/2024 at 03:32 AM | John Smith
            </Typography>
          </Box>
        </Box>
        {hideButtons === true ? (
          <></>
        ) : (
          <Box
            sx={{
              position: 'absolute',
              bottom: '45px',
              left: '0',
              display: 'flex',
              gap: '2px',
              zIndex: 1,
              marginLeft: '32px',
            }}
          >
            {content.map((_, index) => (
              <IconButton
                sx={{ height: '10px', width: '10px' }}
                key={index}
                onClick={() => handleDotClick(index)}
                aria-label={`Go to slide ${index + 1}`}
              >
                <FiberManualRecordIcon
                  sx={{
                    color: currentIndex === index ? 'white' : 'gray',
                    height: '15px',
                  }}
                />
              </IconButton>
            ))}
          </Box>
        )}
      </Box>
      {hideButtons === true ? (
        <></>
      ) : (
        <Box
          position="absolute"
          bottom="40px"
          right="32px"
          display="flex"
          gap="8px"
          zIndex={1}
        >
          <IconButton
            sx={{
              background: '#FFFFFF1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '48px',
              width: '48px',
            }}
            onClick={handlePrev}
            aria-label="Previous slide"
          >
            <ArrowLeftDark color={'white'} />
          </IconButton>
          <IconButton
            sx={{
              background: '#FFFFFF1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: '48px',
              width: '48px',
            }}
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ArrowRightDark color={'white'} />
          </IconButton>
        </Box>
      )}
    </Box>
  );
};

export default NewsCarouselBig;

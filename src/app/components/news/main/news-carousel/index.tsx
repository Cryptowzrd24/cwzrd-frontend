'use client';
import React, { useEffect, useState } from 'react';
import { Box, IconButton, Typography, Chip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

const content = [
  {
    title:
      '1 Top Cryptocurrency to Buy Before It Soars 1,415% to $1 Million, According to Certain Wall Street Analysts',
    description:
      "Bitcoin (CRYPTO: BTC) returned 150% over the past year, easily outpacing the U.S. stock market. But Bernstein analysts Gautam Chhugani and Mahika Sapra expect the cryptocurrency to move much higher in the next decade. Their price targets are listed below, along with the implied upside based on Bitcoin's current price of $66,000.",
    tags: ['Economy', 'Finance', 'Breaking'],
    image:
      'https://s3-alpha-sig.figma.com/img/37f3/d96a/b4e4239007a6d7ce9aecaef03b049930?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kSxn3ESFoT0oOqDxaa51uj2VFRLQYSl6gZpwh6ntcP1JkqUaNGXxuK4lUgDPlcvz89mOkDnzPS9Etrm-5RPmOzJVzKz~TMaGL~LvZQJ1bVFd~eR~C6IJteGGCPxv1avz2k1UQlwsxBJlJRBKyHAXmIFftgCFAN4gfy6JS4f~4ewcgpdRgPgLn~AAxhIKH-5eBR~ZdbAHcUw3JpJHpUxS~NdIc5o7aPoK2~fInntgMxoBs8L9ep0KyOpiVM18Wzw20BIawMWXfA82clND9LvmoXwNB1jtg9rZBoUIw~SXWRlnQyjcguA0BocqIxfrlCj4DC-ooxvFIu8BXU-oYks2YQ__',
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
const NewsCarousel = () => {
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
      height={{ xs: '300px', sm: '400px', md: '480px' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        component="img"
        src={content[currentIndex].image}
        alt={`Carousel image ${currentIndex + 1}`}
        width="100%"
        height="100%"
        sx={{
          objectFit: 'cover',
          borderRadius: '25px',
          zIndex: '-1',
          opacity: '0.95',
        }}
      />

      {/* Overlay for tags */}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          position="absolute"
          top="50%"
          left="20px"
          display="flex"
          gap="8px"
          zIndex={1}
        >
          {content[currentIndex].tags.map((tag, index) => (
            <Chip
              sx={{
                background:
                  'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
                backdropFilter: 'blur(10px)',
                // border: '1px solid rgba(255, 255, 255, 0.2)',
              }}
              key={index}
              label={tag}
              color="primary"
              size="small"
            />
          ))}
        </Box>

        {/* Overlay for title and description */}
        <Box position="absolute" top="60%" left="20px" color="white" zIndex={1}>
          <Typography
            variant="h4"
            sx={{ fontWeight: '700', color: 'white', fontSize: '32px' }}
          >
            {content[currentIndex].title}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              mt: 1,
              color: 'white',
              fontSize: '16px',
              fontWeight: '400',
              opacity: '80%',
            }}
          >
            {content[currentIndex].description}
          </Typography>
        </Box>

        <Box
          sx={{
            position: 'absolute',
            bottom: '20px',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            gap: '2px',
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
      </Box>

      <Box
        position="absolute"
        bottom="20px"
        right="30px"
        display="flex"
        gap="8px"
      >
        <IconButton
          sx={{
            background:
              'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handlePrev}
          aria-label="Previous slide"
        >
          <ArrowBackIosIcon sx={{ color: 'white' }} />
        </IconButton>
        <IconButton
          sx={{
            background:
              'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onClick={handleNext}
          aria-label="Next slide"
        >
          <ArrowForwardIosIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <Box
        position="absolute"
        bottom="20px"
        left="20px"
        display="flex"
        gap="8px"
      >
        <Typography
          sx={{ color: 'white', fontSize: '16px', fontWeight: '500' }}
        >
          19/06/2024 at 03:32 AM | John Smith
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsCarousel;

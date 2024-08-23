'use client';
import React, { useEffect, useState } from 'react';
import { Box, IconButton, Typography, Chip } from '@mui/material';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import CarouselImage1 from '../../../../../../public/images/news-letter/carousel1.png';
import PeopleImage from "../../../../../../public/images/news-letter/people.png"
import Image from 'next/image';

const content = [
  {
    title: 'Breaking News: Market Crash',
    description:
      'The stock market has experienced a significant downturn today...',
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

const NewsCarouselBig = () => {
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
      marginBottom={'50px'}
      color={'white'}
      position="relative"
      width="100%"
      height={{ xs: '300px', sm: '400px', md: '800px' }}
      display="flex"
      justifyContent="center"
      alignItems="center"
      marginTop={"10px"}
    //   marginBlock={'100px'}
    >
      <Box
        component="img"
        src={
          currentIndex == 0 ? CarouselImage1.src : content[currentIndex].image
        }
        alt={`Carousel image ${currentIndex + 1}`}
        width="100%"
        height="800px"
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
        marginTop={'30px'}
        gap="8px"
        zIndex={1}
        marginRight={'20px'}
      >
        <Chip
          sx={{
            background:
              'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.2) 100%)',
            backdropFilter: 'blur(10px)',
          }}
          key={'123'}
          label={<Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
            <Image src={PeopleImage.src} height={15} width={15} alt='people watching image' /> 
            {'374,039'}
          </Box>}
          color="primary"
          size="small"
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          position="absolute"
          top="60%"
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
              }}
              key={index}
              label={tag}
              color="primary"
              size="small"
            />
          ))}
        </Box>

        <Box position="absolute" top="70%" left="20px" color="white" zIndex={1}>
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
              display: '-webkit-box',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              WebkitLineClamp: 2,
              WebkitBoxOrient: 'vertical',
            }}
          >
            {content[currentIndex].description}
          </Typography>
          <Box marginTop={'50px'} display="flex" gap="8px">
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

        <Box
          sx={{
            position: 'absolute',
            bottom: '30px',
            left: '20px',
            display: 'flex',
            gap: '2px',
            zIndex: 1,
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

      {/* Navigation buttons positioned at the right bottom */}
      <Box
        position="absolute"
        bottom="30px"
        right="20px"
        display="flex"
        gap="8px"
        zIndex={1}
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
    </Box>
  );
};

export default NewsCarouselBig;

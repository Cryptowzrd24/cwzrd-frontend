'use client';
import React, { useEffect, useState } from 'react';
import { Box, IconButton, Typography, Chip } from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import ArrowLeftDark from '../../../../../../public/icons/collections/arrowLeftDark';
import ArrowRightDark from '../../../../../../public/icons/collections/arrowRightDark';
import PeopleImage from '../../../../../../public/images/news-letter/people.svg';
import Image from 'next/image';

const content = [
  {
    title:
      '1 Top Cryptocurrency to Buy Before It Soars 1,415% to $1 Million, According to Certain Wall Street Expert Analysts',
    description:
      "Bitcoin (CRYPTO: BTC) returned 150% over the past year, easily outpacing the U.S. stock market. But Bernstein analysts Gautam Chhugani and Mahika Sapra expect the cryptocurrency to move much higher in the next decade. Their price targets are listed below, along with the implied upside based on Bitcoin's current price of $66,000.",
    tags: ['Economy', 'Finance', 'Breaking'],
    image:
      'https://s3-alpha-sig.figma.com/img/37f3/d96a/b4e4239007a6d7ce9aecaef03b049930?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRHH4kxGfZBi-Af87wUE-0W95X~hJMtqGwSY3ucVTbjLZqVffe7-2u-Svy0tULjRHkJV5~s0k00CMMjSPUOwkqgjs5pBZDcP~qeULNEzbSRZuMLUUx-YnVLZIMAIzmtYlnzQlb1FN3pfL6AFQJS7D9qGtYGNkWYmBkbDZE6vmcgd1BHXzvo58vIQC4OJ~qMOFlFPTjiiyl2DprNeNCUji8K4qzWBNd39Z8UiKsEjb0ScR5kqJX5TpieU97EZfZe9hcLsZvCV0Z-X~5m6gVW-yy6NIE5Igxr2j2gjsbg9b3MY7m5HH3F4GzHb72VH1nIzK6uwp6LzBM9kH7lK5KKMbw__',
  },
  {
    title: 'Crypto Boom Continues',
    description:
      'Cryptocurrencies are on the rise again as investors flock to digital assets lorem ipsuj sit amet Cryptocurrencies are on the rise again as investors flock to digital assets lorem ipsuj sit amet Cryptocurrencies are on the rise again as investors flock to digital assets lorem ipsuj sit amet ...',
    tags: ['Crypto', 'Investment', 'Trending'],
    image:
      'https://s3-alpha-sig.figma.com/img/37f3/d96a/b4e4239007a6d7ce9aecaef03b049930?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRHH4kxGfZBi-Af87wUE-0W95X~hJMtqGwSY3ucVTbjLZqVffe7-2u-Svy0tULjRHkJV5~s0k00CMMjSPUOwkqgjs5pBZDcP~qeULNEzbSRZuMLUUx-YnVLZIMAIzmtYlnzQlb1FN3pfL6AFQJS7D9qGtYGNkWYmBkbDZE6vmcgd1BHXzvo58vIQC4OJ~qMOFlFPTjiiyl2DprNeNCUji8K4qzWBNd39Z8UiKsEjb0ScR5kqJX5TpieU97EZfZe9hcLsZvCV0Z-X~5m6gVW-yy6NIE5Igxr2j2gjsbg9b3MY7m5HH3F4GzHb72VH1nIzK6uwp6LzBM9kH7lK5KKMbw__',
  },
  {
    title: 'Breaking News: Market Crash',
    description:
      'The stock market has experienced a significant downturn today...',
    tags: ['Economy', 'Finance', 'Breaking'],
    image:
      'https://s3-alpha-sig.figma.com/img/37f3/d96a/b4e4239007a6d7ce9aecaef03b049930?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRHH4kxGfZBi-Af87wUE-0W95X~hJMtqGwSY3ucVTbjLZqVffe7-2u-Svy0tULjRHkJV5~s0k00CMMjSPUOwkqgjs5pBZDcP~qeULNEzbSRZuMLUUx-YnVLZIMAIzmtYlnzQlb1FN3pfL6AFQJS7D9qGtYGNkWYmBkbDZE6vmcgd1BHXzvo58vIQC4OJ~qMOFlFPTjiiyl2DprNeNCUji8K4qzWBNd39Z8UiKsEjb0ScR5kqJX5TpieU97EZfZe9hcLsZvCV0Z-X~5m6gVW-yy6NIE5Igxr2j2gjsbg9b3MY7m5HH3F4GzHb72VH1nIzK6uwp6LzBM9kH7lK5KKMbw__',
  },
  {
    title: 'Crypto Boom Continues',
    description:
      'Cryptocurrencies are on the rise again as investors flock to digital assets...',
    tags: ['Crypto', 'Investment', 'Trending'],
    image:
      'https://s3-alpha-sig.figma.com/img/37f3/d96a/b4e4239007a6d7ce9aecaef03b049930?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRHH4kxGfZBi-Af87wUE-0W95X~hJMtqGwSY3ucVTbjLZqVffe7-2u-Svy0tULjRHkJV5~s0k00CMMjSPUOwkqgjs5pBZDcP~qeULNEzbSRZuMLUUx-YnVLZIMAIzmtYlnzQlb1FN3pfL6AFQJS7D9qGtYGNkWYmBkbDZE6vmcgd1BHXzvo58vIQC4OJ~qMOFlFPTjiiyl2DprNeNCUji8K4qzWBNd39Z8UiKsEjb0ScR5kqJX5TpieU97EZfZe9hcLsZvCV0Z-X~5m6gVW-yy6NIE5Igxr2j2gjsbg9b3MY7m5HH3F4GzHb72VH1nIzK6uwp6LzBM9kH7lK5KKMbw__',
  },
  {
    title: 'Breaking News: Market Crash',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi velit aspernatur sit quo nihil quibusdam, eius quis consequatur quod illo repudiandae iure magni libero, atque illum laudantium impedit nostrum! Tempore deleniti voluptatum voluptate atque minus sequi, exercitationem quia rem veniam maiores, ut eius esse ab eum quasi tempora repellendus animi, omnis molestias eaque! Atque porro velit dolorem sunt veniam!',
    tags: ['Economy', 'Finance', 'Breaking'],
    image:
      'https://s3-alpha-sig.figma.com/img/37f3/d96a/b4e4239007a6d7ce9aecaef03b049930?Expires=1728259200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=MRHH4kxGfZBi-Af87wUE-0W95X~hJMtqGwSY3ucVTbjLZqVffe7-2u-Svy0tULjRHkJV5~s0k00CMMjSPUOwkqgjs5pBZDcP~qeULNEzbSRZuMLUUx-YnVLZIMAIzmtYlnzQlb1FN3pfL6AFQJS7D9qGtYGNkWYmBkbDZE6vmcgd1BHXzvo58vIQC4OJ~qMOFlFPTjiiyl2DprNeNCUji8K4qzWBNd39Z8UiKsEjb0ScR5kqJX5TpieU97EZfZe9hcLsZvCV0Z-X~5m6gVW-yy6NIE5Igxr2j2gjsbg9b3MY7m5HH3F4GzHb72VH1nIzK6uwp6LzBM9kH7lK5KKMbw__',
  },
];
const NewsCarousel = ({ showAudience, isDetailPage, isMainPage }: any) => {
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
    if (!isDetailPage) {
      const interval = setInterval(handleNext, 30000);
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <Box
      color={'white'}
      position="relative"
      width="100%"
      height={
        isMainPage
          ? { xs: '180px', sm: '250px', md: '370px' }
          : { xs: '300px', sm: '400px', md: '480px' }
      }
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
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(0deg, #111111 35%, transparent 100%)',
          borderBottomLeftRadius: '25px',
          borderBottomRightRadius: '25px',
          overflow: 'hidden',
        }}
      />
      {showAudience && (
        <Chip
          sx={{
            position: 'absolute',
            top: '24px',
            right: '26px',
            backgroundColor: '#000000 30%',
            backdropFilter: 'blur(10px)',
            boxShadow: '1px',
            width: '95px',
            height: '33px',
          }}
          label={
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                color: 'white',
                fontWeight: 600,
                fontSize: '16px',
                lineHeight: '20.8px',
                letterSpacing: '-1px',
                gap: '4.5px',
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
        />
      )}
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          position="absolute"
          top="50%"
          left={0}
          display="flex"
          gap="8px"
          paddingInline={isMainPage ? '48px' : '32px'}
          zIndex={1}
        >
          {content[currentIndex].tags.map((tag, index) => (
            <Chip
              sx={{
                background:
                  'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 2%, rgba(255, 255, 255, 0.2) 100%)',
                backdropFilter: 'blur(10px)',
                paddingInline: '4px',
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
          top="57%"
          left="0"
          width="100%"
          color="white"
          zIndex={1}
          paddingInline={isMainPage ? '48px' : '32px'}
          sx={{
            boxSizing: 'border-box',
            padding: 0,
            margin: 0,
          }}
        >
          <Typography
            variant="h4"
            sx={
              isMainPage
                ? {
                    fontWeight: '700 !important',
                    color: 'white',
                    lineHeight: '28.8px',
                    fontSize: '24px  !important',
                    paddingInline: '48px',
                    marginTop: '8px',
                  }
                : {
                    fontWeight: '700 !important',
                    color: 'white',
                    fontSize: '32px  !important',
                    paddingInline: '32px',
                  }
            }
          >
            {content[currentIndex].title}
          </Typography>
          <Typography
            sx={{
              mt: 1,
              color: 'white',
              fontSize: '14px !important',
              lineHeight: '21px',
              fontWeight: '400  !important',
              opacity: '80%',
              paddingInline: isMainPage ? '48px' : '32px',
              display: '-webkit-box',
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
              WebkitLineClamp: 2,
              textOverflow: 'ellipsis',
              whiteSpace: 'normal',
              maxWidth: isMainPage ? '87% ' : 'calc(100% - 48px)',
            }}
          >
            {content[currentIndex].description}
          </Typography>
        </Box>

        {!isDetailPage && (
          <Box
            sx={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              display: 'flex',
              paddingBlock: '24px',
              gap: isMainPage ? '0px' : '2px',
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
                    height: isMainPage ? '11px' : '15px',
                  }}
                />
              </IconButton>
            ))}
          </Box>
        )}
      </Box>

      {!isDetailPage && (
        <Box
          position="absolute"
          paddingBlock="10px"
          bottom="16px"
          right="54px"
          display="flex"
          gap="8px"
        >
          <IconButton
            sx={{
              background: '#FFFFFF1A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              height: isMainPage ? '40px' : '48px',
              width: isMainPage ? '40px' : '48px',
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
              height: isMainPage ? '40px' : '48px',
              width: isMainPage ? '40px' : '48px',
            }}
            onClick={handleNext}
            aria-label="Next slide"
          >
            <ArrowRightDark color={'white'} />
          </IconButton>
        </Box>
      )}
      <Box
        position="absolute"
        paddingBlock="24px"
        bottom="16px"
        display="flex"
        gap="8px"
        left={0}
      >
        <Typography
          sx={{
            color: 'white',
            fontSize: isMainPage ? '14px' : '16px !important',
            fontWeight: '400 !important',
            paddingInline: isMainPage ? '48px' : '32px',
            lineHeight: isMainPage ? '18.2px' : '20.8px',
          }}
        >
          19/06/2024 at 03:32 AM | John Smith
        </Typography>
      </Box>
    </Box>
  );
};

export default NewsCarousel;

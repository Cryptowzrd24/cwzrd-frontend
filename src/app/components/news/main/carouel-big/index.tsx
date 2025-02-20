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
      'Italy to Increase Surveillance and conveyance of Crypto Market With Fines as High as 5M Euros',
    description:
      'That will include high fines for those who manipulate the crypto asset market as part of a wider scheme to beef up surveillance of risks tied to the sector, Reuters reported, citing a draft decree it reviewed.',
    tags: ['Economy', 'Finance', 'Breaking'],
    image: CarouselImage1,
  },
  {
    title:
      '1 Top Cryptocurrency to Buy Before It Soars 1,415% to $1 Million, According to Certain Wall Street Analysts',
    description:
      'Cryptocurrencies are on the rise again as investors flock to digital assets and will help boost up the ecoenomy like no way before. Crypto i on the rise and this digital era of de-fi and cryoto is not going anywhere soon ...',
    tags: ['Crypto', 'Investment', 'Trending'],
    image:
      'https://academy.education.investing.com/wp-content/uploads/2022/03/bitcoin-what-is-crypto-scaled.jpg',
  },
  {
    title:
      'Italy to Increase Surveillance and conveyance of Crypto Market With Fines as High as 5M Euros',
    description:
      'The stock market has experienced a significant downturn today...',
    tags: ['Economy', 'Finance', 'Breaking'],
    image:
      'https://img.freepik.com/free-vector/cryptocurrency-bitcoin-golden-coin-background_1017-31505.jpg',
  },
  {
    title:
      'Italy to Increase Surveillance and conveyance of Crypto Market With Fines as High as 5M Euros',
    description:
      'Cryptocurrencies are on the rise again as investors flock to digital assets...',
    tags: ['Crypto', 'Investment', 'Trending'],
    image:
      'https://www.imf.org/-/media/Images/IMF/Blog/Migrated/BLOG-2099x600-Crypto-da-kuk-iStock-by-Getty-Images-iStock-1317587887.ashx',
  },
  {
    title:
      'Italy to Increase Surveillance and conveyance of Crypto Market With Fines as High as 5M Euros',
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet sequi velit aspernatur sit quo nihil quibusdam, eius quis consequatur quod illo repudiandae iure magni libero, atque illum laudantium impedit nostrum! Tempore deleniti voluptatum voluptate atque minus sequi, exercitationem quia rem veniam maiores, ut eius esse ab eum quasi tempora repellendus animi, omnis molestias eaque! Atque porro velit dolorem sunt veniam!',
    tags: ['Economy', 'Finance', 'Breaking'],
    image:
      'https://academy.education.investing.com/wp-content/uploads/2022/03/bitcoin-what-is-crypto-scaled.jpg',
  },
];

const NewsCarouselBig = ({
  height,
  hideButtons,
  isDetailPage,
  width,
  latest,
  isCrypto,
}: any) => {
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
      width={width ? width : '100%'}
      height={
        isCrypto
          ? { xs: '550px', sm: '500px', md: height ? height : '680px' }
          : { xs: '550px', sm: '500px', md: height ? height : '800px' }
      }
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
        right={'0'}
        display="flex"
        marginTop={'16px'}
        zIndex={1}
        marginRight={'16px'}
      >
        <Chip
          sx={{
            background:
              'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)',
            backdropFilter: 'blur(10px)',
            height: '35px',
          }}
          key={'123'}
          label={
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                gap: '4.5px',
                fontSize: '16px !important',
                fontWeight: '600',
                paddingInline: '5px',
                paddingBlock: '8px',
              }}
            >
              <Image
                src={PeopleImage.src}
                height={15}
                width={15}
                alt="people watching image"
              />
              <Typography
                sx={{
                  fontWeight: '600',
                  fontSize: '16px !important',
                  lineHeight: '20.8px',
                  color: 'white',
                  paddingTop: '8px',
                  paddingBottom: '8px',
                }}
              >
                374,039
              </Typography>
            </Box>
          }
          color="primary"
          size="small"
        />
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box
          position="absolute"
          top={
            latest
              ? '43%'
              : hideButtons
                ? '60%'
                : isDetailPage
                  ? '53%'
                  : isCrypto
                    ? '60%'
                    : '65%'
          }
          left="0"
          display="flex"
          gap="8px"
          zIndex={1}
          paddingInline={'24px'}
        >
          {content[currentIndex].tags.map((tag, index) => (
            <Chip
              sx={{
                background:
                  'linear-gradient(90deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.1) 100%)',
                backdropFilter: 'blur(10px)',
                height: '28px',
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
          paddingInline={'24px'}
          top={
            latest
              ? '52%'
              : hideButtons
                ? '65%'
                : isDetailPage
                  ? '60%'
                  : isCrypto
                    ? '65%'
                    : '70%'
          }
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
                    fontSize: '32px !important',
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
                : isDetailPage
                  ? {
                      fontWeight: '600',
                      color: 'white',
                      fontSize: '20px !important',
                      lineHeight: '26px',
                      width: '97%',
                      letterSpacing: '1px',
                      display: '-webkit-box',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                    }
                  : {
                      fontWeight: '700',
                      color: 'white',
                      fontSize: '24px !important',
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
            sx={
              isDetailPage
                ? {
                    mt: '6px',
                    fontSize: '13px !important',
                    fontWeight: '400',
                    lineHeight: '18.85px',
                    width: '98%',
                    color: 'rgba(255,255,255,0.8)',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }
                : {
                    mt: 1,
                    color: 'white',
                    fontSize: '16px !important',
                    fontWeight: '400',
                    lineHeight: '24px',
                    opacity: '80%',
                    display: '-webkit-box',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                  }
            }
          >
            {hideButtons
              ? "Bitcoin (CRYPTO: BTC) returned 150% over the past year, easily outpacing the U.S. stock market. But Bernstein analysts Gautam Chhugani and Mahika Sapra expect the cryptocurrency to move much higher in the next decade. Their price targets are listed below, along with the implied upside based on Bitcoin's current price of $66,000."
              : content[currentIndex].description}
          </Typography>
          <Box marginTop={'8px'} marginBottom={'16px'} display="flex" gap="8px">
            <Typography
              sx={{
                color: 'white',
                fontSize: '12px',
                fontWeight: '500',
                lineHeight: '15.6px',
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
              marginLeft: '24px',
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

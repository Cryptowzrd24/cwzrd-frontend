'use client';
import { Box, Chip, Typography, useMediaQuery } from '@mui/material';
import PeopleImage from '../../../../../../public/images/news-letter/people.svg';
import Image from 'next/image';
import React from 'react';
import { ChevronsRight } from '../../../../../../public/icons/chevronsRight';

interface NewsCardProps {
  image: any;
  title: string;
  description: string;
  allNews?: any;
  showChips?: any;
  isCrypto?: any;
  isVertical?: boolean;
  isTransparent?: boolean;
  imageMargin?: string;
  imageWidth?: string;
  containerWidth?: string;
  justifyContent?: string;
  isMainPage?: boolean;
}

const NewsCard: React.FC<NewsCardProps> = ({
  image,
  title,
  description,
  allNews,
  showChips,
  isCrypto,
  isVertical,
  isTransparent,
  imageMargin,
  imageWidth,
  containerWidth,
  justifyContent,
  isMainPage,
}) => {
  const isTabView = useMediaQuery('@media (max-width: 978px)');
  const isLargeScreen = useMediaQuery('@media (min-width: 1680px)');
  return (
    <Box
      sx={{
        // padding: '8px',
        // paddingBottom: '12px',
        padding: isCrypto ? '12px' : '0px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: justifyContent || 'center',
        width: isLargeScreen
          ? '389px'
          : allNews
            ? '328px'
            : containerWidth || '309px',
        height: allNews ? '252px' : '252px',
        borderRadius: '16px',
        boxShadow: '0px 4px 28px 0px #0000000D',

        '@media (max-width: 978px)': {
          flexDirection: 'row',
          width: isVertical ? 'auto' : '100%',
          height: 'auto',
          padding: isVertical ? '10px' : '0px',
        },

        ...(isVertical && {
          '@media (max-width: 576px)': {
            flexDirection: 'column',
          },
        }),
      }}
    >
      <Box
        sx={{
          width: isLargeScreen ? '100%' : imageWidth || '312px',
          height: isLargeScreen ? '154px' : '134px',
          objectFit: 'cover',
          borderRadius: '12px',
          margin: imageMargin || '8px 8px 0px 8px',
          position: 'relative',
          '@media (max-width: 978px)': {
            maxWidth: '312px',
            margin: 0,
          },

          ...(isVertical && {
            '@media (max-width: 576px)': {
              maxWidth: 'none',
              width: '100%',
            },
          }),
        }}
      >
        {showChips === true && (
          <Chip
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              height: '24px',
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(15px)',
              borderRadius: '100px',
              color: 'white',

              '@media (max-width: 576px)': {
                display: isVertical ? 'block' : 'none',
              },
            }}
            label={
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  gap: '4.5px',
                  fontSize: '16px',
                  fontWeight: '600',
                }}
              >
                <Image
                  src={PeopleImage.src}
                  height={12}
                  width={12}
                  alt="people watching image"
                />
                <Typography
                  sx={{
                    fontWeight: '500',
                    fontSize: '12px',
                    lineHeight: '15.6px',
                    color: 'white',
                  }}
                >
                  374,039
                </Typography>
              </Box>
            }
          />
        )}
        <Image
          alt="news"
          src={image.src}
          width={100}
          height={0}
          style={{
            width: '100%',
            height:
              isVertical && isTabView ? '100%' : isTabView ? '72%' : '100%',
            objectFit: 'cover',
            borderRadius: '12px',
          }}
        />
      </Box>
      <Box sx={{ padding: '8px 2px 2px 2px' }}>
        <Box sx={{ paddingInline: isMainPage ? '0px' : '8px' }}>
          <Typography
            sx={{
              fontWeight: '700',
              fontSize: '14px',
              lineHeight: '18.2px',
              marginInline: isMainPage ? '0px' : '8px',
              letterSpacing: '0.5px',
              display: 'flex',
              alignItems: 'center',

              '@media (max-width: 978px)': {
                fontSize: '12px !important',
                fontWeight: '700 !important',
                lineHeight: '130% !important',
                letterSpacing: '0.24px !important',
              },
            }}
            variant="body1"
          >
            {title ||
              "Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"}
          </Typography>

          <Typography
            sx={
              allNews
                ? {
                    fontWeight: '400',
                    fontSize: '12px',
                    lineHeight: '17.4px',
                    marginTop: '4px',
                    marginInline: '8px',
                    color: 'rgba(17,17,17,0.8)',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',

                    '@media (max-width: 978px)': {
                      fontSize: '8px !important',
                      fontWeight: '400 !important',
                      lineHeight: '120% !important',
                    },
                  }
                : {
                    fontWeight: '400',
                    fontSize: '13px',
                    lineHeight: '19px',
                    marginTop: '4px',
                    marginInline: isMainPage ? '0px' : '8px',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',

                    '@media (max-width: 978px)': {
                      fontSize: '8px !important',
                      fontWeight: '400 !important',
                      lineHeight: '120% !important',
                    },
                  }
            }
            variant="body2"
          >
            {description ||
              "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of..."}
          </Typography>
        </Box>

        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
            overflow: 'hidden',
            flexWrap: 'nowrap',
            paddingTop: '3px',
            paddingInline: '16px',

            '@media (min-width: 978px)': {
              display: 'none',
            },
          }}
        >
          <Typography
            sx={{
              fontSize: '10px !important',
              fontWeight: 500,
              fontFamily: 'Sf Pro Display',
              lineHeight: '18.2px',
              color: 'rgba(17, 17, 17, 1)',
              flexShrink: 0,
            }}
          >
            News
          </Typography>
          <ChevronsRight />
          <Typography
            sx={{
              fontSize: '10px !important',
              fontWeight: 500,
              fontFamily: 'Sf Pro Display',
              lineHeight: '18.2px',
              color: 'rgba(114, 72, 247, 1)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              flexShrink: 1,
              minWidth: 0,
            }}
          >
            Bitcoin whale accunlation reaches pre
          </Typography>
        </Box>

        <Box
          sx={{
            margin: isMainPage ? '10px 0px 8px' : '10px 8px 8px 8px',
            height: '25px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start',
            borderRadius: '8px',
            backgroundColor: isTransparent ? 'transparent' : 'rgb(243,243,243)',
          }}
        >
          <Typography
            sx={{
              fontWeight: '500',
              fontSize: '11px',
              lineHeight: '14.3px',
              paddingBlock: '6px',
              paddingInline: isMainPage ? '0px' : '10px',

              '@media (max-width: 978px)': {
                fontSize: '8px !important',
                fontWeight: '400 !important',
                lineHeight: '130% !important',
              },
            }}
          >
            06/06/2023 at 00:06 AM &nbsp;&nbsp;|&nbsp;&nbsp; John Smith
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default NewsCard;

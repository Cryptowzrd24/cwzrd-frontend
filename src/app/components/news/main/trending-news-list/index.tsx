'use client';
import React from 'react';
import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Img1 from '../../../../../../public/images/news-letter/trending1.png';
import Img2 from '../../../../../../public/images/news-letter/trending2.png';
import Img3 from '../../../../../../public/images/news-letter/trending3.png';
import Img4 from '../../../../../../public/images/news-letter/trending4.png';

interface LiveCardProps {
  id: string;
  title: string;
  desc: string;
  image: any;
}

export const LiveCardData: LiveCardProps[] = [
  {
    id: '1',
    title: 'India financial watchdog imposes $2.25 million penalty on crypto',
    desc: 'Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin {{BTC}}, has acquired another 11,931 BTC for',
    image: Img1,
  },
  {
    id: '2',
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market',
    desc: 'Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin {{BTC}}, has acquired another 11,931 BTC for',
    image: Img2,
  },
  {
    id: '3',
    title: 'India financial watchdog imposes $2.25 million penalty on crypto',
    desc: 'Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin {{BTC}}, has acquired another 11,931 BTC for',
    image: Img3,
  },
  {
    id: '4',
    title: "Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin",
    desc: 'Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin {{BTC}}, has acquired another 11,931 BTC for',
    image: Img4,
  },
];

interface TrendingNewsListPropss {
  height: string;
  maxCards?: number;
  marginLeft?: string;
}

function TrendingNewsList({ height, maxCards }: TrendingNewsListPropss) {
  return (
    <Box
      sx={{
        color: 'white',
        maxHeight: height ? height : '100%',
        display: 'flex',
        flexDirection: 'column',
        borderRadius: '16px',
        gap: 2 / 3,
        overflow: 'scroll',
        scrollbarWidth: 'none',

        '@media (max-width: 978px)': {
          maxHeight: '100%',
          flex: 1,
        },
      }}
    >
      {LiveCardData.slice(0, maxCards).map((card) => (
        <Card title={card.title} description={card.desc} image={card.image} />
      ))}
      {/* <Box sx={{ minHeight: height }}>
        {LiveCardData.slice(0, maxCards).map((card) => (
          <Box
            sx={{
              background: '#fff',
              // paddingRight: '12px',
              borderRadius: '16px',
              // mb: '16px',
            }}
          >
            <Image
              src={card.image.src}
              alt="picture"
              width={140}
              height={80}
              style={{
                objectFit: 'cover',
                borderRadius: '14px',
              }}
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Stack
                sx={{
                  width: '100%',
                  marginLeft: '16px',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '18.6px',
                    marginBottom: '2px',
                    display: '-webkit-box',
                    WebkitLineClamp: 3,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {card.title}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    color: 'rgba(17, 17, 17, 0.8)',
                    fontSize: '11px',
                    fontWeight: '400',
                    lineHeight: '14.3px',
                    display: '-webkit-box',
                    WebkitLineClamp: 1,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    marginTop: '4px',
                    minWidth: '164px',
                  }}
                >
                  {card.desc}
                </Typography>
              </Stack>
            </Box>
          </Box>
        ))}
      </Box> */}
    </Box>
  );
}

const Card = ({ title, image, description }: any) => {
  return (
    <>
      <Box sx={{ display: 'flex', gap: '12px' }}>
        <Box sx={{ borderRadius: '8px', overflow: 'hidden' }}>
          <Image
            style={{
              objectFit: 'cover',
              borderRadius: '8px',
            }}
            alt="image"
            height={80}
            width={130}
            src={image.src}
          />
        </Box>
        <Box sx={{ width: '53%' }}>
          <Typography
            sx={{
              fontSize: '12px !important',
              fontWeight: '700',
              lineHeight: '15.6px',
              marginTop: '1px',
              color: 'black',
              display: '-webkit-box',
              WebkitLineClamp: 3,
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {title}
          </Typography>
          <Typography
            sx={{
              fontSize: '10px !important',
              fontWeight: '400',
              lineHeight: '13px',
              marginTop: '4px',
              marginBottom: '1px',
              color: 'rgba(17,17,17,0.8)',
              display: '-webkit-box',
              WebkitLineClamp: 2,
              overflow: 'hidden',
              WebkitBoxOrient: 'vertical',
            }}
          >
            {description}
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default TrendingNewsList;

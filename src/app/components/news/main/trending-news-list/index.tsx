'use client';
import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
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

function TrendingNewsList({
  height,
  maxCards,
  marginLeft,
}: TrendingNewsListPropss) {
  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        borderRadius: '16px',
        marginLeft: marginLeft || '20px',
        overflow: 'hidden',
      }}
    >
      <Box sx={{ minHeight: height }}>
        {LiveCardData.slice(0, maxCards).map((card) => (
          <Box
            sx={{
              background: '#fff',
              paddingRight: '12px',
              borderRadius: '16px',
              mb: '16px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
              }}
            >
              <Image
                src={card.image.src}
                alt="picture"
                width={120}
                height={95}
                style={{
                  objectFit: 'cover',
                  borderRadius: '12px',
                }}
              />
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
      </Box>
    </Box>
  );
}

export default TrendingNewsList;

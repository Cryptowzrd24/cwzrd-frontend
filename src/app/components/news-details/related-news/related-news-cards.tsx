import React from 'react';

import img1 from '../../../../../public/images/news-letter/coins.png';
import img2 from '../../../../../public/images/news-letter/image-car-news.png';
import img3 from '../../../../../public/images/news-letter/australia.png';
import coinstackImg from '../../../../../public/images/news-letter/coinstack.png';

import { Box } from '@mui/material';
import NewsCard from '../../news/main/news-card';

const newsData = [
  {
    image: img1,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
    width: '250px',
  },
  {
    image: img2,
    title: "Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin Ahead",
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
    width: '250px',
  },
  {
    image: img3,
    title: "VanEck's Spot Bitcoin ETF Goes Live on Australia's Biggest Stock ",
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of",
    width: '250px',
  },
  {
    image: coinstackImg,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
    width: '250px',
  },
  // Add 11 more objects with different data
];

function RelatedNewsCards() {
  return (
    <Box
      sx={{
        width: '100%',
        scrollbarWidth: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        gap: '12px',

        '@media (max-width: 1360px)': {
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
        },

        '@media (max-width: 978px)': {
          flexDirection: 'column',
        },
      }}
    >
      {newsData.map((news) => (
        <NewsCard
          image={news.image}
          title={news.title}
          description={news.description}
          imageWidth={news.width}
        />
      ))}
    </Box>
  );
}

export default RelatedNewsCards;

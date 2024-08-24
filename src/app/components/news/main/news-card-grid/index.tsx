import { Box, Grid } from '@mui/material';
import React from 'react';
import NewsCard from '../news-card';
import img1 from '../../../../../../public/images/news-letter/coins.png';
import img2 from '../../../../../../public/images/news-letter/image-car-news.png';
import img3 from '../../../../../../public/images/news-letter/australia.png';

const newsData = [
  {
    image: img1,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  {
    image: img2,
    title: "Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin Ahead",
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  {
    image: img3,
    title:
      "VanEck's Spot Bitcoin ETF Goes Live on Australia's Biggest Stock Exchange",
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of",
  },
  {
    image: img1,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  {
    image: img2,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  {
    image: img3,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  {
    image: img1,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  {
    image: img2,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  {
    image: img3,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  {
    image: img1,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  {
    image: img2,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  {
    image: img3,
    title: 'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
    description:
      "NASA's Drew Feusted and Ricky Arnold are to spend more than six hours outside of...",
  },
  // Add 11 more objects with different data
];

const NewsGrid = ({ height }: any) => {
  return (
    <Box sx={{ overflowY: 'scroll', height: height }}>
      <Grid container spacing={2}>
        {newsData.map((news, index) => (
          <Grid gap={2} item xs={12} sm={6} md={4} key={index}>
            <NewsCard
              image={news.image}
              title={news.title}
              description={news.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default NewsGrid;

import { Box, Typography } from '@mui/material';
import React from 'react';
import GlobalNewsCards from './global-news-cards';

import EyeImage from '../../../../../../public/images/eyeImage.png';
import RandomImg from '../../../../../../public/images/randomImg.png';
import RandomImg2 from '../../../../../../public/images/randomImg2.png';

const data = [
  [
    {
      id: 1,
      img: EyeImage,
      title:
        'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
      subTitle: 'Nasdaq-listed software firm MicroStrategy (MS...',
    },
    {
      id: 2,
      img: RandomImg,
      title:
        'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
      subTitle: 'Nasdaq-listed software firm MicroStrategy (MS...',
    },
  ],
  [
    {
      id: 3,
      img: RandomImg2,
      title:
        'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
      subTitle: 'Nasdaq-listed software firm MicroStrategy (MS...',
    },
    {
      id: 4,
      img: EyeImage,
      title:
        'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
      subTitle: 'Nasdaq-listed software firm MicroStrategy (MS...',
    },
  ],
  [
    {
      id: 5,
      img: RandomImg,
      title:
        'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
      subTitle: 'Nasdaq-listed software firm MicroStrategy (MS...',
    },
    {
      id: 6,
      img: EyeImage,
      title:
        'Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip',
      subTitle: 'Nasdaq-listed software firm MicroStrategy (MS...',
    },
  ],
];

function GlobalNews() {
  const renderGlobalNewsCard = data.map((cardArr) => {
    return <GlobalNewsCards cardData={cardArr} />;
  });
  return (
    <Box
      sx={{
        height: '410px',
        width: '300px',
        overflow: 'scroll',
        scrollbarWidth: 'none',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        padding: '16px  12px  16px 12px',

        '@media (max-width: 1440px)': {
          height: 'auto',
          width: 'auto',
        },

        '@media (max-width: 1280px)': {
          padding: '16px 0px',
        },
      }}
    >
      <Typography
        sx={{
          color: 'rgba(17, 17, 17, 1)',
          fontWeight: 600,
          fontSize: '14px !important',
          fontFamily: 'Sf Pro Display',
          lineHeight: '18.2px',
          textAlign: 'start',
        }}
      >
        🌎 Catch up on today's global news
      </Typography>
      {renderGlobalNewsCard}
    </Box>
  );
}

export default GlobalNews;

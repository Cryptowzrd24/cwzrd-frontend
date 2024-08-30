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
        // width: '300px',
        height: '626px',
        overflow: 'auto',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        padding: '24px  20px  24px 20px',
      }}
    >
      <Typography
        sx={{
          color: 'rgba(17, 17, 17, 1)',
          fontWeight: 700,
          fontSize: '16px',
          fontFamily: 'Sf Pro Display',
          lineHeight: '20.8px',
          textAlign: 'center',
        }}
      >
        🌎 Catch up on today’s global news
      </Typography>
      {renderGlobalNewsCard}
    </Box>
  );
}

export default GlobalNews;

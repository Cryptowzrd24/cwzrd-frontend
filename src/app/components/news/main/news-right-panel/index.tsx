import React from 'react';
import NewsRightPanelCard from './news-right-panel-card';
import { Box } from '@mui/material';

import EyeImage from '../../../../../../public/images/eyeImage.png';
import RandomImg from '../../../../../../public/images/randomImg.png';
import RandomImg2 from '../../../../../../public/images/randomImg2.png';

function NewsRightPanel({ isDetailPage, isMainPage, width }: any) {
  const cardData = [
    {
      id: 1,
      img: EyeImage,
      title: 'India financial watchdog imposes $2.25 million penalty on crypto',
      subTitle:
        'Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin...',
    },
    {
      id: 2,
      img: RandomImg,
      title: 'India financial watchdog imposes $2.25 million penalty on crypto',
      subTitle:
        'Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin...',
    },
    {
      id: 3,
      img: RandomImg2,
      title: 'India financial watchdog imposes $2.25 million penalty on crypto',
      subTitle:
        'Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin...',
    },
    {
      id: 4,
      img: RandomImg,
      title: 'India financial watchdog imposes $2.25 million penalty on crypto',
      subTitle:
        'Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin...',
    },
    {
      id: 5,
      img: RandomImg2,
      title: 'India financial watchdog imposes $2.25 million penalty on crypto',
      subTitle:
        'Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin...',
    },
  ];
  const renderCard = cardData.map((card) => {
    return <NewsRightPanelCard key={card.id} cardData={card} width={width} />;
  });
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: isDetailPage ? '10px' : isMainPage ? '2px' : '16px',
      }}
    >
      {renderCard}
    </Box>
  );
}

export default NewsRightPanel;

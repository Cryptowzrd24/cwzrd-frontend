import React from 'react';
import Card from './card';
import { CardData } from '../data';

import './styles.module.css';
import { Box } from '@mui/material';

const CardContent: React.FC = () => {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        rowGap: '12px',
        columnGap: '16px',
        width: '100%',
        '@media (max-width: 978px)': {
          gridTemplateColumns: '1fr',
        },
      }}
    >
      {CardData.map((card) => (
        <Card
          key={card.id}
          img1={card.img1}
          img2={card.img2}
          title1={card.title1}
          title2={card.title2}
          title3={card.title3}
          heading={card.heading}
          description={card.description}
          date={card.date}
          author={card.author}
        />
      ))}
    </Box>
  );
};

export default CardContent;

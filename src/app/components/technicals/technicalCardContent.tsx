import React from 'react';
import { TechnicalCardData } from './data'; // Adjust the import path accordingly
import TechnicalCard from './technicalCard';
import { Box } from '@mui/material';

const TechnicalCardContent: React.FC = () => {
  return (
    <>
      <Box
        sx={{
          display: 'flex',
          padding: '16px',
          mb: '14px',
          // position: 'relative',
          gap: '30px',
          flexWrap: 'wrap',
        }}
      >
        {TechnicalCardData.map((card) => (
          <TechnicalCard
            id={card.id}
            date={card.date}
            title={card.title}
            desc={card.desc}
            icon1={card.icon1}
            icon2={card.icon2}
            value1={card.value1}
            value2={card.value2}
            image={card.image}
          />
        ))}
      </Box>
    </>
  );
};

export default TechnicalCardContent;

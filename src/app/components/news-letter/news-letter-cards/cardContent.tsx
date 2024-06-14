import React from 'react';
import Card from './card';
import { CardData } from '../data';

const CardContent: React.FC = () => {
  return (
    <div className="grid gap-4">
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
    </div>
  );
};

export default CardContent;

import React from 'react';
import { Box } from '@mui/material';
import LiveNewsCard from './live-news-card';
import Card1 from '../../../../../../../public/images/news/card1.png';
import Card2 from '../../../../../../../public/images/news/card2.png';

const LiveCardData: any[] = [
  {
    id: '1',
    title: 'Elon Musk cites whistleblower claims in latest effort',
    desc: "NASA's Drew Feusted and Ricky Arnold are to spend more than 6 h...",
    image: Card1,
  },
  {
    id: '2',
    title: 'Elon Musk cites whistleblower claims in latest effort',
    desc: "NASA's Drew Feusted and Ricky Arnold are to spend more than 6 h...",
    image: Card2,
  },
  {
    id: '3',
    title: 'Elon Musk cites whistleblower claims in latest effort',
    desc: "NASA's Drew Feusted and Ricky Arnold are to spend more than 6 h...",
    image: Card1,
  },
  {
    id: '4',
    title: 'Elon Musk cites whistleblower claims in latest effort',
    desc: "NASA's Drew Feusted and Ricky Arnold are to spend more than 6 h...",
    image: Card1,
  },
  {
    id: '5',
    title: 'Elon Musk cites whistleblower claims in latest effort',
    desc: "NASA's Drew Feusted and Ricky Arnold are to spend more than 6 h...",
    image: Card2,
  },
];

function LiveNewsCardList({ isPageDetails }: { isPageDetails?: boolean }) {
  return (
    <Box
      sx={{
        overflowY: 'auto',
        scrollbarWidth: 'none',
        height: isPageDetails ? '560px' : '375px',
      }}
    >
      {LiveCardData.slice(0, isPageDetails ? LiveCardData.length : 4).map(
        (card) => (
          <LiveNewsCard
            key={card.id}
            title={card.title}
            desc={card.desc}
            image={card.image}
            id={card.id}
          />
        ),
      )}
    </Box>
  );
}

export default LiveNewsCardList;

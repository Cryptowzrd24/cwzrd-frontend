import { Box } from '@mui/material';
import React from 'react';
import Card from '../../news-letter/news-letter-cards/card';
import TagCardImage from '../../../../../public/images/tagCard.png';

const InfoCard = () => {
  return (
    <Box
      sx={{
        flex: 1.25,
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <Card
        img1="/image/news-letter/main.png"
        img2={`${TagCardImage.src}`}
        title1="TRADE"
        title2="BITCOIN"
        title3="CRYPTO"
        heading="Buy These 5 Crypto Stcks Before the Next Bitcoin Rally"
        description="Users can mint new tokens using the company's new Alloy plateform..."
        date="06/06/2023 at 00:06 AM"
        author="John Smith"
        isMainPage
      />
      <Card
        img1="/image/news-letter/main.png"
        img2={`${TagCardImage.src}`}
        title1="TRADE"
        title2="BITCOIN"
        title3="CRYPTO"
        heading="Buy These 5 Crypto Stcks Before the Next Bitcoin Rally"
        description="Users can mint new tokens using the company's new Alloy plateform..."
        date="06/06/2023 at 00:06 AM"
        author="John Smith"
        isMainPage
      />
      <Card
        img1="/image/news-letter/main.png"
        img2={`${TagCardImage.src}`}
        title1="TRADE"
        title2="BITCOIN"
        title3="CRYPTO"
        heading="Buy These 5 Crypto Stcks Before the Next Bitcoin Rally"
        description="Users can mint new tokens using the company's new Alloy plateform..."
        date="06/06/2023 at 00:06 AM"
        author="John Smith"
        isMainPage
      />
    </Box>
  );
};

export default InfoCard;

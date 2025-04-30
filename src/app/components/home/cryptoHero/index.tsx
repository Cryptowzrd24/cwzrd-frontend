import { Box, Divider } from '@mui/material';
import React from 'react';
import TagCard from '../../news/main/tag-card';
import TagCardImage from '../../../../../public/images/tagCard.png';
import CardImage from '../../../../../public/images/news-letter/image-car-news.png';
import NewsCard from '../../news/main/news-card';
import MainMembershipBanner from '../../banners/mainMembershipBanner';
import JoinCrypto from './JoinCrypto';
import MostRead from '../../news/main/most-read';
import LiveMarket from '../../news/components/main/live-market';
import Card from '../../news-letter/news-letter-cards/card';

const CryptoHero = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        gap: '24px',
        pt: '60px',
      }}
    >
      <Box
        sx={{
          maxWidth: '957px',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
        }}
      >
        <Box
          sx={{
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            border: '0.5px solid #FFFFFF',
            borderRadius: '20px',
            background: '#FFF',
          }}
        >
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <TagCard
              height={'510px'}
              width={'690px'}
              title="Buy These 5 Crypto Stocks Before the Next Bitcoin Rally"
              description="Users can mint new tokens using the company's new Alloy platform, which will be part of Tether's upcoming tokenization ventures platform"
              image={TagCardImage}
              isMainPage
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
              }}
            >
              <NewsCard
                image={CardImage}
                showChips={true}
                title="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin {{BTC}}, has acquired another 11,931 BTC for"
                isVertical
                isTransparent
                imageMargin="0px"
                imageWidth="100%"
                containerWidth="252px"
                justifyContent="flex-start"
                isMainPage
              />
              <NewsCard
                image={CardImage}
                showChips={true}
                title="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="Nasdaq-listed software firm MicroStrategy (MSTR), the largest corporate holder of bitcoin {{BTC}}, has acquired another 11,931 BTC for"
                isVertical
                isTransparent
                imageMargin="0px"
                imageWidth="100%"
                containerWidth="252px"
                justifyContent="flex-start"
                isMainPage
              />
            </Box>
          </Box>
          <Divider />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
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
              description="Users can mint new tokens using the company's new Alloy plateform, which be p"
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
              description="Users can mint new tokens using the company's new Alloy plateform, which be p"
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
              description="Users can mint new tokens using the company's new Alloy plateform, which be p"
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
              description="Users can mint new tokens using the company's new Alloy plateform, which be p"
              date="06/06/2023 at 00:06 AM"
              author="John Smith"
              isMainPage
            />
          </Box>
          <Divider />
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Card
                img1="/image/news-letter/main.png"
                img2={`${TagCardImage.src}`}
                title1="TRADE"
                title2="BITCOIN"
                title3="CRYPTO"
                heading="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="NASA's Drew Feusted and Ricky Arnold are to spend more..."
                date="06/06/2023 at 00:06 AM"
                author="John Smith"
                isNewsDetail
              />
              <Divider />
              <Card
                img1="/image/news-letter/main.png"
                img2={`${TagCardImage.src}`}
                title1="TRADE"
                title2="BITCOIN"
                title3="CRYPTO"
                heading="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="NASA's Drew Feusted and Ricky Arnold are to spend more..."
                date="06/06/2023 at 00:06 AM"
                author="John Smith"
                isNewsDetail
              />
              <Divider />
              <Card
                img1="/image/news-letter/main.png"
                img2={`${TagCardImage.src}`}
                title1="TRADE"
                title2="BITCOIN"
                title3="CRYPTO"
                heading="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="NASA's Drew Feusted and Ricky Arnold are to spend more..."
                date="06/06/2023 at 00:06 AM"
                author="John Smith"
                isNewsDetail
              />
              <Divider />
              <Card
                img1="/image/news-letter/main.png"
                img2={`${TagCardImage.src}`}
                title1="TRADE"
                title2="BITCOIN"
                title3="CRYPTO"
                heading="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="NASA's Drew Feusted and Ricky Arnold are to spend more..."
                date="06/06/2023 at 00:06 AM"
                author="John Smith"
                isNewsDetail
              />
            </Box>
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
              }}
            >
              <Card
                img1="/image/news-letter/main.png"
                img2={`${TagCardImage.src}`}
                title1="TRADE"
                title2="BITCOIN"
                title3="CRYPTO"
                heading="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="NASA's Drew Feusted and Ricky Arnold are to spend more..."
                date="06/06/2023 at 00:06 AM"
                author="John Smith"
                isNewsDetail
              />
              <Divider />
              <Card
                img1="/image/news-letter/main.png"
                img2={`${TagCardImage.src}`}
                title1="TRADE"
                title2="BITCOIN"
                title3="CRYPTO"
                heading="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="NASA's Drew Feusted and Ricky Arnold are to spend more..."
                date="06/06/2023 at 00:06 AM"
                author="John Smith"
                isNewsDetail
              />
              <Divider />
              <Card
                img1="/image/news-letter/main.png"
                img2={`${TagCardImage.src}`}
                title1="TRADE"
                title2="BITCOIN"
                title3="CRYPTO"
                heading="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="NASA's Drew Feusted and Ricky Arnold are to spend more..."
                date="06/06/2023 at 00:06 AM"
                author="John Smith"
                isNewsDetail
              />
              <Divider />
              <Card
                img1="/image/news-letter/main.png"
                img2={`${TagCardImage.src}`}
                title1="TRADE"
                title2="BITCOIN"
                title3="CRYPTO"
                heading="Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"
                description="NASA's Drew Feusted and Ricky Arnold are to spend more..."
                date="06/06/2023 at 00:06 AM"
                author="John Smith"
                isNewsDetail
              />
            </Box>
          </Box>
        </Box>
        <MainMembershipBanner />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        <MostRead height="510px" width="auto" />
        <JoinCrypto />
        <LiveMarket isMainPage />
      </Box>
    </Box>
  );
};

export default CryptoHero;

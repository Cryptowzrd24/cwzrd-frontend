import React from 'react'
import NewsHeader from './header'
import { Box, Container, Typography,} from '@mui/material';
import { NewsCategory } from './main/news-categories';
import NewsCarousel from './main/news-carousel';
import LiveExplorer from '../news-letter/live-explorer-cards/liveExplorer';
import NewsGrid from './main/news-card-grid';
import NewsLetterBanner from '../banners/newsLetterBanner';
import NewsCard from './main/news-card';
import CardImage from "../../../../public/images/news-letter/image-car-news.png";
import MemberShipBanner from '../banners/memberShipBanner';
import LiveNewsExplorer from './main/live-news';
import NewsTradingPlatform from './main/news-trading-platform';
import TopPicks from './main/top-picks';
import { ArrowRight } from '../../../../public/icons/arrowRight';
import NewsMileStones from './main/news-miletones';
import NewsCarouselBig from './main/carouel-big';
import TrendingNewsCard from './main/trending-news-card';

const NewsComponent = () => {
  return (
    <Container maxWidth="xl" >
      <NewsHeader />
      <NewsCategory />
      <Box sx={{display: 'flex', gap:4 }}>
        <Box  sx={{display:'flex', flexDirection:'column',width:'77%',gap:4}}>
            <NewsCarousel />
            <NewsGrid height={"360px"} />
        </Box>
        <Box sx={{display:'flex', flexDirection:'column',width:'23%'}}>
            <LiveExplorer />
            <LiveNewsExplorer />
        </Box>
      </Box> 
       <Box sx={{marginBlock:"100px"}}>
      <NewsLetterBanner />
      </Box>
      
      <Box sx={{display: 'flex',marginBottom:'100px' }}>
        <Box  sx={{display:'flex', flexDirection:'column',width:'75%'}}>
            <NewsGrid height={"900px"}/>
        </Box>
        <Box sx={{display:'flex', flexDirection:'column',width:'25%'}}>
            <TopPicks />
            <NewsTradingPlatform />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBlock:"20px"}}>
        <Typography variant='h2' left={0}>Trending <span style={{
          background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}>News</span> </Typography>
        <Box sx={{display:"flex",alignItems:"center",justifyContent:"center"}}>       
        <Typography sx={{
          background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }} variant='body2' right={0}>Read More <ArrowRight fill="#7248F7" /></Typography>
         </Box>
      </Box>

      <Box sx={{display:"flex", height:"900px", gap:2}}>
        <Box sx={{width:'50%'}}>
            <NewsCarouselBig />
        </Box>
        <Box sx={{width:'25%', display:"flex",alignItems:"center",jusstifyContent:"center",flexDirection:"column"}}>
            <TrendingNewsCard image={CardImage} title={"Michael Saylor's MicroStrategy Acquires 11.9K More Bitcoin"} description={"Users can mint new tokens using the company's new Alloy platform, CrtptoWzrd is helping million."} />
            <LiveExplorer />
        </Box>
        <Box sx={{width:'25%'}}>
            <LiveExplorer />
            <NewsMileStones />

        </Box>
      </Box>
      <Box sx={{marginBlock:"100px"}}>
      <MemberShipBanner />
        
      </Box>
    </Container>
  )
}

export default NewsComponent;



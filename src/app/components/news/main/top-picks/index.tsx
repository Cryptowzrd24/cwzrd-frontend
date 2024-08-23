import React from 'react';
import RightRed from '../../../../../../public/icons/News-Letter/rightRed';
import { Box, Divider, Typography } from '@mui/material';
import rect1 from '../../../../../../public/images/news-letter/rectangle1.png';
import rect2 from '../../../../../../public/images/news-letter/rectangle2.png';
import Image from 'next/image';

function TopPicks() {
  return (
    <Box
      sx={{
        color: 'white',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'start',
        borderRadius: '16px',
        overflow: 'hidden',
        padding: '16px',
        background: 'linear-gradient(to right, rgba(254, 231, 226, 0.8), rgba(254, 231, 226, 0) 50px)',
    backdropFilter: 'blur(10px)',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          mb: '12px',
          justifyContent: 'space-between',
          width: '100%',
          paddingBottom: '12px',
          borderBottom: '1px solid #FFFFFF1A',
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ color: 'black' }}
        >
          ⭐️ Picks for you
        </Typography>
        <Box
          sx={{
            display: 'flex',
            gap: '4px',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              background:
                'linear-gradient(to left, rgba(247, 132, 26, 1), rgba(247, 72, 72, 1))',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              display: 'inline',
              fontWeight: '600',
              mb: '3px',
              letterSpacing: 'normal',
            }}
          >
            See All
          </Typography>
          <span>
            <RightRed />
          </span>
        </Box>
      </Box>
      <Divider sx={{width:"100%", marginTop:"-13px",marginBottom:"10px"}} />
      <Box sx={{}}>
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between",height:'120px',}}>
                <Typography sx={{width:"178px",fontWeight:"700",fontSize:"18px",lineHeight:"23.4px"}}>Dogecoin Long Liquidations Surge Past $60 Million Amid Market Dip</Typography>
                <Image src={rect1.src} alt={"image"} height={80} width={70} style={{borderRadius:"8px", marginLeft:"20px"}} />
            </Box>
            <Typography sx={{fontWeight:500,fontSize:'11px',lineHeight:"14.3px"}}>{'06/06/2023 at 00:06 AM | John Smith'}</Typography>
            <Divider sx={{width:"100%",marginTop:"10px",marginBottom:"10px"}} />
            <Box sx={{display:"flex", alignItems:"center", justifyContent:"space-between",height:'120px'}}>
                <Typography sx={{width:"178px",fontWeight:"700",fontSize:"18px",lineHeight:"23.4px"}}>VanEck's Spot Bitcoin ETF Goes Live on Australia's Biggest Stock</Typography>
                <Image src={rect2.src} alt={"image"} height={80} width={70} style={{borderRadius:"8px", marginLeft:"20px"}} />
            </Box>
            <Typography sx={{fontWeight:500,fontSize:'11px',lineHeight:"14.3px"}}>{'06/06/2023 at 00:06 AM | John Smith'}</Typography>
            <Divider sx={{width:"100%",marginTop:"10px",}} />
      </Box>
    </Box>
  );
}

export default TopPicks;

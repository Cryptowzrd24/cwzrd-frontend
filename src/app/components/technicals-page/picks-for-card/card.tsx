import { Box, Typography } from '@mui/material';
import React from 'react';
import CommentsLikes from '../comments-likes';
import Image from 'next/image';

import techGraph from '../../../../../public/images/technicals-page/techPageGraph.png';

function Card() {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        marginInline: '12px',
        // paddingBottom: '22px',
        paddingBottom: '21px',
        justifyContent: 'space-between',
        width: '330px',
        borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      }}
    >
      <Box
        sx={{
          // width: '206px',
          height: '70px',
          marginTop: '12px',
          marginLeft: '10px',
        }}
      >
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 700,
            fontFamily: 'Sf Pro Display',
            color: 'rgba(255, 255, 255, 1)',
            lineHeight: '15.6px',
            letterSpacing: '0.6px',
            width: '240px',
          }}
        >
          Ethereum price (ETHUSD) forecast<br></br> update
        </Typography>
        <Box sx={{ marginTop: '12px', marginBottom: '22px' }}>
          <CommentsLikes shouldWhite={true} />
        </Box>
      </Box>
      <Box sx={{ width: '70px', height: '80px', marginTop: '12px' }}>
        <Image
          src={techGraph}
          alt="img"
          width={70}
          height={80}
          style={{ borderRadius: '12px' }}
        />
      </Box>
    </Box>
  );
}

export default Card;

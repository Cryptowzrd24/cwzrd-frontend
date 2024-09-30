import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import techGraph from '../../../../../../public/images/technicals-page/techPageGraph.png';
import bitcoinImg from '../../../../../../public/images/coin-details/bitcoin.png';
import CommentsLikes from '../../comments-likes';

function MiddleAnalysisCard() {
  return (
    <Box
      sx={{
        width: '670px',
        height: '524px',
        borderRadius: '16px',
        background:
          'radial-gradient(83.94% 66.65% at 16.06% 44.55%, #FFFFFF 43.91%, #D9DFFF 100%)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        paddingInline: '16px',
        marginBottom: '0px',
      }}
    >
      <Box
        sx={{
          width: '44px',
          height: '44px',
          background: 'rgba(255, 255, 255, 1)',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          borderRadius: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          top: '8px',
          left: '-10px',
        }}
      >
        <Image src={bitcoinImg} alt="analysis card" width={32} height={32} />
      </Box>
      <Box
        sx={{
          width: '674px',
          height: '333px',
          marginTop: '-24px',
        }}
      >
        <Image src={techGraph} alt="analysis card" width={674} height={333} />
      </Box>
      <Box sx={{ mt: '16px' }}>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 500,
            fontFamily: 'Sf Pro Display',
            lineHeight: '15.6px',
            color: 'rgba(55, 97, 251, 1)',
            letterSpacing: '1.2px',
            marginLeft: '12px',
          }}
        >
          06/06/2023 At 00:06 AM
        </Typography>
        <Typography
          sx={{
            fontSize: '18px',
            fontWeight: 700,
            lineHeight: '23.4px',
            fontFamily: 'Sf Pro Display',
            marginTop: '12px',
            width: '610px',
            marginLeft: '12px',
            letterSpacing: '0.3px',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          BITCOIN POTENTIAL $4k Target On Potential Major BEARISH FLAT
        </Typography>
        <Typography
          sx={{
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
            fontFamily: 'Sf Pro Display',
            marginTop: '8px',
            width: '610px',
            marginLeft: '12px',
            color: 'rgba(17, 17, 17, 0.8)',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            overflow: 'hidden',
          }}
        >
          Ethereum price (ETHUSD) continues to fluctuate near 3361.31$ level,
          while stochastic attempts to gain the positive momentum...
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: '12px',
          marginLeft: '12px',
          paddingBottom: '20px',
          marginBottom: '12px',
        }}
      >
        <CommentsLikes />
      </Box>
    </Box>
  );
}

export default MiddleAnalysisCard;

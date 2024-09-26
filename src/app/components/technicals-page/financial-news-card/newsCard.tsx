import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import techGraph from '../../../../../public/images/technicals-page/techPageGraph.png';
import bitcoinImg from '../../../../../public/images/coin-details/bitcoin.png';

function NewsCard() {
  return (
    <Box
      sx={{
        width: '402px',
        padding: '8px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        display: 'flex',
        gap: '12px',
      }}
    >
      <Box>
        <Box
          sx={{
            width: '24px',
            height: '24px',
            background: 'rgba(255, 255, 255, 1)',
            boxShadow: '0px 2.18px 15.27px 0px rgba(0, 0, 0, 0.05)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: '-2px',
            left: '-2px',
          }}
        >
          <Image
            src={bitcoinImg}
            alt="analysis card"
            width={17.45}
            height={17.45}
          />
        </Box>
        <Box sx={{ width: '140px', height: '75px', marginTop: '-20px' }}>
          <Image src={techGraph} alt="analysis card" width={140} height={75} />
        </Box>
      </Box>
      <Box sx={{ paddingBlock: '6.5px', marginTop: '6px' }}>
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '12px',
            fontFamily: 'Sf Pro Display',
            width: '242px',
          }}
        >
          The EURUSD price needs new positive momentum
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '10px',
            fontFamily: 'Sf Pro Display',
            width: '242px',
            lineHeight: '13px',
            color: 'rgba(17, 17, 17, 0.8)',
            marginTop: '4px',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
          }}
        >
          Ethereum price (ETHUSD) continues to fluctuate near 3361.31$ level,
          while stochastic attempts to ga...
        </Typography>
      </Box>
    </Box>
  );
}

export default NewsCard;

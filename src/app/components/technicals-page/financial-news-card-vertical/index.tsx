import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import techGraph from '../../../../../public/images/technicals-page/techPageGraph.png';
import bitcoinImg from '../../../../../public/images/coin-details/bitcoin.png';
import CommentsLikes from '../comments-likes';

function FinancialNewsCardVertical({ noBackground = false }) {
  return (
    <Box
      sx={{
        width: '243.6px',
        height: '274px',
        padding: '8px',
        background: noBackground ? 'transparent' : 'rgba(255, 255, 255, 1)',
        boxShadow: noBackground
          ? 'none'
          : '0px 1px 12px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
      }}
    >
      <Box>
        <Box
          sx={{
            width: '44px',
            height: '44px',
            background: 'rgba(255, 255, 255, 1)',
            boxShadow: '0px 2.18px 15.27px 0px rgba(0, 0, 0, 0.05)',
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            top: '6px',
            left: '6px',
          }}
        >
          <Image src={bitcoinImg} alt="analysis card" width={32} height={32} />
        </Box>
        <Box
          sx={{
            width: '235.6px',
            height: '132px',
            marginTop: '-40px',
            marginLeft: '4px',
            borderRadius: '12px',
            boxShadow: '0px 0px 12px 0px rgba(114, 72, 247, 0.1)',
          }}
        >
          <Image
            src={techGraph}
            alt="analysis card"
            width={235.6}
            height={132}
            style={{
              boxShadow: noBackground
                ? 'none'
                : '0px 0px 12px 0px rgba(114, 72, 247, 0.1) inset',
              borderRadius: noBackground ? '0px' : '12px',
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          marginTop: '8px',
          paddingInline: noBackground ? '0px' : '8px',
          marginLeft: noBackground ? '0px' : '6px',
        }}
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '18.2px',
            fontFamily: 'Sf Pro Display',
            width: noBackground ? 'auto' : '219.6px',
          }}
        >
          The EURJPY takes advantage of the support line stability
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '12px',
            fontFamily: 'Sf Pro Display',
            width: noBackground ? 'auto' : '219.6px',
            lineHeight: '17.4px',
            color: 'rgba(17, 17, 17, 0.8)',
            marginTop: '4px',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
          }}
        >
          Users can mint new tokens using the company's new Alloy platform,
          which will be part of Tether's upcoming tokenization venture, CEO
          Paolo Ardoino said. CoinDesk Flash gives you the power of news that
          moves markets — be the first to get the latest crypto financial
          opportunities, trends, and technology insights.
        </Typography>
        <Box sx={{ marginTop: '8px' }}>
          <CommentsLikes />
        </Box>
      </Box>
    </Box>
  );
}

export default FinancialNewsCardVertical;

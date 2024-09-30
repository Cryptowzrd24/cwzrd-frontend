import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import techGraph from '../../../../../../public/images/technicals-page/techPageGraph.png';
import liteCoinImage from '../../../../../../public/images/coin-details/lite-coin.png';
import usaIcon from '../../../../../../public/images/technicals-page/usaIcon.png';
import ausIcon from '../../../../../../public/images/technicals-page/ausIcon.png';

import CommentsLikes from '../../comments-likes';

interface FinancialCardProps {
  isFourth?: boolean;
  image?: any;
}

function FinancialCardCarouselSec({ image }: FinancialCardProps) {
  return (
    <Box
      sx={{
        width: '300px',
        height: '240px',
        padding: '8px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 1px 12px 0px rgba(0, 0, 0, 0.05)',
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
            position: 'absolute',
            marginTop: '0.5px',
          }}
        >
          <Image
            src={image ? usaIcon : liteCoinImage}
            alt="analysis card"
            width={32}
            height={32}
          />
        </Box>
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
            position: 'absolute',
            left: '180px',
            marginTop: '0.5px',
          }}
        >
          <Image src={ausIcon} alt="analysis card" width={32} height={32} />
        </Box>
        <Box
          sx={{
            width: '300px',
            height: '105px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0px 0px 12px 0px rgba(114, 72, 247, 0.1)',
          }}
        >
          <Image
            src={techGraph}
            alt="analysis card"
            width={294}
            height={105}
            style={{
              boxShadow: '0px 0px 12px 0px rgba(114, 72, 247, 0.1) inset',
              borderRadius: '12px',
            }}
          />
        </Box>
      </Box>
      <Typography
        sx={{
          fontSize: '14px',
          fontWeight: '700',
          lineHeight: '18.2px',
          //   width: '205.5px',
          paddingInline: '8px',
          width: '203px',
        }}
      >
        The EURJPY takes advantage of the support line stability
      </Typography>
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '17.4px',
          width: '205.5px',
          paddingInline: '8px',
          overflow: 'hidden',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          textOverflow: 'ellipsis',
          display: '-webkit-box',
        }}
      >
        Users can mint new tokens using the company's new Alloy platform, which
        will be part of Tether's upcoming tokenization venture, CEO Paolo
        Ardoino said. CoinDesk Flash gives you the power of news that moves
        markets — be the first to get the latest crypto financial opportunities,
        trends, and technology insights.
      </Typography>
      <Box sx={{ marginLeft: '8px', marginBottom: '8px' }}>
        <CommentsLikes />
      </Box>
    </Box>
  );
}

export default FinancialCardCarouselSec;

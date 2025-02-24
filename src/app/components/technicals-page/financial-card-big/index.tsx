import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import techGraph from '../../../../../public/images/technicals-page/techPageGraph.png';
import liteCoinImage from '../../../../../public/images/coin-details/lite-coin.png';
import CommentsLikes from '../comments-likes';

interface FinancialCardBigProps {
  isFourth?: boolean;
  image?: any;
  dualImg?: any;
  isFxPage?: boolean;
}

function FinancialCarBig({ image, dualImg, isFxPage }: FinancialCardBigProps) {
  return (
    <Box
      sx={{
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
        <Box sx={{ display: 'flex', position: 'relative' }}>
          <Box
            sx={{
              width: '32px',
              height: '32px',
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
              src={image ? image : liteCoinImage}
              alt="analysis card"
              width={23.7}
              height={23.7}
            />
          </Box>
          {isFxPage && (
            <Box
              sx={{
                width: '32px',
                height: '32px',
                background: 'rgba(255, 255, 255, 1)',
                boxShadow: '0px 2.18px 15.27px 0px rgba(0, 0, 0, 0.05)',
                borderRadius: '50%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                left: '20px',
                marginTop: '0.5px',
              }}
            >
              <Image
                src={dualImg ? dualImg : liteCoinImage}
                alt="analysis card"
                width={23.7}
                height={23.7}
              />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            width: '100%',
            // width: '300px',
            height: '110px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0px 0px 12px 0px rgba(114, 72, 247, 0.1)',
            '@media (max-width: 768px)': {
              height: 'auto',
            },
          }}
        >
          <Image
            src={techGraph}
            alt="analysis card"
            layout="responsive"
            width={284}
            height={102}
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
          // width: '268px',
          // letterSpacing: '0.3px',
        }}
      >
        The EURJPY takes advantage of the support line stability
      </Typography>
      <Typography
        sx={{
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '17.4px',
          width: '258px',
          letterSpacing: '0.4px',
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

export default FinancialCarBig;

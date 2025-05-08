import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import techGraph from '../../../../../public/images/technicals-page/techPageGraph.png';
import liteCoinImage from '../../../../../public/images/coin-details/lite-coin.png';
import CommentsLikes from '../comments-likes';

interface FinancialCardProps {
  isFourth?: boolean;
  image?: any;
  isFxPage?: boolean;
  dualImg?: any;
  isMainPage?: boolean;
}

function FinancialCard({
  isFourth,
  image,
  isFxPage,
  dualImg,
  isMainPage,
}: FinancialCardProps) {
  return (
    <Box
      sx={
        isFourth
          ? {
              padding: '8px',
              background: 'rgba(255, 255, 255, 1)',
              boxShadow: '0px 1px 12px 0px rgba(0, 0, 0, 0.05)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }
          : {
              // width: '237.5px',
              // height: '274px',
              ...(isMainPage && { width: '217px' }),
              padding: '8px',
              background: 'rgba(255, 255, 255, 1)',
              boxShadow: '0px 1px 12px 0px rgba(0, 0, 0, 0.05)',
              borderRadius: '16px',
              display: 'flex',
              flexDirection: 'column',
              gap: '8px',
            }
      }
    >
      <Box>
        <Box sx={{ display: 'flex', position: 'absolute' }}>
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
              position: 'relative',
              marginTop: '0.5px',
            }}
          >
            <Image
              src={image ? image : liteCoinImage}
              alt="analysis card"
              width={23}
              height={23}
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
                position: 'relative',
                left: '-10px',
                marginTop: '0.5px',
              }}
            >
              <Image
                src={dualImg ? dualImg : liteCoinImage}
                alt="analysis card"
                width={23}
                height={23}
              />
            </Box>
          )}
        </Box>

        <Box
          sx={{
            width: isMainPage ? 'auto' : '218px',
            height: '132px',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0px 0px 12px 0px rgba(114, 72, 247, 0.1)',
          }}
        >
          <Image
            src={techGraph}
            alt="analysis card"
            width={238.5}
            height={132}
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
          width: '204px',
          boxSizing: 'border-box',
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
          boxSizing: 'border-box',
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

export default FinancialCard;

import { Box, Typography, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import techGraph from '../../../../../public/images/technicals-page/techPageGraph.png';
import bitcoinImg from '../../../../../public/images/coin-details/bitcoin.png';
import litecoinImg from '../../../../../public/images/coin-details/lite-coin.png';

interface NewsCardProps {
  isShort?: boolean;
  image?: any;
  isFxPage?: boolean;
  dualImg?: any;
}
function NewsCard({ isShort, image, isFxPage, dualImg }: NewsCardProps) {
  const isMobile = useMediaQuery('(max-width: 767px)');
  return (
    <Box
      sx={{
        width: isShort ? '300px' : '402px',
        padding: '8px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        borderRadius: '16px',
        display: 'flex',
        gap: isShort ? '2px' : '12px',
        '@media (max-width: 1400px)': {
          width: 'auto',
        },
      }}
    >
      <Box>
        <Box sx={{ display: 'flex' }}>
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
              top: !isShort ? '-2px' : '',
              left: !isShort ? '-2px' : '',
            }}
          >
            <Image
              src={image ? image : isShort ? litecoinImg : bitcoinImg}
              alt="analysis card"
              width={17.45}
              height={17.45}
            />
          </Box>
          {isFxPage && (
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
                top: !isShort ? '-2px' : '',
                left: !isShort ? '-10px' : '-8px',
              }}
            >
              <Image
                src={dualImg ? dualImg : isShort ? litecoinImg : bitcoinImg}
                alt="analysis card"
                width={17.45}
                height={17.45}
              />
            </Box>
          )}
        </Box>

        <Box sx={{ width: '140px', height: '75px', marginTop: '-20px' }}>
          <Image src={techGraph} alt="analysis card" width={140} height={75} />
        </Box>
      </Box>
      <Box
        sx={
          isShort
            ? {
                marginTop: '6px',
                paddingLeft: '12px',
                paddingRight: isMobile ? '6px' : '22px',
              }
            : { paddingBlock: '6.5px', marginTop: '6px' }
        }
      >
        <Typography
          sx={{
            fontWeight: 700,
            fontSize: '12px !important',
            fontFamily: 'Sf Pro Display',
            width: isShort ? '132px' : '242px',
            lineHeight: isShort ? '15px' : '',

            '@media (max-width: 1400px)': {
              width: '100%',
            },
          }}
        >
          The EURUSD price needs new positive momentum
        </Typography>
        <Typography
          sx={{
            fontWeight: 400,
            fontSize: '10px !important',
            fontFamily: 'Sf Pro Display',
            width: isShort ? '132px' : '100%',
            lineHeight: '13px',
            color: 'rgba(17, 17, 17, 0.8)',
            marginTop: '4px',
            overflow: 'hidden',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            textOverflow: 'ellipsis',
            display: '-webkit-box',

            '@media (max-width: 1360px)': {
              width: '100%',
            },
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

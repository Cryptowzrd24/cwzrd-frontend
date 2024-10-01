import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import techGraph from '../../../../../public/images/technicals-page/techPageGraph.png';
import bitcoinImg from '../../../../../public/images/coin-details/bitcoin.png';
import CommentsLikes from '../comments-likes';

interface NewsCardProps {
  isThird?: boolean;
  image?: any;
  isFourth?: boolean;
  isFirst?: boolean;
  dualImg?: any;
  isFxPage?: boolean;
}

function AnalysisCard({
  isThird,
  image,
  isFourth,
  isFirst,
  dualImg,
  isFxPage,
}: NewsCardProps) {
  return (
    <Box
      sx={{
        width: isFourth ? '680px' : !isThird ? '516px' : '468px',
        height: isThird ? '402px' : undefined,
        borderRadius: '16px',
        background: isFourth
          ? 'radial-gradient(83.94% 66.65% at 16.06% 44.55%, rgba(114, 72, 247, 0.14) 43.91%, rgba(191, 72, 247, 0.08) 100%)'
          : !isThird
            ? 'radial-gradient(83.94% 66.65% at 16.06% 44.55%, rgba(77, 200, 253, 0.05) 43.91%, rgba(77, 200, 253, 0.1) 100%)'
            : 'radial-gradient(83.94% 66.65% at 16.06% 44.55%, #FFFFFF 43.91%, #F5F1FF 100%)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        paddingInline: '16px',
        marginBottom: isFourth ? '24px' : isFirst ? '0px' : '0px',
      }}
    >
      <Box sx={{ display: 'flex' }}>
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
          <Image
            src={image || bitcoinImg}
            alt="analysis card"
            width={32}
            height={32}
          />
        </Box>
        {isFxPage && (
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
              left: '-23px',
            }}
          >
            <Image
              src={dualImg || bitcoinImg}
              alt="analysis card"
              width={32}
              height={32}
            />
          </Box>
        )}
      </Box>

      <Box
        sx={{
          width: isFourth ? '680px' : isThird ? '466px' : '516px',
          height: isFourth ? '375px' : isThird ? '174px' : '277px',
          marginTop: '-24px',
        }}
      >
        <Image
          src={techGraph}
          alt="analysis card"
          width={isFourth ? 680 : isThird ? 466 : 516}
          height={isFourth ? 375 : isThird ? 174 : 277}
        />
      </Box>
      <Box sx={{ marginTop: isFourth ? '24px' : '16px' }}>
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
            width: isFourth ? '596px' : isThird ? '100%' : '500px',
            marginLeft: '12px',
            letterSpacing: isFourth ? '0.8px' : '0.3px',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          BITCOIN POTENTIAL $4k Target On Potential Major BEARISH FLAT
        </Typography>
        <Typography
          sx={
            isFourth
              ? {
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '18px',
                  fontFamily: 'Sf Pro Display',
                  marginTop: '8px',
                  width: '596px',
                  marginLeft: '12px',
                  color: 'rgba(17, 17, 17, 0.8)',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  overflow: 'hidden',
                }
              : {
                  fontSize: '12px',
                  fontWeight: 400,
                  lineHeight: '18px',
                  fontFamily: 'Sf Pro Display',
                  marginTop: '8px',
                  width: isThird ? '100%' : '500px',
                  marginLeft: '12px',
                  color: 'rgba(17, 17, 17, 0.8)',
                }
          }
        >
          Ethereum price (ETHUSD) continues to fluctuate near 3361.31$ level,
          while stochastic attempts to gain the positive momentum...
        </Typography>
      </Box>
      <Box
        sx={{
          marginTop: isThird ? '20px' : '12px',
          marginLeft: '12px',
          paddingBottom: '20px',
        }}
      >
        <CommentsLikes />
      </Box>
    </Box>
  );
}

export default AnalysisCard;

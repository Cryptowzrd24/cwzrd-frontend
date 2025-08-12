import { Box, Typography } from '@mui/material';
import React from 'react';
import CommentsLikes from '../../technicals-page/comments-likes';
import BitcoinBlackkBg from '../../../../../public/icons/bitcoinBlkBg';

const BitCoinPotential = () => {
  return (
    <Box
      sx={{
        height: '100%',
        width: '100%',
        background: '#44008D',
        borderRadius: '12px',
        position: 'relative',
        overflow: 'hidden',
        '@media (max-width: 1024px)': {
          width: '100%',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          maxWidth: '521px',
          px: '8px',
          mt: '48px',
          mx: 'auto',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          <Typography
            sx={{
              color: '#FFF',
              fontSize: '12px',
              fontWeight: '500',
              lineHeight: '130%',
              letterSpacing: '1.2px',
            }}
          >
            06/06/2023 AT 00:06 AM
          </Typography>
          <Typography
            sx={{
              maxWidth: '418px',
              color: '#FFF',
              fontSize: '36px',
              fontWeight: '700',
              lineHeight: '120%',
              letterSpacing: '0.36px',
            }}
          >
            BITCOIN POTENTIAL $4k Target On Potential Major BEARISH FLAT
          </Typography>
          <Typography
            sx={{
              overflow: 'hidden',
              color: 'rgba(255,255,255,0.80)',
              textOverflow: 'ellipsis',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '150%',
            }}
          >
            This sort of pattern would certainly shock the herd. A potential
            Wave B suckers Rally galore. Then SNAP...
          </Typography>
        </Box>
        <Box>
          <CommentsLikes shouldWhite />
        </Box>
      </Box>
      <Box
        sx={{
          position: 'absolute',
          left: '26px',
          bottom: '176px',
          display: 'inline-flex',
          padding: '7.2px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '120px',
          background:
            ' linear-gradient(152deg, #85CCFF -13.19%, #F3F8FF 86.86%)',
          backgroundBlendMode: 'color',
        }}
      >
        <BitcoinBlackkBg />
      </Box>
      <Box
        sx={{
          position: 'absolute',
          right: '33px',
          bottom: '176px',
          display: 'inline-flex',
          padding: '7.2px',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '120px',
          background:
            ' linear-gradient(152deg, #85CCFF -13.19%, #F3F8FF 86.86%)',
          backgroundBlendMode: 'color',
        }}
      >
        <BitcoinBlackkBg />
      </Box>
      <Box
        sx={{
          minWidth: '587px',
          height: '330px',
          flexShrink: 0,
          position: 'absolute',
          backgroundImage: "url('/images/cryptoCaste.png')",
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'contain',
          left: '30px',
          bottom: '-80px',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          width: '617px',
          height: '260px',
          flexShrink: 0,
          left: 0,
          bottom: 0,
          background:
            'linear-gradient(180deg, rgba(68, 0, 141, 0.00) 0%, #44008D 100%)',
        }}
      />
    </Box>
  );
};

export default BitCoinPotential;

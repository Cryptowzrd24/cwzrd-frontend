import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

import techGraph from '../../../../../public/images/technicals-page/techPageGraph.png';
import bitcoinImg from '../../../../../public/images/coin-details/bitcoin.png';
import CommentsLikes from '../comments-likes';

function AnalysisCard() {
  return (
    <Box
      sx={{
        width: '516px',
        borderRadius: '16px',
        background:
          'radial-gradient(83.94% 66.65% at 16.06% 44.55%, rgba(77, 200, 253, 0.05) 43.91%, rgba(77, 200, 253, 0.1) 100%)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        paddingInline: '16px',
        marginBottom: '20px',
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
      <Box sx={{ width: '516px', height: '277px', marginTop: '-24px' }}>
        <Image src={techGraph} alt="analysis card" width={516} height={277} />
      </Box>
      <Box sx={{ marginTop: '16px' }}>
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
            width: '500px',
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
            width: '500px',
            marginLeft: '12px',
            color: 'rgba(17, 17, 17, 0.8)',
          }}
        >
          This sort of pattern would certainly shock the herd. A potential Wave
          B suckers Rally galore .Then SNAP...
        </Typography>
      </Box>
      <Box
        sx={{ marginTop: '12px', marginLeft: '12px', paddingBottom: '20px' }}
      >
        <CommentsLikes />
      </Box>
    </Box>
  );
}

export default AnalysisCard;

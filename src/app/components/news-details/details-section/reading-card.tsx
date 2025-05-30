import { Box, Typography } from '@mui/material';
import React from 'react';

import Image from 'next/image';

import ReadingNowImg from '../../../../../public/icons/reading-now.png';
import TechnicalDetailImg from '../../../../../public/icons/technicalDetailImage.png';

import Twitter from '../../../../../public/icons/twitter';
import Facebook from '../../../../../public/icons/facebook';
import LinkedIn from '../../../../../public/icons/linkedIn';
import Mail from '../../../../../public/icons/mail';
import BorderLinearProgress from './BorderLinearProgress';

function ReadingCard({
  scrollPosition,
  sectionHeight,
  isTechnicalDetail,
}: any) {
  return (
    <Box sx={{ maxWidth: '190px' }}>
      <Typography
        sx={{
          fontFamily: 'Sf Pro Display',
          fontWeight: 700,
          fontSize: '14px',
          lineHeight: '23.4px',
          letterSpacing: '0.8px',
        }}
      >
        Reading Now
      </Typography>
      <Box
        sx={{
          borderRadius: '10px',
          overflow: 'hidden',
          width: '120px',
          height: '80px',
          marginTop: '12px',
          border: isTechnicalDetail
            ? '0.5px solid rgba(114, 72, 247, 1)'
            : 'none',
        }}
      >
        <Image
          src={!isTechnicalDetail ? ReadingNowImg : TechnicalDetailImg}
          alt={'img'}
          width={120}
          height={80}
        />
      </Box>
      <Typography
        sx={{
          fontFamily: 'Sf Pro Display',
          fontWeight: 700,
          fontSize: '12px',
          lineHeight: '18.2px',
          marginTop: '12px',
        }}
      >
        {!isTechnicalDetail
          ? 'Bitcoin whale accumulation reaches pre-2020 bull run levels — Is BTC set to break $70K?'
          : 'ETHUSDT Intraday Setup:'}
      </Typography>
      <Box
        sx={{
          marginTop: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
        }}
      >
        <BorderLinearProgress
          variant="determinate"
          sectionHeight={sectionHeight}
          scrollPosition={scrollPosition}
        />
      </Box>
      <Box sx={{ display: 'flex', gap: '8px', marginTop: '12px' }}>
        <Twitter />
        <Facebook />
        <LinkedIn />
        <Mail />
      </Box>
    </Box>
  );
}

export default ReadingCard;

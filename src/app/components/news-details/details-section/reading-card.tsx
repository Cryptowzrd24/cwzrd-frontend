import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';

import Image from 'next/image';

import ReadingNowImg from '../../../../../public/icons/reading-now.png';
import TechnicalDetailImg from '../../../../../public/icons/technicalDetailImage.png';

import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import Twitter from '../../../../../public/icons/twitter';
import Facebook from '../../../../../public/icons/facebook';
import LinkedIn from '../../../../../public/icons/linkedIn';
import Mail from '../../../../../public/icons/mail';
import CheckMark from '../../../../../public/check-mark.svg';

function ReadingCard({
  scrollPosition,
  sectionHeight,
  isTechnicalDetail,
}: any) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (sectionHeight > 0) {
      const baseProgress = 0;
      const calculatedProgress = Math.min(
        baseProgress +
          (scrollPosition / (sectionHeight - window.innerHeight)) * 90,
        100,
      );
      setProgress(calculatedProgress);
    }
  }, [scrollPosition, sectionHeight]);

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 6,
    borderRadius: 5,
    flex: '0 0 90%',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      background:
        progress === 100
          ? '#0d9488'
          : 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
    },
  }));

  return (
    <Box sx={{ width: '190px' }}>
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
          marginTop: '16px',
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
        <BorderLinearProgress variant="determinate" value={progress} />
        {progress === 100 && (
          <Image src={CheckMark} alt="img" style={{ marginBottom: '3px' }} />
        )}
      </Box>
      <Box sx={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
        <Twitter />
        <Facebook />
        <LinkedIn />
        <Mail />
      </Box>
    </Box>
  );
}

export default ReadingCard;

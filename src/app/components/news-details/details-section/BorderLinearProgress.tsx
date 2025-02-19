import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';
import CheckMark from '../../../../../public/check-mark.svg';

const BorderLinearProgress = ({
  variant = 'determinate',
  sectionHeight,
  scrollPosition,
  isLarge = true,
  otherClasses,
}: {
  variant: 'determinate' | 'indeterminate' | 'buffer' | 'query';
  sectionHeight: number;
  scrollPosition: number;
  isLarge?: boolean;
  otherClasses?: string;
}) => {
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
    borderRadius: isLarge ? 5 : 0,
    flex: '0 0 90%',
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor:
        theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: isLarge ? 5 : 0,
      background:
        progress === 100
          ? '#0d9488'
          : 'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
    },
    ...(otherClasses && {
      style: otherClasses,
    }),
  }));
  return (
    <>
      <BorderLinearProgress variant={variant} value={progress} />
      {isLarge && progress === 100 && (
        <Image src={CheckMark} alt="img" style={{ marginBottom: '3px' }} />
      )}
    </>
  );
};

export default BorderLinearProgress;

import { Box, Typography } from '@mui/material';
import React from 'react';

// import EyeImage from '../../../../../../public/images/eyeImage.png';
import Image, { StaticImageData } from 'next/image';

interface CardDataProps {
  cardData: {
    id: number;
    img: StaticImageData;
    title: string;
    subTitle: string;
  };
}

function NewsRightPanelCard({ cardData }: CardDataProps) {
  return (
    <Box
      sx={{
        width: '410px',
        padding: '8px',
        borderRadius: '16px',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '8px',
      }}
    >
      <Box
        sx={{
          minWidth: '140px',
          height: '94px',
          borderRadius: '12px',
          overflow: 'hidden',
        }}
      >
        <Image src={cardData.img} alt="image" width={140} height={94} />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '4px',
          width: '100%',
        }}
      >
        <Typography
          sx={{
            fontFamily: 'Sf Pro Display',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '18.2px',
            color: 'rgba(17, 17, 17, 1)',
            width: '90%',
          }}
        >
          {cardData?.title}
        </Typography>
        <Typography
          sx={{
            fontFamily: 'Sf Pro Display',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14.3px',
            color: 'rgba(17, 17, 17, 0.8)',
            height: '28px',
            WebkitLineClamp: 2,
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          {cardData?.subTitle}
        </Typography>
      </Box>
    </Box>
  );
}

export default NewsRightPanelCard;

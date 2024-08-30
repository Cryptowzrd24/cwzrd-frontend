import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

function GlobalNewsCards({ cardData }: any) {
  const renderCards = cardData.map((card: any) => {
    return (
      <Box
        key={card.id}
        sx={{
          marginTop: '15px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '122px',
            height: '80px',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Image src={card.img} alt="image" width={122} height={80} />
        </Box>
        <Typography
          sx={{
            marginTop: '12px',
            marginLeft: '4px',
            width: '122px',
            fontFamily: 'Sf Pro Display',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '18.20px',
            color: 'rgba(17, 17, 17, 1)',
          }}
        >
          {card.title}
        </Typography>
        <Typography
          sx={{
            marginTop: '4px',
            marginLeft: '11px',
            width: '130px',
            fontFamily: 'Sf Pro Display',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14.3px',
            color: 'rgba(17, 17, 17, 0.8)',
          }}
        >
          {card.subTitle}
        </Typography>
      </Box>
    );
  });

  return (
    <Box
      sx={{
        borderTop: '1px solid rgba(17, 17, 17, 0.1)',
        marginTop: '15px',
        display: 'flex',
        gap: '15px',
        justifyContent: 'center',
      }}
    >
      {renderCards}
    </Box>
  );
}

export default GlobalNewsCards;

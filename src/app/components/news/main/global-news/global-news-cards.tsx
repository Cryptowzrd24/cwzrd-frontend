import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

function GlobalNewsCards({ cardData }: any) {
  const renderCards = cardData.map((card: any) => {
    return (
      <Box
        key={card.id}
        sx={{
          marginTop: '12px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            width: '100%',
            height: '88px',
            borderRadius: '8px',
            overflow: 'hidden',
          }}
        >
          <Image src={card.img} alt="image" width={142.5} height={88} />
        </Box>
        <Typography
          sx={{
            marginTop: '8px',
            width: '100%',
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
            fontFamily: 'Sf Pro Display',
            fontWeight: 400,
            fontSize: '11px',
            lineHeight: '14.3px',
            color: 'rgba(17, 17, 17, 0.8)',
            letterSpacing: '-0.3px',
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
        borderTopWidth: '',
        marginTop: '15px',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
      }}
    >
      {renderCards}
    </Box>
  );
}

export default GlobalNewsCards;

import React from 'react';

import { Box, Typography } from '@mui/material';
import Image from 'next/image';

import Coins from '../../../../../public/images/membership/marketAnalysisCoins.png';

const MarketAnalysisCard = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url('/images/membership/marketAnalysisBg.png')`,
        backgroundSize: 'cover',
        borderRadius: '24px',
        maxWidth: '270px',
        width: '100%',
        height: '423px',
        marginRight: '16px',
        boxShadow: '0px 4px 6px 0px #00000005',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          boxSizing: 'border-box',
          pt: '58px',
          height: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '20px',
            fontWeight: '700',
            lineHeight: '24px',
            color: 'rgba(255, 255, 255, 1)',
            mb: '8px',
            px: '26px',
            textAlign: 'center',
            '@media (max-width:660px)': {
              fontSize: '20px',
            },
          }}
        >
          Daily Market Analysis on 30 Cryptos
        </Typography>
        <Typography
          sx={{
            fontSize: '10px',
            fontWeight: '400',
            lineHeight: '15px',
            color: 'rgba(255, 255, 255, 0.8)',
            mb: '67px',
            px: '22px',
            textAlign: 'center',
            fontFamily: 'Sf Pro Text',
            '@media (max-width:660px)': {
              fontSize: '10px',
            },
          }}
        >
          Stay updated with daily, in-depth market analysis on 30
          cryptocurrencies. Get the insights you need to make informed trading
          decisions.
        </Typography>

        <Image
          src={Coins}
          alt="coin"
          width={270}
          style={{
            objectFit: 'cover',
          }}
        />
      </Box>
    </Box>
  );
};

export default MarketAnalysisCard;

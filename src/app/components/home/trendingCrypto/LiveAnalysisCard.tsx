import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import bitCoinImg from '../../../../../public/images/spotlight-cards/1.png';
import techBannerGraph from '../../../../../public/images/technicals-page/techBannerGraph.png';

const LiveAnalysisCard = () => {
  return (
    <Box
      sx={{
        height: '340px',
        padding: '16px',
        borderRadius: '24px',
        backgroundImage:
          "url('/images/technicals-page/techBannerImgBlack.png')",
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {/* logo */}
      <Box sx={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
        <Box
          sx={{
            width: '44px',
            height: '44px',
            borderRadius: '100px',
            padding: '6px',
            background: '#FFF',
          }}
        >
          <Image
            src={bitCoinImg}
            alt="Coin Icon"
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Typography
          sx={{
            color: '#FFF',
            fontSize: '18px',
            fontWeight: '700',
            lineHeight: '130%',
            letterSpacing: '0.36px',
          }}
        >
          Bitcoin Live Analysis
        </Typography>
      </Box>
      {/* info */}
      <Box
        sx={{
          display: 'flex',
          gap: '16px',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '130%',
              }}
            >
              Price
            </Typography>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '130%',
                letterSpacing: '-0.16px',
              }}
            >
              $123,710.68
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '130%',
              }}
            >
              1h%
            </Typography>
            <Typography
              sx={{
                color: '#4CFEB6',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '130%',
                letterSpacing: '-0.14px',
              }}
            >
              +7.37%
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: '8px',
            justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '130%',
              }}
            >
              24h%
            </Typography>
            <Typography
              sx={{
                color: '#F56D6D',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '130%',
                letterSpacing: '-0.14px',
              }}
            >
              -7.19 %
            </Typography>
          </Box>
          <Box sx={{ textAlign: 'right' }}>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '130%',
              }}
            >
              7d%
            </Typography>
            <Typography
              sx={{
                color: '#4CFEB6',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '130%',
                letterSpacing: '-0.14px',
              }}
            >
              +14.72%
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: '#FFF',
              fontSize: '12px',
              fontWeight: '400',
              lineHeight: '130%',
            }}
          >
            Market Cap
          </Typography>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Typography
              sx={{
                color: '#FFF',
                fontSize: '16px',
                fontWeight: '700',
                lineHeight: '130%',
                letterSpacing: '-0.16px',
              }}
            >
              $987,847,229.10
            </Typography>
            <Typography
              sx={{
                color: '#4CFEB6',
                fontSize: '14px',
                fontWeight: '600',
                lineHeight: '130%',
                letterSpacing: '-0.14px',
              }}
            >
              +7.37%
            </Typography>
          </Box>
        </Box>
      </Box>
      {/* chart */}
      <Box sx={{ height: '100%', width: '100%' }}>
        <Image
          src={techBannerGraph}
          alt=""
          style={{ height: '80%', width: '100%' }}
        />
      </Box>
    </Box>
  );
};

export default LiveAnalysisCard;

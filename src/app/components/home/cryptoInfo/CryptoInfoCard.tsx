import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';

interface CryptoInfoCardProps {
  icon: string;
  name: string;
  symbol: string;
  price: string;
  priceRate: string;
  marketCap: string;
  marketCapRate: string;
}

const CryptoInfoCard = ({
  icon,
  name,
  symbol,
  price,
  priceRate,
  marketCap,
  marketCapRate,
}: CryptoInfoCardProps) => {
  const isPositivePrice = parseFloat(priceRate) >= 0;
  const isPositiveMarket = parseFloat(marketCapRate) >= 0;
  return (
    <Box
      sx={{
        display: 'flex',
        padding: '12px',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: '#FFF',
        border: '0.5px solid #FFF',
        backdropFilter: 'blur(8px)',
        borderRadius: '20px',
      }}
    >
      <Box sx={{ display: 'flex', gap: '8px' }}>
        <Box
          sx={{
            width: 40,
            height: 40,
            borderRadius: '50%',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: 1,
          }}
        >
          <Image
            src={icon}
            alt="icon"
            width={100}
            height={100}
            style={{ width: '100%', height: '100%' }}
          />
        </Box>
        <Box>
          <Typography variant="body2" fontWeight={600}>
            {name}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {symbol}
          </Typography>
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
        <Box>
          <Typography
            sx={{
              color: '##747474',
              fontSize: '12px',
              fontWeight: '400',
              lineHeight: '130%',
            }}
          >
            Price
          </Typography>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <Typography
              sx={{
                color: '#111',
                fontSize: '12px',
                fontWeight: '700',
                lineHeight: '130%',
                letterSpacing: '-0.12px',
              }}
            >
              {price}
            </Typography>
            <Typography
              sx={{
                color: isPositiveMarket ? '#00BA6E' : '#F56D6D',
                fontSize: '10px',
                fontWeight: '600',
                lineHeight: '130%',
                letterSpacing: '-0.1px',
              }}
            >
              {isPositivePrice ? '+' : ''}
              {priceRate}%
            </Typography>
          </Box>
        </Box>
        <Box>
          <Typography
            sx={{
              color: '##747474',
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
                color: '#111',
                fontSize: '12px',
                fontWeight: '700',
                lineHeight: '130%',
                letterSpacing: '-0.12px',
              }}
            >
              {marketCap}
            </Typography>
            <Typography
              sx={{
                color: isPositiveMarket ? '#00BA6E' : '#F56D6D',
                fontSize: '10px',
                fontWeight: '600',
                lineHeight: '130%',
                letterSpacing: '-0.1px',
              }}
            >
              {isPositiveMarket ? '+' : ''}
              {marketCapRate}%
            </Typography>
          </Box>
        </Box>
        {parseFloat(priceRate) > 0 && parseFloat(marketCapRate) > 0 ? (
          <IncreaseChart />
        ) : (
          <DecreaseChart />
        )}
      </Box>
    </Box>
  );
};

const IncreaseChart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="105"
      height="41"
      viewBox="0 0 105 41"
      fill="none"
    >
      <path
        d="M16.7732 34.9304H20.4633L23.8179 30.8797L25.4952 37.462L28.98 33L31.92 39H35.28L36.901 40.5L39.06 39L39.9 30.8797L41.58 33L44.1 27L46.6294 28.3481L48.3 33.5L49.984 34.9304L51.66 32.5L53.3387 25.3101L55.44 28.3481L56.6933 34.9304L58.3706 28.3481L61.7252 30.8797H64.26L66.4217 25.3101L69.7764 28.3481L71.4 16L73.5 21L76.4856 22.2722V19.2342L79.8402 22.2722L82.1885 25.3101H86.2141L87.2204 22.7785L89.04 21L91.246 12.1456L92.2524 18.2215H94.6006V12.1456L95.76 10L97.2843 25.3101L98.2907 15.1835L100.8 14.5L102.987 5.56329L105 0.5V40.5H36.901H11.0703H0L3.78 37.462L7.71565 28.3481L9.24 38.5L11.0703 40.5L12.18 26L14.4249 28.3481L15.96 38L16.7732 34.9304Z"
        fill="url(#paint0_linear_5003_32207)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5003_32207"
          x1="47.6667"
          y1="7.65328"
          x2="47.6667"
          y2="40.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#00F693" />
          <stop offset="1" stop-color="#00F693" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

const DecreaseChart = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="105"
      height="41"
      viewBox="0 0 105 41"
      fill="none"
    >
      <path
        d="M88.2268 34.9304H84.5367L81.1821 30.8797L79.5048 37.462L76.02 33L73.08 39H69.72L68.099 40.5L65.94 39L65.1 30.8797L63.42 33L60.9 27L58.3706 28.3481L56.7 33.5L55.016 34.9304L53.34 32.5L51.6613 25.3101L49.56 28.3481L48.3067 34.9304L46.6294 28.3481L43.2748 30.8797H40.74L38.5783 25.3101L35.2236 28.3481L33.6 16L31.5 21L28.5144 22.2722V19.2342L25.1598 22.2722L22.8115 25.3101H18.7859L17.7796 22.7785L15.96 21L13.754 12.1456L12.7476 18.2215H10.3994V12.1456L9.24001 10L7.71566 25.3101L6.70927 15.1835L4.2 14.5L2.01279 5.56329L0 0.5V40.5H68.099H93.9297H105L101.22 37.462L97.2843 28.3481L95.76 38.5L93.9297 40.5L92.82 26L90.5751 28.3481L89.04 38L88.2268 34.9304Z"
        fill="url(#paint0_linear_5003_32322)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_5003_32322"
          x1="52.5"
          y1="0.5"
          x2="52.5"
          y2="40.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#F56D6D" />
          <stop offset="1" stop-color="#F56D6D" stop-opacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default CryptoInfoCard;

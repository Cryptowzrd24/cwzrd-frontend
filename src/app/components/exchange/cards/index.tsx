'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import Shift from '../../../../../public/icons/collections/shift';
import first from '../../../../../public/icons/first-rank.png';
import second from '../../../../../public/icons/second-rank.png';
import numeral from 'numeral';
import third from '../../../../../public/icons/third-rank.png';
import { priceNumberFormatDigits } from '@/utils/price-number-formater';

import Tooltip from '@mui/material/Tooltip';

const ExchangeCard = ({
  title,
  marketCap,
  circulationSupply,
  volume,
  totalMaxSupply,
  symbol,
  coinId,
  index,
  score,
}: any) => {
  const isPositiveChange = score > 4.9;

  const backgroundImage = isPositiveChange
    ? '/images/spotlight-cards/background1.png'
    : '/images/spotlight-cards/background2.png';

  const imgUrl = `https://backend.cwzrd.co.uk/api/coin-image/?id=${coinId}`;
  const graphImg = `https://s3.coinmarketcap.com/generated/sparklines/exchanges/web/7d/usd/${coinId}.svg`;

  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleMouseEnter = (id: string) => {
    setHoveredId(id);
  };

  const handleMouseLeave = () => {
    setHoveredId(null);
  };

  const getRankContent = (index: number) => {
    switch (index) {
      case 1:
        return <Image src={first} alt="first" width={21} height={21} />;
      case 2:
        return <Image src={second} alt="second" width={21} height={21} />;
      case 3:
        return <Image src={third} alt="third" width={21} height={21} />;
      default:
        return (
          <Typography
            variant="body1"
            sx={{ fontSize: '16px', fontWeight: '500' }}
          >
            #{index}
          </Typography>
        );
    }
  };
  const formattedVolume = numeral(volume).format('0.0a').toUpperCase();

  const formattedTotalMaxSupply = numeral(totalMaxSupply)
    .format('0.0a')
    .toUpperCase();

  return (
    <Box
      sx={{
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '362px',
        width: '100%',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
      }}
    >
      <Box
        sx={{
          padding: '16px',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            mb: '16px',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image
              src={imgUrl}
              loader={() => imgUrl}
              width={40}
              height={40}
              style={{
                borderRadius: '50%',
              }}
              alt="title"
            />
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                {title}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 0.6)',
                }}
              >
                {symbol[0]}
              </Typography>
            </Stack>
          </Box>
          <Box
            sx={{
              padding: '5px 12px 5px 12px',
              borderRadius: '24px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              background: 'rgba(255, 255, 255, 1)',
            }}
          >
            {getRankContent(index)}
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: '32px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            {priceNumberFormatDigits(score)}
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          mt: '24px',
          gap: '48px',
          mb: '-4px',
          marginLeft: '6px',
        }}
      >
        <Box>
          <Stack>
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              Liquidity
              <Tooltip
                title="Liquidity refers to how easily and quickly a cryptocurrency can be converted into cash without significantly affecting its price. High liquidity minimizes slippage, ensuring transactions happen closer to the expected price"
                componentsProps={{
                  tooltip: {
                    sx: {
                      width: '270px',
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      color: 'rgba(17, 17, 17, 0.8)',
                      fontSize: '12px',
                      padding: '12px',
                      borderRadius: '12px',
                      boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
                      fontWeight: 'normal',
                      lineHeight: '17.6px',
                    },
                  },
                }}
              >
                <span
                  style={{
                    cursor: 'pointer',
                    width: '8px',
                    height: '8px',
                    marginLeft: '5px',
                  }}
                  onMouseEnter={() => handleMouseEnter('liquidity')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Shift hovered={hoveredId === 'liquidity'} />
                </span>
              </Tooltip>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {marketCap}
            </Typography>
          </Stack>
          <Stack sx={{ mt: '8px' }}>
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              Num Markets
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {circulationSupply}
            </Typography>
          </Stack>
        </Box>
        <Box>
          <Stack>
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              Spot Vol (24h)
              <Tooltip
                title="The Spot Vol (24h) shows the total trading volume of a cryptocurrency on spot markets over the past 24 hours. Higher volumes indicate more active trading, which usually correlates with better liquidity and less price slippage"
                componentsProps={{
                  tooltip: {
                    sx: {
                      width: '270px',
                      backgroundColor: 'rgba(255, 255, 255, 1)',
                      color: 'rgba(17, 17, 17, 0.8)',
                      fontSize: '12px',
                      padding: '12px',
                      borderRadius: '12px',
                      boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
                      fontWeight: 'normal',
                      lineHeight: '17.6px',
                    },
                  },
                }}
              >
                <span
                  style={{
                    cursor: 'pointer',
                    width: '8px',
                    height: '8px',
                    marginLeft: '5px',
                  }}
                  onMouseEnter={() => handleMouseEnter('spotVol')}
                  onMouseLeave={handleMouseLeave}
                >
                  <Shift hovered={hoveredId === 'spotVol'} />
                </span>
              </Tooltip>
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              ${formattedVolume}
            </Typography>
          </Stack>
          <Stack sx={{ mt: '8px' }}>
            <Typography
              variant="body2"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.4)',
              }}
            >
              Total Visits
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '18px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {formattedTotalMaxSupply}
            </Typography>
          </Stack>
        </Box>
      </Box>
      <Box sx={{ mt: '24px' }}>
        <Box
          sx={{
            borderTop: '1px solid rgba(17, 17, 17, 0.05)',
            borderRadius: '12px',
          }}
        >
          {/* <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              padding: '8px',
            }}
          >
            {['1D', '7D', '1M', '3M'].map((button) => (
              <Box
                key={button}
                sx={{
                  padding: '4px 8px',
                  borderRadius: '24px',
                  border: '1px solid rgba(17, 17, 17, 0.05)',
                  cursor: 'pointer',
                  background: getButtonStyles(button).background,
                }}
                onClick={() => handleButtonClick(button)}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '700',
                    color: getButtonStyles(button).color,
                  }}
                >
                  {button}
                </Typography>
              </Box>
            ))}
          </Box> */}
          <Box
            style={{
              marginBottom: '-10px',
              padding: '10px',
              background:
                'repeating-linear-gradient(to bottom, #ffffff, #ffffff 25px, rgba(17, 17, 17, 0.05) 26px, rgba(17, 17, 17, 0.05) 26px, #ffffff 27px  )',
            }}
          >
            <img
              style={{
                width: '100%',
                height: '100%',
                filter:
                  Number(score) < 4.9
                    ? 'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(379%) hue-rotate(311deg) brightness(100%) contrast(93%)'
                    : 'brightness(0) saturate(100%) invert(68%) sepia(13%) saturate(1609%) hue-rotate(104deg) brightness(97%) contrast(94%)',
              }}
              src={graphImg}
              alt="graph"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ExchangeCard;

'use client';
import { Box, Stack, Tooltip, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import Shift from '../../../../../public/icons/collections/shift';
import first from '../../../../../public/icons/first-rank.png';
import second from '../../../../../public/icons/second-rank.png';
import numeral from 'numeral';
import third from '../../../../../public/icons/third-rank.png';
import Link from 'next/link';

const Card = ({
  title,
  marketCapTvl,
  percentChange1D,
  percentChange1M,
  percentChange1W,
  protocols,
  symbol,
  coinId,
  index,
  marketCap,
}: any) => {
  const isPositiveChange = percentChange1D >= 0;
  const changeColor = isPositiveChange
    ? 'rgba(69, 202, 148, 1)'
    : 'rgba(245, 65, 65, 1)';
  const backgroundImage = isPositiveChange
    ? '/images/spotlight-cards/background1.png'
    : '/images/spotlight-cards/background2.png';

  const imgUrl = `https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`;
  const graphImg = `https://s3.coinmarketcap.com/generated/sparklines/web/7d/2781/${coinId}.svg`;

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
  const formattedMarketCapChain = numeral(marketCap)
    .format('0.0a')
    .toUpperCase();
  const marketCapTvlVal = numeral(marketCapTvl).format('0.0a').toUpperCase();

  const numericChange = Number(percentChange1D);

  // Format the change value
  const formattedChange = isPositiveChange
    ? `+${numericChange.toFixed(2)}`
    : numericChange.toFixed(2);

  const formattedChange1M = isPositiveChange
    ? `+${Number(percentChange1M).toFixed(2)}`
    : Number(percentChange1M).toFixed(2);

  const formattedChange1W = isPositiveChange
    ? `+${Number(percentChange1W).toFixed(2)}`
    : Number(percentChange1W).toFixed(2);

  return (
    <Box
      sx={{
        padding: '16px',
        borderRadius: '8px',
        maxWidth: '362px',
        width: '100%',
        background: 'rgba(255, 255, 255, 1)',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
        ':hover': {
          cursor: 'pointer',
        },
      }}
    >
      <Link
        style={{ textDecoration: 'none' }}
        href={`/market/coin-details/${coinId}`}
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
                  {symbol}
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
              {protocols}
            </Typography>
            <Box
              sx={{
                borderRadius: '24px',
                padding: '4px 8px',
                background: changeColor,
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '14px',
                  fontWeight: '700',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                {formattedChange} %
              </Typography>
            </Box>
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
                Market Cap
                <Tooltip
                  title="Market Cap Chain represents the total value of a blockchain's native token in circulation, serving as an indicator of the blockchain's size and impact​"
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
                    onMouseEnter={() => handleMouseEnter('marketCapChain')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Shift hovered={hoveredId === 'marketCapChain'} />
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
                ${formattedMarketCapChain}
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
                TVL
                <Tooltip
                  title="TVL (Total Value Locked) represents the total value of assets currently locked in a DeFi protocol, reflecting its overall liquidity and user engagement​"
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
                    onMouseEnter={() => handleMouseEnter('tvl')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Shift hovered={hoveredId === 'tvl'} />
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
                ${marketCapTvlVal}
              </Typography>
            </Stack>
          </Box>
          <Box>
            <Stack>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(17, 17, 17, 0.4)',
                }}
              >
                Percent Change 1 Week
                <Tooltip
                  title="Value of percentage change in one week"
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
                    onMouseEnter={() => handleMouseEnter('percentChange1W')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Shift hovered={hoveredId === 'percentChange1W'} />
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
                {formattedChange1W.includes('-') ? '' : '+'}
                {formattedChange1W}%
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
                Percent Change 1 Month
                <Tooltip
                  title="Value of percentage change in one month"
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
                    onMouseEnter={() => handleMouseEnter('percentChange1M')}
                    onMouseLeave={handleMouseLeave}
                  >
                    <Shift hovered={hoveredId === 'percentChange1M'} />
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
                {formattedChange1M.includes('-') ? '' : '+'}
                {formattedChange1M}%
              </Typography>
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: '24px' }}>
          <Box
            sx={{
              border: '1px solid rgba(17, 17, 17, 0.05)',
              borderRadius: '12px',
              overflow: 'hidden',
            }}
          >
            <Box
              style={{
                marginBottom: '-10px',
                padding: '10px',
              }}
            >
              <img
                style={{
                  width: '100%',
                  height: '100%',
                  filter:
                    percentChange1D && String(percentChange1D)?.includes('-')
                      ? 'brightness(0) saturate(100%) invert(46%) sepia(99%) saturate(379%) hue-rotate(311deg) brightness(100%) contrast(93%)'
                      : 'brightness(0) saturate(100%) invert(68%) sepia(13%) saturate(1609%) hue-rotate(104deg) brightness(97%) contrast(94%)',
                }}
                src={graphImg}
                alt="graph"
              />
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Card;

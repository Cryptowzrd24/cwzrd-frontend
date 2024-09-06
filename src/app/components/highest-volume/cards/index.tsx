'use client';
import { Box, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import Image from 'next/image';
import Shift from '../../../../../public/icons/collections/shift';
import first from '../../../../../public/icons/first-rank.png';
import second from '../../../../../public/icons/second-rank.png';
import numeral from 'numeral';
import third from '../../../../../public/icons/third-rank.png';
import Graph from './graphCard';
import Link from 'next/link';
import infinityIcon from '../../../../../public/icons/infinity.svg';

const Card = ({
  title,
  price,
  change,
  marketCap,
  circulationSupply,
  volume,
  totalMaxSupply,
  symbol,
  coinId,
  index,
}: any) => {
  const [activeButton, setActiveButton] = useState<string>('');

  const isPositiveChange = change > 0;
  const changeColor = isPositiveChange
    ? 'rgba(69, 202, 148, 1)'
    : 'rgba(245, 65, 65, 1)';
  const backgroundImage = isPositiveChange
    ? '/images/spotlight-cards/background1.png'
    : '/images/spotlight-cards/background2.png';

  const imgUrl = `https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`;

  const areachartData = [
    { x: 1, y: 5 },
    { x: 2, y: 10 },
    { x: 3, y: 15 },
    { x: 4, y: 8 },
    { x: 5, y: 1 },
    { x: 6, y: 6 },
    { x: 7, y: 2 },
    { x: 8, y: 3 },
    { x: 9, y: 9 },
    { x: 10, y: 7 },
    { x: 11, y: 1 },
    { x: 12, y: 12 },
    { x: 13, y: 2 },
    { x: 14, y: 5 },
    { x: 15, y: 1 },
    { x: 16, y: 15 },
    { x: 17, y: 7 },
  ];

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
  const formattedMarketCap = numeral(marketCap).format('0.0a').toUpperCase();
  const formattedVolume = numeral(volume).format('0.0a').toUpperCase();
  const formattedCirculationSupply = numeral(circulationSupply)
    .format('0.0a')
    .toUpperCase();
  const formattedTotalMaxSupply = numeral(totalMaxSupply)
    .format('0.0a')
    .toUpperCase();

  const handleButtonClick = (button: string) => {
    setActiveButton(button);
  };

  const getButtonStyles = (button: string) => {
    const isActive = activeButton === button;
    return {
      background: isActive
        ? isPositiveChange
          ? 'linear-gradient(180deg, #45CA94 0%, #97D14E 100%)'
          : 'linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)'
        : 'transparent',
      color: isActive ? 'rgba(255, 255, 255, 1)' : 'rgba(17, 17, 17, 1)',
    };
  };
  const numericChange = Number(change);

  // Format the change value
  const formattedChange = isPositiveChange
    ? `+${numericChange.toFixed(2)}`
    : numericChange.toFixed(2);

  const priceNumberFormatter = (price: any) => {
    const priceNumber = Number(price);

    if (priceNumber === 0) {
      return '0';
    }

    if (priceNumber < 0.1) {
      // Format with 10 decimal places
      return priceNumber.toFixed(10);
    }

    // Format with 2 decimal places
    const formattedPrice = priceNumber.toFixed(2);
    const parts = formattedPrice.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Apply comma to the integer part only
    return parts.join('.');
  };
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
              ${priceNumberFormatter(price)}
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
                Market Cap <Shift />
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                ${formattedMarketCap}
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
                Circulation Supply <Shift />
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '18px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {formattedCirculationSupply}
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
                Volume (24hours) <Shift />
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
                Total Max. Supply <Shift />
              </Typography>
              {totalMaxSupply ? (
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
              ) : (
                <Image src={infinityIcon} alt="infinty-icon" />
              )}
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
            </Box>
            <Box
              style={{
                marginBottom: '-26px',
              }}
            >
              <Graph
                graphAttr={{ type: 'area', data: areachartData }}
                change={change}
              />
            </Box>
          </Box>
        </Box>
      </Link>
    </Box>
  );
};

export default Card;

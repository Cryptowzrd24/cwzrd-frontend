import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import Shift from '../../../../../public/icons/collections/shift';
import graph1 from '../../../../../public/images/spotlight-cards/Frame.png';
import first from '../../../../../public/icons/first-rank.png';
import second from '../../../../../public/icons/second-rank.png';
import numeral from 'numeral';
import third from '../../../../../public/icons/third-rank.png';

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
  const isPositiveChange = change > 0;
  const changeColor = isPositiveChange
    ? 'rgba(69, 202, 148, 1)'
    : 'rgba(245, 65, 65, 1)';
  const backgroundImage = isPositiveChange
    ? '/images/spotlight-cards/background1.png'
    : '/images/spotlight-cards/background2.png';

  const imgUrl = `https://s2.coinmarketcap.com/static/img/coins/64x64/${coinId}.png`;

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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Typography
            variant="h5"
            sx={{
              fontSize: '32px',
              fontWeight: '500',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            ${price}
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
              {isPositiveChange ? `+${change}` : `${change}`} %
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
        <Image src={graph1} alt="graph" />
      </Box>
    </Box>
  );
};

export default Card;

'use client';
import {
  Box,
  Divider,
  LinearProgress,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Upload from '../../../../public/icons/nft/upload';
import { priceNumberFormatDigits } from '@/utils/price-number-formater';
import Cookies from 'js-cookie';

import unselectedStarWhite from '@/app/assets/icons/unselectedStarWhite.svg';
import selectedStar from '@/app/assets/icons/selectedStar.svg';
import Image from 'next/image';

const CoinHeroSection = ({ coinDetails }: any) => {
  const [progress, setProgress] = useState(55);
  const imgId = `https://s2.coinmarketcap.com/static/img/coins/64x64/${coinDetails?.coin_id || 1}.png`;

  const coinId = coinDetails?.coin_id;
  const [isLoading, setIsLoading] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const styles = {
    loader: {
      border: '2px solid #f3f3f3',
      borderTop: '2px solid rgba(17, 17, 17, 1)',
      borderRadius: '50%',
      width: '10px',
      height: '10px',
      animation: 'spin 1s linear infinite',
      margin: 'auto',
    },
    starImage: {
      cursor: 'pointer',
    },
    svgStyle: {
      stroke: '#fff !important', // Add white stroke color
      strokeWidth: 2,
    },
  };

  useEffect(() => {
    const favorites = Cookies.get('favorites')
      ? JSON.parse(Cookies.get('favorites') as string)
      : [];
    if (favorites.includes(coinId)) {
      setIsSelected(true);
    }
  }, [coinId]);

  const handleFavClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      const favorites = Cookies.get('favorites')
        ? JSON.parse(Cookies.get('favorites') as string)
        : [];
      if (favorites.includes(coinId)) {
        const updatedFavorites = favorites.filter((id: any) => id !== coinId);
        Cookies.set('favorites', JSON.stringify(updatedFavorites));
        setIsSelected(false);
      } else {
        favorites.push(coinId);
        Cookies.set('favorites', JSON.stringify(favorites));
        setIsSelected(true);
      }
      setIsLoading(false);
    }, 600);
  };

  const handleClick = (event: any) => {
    const box = event.currentTarget;
    const clickX = event.clientX - box.getBoundingClientRect().left;
    const newValue = (clickX / box.clientWidth) * 100;
    setProgress(newValue);
  };

  const CustomLinearProgress = styled(LinearProgress)(({}) => ({
    height: '10px !important',
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '& .MuiLinearProgress-bar': {
      borderRadius: 16,
      backgroundColor: 'rgba(230, 230, 230, 1)',
    },
  }));

  const showRank =
    coinDetails?.statistics?.rank === 1
      ? `🥇 Rank ${coinDetails?.statistics?.rank}`
      : coinDetails?.statistics?.rank === 2
        ? `🥈 Rank ${coinDetails?.statistics?.rank}`
        : coinDetails?.statistics?.rank === 3
          ? `🥉 Rank ${coinDetails?.statistics?.rank}`
          : `Rank ${coinDetails?.statistics?.rank}`;

  const getPercentColor = (val: any) => {
    if (!val) return;
    if (!val.toLocaleString().includes('-')) {
      return { color: 'rgba(76, 254, 182, 1)' };
    } else {
      return { color: 'rgba(245, 109, 109, 1)' };
    }
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: 'url("/images/coin-details/background.png")',
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          padding: '24px 32px',
          borderRadius: '24px',
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
          <Box
            sx={{
              display: 'flex',
              alignItems: 'self-start',
              gap: '8px',
            }}
          >
            <Box>
              <img src={imgId} alt="persona" width={48} height={48} />
            </Box>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '20px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                  lineHeight: 1,
                  marginTop: '5px',
                }}
              >
                {coinDetails?.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                {coinDetails?.about_coin?.symbol}
              </Typography>
            </Stack>
            <Box
              sx={{
                background: 'rgba(255, 255, 255, 0.1)',
                padding: '5px 12px',
                borderRadius: '24px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                {showRank}
              </Typography>
            </Box>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Box
              sx={{
                borderRadius: '8px',
                padding: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              {/* <Star /> */}
              <div onClick={handleFavClick}>
                {isLoading ? (
                  <div style={styles['loader']}></div>
                ) : (
                  <Image
                    style={
                      !isSelected ? styles['starImage'] : { stroke: '#fff' }
                    }
                    src={isSelected ? selectedStar : unselectedStarWhite}
                    alt=""
                  />
                )}
              </div>
            </Box>
            <Box
              sx={{
                borderRadius: '8px',
                padding: '8px',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Upload />
            </Box>
          </Box>
        </Box>
        {/* --------------------------------------------------------------------------------- */}
        {/* --------------------------------------------------------------------------------- */}

        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingRight: '64px',
          }}
        >
          <Stack sx={{ maxWidth: '356px', width: '100%' }}>
            <Box
              sx={{
                mb: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '24px',
                  fontWeight: '700',
                  color: 'rgba(255, 255, 255, 1)',
                  lineHeight: 1,
                }}
              >
                ${priceNumberFormatDigits(coinDetails?.quote?.price)}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  lineHeight: 1,
                  ...getPercentColor(
                    coinDetails?.statistics?.priceChangePercentage1h,
                  ),
                }}
              >
                {coinDetails?.statistics?.priceChangePercentage1h
                  ?.toString()
                  .includes('-')
                  ? ''
                  : '+'}
                {priceNumberFormatDigits(
                  coinDetails?.statistics?.priceChangePercentage1h,
                )}
                %
              </Typography>
            </Box>
            <Box sx={{ mb: '8px', width: '100%' }} onClick={handleClick}>
              <CustomLinearProgress variant="determinate" value={progress} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Stack>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Low: $
                  {priceNumberFormatDigits(coinDetails?.statistics?.lowAllTime)}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  High: $
                  {priceNumberFormatDigits(
                    coinDetails?.statistics?.highAllTime,
                  )}
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  24h range:
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  ${priceNumberFormatDigits(coinDetails?.statistics?.low24h)}
                  -${priceNumberFormatDigits(coinDetails?.statistics?.high24h)}
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Divider
            orientation="vertical"
            variant="fullWidth"
            flexItem
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          />

          {/* --------------------------------------------------------------------------------- */}
          <Box>
            <Stack>
              <Box
                sx={{
                  mb: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '12px',
                      fontWeight: '400',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    Market Cap
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    ${priceNumberFormatDigits(coinDetails?.quote?.market_cap)}
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '600',
                    ...getPercentColor(
                      coinDetails?.statistics?.marketCapChangePercentage24h,
                    ),
                  }}
                >
                  {coinDetails?.statistics?.marketCapChangePercentage24h
                    ?.toString()
                    .includes('-')
                    ? ''
                    : '+'}
                  {priceNumberFormatDigits(
                    coinDetails?.statistics?.marketCapChangePercentage24h,
                  )}
                  %
                </Typography>
              </Box>
              <Box
                sx={{
                  // mb: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '12px',
                      fontWeight: '400',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    1D Trading Vol
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '26px',
                      fontWeight: '700',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    $
                    {priceNumberFormatDigits(
                      coinDetails?.statistics?.volumeYesterday,
                    )}
                  </Typography>
                </Stack>
                {/* <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(76, 254, 182, 1)',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  +7.37%
                </Typography> */}
              </Box>
            </Stack>
          </Box>
          <Divider
            orientation="vertical"
            variant="fullWidth"
            flexItem
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          />

          {/* -------------------------------------------------------------------------- */}
          <Box>
            <Stack>
              <Box
                sx={{
                  mb: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '12px',
                      fontWeight: '400',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    Diluted Valuation
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    $
                    {priceNumberFormatDigits(
                      coinDetails?.quote?.fully_diluted_market_cap,
                    )}
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    // color: 'rgba(76, 254, 182, 1)',
                    fontSize: '14px',
                    fontWeight: '700',
                    ...getPercentColor(
                      coinDetails?.statistics
                        ?.fullyDilutedMarketCapChangePercentage24h,
                    ),
                  }}
                >
                  {coinDetails?.statistics?.fullyDilutedMarketCapChangePercentage24h
                    ?.toString()
                    .includes('-')
                    ? ''
                    : '+'}
                  {priceNumberFormatDigits(
                    coinDetails?.statistics
                      ?.fullyDilutedMarketCapChangePercentage24h,
                  )}
                  %
                </Typography>
              </Box>
              <Box
                sx={{
                  // mb: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '12px',
                      fontWeight: '400',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    Circulating Supply
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    $
                    {priceNumberFormatDigits(
                      coinDetails?.statistics?.circulatingSupply,
                    )}
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Divider
            orientation="vertical"
            variant="fullWidth"
            flexItem
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
          />

          {/* ------------------------------------------------------------------------------------------- */}
          <Box>
            <Stack>
              <Box
                sx={{
                  mb: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '12px',
                      fontWeight: '400',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    Total Supply
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    $
                    {priceNumberFormatDigits(
                      coinDetails?.statistics?.totalSupply,
                    )}
                  </Typography>
                </Stack>
              </Box>
              <Box
                sx={{
                  // mb: '16px',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '24px',
                }}
              >
                <Stack>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '12px',
                      fontWeight: '400',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    Max Supply
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      fontSize: '16px',
                      fontWeight: '700',
                      color: 'rgba(255, 255, 255, 1)',
                    }}
                  >
                    {coinDetails?.max_supply
                      ? `$${priceNumberFormatDigits(coinDetails?.statistics?.maxSupply)}`
                      : '-'}
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CoinHeroSection;

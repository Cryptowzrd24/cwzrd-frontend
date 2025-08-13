import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import { priceNumberFormatDigits } from '@/utils/price-number-formater';
import StarComponent from './star-component/starComponent';
import ProgressBar from './progress-bar/progressBar';
import ShareComponent from './share-component';

import infinityIconWhite from '../../../../public/icons/infinityWhite.svg';
import Image from 'next/image';

const CoinHeroSection = ({ coinDetails }: any) => {
  const imgId = `https://backend.cwzrd.co.uk/api/coin-image/?id=${coinDetails?.coin_id || 1}`;

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
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Box>
              <img
                src={imgId}
                alt="persona"
                style={{ borderRadius: '50%' }}
                width={48}
                height={48}
              />
            </Box>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '20px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                  lineHeight: 1,
                  mb: '4.5px',
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
                mb: '18px',
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
              <StarComponent coinId={coinDetails?.coin_id} />
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
              <ShareComponent coinImage={imgId} coinData={coinDetails} />
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
            paddingRight: { xs: '0px', sm: '0px', md: '64px' },
            flexDirection: { xs: 'column', sm: 'row' },
            gap: { xs: '24px', md: '10px' },
            flexWrap: { sm: 'wrap', md: 'nowrap' },
            width: '100%',
          }}
        >
          <Stack
            sx={{
              width: { xs: '100%', sm: '50%', md: '40%' },
              flex: { xs: 1, sm: 1, md: 2 },
            }}
          >
            <Box
              sx={{
                mb: '12px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                width: '100%',
              }}
            >
              <Typography
                id={`banner-price-${coinDetails?.coin_id}`}
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
                id={`banner-price-change-${coinDetails?.coin_id}`}
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
            <Box sx={{ mb: '8px', width: '100%' }}>
              <ProgressBar />
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
                    mb: '2px',
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
              <Stack sx={{ paddingRight: '74px' }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    mb: '2px',
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
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              opacity: 0.5,
              display: { xs: 'none', sm: 'block' },
            }}
          />

          {/* --------------------------------------------------------------------------------- */}
          <Stack
            sx={{
              width: { xs: '100%', sm: '50%', md: '20%' },
              flex: 1,
              padding: { xs: '0px', md: '16px' },
            }}
          >
            <Box
              sx={{
                mb: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                width: '100%',
              }}
            >
              <Stack>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    mb: '2px',
                  }}
                >
                  Market Cap
                </Typography>
                <Typography
                  id={`banner-market-cap-${coinDetails?.coin_id}`}
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
                    mb: '2px',
                  }}
                >
                  1D Trading Vol
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
          <Divider
            orientation="vertical"
            variant="fullWidth"
            flexItem
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              opacity: 0.5,
              display: { xs: 'none', md: 'block' },
            }}
          />

          {/* -------------------------------------------------------------------------- */}
          <Stack
            sx={{
              width: { xs: '100%', sm: '50%', md: '20%' },
              flex: 1,
              padding: { xs: '0px', md: '16px' },
            }}
          >
            <Box
              sx={{
                mb: '16px',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '24px',
                width: '100%',
              }}
            >
              <Stack>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    mb: '2px',
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
                    mb: '2px',
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
                  {coinDetails?.about_coin?.symbol}{' '}
                  {priceNumberFormatDigits(
                    coinDetails?.statistics?.circulatingSupply,
                  )}
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Divider
            orientation="vertical"
            variant="fullWidth"
            flexItem
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.3)',
              opacity: 0.5,
              display: { xs: 'none', sm: 'block' },
            }}
          />

          {/* ------------------------------------------------------------------------------------------- */}
          <Stack
            sx={{
              width: { xs: '100%', sm: '50%', md: '20%' },
              flex: 1,
              padding: { xs: '0px', md: '16px' },
            }}
          >
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
                    mb: '2px',
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
                  {coinDetails?.about_coin?.symbol}{' '}
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
                    mb: '2px',
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
                  {coinDetails?.statistics?.maxSupply ? (
                    `$${priceNumberFormatDigits(coinDetails?.statistics?.maxSupply)}`
                  ) : (
                    <Image src={infinityIconWhite} alt="infinity-icon" />
                  )}
                </Typography>
              </Stack>
            </Box>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default CoinHeroSection;

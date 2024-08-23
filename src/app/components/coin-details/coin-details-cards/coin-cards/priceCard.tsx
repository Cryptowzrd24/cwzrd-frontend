import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import { priceNumberFormatDigits } from '@/utils/price-number-formater';
const PriceCard = ({ coinDetails }: any) => {
  const showRank =
    coinDetails?.statistics?.rank === 1
      ? `#Rank ${coinDetails?.statistics?.rank}  🥇`
      : coinDetails?.statistics?.rank === 2
        ? `#Rank ${coinDetails?.statistics?.rank}  🥈`
        : coinDetails?.statistics?.rank === 3
          ? `#Rank ${coinDetails?.statistics?.rank}  🥉`
          : `#Rank ${coinDetails?.statistics?.rank}`;

  const getPercentColor = (val: any) => {
    if (!val) return;
    if (!val.toLocaleString().includes('-')) {
      return { color: 'rgb(1, 200, 119)' };
    } else {
      return { color: 'rgb(245, 109, 109)' };
    }
  };
  return (
    <>
      <Box
        sx={{
          padding: '20px',
          backgroundImage: "url('/images/nft/trending.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          maxWidth: '290px',
          width: '100%',
          boxShadow: 'rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          borderRadius: '24px',
        }}
      >
        <Stack>
          <Typography
            variant="body1"
            sx={{
              fontSize: '12px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
              mb: '12px',
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
            }}
          >
            🔥 Price Statistics
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '8px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              Price
            </Typography>
            <Typography
              id={`card-price-${coinDetails.coin_id}`}
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              ${priceNumberFormatDigits(coinDetails?.quote?.price)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '8px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              Price Change
            </Typography>
            <Typography
              id={`card-price-change-${coinDetails.coin_id}`}
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                // background: 'linear-gradient(180deg, #45CA94 0%, #97D14E 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
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
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '8px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              24h Quality
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              $67,862.17
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '8px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              Volume
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              $
              {priceNumberFormatDigits(
                coinDetails?.statistics?.volumeYesterday,
              )}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '8px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              Dominance
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {priceNumberFormatDigits(
                coinDetails?.statistics?.marketCapDominance,
              )}
              %
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '8px',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              Rank
            </Typography>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                mr: '8px',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                  mt: '2px',
                }}
              >
                {showRank}
              </Typography>
              {/* <Image src={rank1} alt="blur" width={14} height={14} /> */}
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Typography
              variant="body1"
              sx={{
                fontSize: '12px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              Market Cap
            </Typography>
            <Typography
              id={`card-market-cap-${coinDetails.coin_id}`}
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              ${priceNumberFormatDigits(coinDetails?.statistics?.marketCap)}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default PriceCard;

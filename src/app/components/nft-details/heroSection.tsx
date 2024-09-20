'use client';
import { Box, LinearProgress, Stack, styled, Typography } from '@mui/material';
import React from 'react';
// import Star from '../../../../public/icons/nft/star';
import { priceNumberFormatDigits } from '@/utils/price-number-formater';
import ShareComponent from '../coin-details/share-component';
const HeroSection = ({ serverNftData }: any) => {
  // const [progress, setProgress] = useState(55);
  const imageUrl = serverNftData?.logo;
  // const handleClick = (event: any) => {
  //   const box = event.currentTarget;
  //   const clickX = event.clientX - box.getBoundingClientRect().left;
  //   const newValue = (clickX / box.clientWidth) * 100;
  //   setProgress(newValue);
  // };

  const progressVal =
    (serverNftData?.volume24h / serverNftData?.totalVolume) * 100;

  const CustomLinearProgress = styled(LinearProgress)(({}) => ({
    height: '10px !important',
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '& .MuiLinearProgress-bar': {
      borderRadius: 16,
      backgroundColor: 'rgba(230, 230, 230, 1)',
    },
  }));

  const coinData = {
    coin_id: 'polydog',
    slug: serverNftData?.name,
    statistics: {
      price: serverNftData?.avgPrice24h,
    },
  };
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, rgba(17, 17, 17, 0.16) 0%, rgba(17, 17, 17, 0.8) 70%), url("/images/nft/background.png")`,
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
            mb: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Box
              sx={{
                width: '48px',
                height: '48px',
                borderRadius: '50%',
                overflow: 'hidden',
              }}
            >
              <img src={imageUrl} alt="persona" width={48} height={48} />
            </Box>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '24px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                  lineHeight: 1,
                }}
              >
                {serverNftData?.name}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                {serverNftData?.blockChain}
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            {/* <Box
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
              <Star />
            </Box> */}
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
              {/* <Upload /> */}
              <ShareComponent
                coinData={coinData}
                coinImage={serverNftData?.logo}
                isNftDetails={true}
              />
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
            maxWidth: '1126px',
            width: '100%',
            paddingRight: '64px',
          }}
        >
          <Stack sx={{ maxWidth: '356px', width: '100%' }}>
            <Box
              sx={{
                mb: '16px',
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
                {priceNumberFormatDigits(serverNftData?.avgPrice24h)}{' '}
                {serverNftData?.floorPriceToken}
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'rgba(76, 254, 182, 1)',
                  lineHeight: 1,
                }}
              >
                {/* +7,37%{' '} */}
              </Typography>
            </Box>
            <Box sx={{ mb: '8px', width: '100%' }}>
              <CustomLinearProgress variant="determinate" value={progressVal} />
            </Box>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                24h Volume
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '12px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                {priceNumberFormatDigits(serverNftData?.volume24h)}{' '}
                {serverNftData?.floorPriceToken}
              </Typography>
            </Box>
          </Stack>

          {/* --------------------------------------------------------------------------------- */}
          <Box>
            <Stack>
              <Box sx={{ mb: '10px' }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Items
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  {priceNumberFormatDigits(serverNftData?.totalItems)}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Floor Price
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  {priceNumberFormatDigits(serverNftData?.floorPrice)}{' '}
                  {serverNftData?.floorPriceToken}
                </Typography>
              </Box>
            </Stack>
          </Box>
          {/* -------------------------------------------------------------------------- */}
          <Box>
            <Stack>
              <Box sx={{ mb: '10px' }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  24h Volume
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  {priceNumberFormatDigits(serverNftData?.volume24h)}{' '}
                  {serverNftData?.floorPriceToken}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  24h Sales
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  {serverNftData?.sales24h}
                </Typography>
              </Box>
            </Stack>
          </Box>
          {/* ------------------------------------------------------------------------------------------- */}
          <Box>
            <Stack>
              <Box sx={{ mb: '10px' }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Total Volume
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  {priceNumberFormatDigits(serverNftData?.totalVolume)}{' '}
                  {serverNftData?.floorPriceToken}
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Floor Price
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  {priceNumberFormatDigits(serverNftData?.floorPrice)}{' '}
                  {serverNftData?.floorPriceToken}
                </Typography>
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;

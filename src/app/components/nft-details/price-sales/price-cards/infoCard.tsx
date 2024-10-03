import { Box, Stack, Typography } from '@mui/material';
import React from 'react';

import { priceNumberFormatDigits } from '@/utils/price-number-formater';
const InfoCard = ({ serverNftData }: any) => {
  function checkRoyaltyAndFindMax(marketPlaces: any) {
    const royaltyValues = [];

    // Iterate through each marketplace object and gather royalty values along with their logos
    for (const marketplace of marketPlaces) {
      if (marketplace.hasOwnProperty('royalty')) {
        royaltyValues.push({
          royalty: marketplace.royalty,
          logo: marketplace.logo,
        });
      }
    }

    if (royaltyValues.length === 0) {
      return {
        royalty: false,
        logo: marketPlaces[0]?.logo,
      };
    }

    if (royaltyValues.length === 1) {
      return royaltyValues[0];
    }

    const highestRoyaltyObject = royaltyValues.reduce((max, current) => {
      return current.royalty > max.royalty ? current : max;
    });

    return highestRoyaltyObject; // Return the object with the highest royalty and logo
  }
  const royalty = checkRoyaltyAndFindMax(serverNftData?.marketPlaces);
  const royalityImg = royalty.logo;
  return (
    <>
      <Box
        sx={{
          padding: '24px',
          backgroundImage: "url('/images/nft/trending.png')",
          backgroundSize: 'cover',
          backgroundPosition: 'center center',
          width: '330px',
          boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
          borderRadius: '24px',
        }}
      >
        <Stack>
          <Typography
            variant="body1"
            sx={{
              fontSize: '14px',
              fontWeight: '700',
              color: 'rgba(17, 17, 17, 1)',
              mb: '16px',
              letterSpacing: '1.5px',
            }}
          >
            🔥 INFO
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '10px',
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
              Items
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {priceNumberFormatDigits(serverNftData?.totalItems)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '10px',
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
              Total Owners
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {priceNumberFormatDigits(serverNftData?.totalOwners)}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: '10px',
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
              Total Volume
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {priceNumberFormatDigits(serverNftData?.totalVolume)}{' '}
              {serverNftData?.floorPriceToken}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: '10px',
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
              Royalty
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Box
                sx={{
                  width: '20px',
                  height: '20px',
                  borderRadius: '50%',
                  overflow: 'hidden',
                }}
              >
                <img src={royalityImg} alt="blur" width={20} height={20} />
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                {royalty.royalty ? `${royalty.royalty}` : '--'}
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: '10px',
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
              Floor Price (latest)
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {priceNumberFormatDigits(serverNftData?.floorPrice)}{' '}
              {serverNftData?.floorPriceToken}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: '10px',
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
              24h Average Price
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {priceNumberFormatDigits(serverNftData?.avgPrice24h)}{' '}
              {serverNftData?.floorPriceToken}
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mt: '10px',
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
              24h Sales
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              {priceNumberFormatDigits(serverNftData?.sales24h)}
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default InfoCard;

import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import rank1 from '../../../../../../public/icons/first-rank.png';
const PriceCard = () => {
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
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              $2.400.80
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
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '600',
                background: 'linear-gradient(180deg, #45CA94 0%, #97D14E 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
              }}
            >
              +7.37%
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
              $27,593,393.02
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
              18%
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
                #1
              </Typography>
              <Image src={rank1} alt="blur" width={14} height={14} />
            </Box>
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
              Market Cap
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontSize: '14px',
                fontWeight: '500',
                color: 'rgba(17, 17, 17, 1)',
              }}
            >
              $987,847,229.10
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default PriceCard;

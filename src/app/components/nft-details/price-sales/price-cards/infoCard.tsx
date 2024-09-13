import { Box, Stack, Typography } from '@mui/material';
import React from 'react';
import blur from '../../../../../../public/images/nft/blur.png';
import Image from 'next/image';
const InfoCard = () => {
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
              10,000
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
              5,353
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
              1,886,173.ETH
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
              <Image src={blur} alt="blur" width={20} height={20} />
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 1)',
                }}
              >
                0.5%
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
              11.97.ETH
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
              11.75 ETH
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
              30
            </Typography>
          </Box>
        </Stack>
      </Box>
    </>
  );
};

export default InfoCard;

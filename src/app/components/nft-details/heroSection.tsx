'use client';
import { Box, LinearProgress, Stack, styled, Typography } from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import persona from '../../../../public/images/nft/persona.png';
import Star from '../../../../public/icons/nft/star';
import Upload from '../../../../public/icons/nft/upload';
const HeroSection = () => {
  const [progress, setProgress] = useState(55);
  const handleClick = (event: any) => {
    const box = event.currentTarget;
    const clickX = event.clientX - box.getBoundingClientRect().left;
    const newValue = (clickX / box.clientWidth) * 100;
    setProgress(newValue);
  };

  const CustomLinearProgress = styled(LinearProgress)(({}) => ({
    height: '12px !important',
    borderRadius: 16,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    '& .MuiLinearProgress-bar': {
      borderRadius: 16,
      backgroundColor: 'rgba(230, 230, 230, 1)',
    },
  }));
  return (
    <>
      <Box
        sx={{
          backgroundImage: `linear-gradient(180deg, rgba(17, 17, 17, 0.16) 0%, rgba(17, 17, 17, 0.8) 70%), url("/images/nft/background.png")`,
          backgroundPosition: 'center center',
          backgroundSize: 'cover',
          padding: '32px 40px',
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
            <Box>
              <Image src={persona} alt="persona" width={48} height={48} />
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
                Persona
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                Ethereum
              </Typography>
            </Stack>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Box
              sx={{
                borderRadius: '8px',
                padding: '8px 10px',
                background: 'rgba(255, 255, 255, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
              }}
            >
              <Star />
            </Box>
            <Box
              sx={{
                borderRadius: '8px',
                padding: '8px 10px',
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
                mb: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: 'rgba(255, 255, 255, 1)',
                  lineHeight: 1,
                }}
              >
                3.89 ETH
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '20px',
                  fontWeight: '500',
                  color: 'rgba(76, 254, 182, 1)',
                  lineHeight: 1,
                }}
              >
                +7,37%{' '}
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
              <Typography
                variant="body2"
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                24h Volume
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                324.89 ETH
              </Typography>
            </Box>
          </Stack>

          {/* --------------------------------------------------------------------------------- */}
          <Box>
            <Stack>
              <Box sx={{ mb: '16px' }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Items
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  10,000
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Floor Price
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  11.98 ETH
                </Typography>
              </Box>
            </Stack>
          </Box>
          {/* -------------------------------------------------------------------------- */}
          <Box>
            <Stack>
              <Box sx={{ mb: '16px' }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Items
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  10,000
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  24h Volume
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  30
                </Typography>
              </Box>
            </Stack>
          </Box>
          {/* ------------------------------------------------------------------------------------------- */}
          <Box>
            <Stack>
              <Box sx={{ mb: '16px' }}>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Total Volume
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  1,886,172.4 ETH
                </Typography>
              </Box>
              <Box>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '14px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Floor Price
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '20px',
                    fontWeight: '700',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  11.97 ETH{' '}
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

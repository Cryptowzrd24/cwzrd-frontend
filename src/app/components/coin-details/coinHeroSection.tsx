'use client';
import {
  Box,
  Divider,
  LinearProgress,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import Image from 'next/image';
import React, { useState } from 'react';
import Star from '../../../../public/icons/nft/star';
import Upload from '../../../../public/icons/nft/upload';
import bitcoin from '../../../../public/images/coin-details/Ellipse 1.png';
const CoinHeroSection = () => {
  const [progress, setProgress] = useState(55);
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
              <Image src={bitcoin} alt="persona" width={48} height={48} />
            </Box>
            <Stack>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '20px',
                  fontWeight: '500',
                  color: 'rgba(255, 255, 255, 1)',
                  lineHeight: 1,
                  mb:"4.5px"
                }}
              >
                Bitcoin
              </Typography>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '14px',
                  fontWeight: '400',
                  color: 'rgba(255, 255, 255, 1)',
                }}
              >
                BTC
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
                mb:"18px"
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
                🥇 Rank 1
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
              <Star />
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
                $49,627.43
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
              <Stack>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    mb:"2px"

                  }}
                >
                  Low: $48,406.50
                </Typography>
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                  }}
                >
                  Low: $48,406.50
                </Typography>
              </Stack>
              <Stack >
                <Typography
                  variant="body2"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    mb:"2px"
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
                  $61,514.38-$67,862.17
                </Typography>
              </Stack>
            </Box>
          </Stack>
          <Divider
            orientation="vertical"
            variant="fullWidth"
            flexItem
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
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
                      mb:"2px"

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
                    $987,847,229.10
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(76, 254, 182, 1)',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  +7.37%
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
                      mb:"2px"

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
                    $27,593,393.02
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(76, 254, 182, 1)',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  +7.37%
                </Typography>
              </Box>
            </Stack>
          </Box>
          <Divider
            orientation="vertical"
            variant="fullWidth"
            flexItem
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
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
                      mb:"2px"

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
                    $1,394,394,493.33
                  </Typography>
                </Stack>
                <Typography
                  variant="body1"
                  sx={{
                    color: 'rgba(76, 254, 182, 1)',
                    fontSize: '14px',
                    fontWeight: '600',
                  }}
                >
                  +7.37%
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
                      mb:"2px"

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
                    $392,998,476,119
                  </Typography>
                </Stack>
              </Box>
            </Stack>
          </Box>
          <Divider
            orientation="vertical"
            variant="fullWidth"
            flexItem
            sx={{ backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
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
                      mb:"2px"

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
                    $23,190,978,112.90
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
                      mb:"2px"

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
                    $23,190,978,112.90
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

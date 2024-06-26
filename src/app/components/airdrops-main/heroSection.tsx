import { Box, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import img1 from '../../../../public/images/airdrops/Ellipse 1.png';
import Website from '../../../../public/icons/airdrops-main/website';
import TwitterBlack from '../../../../public/icons/airdrops-main/twitterBlack';
import Twitter from '../../../../public/icons/collections/twitter';
import frame from '../../../../public/images/airdrops/Frame.png';
import funds from '../../../../public/images/airdrops/funds.png';
import frame2 from '../../../../public/images/airdrops/Frame2.png';

const HeroSection = () => {
  return (
    <>
      <Box
        sx={{
          padding: '32px 128px 38px 32px',
          borderRadius: '32px',
          boxShadow: 'rgba(27, 4, 4, 0.05) 0px 7px 29px 0px',
          height: 'auto',
          backgroundImage: `url('/images/airdrops/background.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center center',
          overflow: 'hidden',
          maxWidth: '1536px',
          margin: 'auto',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box
            sx={{
              gap: '16px',
              alignItems: 'center',
              display: 'flex',
              paddingRight: '120px',
              borderRight: '1px solid rgba(17, 17, 17, 0.1)',
            }}
          >
            <Box>
              <Image src={img1} alt="banner" />
            </Box>
            <Stack>
              <Typography
                variant="h3"
                sx={{
                  fontSize: '32px',
                  fontWeight: '700',
                  color: 'rgba(17, 17, 17, 1)',
                  mb: '4px',
                }}
              >
                LayerZero{' '}
                <span
                  style={{
                    fontSize: '18px',
                    fontWeight: '500',
                    letterSpacing: '2px',
                  }}
                >
                  ZRO
                </span>
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  backgroundImage:
                    'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: '500',
                  fontSize: '16px',
                  mb: '16px',
                }}
              >
                Blockchain Infrastructure
              </Typography>
              <Box sx={{ display: 'flex', gap: '16px' }}>
                <Box
                  sx={{
                    padding: '6px 12px 6px 8px',
                    borderRadius: '100px',
                    border: '1px solid rgba(17, 17, 17, 0.1)',
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center',
                    mb: '16px',

                    cursor: 'pointer',
                  }}
                >
                  <Website />{' '}
                  <Typography
                    variant="body1"
                    sx={{ fontSize: '11px', fontWeight: '500' }}
                  >
                    Website
                  </Typography>
                </Box>
                <Box
                  sx={{
                    padding: '6px 12px 6px 8px',
                    borderRadius: '100px',
                    border: '1px solid rgba(17, 17, 17, 0.1)',
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center',
                    mb: '16px',

                    cursor: 'pointer',
                  }}
                >
                  <TwitterBlack />{' '}
                  <Box sx={{ mt: '4px' }}>
                    <Twitter />
                  </Box>
                </Box>
                <Box
                  sx={{
                    padding: '8px 16px',
                    borderRadius: '100px',
                    border: '1px solid rgba(17, 17, 17, 0.1)',
                    display: 'flex',
                    gap: '4px',
                    alignItems: 'center',
                    mb: '16px',

                    cursor: 'pointer',
                    background: 'rgba(17, 17, 17, 1)',
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
                    +5 More
                  </Typography>
                </Box>
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              gap: '16px',
              alignItems: 'center',
              display: 'flex',
              paddingRight: '110px',
              borderRight: '1px solid rgba(17, 17, 17, 0.1)',
            }}
          >
            <Stack>
              <Box sx={{ display: 'flex', gap: '2px', mb: '16px' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 0.6)',
                    mb: '4px',
                  }}
                >
                  Exchanges:{' '}
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'rgba(17, 17, 17, 1)',
                    mb: '4px',
                  }}
                >
                  $263.30M
                </Typography>
              </Box>
              <Typography
                variant="body1"
                sx={{
                  fontSize: '16px',
                  fontWeight: '500',
                  color: 'rgba(17, 17, 17, 0.6)',
                  mb: '4px',
                }}
              >
                Funds and Backers:{' '}
              </Typography>
              <Box
                sx={{
                  display: 'flex',
                  gap: '4px',
                  mb: '16px',
                  alignItems: 'center',
                }}
              >
                <Image src={funds} alt="funds" width={32} height={32} />
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'rgba(17, 17, 17, 1)',
                    mb: '4px',
                  }}
                >
                  Andreessen Horow...
                </Typography>
                <Image src={frame} alt="frame" width={100} height={32} />
              </Box>
            </Stack>
          </Box>
          <Box
            sx={{
              gap: '16px',
              alignItems: 'center',
              display: 'flex',
            }}
          >
            <Stack>
              <Box
                sx={{
                  position: 'relative',
                  display: 'flex',
                  gap: '2px',
                  mb: '16px',
                  paddingBottom: '8px',
                  '::before': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '100%',
                    height: '8px',
                    background:
                      'linear-gradient(180deg, #7248F7 0%, #BF48F7 100%)',
                    borderRadius: '100px',
                  },
                }}
              >
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 0.6)',
                    mb: '4px',
                  }}
                >
                  Twitter Score:
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'rgba(17, 17, 17, 1)',
                    mb: '4px',
                  }}
                >
                  360
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', gap: '2px', mb: '16px' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 0.6)',
                    mb: '4px',
                  }}
                >
                  Followers:
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: 'rgba(17, 17, 17, 1)',
                    mb: '4px',
                  }}
                >
                  654.37K
                </Typography>
              </Box>
              <Box
                sx={{
                  display: 'flex',
                  gap: '4px',
                  mb: '4px',
                  alignItems: 'center',
                }}
              >
                <Image src={frame2} alt="frame" width={200} height={32} />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;

import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import frank from '../../../../../public/images/platform/profile.png';
import Image from 'next/image';
import UploadBig from '../../../../../public/icons/nft/uploadBig';
import Dot from '../../../../../public/icons/coin-details/dot';
const PortfolioCard = () => {
  return (
    <>
      <Box
        sx={{
          backgroundImage: `url('/images/platform/portfolio.png')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          padding: '34.5px 0.82px 51.47px 41.81px',
          width: '470px',
          WebkitBorderBottomLeftRadius: '24px',
          WebkitBorderTopRightRadius: '24px',
        }}
      >
        <Box
          sx={{
            // padding: '18px 28px 28px 28px',
            borderRadius: '18px',
            background: 'rgba(255, 255, 255, 1)',
            width: '391.37px',
            boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '13.69px 29.48px 13.69px 20.54px',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
              }}
            >
              <Image src={frank} alt="profile" width={54.77} />
              <Stack>
                <Typography
                  sx={{
                    mb: '3px',
                    fontSize: '20.54px',
                    fontWeight: '500',
                    lineHeight: '24.65px',
                    color: 'rgba(17, 17, 17, 1)',
                    fontFamily: 'Sf Pro Display',
                  }}
                >
                  Frank Garcia
                </Typography>
                <Typography
                  sx={{
                    fontSize: '11.98px',
                    fontWeight: '500',
                    lineHeight: '14.38px',
                    color: 'rgba(17, 17, 17, 1)',
                    fontFamily: 'Sf Pro Display',
                  }}
                >
                  frankgarcia@gmail.com
                </Typography>
              </Stack>
            </Box>
            <Box
              sx={{
                display: 'flex',
                gap: '6.85px',
                alignItems: 'center',
                paddingRight: '16px',
              }}
            >
              <UploadBig />
              <Dot />
            </Box>
          </Box>
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            flexItem
            sx={{
              backgroundColor: 'rgba(17, 17, 17, 0.01)',
              width: '350.29px',
              marginLeft: '20.54px',
            }}
          />
          <Box
            sx={{
              display: 'flex',
              // justifyContent: 'space-between',
              gap: '65.04px',
              alignItems: 'center',
              paddingInline: '20.54px',
              paddingBottom: '20.54px',
              paddingTop: '13.69px',
            }}
          >
            <Box>
              <Stack sx={{ mb: '28px' }}>
                <Typography
                  sx={{
                    fontSize: '11.98px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '14.38px',
                    mb: '2.57px',
                    fontFamily: 'Sf Pro Display',
                  }}
                >
                  Performance Today
                </Typography>
                <Typography
                  sx={{
                    fontSize: '20.54px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '24.65px',
                    mb: '3px',
                  }}
                >
                  $39,236,51.09
                </Typography>
                <Typography
                  sx={{
                    fontSize: '8.56px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    background: 'rgba(31, 215, 115, 1)',
                    padding: '3px 4.5px 2.3px 4.5px',
                    borderRadius: '9.51px',
                    width: '39.85px',
                    height: '14.42px',
                    lineHeight: '11.12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  +18,37%
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontSize: '11.98px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '14.38px',
                    mb: '2.57px',
                    fontFamily: 'Sf Pro Display',
                  }}
                >
                  Performance Today
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '20.54px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '24.65px',
                    mb: '3px',
                  }}
                >
                  $39,236,53.09
                </Typography>
                <Typography
                  sx={{
                    fontSize: '8.56px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    background: 'rgba(247, 72, 72, 1)',
                    padding: '3px 4.5px 2.3px 4.5px',
                    borderRadius: '12px',
                    width: '39.85px',
                    height: '14.42px',
                    lineHeight: '11.12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  +18,37%
                </Typography>
              </Stack>
            </Box>
            {/* -------------------------------- */}

            <Box>
              <Stack sx={{ mb: '28px' }}>
                <Typography
                  sx={{
                    fontSize: '11.98px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '14.38px',
                    mb: '2.57px',
                    fontFamily: 'Sf Pro Display',
                  }}
                >
                  Performance Today
                </Typography>
                <Typography
                  sx={{
                    fontSize: '20.54px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '24.65px',
                    mb: '3px',
                  }}
                >
                  $39,236,51.09
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '8.56px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    background: 'rgba(31, 215, 115, 1)',
                    padding: '3px 4.5px 2.3px 4.5px',
                    borderRadius: '9.51px',
                    width: '39.85px',
                    height: '14.42px',
                    lineHeight: '11.12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  +18,37%
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  sx={{
                    fontSize: '11.98px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '14.38px',
                    mb: '2.57px',
                    fontFamily: 'Sf Pro Display',
                  }}
                >
                  Performance Today
                </Typography>
                <Typography
                  sx={{
                    fontSize: '20.54px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '24.65px',
                    mb: '3px',
                  }}
                >
                  $39,236,51.09
                </Typography>

                <Typography
                  sx={{
                    fontSize: '8.56px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    background: 'rgba(247, 72, 72, 1)',
                    padding: '3px 4.5px 2.3px 4.5px',
                    borderRadius: '12px',
                    width: '39.85px',
                    height: '14.42px',
                    lineHeight: '11.12px',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  +18,37%
                </Typography>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default PortfolioCard;

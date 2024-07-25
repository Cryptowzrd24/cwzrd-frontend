import { Box, Divider, Stack, Typography } from '@mui/material';
import React from 'react';
import frank from '../../../../../public/images/platform/profile.png';
import Image from 'next/image';
import Upload from '../../../../../public/icons/nft/upload';
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
          padding: '46px 98px 64px 52px',
          width: '550px',
          WebkitBorderBottomLeftRadius: '32px',
          WebkitBorderTopRightRadius: '32px',

        }}
      >
        <Box
          sx={{
            padding: '18px 28px 28px 28px',
            borderRadius: '18px',
            background: 'rgba(255, 255, 255, 1)',
            maxWidth: '508px',
            boxShadow: ' rgba(0, 0, 0, 0.05) 0px 4px 28px 0px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: '18px',
                mb: '18px',
              }}
            >
              <Image src={frank} alt="profile" width={73} />
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    mb: '3px',
                    fontSize: '28px',
                    fontWeight: '500',
                    lineHeight: '32.86px',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  Frank Garcia
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    lineHeight: '19.16px',
                    color: 'rgba(17, 17, 17, 1)',
                  }}
                >
                  frankgarcia@gmail.com
                </Typography>
              </Stack>
            </Box>
            <Box sx={{ display: 'flex', gap: '9px', alignItems: 'center',paddingRight:"16px" }}>
              <UploadBig />
              <Dot />
            </Box>
          </Box>
          <Divider
            orientation="horizontal"
            variant="fullWidth"
            flexItem
            sx={{ backgroundColor: 'rgba(17, 17, 17, 0.01)' }}
          />
          <Box
            sx={{
              mt: '18px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Box>
              <Stack sx={{ mb: '28px' }}>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '19.17px',
                    mb: '3px',
                  }}
                >
                  Performance Today
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '28px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '32.87px',
                    mb: '3px',
                  }}
                >
                  $39,236,513.09
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    background: 'rgba(31, 215, 115, 1)',
                    padding: '3px 4.5px 2.3px 4.5px',
                    borderRadius: '12px',
                    maxWidth: '52px',
                    lineHeight: 1,
                  }}
                >
                  +18,37%
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '19.17px',
                    mb: '3px',
                  }}
                >
                  Performance Today
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '28px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '32.87px',
                    mb: '3px',
                  }}
                >
                  $39,236,513.09
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    background: 'rgba(247, 72, 72, 1)',
                    padding: '3px 4.5px 2.3px 4.5px',
                    borderRadius: '12px',
                    maxWidth: '52px',
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
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '19.17px',
                    mb: '3px',
                  }}
                >
                  Performance Today
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '28px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '32.87px',
                    mb: '3px',
                  }}
                >
                  $39,236,513.09
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    background: 'rgba(31, 215, 115, 1)',
                    padding: '3px 4.5px 2.3px 4.5px',
                    borderRadius: '12px',
                    maxWidth: '52px',
                  }}
                >
                  +18,37%
                </Typography>
              </Stack>
              <Stack>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '16px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '19.17px',
                    mb: '3px',
                  }}
                >
                  Performance Today
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '28px',
                    fontWeight: '500',
                    color: 'rgba(17, 17, 17, 1)',
                    lineHeight: '32.87px',
                    mb: '3px',
                  }}
                >
                  $39,236,513.09
                </Typography>

                <Typography
                  variant="body1"
                  sx={{
                    fontSize: '12px',
                    fontWeight: '400',
                    color: 'rgba(255, 255, 255, 1)',
                    background: 'rgba(247, 72, 72, 1)',
                    padding: '3px 4.5px 2.3px 4.5px',
                    borderRadius: '12px',
                    maxWidth: '52px',
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

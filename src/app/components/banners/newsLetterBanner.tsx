import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import banner1 from '../../../../public/images/banner/Newletter .png';
import styles from './style.module.scss';
import ArrowRight from '../../../../public/icons/News-Letter/arrowRight';
function NewsLetterBanner() {
  return (
    <Box className={styles.bannerBox}>
      {/* <Image src={banner1} alt="banner" /> */}
      <Box>
        <Stack
          sx={{
            // maxWidth: '1140px',
            width: '100%',
            margin: 'auto',
            gap: '8px',
            textAlign: 'center',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="body1"
            sx={{
              fontSize: '16px',
              color: 'rgba(255, 255, 255, 1)',
              letterSpacing: 3,
            }}
          >
            NEWSLETTER
          </Typography>
          <Typography
            variant="h2"
            sx={{
              //   width: 'max-content',
              fontWeight: '500',
              mb: '8px',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            Subscribe To Our Weekly Newsletter!
          </Typography>
          <Typography variant="body1" sx={{ color: 'rgba(255, 255, 255, 1)' }}>
            Join our newsletter to receive the latest updates, insights, and
            analysis from our team of experts. Don't miss out on opportunities{' '}
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '6px 6px 6px 24px',
              borderRadius: '100px',
              maxWidth: '630px',
              width: '100%',
              background: 'rgba(255, 255, 255, 1)',
              margin: '48px auto 0 auto',
            }}
          >
            <input
              type="text"
              placeholder="Enter your email address"
              style={{
                fontSize: '16px',
                fontWeight: '400',
                color: 'rgba(17, 17, 17, 0.8)',
                outline: 'none',
                border: 'none',
                fontFamily: 'inherit',
              }}
            />
            <Box sx={{ display: 'flex', alignItems: 'flex-start' }}>
              <Button
                variant="contained"
                endIcon={<ArrowRight />}
                sx={{
                  borderRadius: '56px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  fontWeight: '600',
                  padding: '8px 20px 0 24px',
                }}
              >
                Get Started
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
    </Box>
  );
}

export default NewsLetterBanner;

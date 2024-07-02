import { Box, Button, Stack, Typography } from '@mui/material';
import React from 'react';
import styles from './style.module.scss';
import ArrowRight from '../../../../public/icons/News-Letter/arrowRight';

function NewsLetterBanner() {
  return (
    <Box className={styles.bannerBox}>
      <Box>
        <Stack
          sx={{
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
              fontWeight: '500',
              mb: '8px',
              color: 'rgba(255, 255, 255, 1)',
            }}
          >
            Subscribe To Our Weekly Newsletter!
          </Typography>
          <Typography variant="body1" sx={{ color: '#FFFFFFCC' }}>
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
              className={styles.input}
            />
            <Box sx={{ display: 'flex' }}>
              <Button
                variant="contained"
                endIcon={<ArrowRight />}
                sx={{
                  borderRadius: '56px',
                  display: 'flex',
                  alignItems: 'flex-start',
                  fontWeight: '700',
                  padding: '10px 20px 4px 24px',
                  justifyContent: 'center',
                  fontSize: '16px',
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

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
            display: 'flex',
          }}
        >
          <Typography
            sx={{
              fontSize: '12px',
              color: 'rgba(255, 255, 255, 1)',
              letterSpacing: '1px',
              lineHeight: '15.6px',
            }}
          >
            NEWSLETTER
          </Typography>
          <Typography
            variant="h2"
            sx={{
              fontWeight: '700',
              maxWidth: '606px',
              mb: '8px',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '44px',
              letterSpacing: '2px',
              marginBottom: '0px',
              fontSize: '40px',
            }}
          >
            Subscribe To Our Weekly Newsletter!
          </Typography>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              borderRadius: '100px',
              maxWidth: '470px',
              width: '100%',
              marginTop: '24px',
              background: 'rgba(255, 255, 255, 1)',
              padding: '4px 4px 4px 24px',
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
                  background:
                    'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
                  borderRadius: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '600',
                  justifyContent: 'center',
                  fontSize: '14px',
                  lineHeight: '18.2px',
                  height: '40px',
                  width: '128px',
                  padding: 0,
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

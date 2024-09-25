'use client';
import { Box, Button, Popover, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import styles from './style.module.scss';
import ArrowRight from '../../../../public/icons/News-Letter/arrowRight';
import { subscribeNewsletter } from '@/app/services/newsletter';
import LoadingOverlay from '../loading-overlay';

function NewsLetterBanner() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    color: '',
    message: '',
  });
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    let valid = true;

    if (!validateEmail(email)) {
      setEmailError('Please enter a valid email address.');
      valid = false;
    } else {
      setEmailError('');
    }

    if (valid) {
      setLoading(true);
      const response = await subscribeNewsletter({ email });
      if (response?.error) {
        setErrorMessage({ color: 'red', message: response?.error });
        setAnchorEl(e.currentTarget);
        setPopoverOpen(true);

        setTimeout(() => {
          setPopoverOpen(false);
          setAnchorEl(null);
          setErrorMessage({ color: '', message: '' });
        }, 3000);
      } else {
        setEmail('');
        setErrorMessage({
          color: 'green',
          message: 'Successfully subscribed to newsletter!',
        });
        setAnchorEl(e.currentTarget);
        setPopoverOpen(true);

        setTimeout(() => {
          setPopoverOpen(false);
          setAnchorEl(null);
          setErrorMessage({ color: '', message: '' });
        }, 3000);
      }
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setEmailError('');
  };

  const Icon = loading ? <img /> : <ArrowRight />;
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
              value={email}
              type="text"
              onChange={handleChange}
              placeholder="Enter your email address"
              className={styles.input}
            />
            <Box sx={{ display: 'flex' }}>
              <Button
                disabled={loading}
                onClick={handleSubmit}
                variant="contained"
                endIcon={Icon}
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
                {loading ? (
                  <LoadingOverlay
                    size={'20px'}
                    background={'transparent'}
                    color={'white'}
                  />
                ) : (
                  'Get Started'
                )}
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
      {emailError?.length && (
        <Typography
          sx={{ marginLeft: '20px', marginTop: '10px', color: 'white' }}
        >
          {emailError}
        </Typography>
      )}
      <Popover
        open={popoverOpen}
        anchorEl={anchorEl}
        onClose={() => setPopoverOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        sx={{
          '& .MuiPaper-root': {
            backgroundColor: 'transparent',
            boxShadow: 'none',
            padding: 0,
          },
        }}
      >
        <Box
          sx={{
            padding: '8px 16px',
            background: errorMessage.color,
            color: 'white',
            borderRadius: '4px',
            textAlign: 'center',
          }}
        >
          {errorMessage.message}
        </Box>
      </Popover>
    </Box>
  );
}

export default NewsLetterBanner;

'use client';
import {
  Box,
  Button,
  Popover,
  Stack,
  Typography,
  useMediaQuery,
} from '@mui/material';
import React, { useState } from 'react';
import styles from './style.module.scss';
import { subscribeNewsletter } from '@/app/services/newsletter';
import LoadingOverlay from '../loading-overlay';
import { ArrowRightRound } from '../../../../public/icons/News-Letter/arrowRightRound';

function NewsLetterBanner() {
  const isMobileView = useMediaQuery('@media (max-width: 600px)');
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
        setErrorMessage({
          color: 'red',
          message: 'This email is already subscribed to CWZRD Newsletter.',
        });
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
  };

  const Icon = loading ? <img /> : <ArrowRightRound />;
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
              fontSize: '12px !important',
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
              fontWeight: '700 !important',
              maxWidth: '606px',
              mb: '8px',
              color: 'rgba(255, 255, 255, 1)',
              lineHeight: '44px',
              letterSpacing: '2px',
              marginBottom: '0px',
              fontSize: '40px !important',

              '@media (max-width: 576px)': {
                fontSize: '32px !important',
                lineHeight: '110%',
                letterSpacing: '0.32px',
              },
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
              marginTop: '16px',
              background: 'rgba(255, 255, 255, 1)',
              padding: '4px 4px 4px 24px',

              '@media (max-width: 576px)': {
                maxWidth: '100%',
                width: 'auto',
              },
            }}
          >
            <input
              value={email}
              type="text"
              onChange={handleChange}
              placeholder={
                isMobileView
                  ? 'Enter your email ...'
                  : 'Enter your email address'
              }
              className={styles.input}
            />
            <Box
              sx={{
                display: 'flex',
                height: '40px',
                minWidth: '128px',
                background: 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
                borderRadius: '56px',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Button
                disabled={loading}
                onClick={handleSubmit}
                variant="contained"
                endIcon={Icon}
                id="read-more"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: '#3761FB01',
                  fontWeight: '600',
                  fontSize: '14px',
                  lineHeight: '18.2px',
                  width: '100%',
                  padding: 0,
                  gap: '4px',
                  marginBottom: '-2px',
                  height: '40px',
                  borderRadius: '56px',
                }}
              >
                {loading ? (
                  <LoadingOverlay
                    size={'20px'}
                    background={'transparent'}
                    color={'white'}
                    borderRadius={'56px'}
                  />
                ) : (
                  'Get Started'
                )}
              </Button>
            </Box>
          </Box>
        </Stack>
      </Box>
      {emailError && (
        <Typography
          sx={{ marginLeft: '16px', marginTop: '10px', color: '#ff5454' }}
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

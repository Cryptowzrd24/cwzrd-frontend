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
import LoadingOverlay from '@/app/components/loading-overlay';
import { ArrowRightRound } from '../../../../../../public/icons/News-Letter/arrowRightRound';

function NewsBanner() {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    color: '',
    message: '',
  });
  const [anchorEl, setAnchorEl] = useState<Element | null>(null);
  const [popoverOpen, setPopoverOpen] = useState(false);
  const isMobileView = useMediaQuery('@media (max-width: 425px)');

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
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
          message: 'This email is already subscribed to the newsletter.',
        });
        setAnchorEl(e.currentTarget as Element);
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
          message: 'Successfully subscribed to the newsletter!',
        });
        setAnchorEl(e.currentTarget as Element);
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

  return (
    <Box className={styles.bannerBox3}>
      <Box>
        <Stack
          sx={{
            width: '100%',
            margin: 'auto',
            gap: '4px',
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
              lineHeight: '28px',
              letterSpacing: '1px',
              marginBottom: '0px',
              fontSize: '24px',
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
              maxWidth: '350px',
              width: '100%',
              marginTop: '16px',
              background: 'rgba(255, 255, 255, 1)',
              padding: '4px 4px 4px 16px',
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
            <Box sx={{ display: 'flex' }}>
              <Button
                disabled={loading}
                onClick={handleSubmit}
                variant="contained"
                endIcon={loading ? <img /> : <ArrowRightRound />}
                id="read-more-small"
                sx={{
                  background:
                    'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
                  borderRadius: '56px',
                  display: 'flex',
                  alignItems: 'center',
                  fontWeight: '600',
                  justifyContent: 'center',
                  fontSize: '12px',
                  lineHeight: '18.2px',
                  height: '32px',
                  width: '106px',
                  padding: 0,
                  gap: '4px',
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
          sx={{
            marginLeft: '16px',
            marginTop: '10px',
            color: '#ff5454',
            fontSize: '14px',
          }}
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

export default NewsBanner;

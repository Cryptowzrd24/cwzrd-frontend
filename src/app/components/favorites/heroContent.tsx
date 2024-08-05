'use client';

import {
  Box,
  Button,
  IconButton,
  Modal,
  TextField,
  Typography,
  Snackbar,
  Alert,
} from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import Cookies from 'js-cookie';

const HeroContent = () => {
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [emailStored, setEmailStored] = useState('');
  const [toastOpen, setToastOpen] = useState(false);

  const handleClick = () => {
    const storedEmail = Cookies.get('watchlistEmail');
    if (storedEmail) {
      setEmailStored(storedEmail);
    } else {
      setSearchTerm('');
      setEmailStored('');
    }
    setActive(true);
  };

  const handleClose = () => {
    setActive(false);
  };

  const handleToastClose = (
    event: React.SyntheticEvent | Event,
    reason?: string,
  ) => {
    if (reason === 'clickaway') {
      return;
    }
    setToastOpen(false);
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value.length <= 32) {
      setSearchTerm(value);
    }
  };

  const handleCreateWatchlist = () => {
    Cookies.set('watchlistEmail', searchTerm, { expires: 7 });
    setToastOpen(true);
    setSearchTerm('');
    setActive(false);
  };

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography variant="h1" sx={{ maxWidth: '960px', marginTop: '-5px' }}>
          My{' '}
          <span
            style={{
              backgroundImage:
                'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Favorite Coins
          </span>{' '}
        </Typography>
        <Button
          variant="contained"
          sx={{
            fontSize: '14px',
            borderRadius: '56px',
            padding: '11px 16px',
          }}
          onClick={handleClick}
        >
          New Watchlist
        </Button>
      </Box>

      <Modal
        open={active}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              mb: '24px',
            }}
          >
            <Typography
              id="modal-title"
              variant="body1"
              component="h2"
              sx={{
                fontSize: emailStored ? '24px' : '16px',
                fontWeight: 'bold',
                lineHeight: '34px',
              }}
            >
              {emailStored
                ? 'Watchlist Name'
                : 'To create a watchlist, please provide your email'}
            </Typography>
            <IconButton
              onClick={handleClose}
              sx={{
                '&:hover': {
                  backgroundColor: 'transparent',
                },
              }}
            >
              <CloseIcon
                sx={{
                  fontSize: '24px',
                  color: 'GrayText',
                  opacity: '0.5',
                }}
              />
            </IconButton>
          </Box>
          <TextField
            placeholder={emailStored ? 'Watchlist Name' : 'Watchlist Email'}
            value={searchTerm}
            onChange={handleSearchChange}
            variant="outlined"
            size="small"
            fullWidth
            sx={{
              mb: '8px',
              '& .MuiOutlinedInput-root': {
                borderRadius: '8px',
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                '& fieldset': {
                  borderRadius: '8px',
                  borderColor: '#eff2ff5',
                },
                '&:hover fieldset': {
                  borderColor: '#eff2ff5',
                },
                '&.Mui-focused': {
                  '& fieldset': {
                    borderColor: '#eff2ff5',
                  },
                },
              },
              '& .MuiOutlinedInput-input': {
                color: 'black',
                fontSize: '12px',
              },
              '& .MuiInputBase-input': {
                color: 'black',
              },
            }}
          />
          <Typography
            variant="caption"
            sx={{
              color: '#A6B0C3',
              fontSize: '12px',
              display: 'block',
            }}
          >
            0-32 characters
          </Typography>
          <Button
            variant="contained"
            sx={{
              fontSize: '14px',
              mt: '24px',
              borderRadius: '56px',
              padding: '11px 16px',
            }}
            fullWidth
            onClick={handleCreateWatchlist}
            disabled={searchTerm.trim().length === 0 || searchTerm.length > 32}
          >
            {emailStored ? 'Confirm Name' : 'Confirm Email'}
          </Button>
        </Box>
      </Modal>

      <Snackbar
        open={toastOpen}
        autoHideDuration={6000}
        onClose={handleToastClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={handleToastClose}
          severity="success"
          sx={{ width: '100%' }}
        >
          {emailStored
            ? 'Watchlist Created Successfully'
            : `Email ${searchTerm} has been stored in the cookie.`}
        </Alert>
      </Snackbar>
    </>
  );
};

export default HeroContent;

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
  Stack,
} from '@mui/material';
import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Cookies from 'js-cookie';
import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';
const HeroContent = () => {
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [emailStored, setEmailStored] = useState('');
  const [watchlistName, setWatchlistName] = useState('');

  const [toastOpen, setToastOpen] = useState(false);
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false);
  // const [modalContent, setModalContent] = useState({ title: '', icon: null });
  const [isMainWatchlist, setIsMainWatchlist] = useState(false);
  const [addWatchlist] = useAddWatchlistMutation();

  const handleStarClick = () => {
    setIsMainWatchlist((prev) => !prev);
  };
  const handleWatchlistNameChange = (event: any) => {
    setWatchlistName(event.target.value);
  };
  const handleMoreOptionsClick = () => {
    setMoreOptionsOpen(true);
  };

  const handleMoreOptionsClose = () => {
    setMoreOptionsOpen(false);
  };

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

  const handleCreateWatchlist = async () => {
    console.log('handleCreateWatchlist called');
    console.log('emailStored:', emailStored);
    console.log('watchlistName:', watchlistName);

    if (!emailStored) {
      console.log('Storing email:', searchTerm);
      Cookies.set('watchlistEmail', searchTerm, { expires: 7 });
      setEmailStored(searchTerm);
      setSearchTerm('');
    } else {
      console.log('Calling API with:', {
        email: emailStored,
        collection_name: watchlistName,
      });
      try {
        await addWatchlist({
          email: emailStored,
          collection_name: watchlistName,
        }).unwrap();

        setToastOpen(true);
        setSearchTerm('');
        setWatchlistName('');
        setActive(false);
      } catch (error) {
        console.error('Failed to create watchlist:', error);
      }
    }
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
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
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
          <Button
            variant="text"
            sx={{
              // fontSize: '24px',
              borderRadius: '56px',
              padding: '8px 12px',
              background: 'rgba(17, 17, 17, 0.2)',
              letterSpacing: '2px',
              fontWeight: 'bold',
            }}
            onClick={handleMoreOptionsClick}
          >
            ...
          </Button>
        </Box>
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
            value={emailStored ? watchlistName : searchTerm}
            onChange={
              emailStored ? handleWatchlistNameChange : handleSearchChange
            }
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
            disabled={
              (emailStored && watchlistName.trim().length === 0) ||
              searchTerm.length > 32
            }
          >
            {emailStored ? 'Confirm Name' : 'Confirm Email'}
          </Button>
        </Box>
      </Modal>
      <Modal
        open={moreOptionsOpen}
        onClose={handleMoreOptionsClose}
        aria-labelledby="more-options-modal-title"
        aria-describedby="more-options-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '26%',
            right: '7%',
            width: 270,
            bgcolor: 'background.paper',
            boxShadow: 24,
            p: '16px 8px 24px 16px',
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              mb: '8px',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              },
              padding: '8px',
              cursor: 'pointer',
            }}
          >
            <EditIcon sx={{ mr: 1 }} />
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: '600', fontSize: '12px' }}
            >
              Edit
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              cursor: isMainWatchlist ? 'not-allowed' : 'pointer',
              mb: '8px',
              opacity: isMainWatchlist ? 0.3 : 1,
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              },
              padding: '8px',
            }}
          >
            <DeleteOutlineIcon sx={{ mr: 1 }} />
            <Typography
              variant="body1"
              component="span"
              sx={{ fontWeight: '600', fontSize: '12px' }}
            >
              Remove Watchlist
            </Typography>
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'flex-start',
              cursor: 'pointer',
              mb: '8px',
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.1)',
                borderRadius: '8px',
              },
              padding: '8px',
            }}
            onClick={handleStarClick}
          >
            {isMainWatchlist ? (
              <StarIcon sx={{ mr: 1 }} />
            ) : (
              <StarBorderIcon sx={{ mr: 1 }} />
            )}
            <Stack sx={{ mt: '4px' }}>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: '600', fontSize: '12px', mb: '4px' }}
              >
                This is your main watchlist
              </Typography>
              <Typography
                variant="body1"
                component="span"
                sx={{ fontWeight: '400', fontSize: '11px', lineHeight: '18px' }}
              >
                When you click the star icon on the homepage or other pages the
                asset will be added to your Main Watchlist
              </Typography>
            </Stack>
          </Box>
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

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
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import Cookies from 'js-cookie';
import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

const HeroContent = () => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [emailStored, setEmailStored] = useState('');
  const [watchlistName, setWatchlistName] = useState('');

  const [toastOpen, setToastOpen] = useState(false);
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false);
  // const [modalContent, setModalContent] = useState({ title: '', icon: null });
  const [isMainWatchlist, setIsMainWatchlist] = useState(false);
  const [addWatchlist] = useAddWatchlistMutation();
  const [emailExistError, setEmailExistError] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [watchListNames, setWatchListNames] = useState([]);
  const [selectedWatchNameList, setSelectedWatchNameList] = useState('');
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [reload, setReload] = useState(false);

  const handleStarClick = () => {
    setIsMainWatchlist(true);
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

  const coindIdsString = Cookies.get('favorites') || '[]';
  const coinIdsArray = JSON.parse(coindIdsString).map((id: any) =>
    id.toString(),
  );

  const handleCreateWatchlist = async () => {
    if (!emailStored) {
      try {
        // Call the API to check if the email exists
        const response = await fetch(
          `${baseUrl}api/favorites/check-email?email=${searchTerm}`,
        );

        if (response.status === 404) {
          // If the email does not exist, store it in cookies and proceed
          Cookies.set('watchlistEmail', searchTerm, { expires: 7 });
          try {
            await addWatchlist({
              email: searchTerm,
              collection_name: 'My Favorite Coin',
              main: true,
              ids: coinIdsArray,
            }).unwrap();
            setReload(true);
          } catch (error) {
            console.error('Failed to create watchlist:', error);
          }
          setEmailStored(searchTerm);
          setSearchTerm('');

          // Optionally, you can do something else here after setting the email
          console.log('Email not found, stored in cookies and proceeding...');
        } else if (response.status === 200) {
          // Handle the case where the email is found
          setEmailExistError('Email already exists. Try another email');
          console.log('Email already exists.');
        } else {
          console.log(`Unexpected response: ${response.status}`);
        }
      } catch (error) {
        console.error('Error checking email:', error);
      }
    } else {
      try {
        await addWatchlist({
          email: emailStored,
          collection_name: watchlistName,
          main: false,
          ids: coinIdsArray,
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

  function getCoinIdsByCollectionName(data: any, collectionName: any) {
    // Find the collection object that matches the given collectionName
    const collection = data?.find(
      (item: any) => item.collection_name === collectionName,
    );

    // If collection is found, extract the coin_ids and return them as an array of strings
    if (collection) {
      return collection.coins.map((coin: any) => coin.coin_id.toString());
    }

    // If no matching collection is found, return an empty array
    return [];
  }

  const coinIdsForMain = getCoinIdsByCollectionName(
    watchListNames,
    selectedWatchNameList,
  );

  const handleAddMainWatchList = async () => {
    try {
      await addWatchlist({
        email: Cookies.get('watchlistEmail'),
        collection_name: selectedWatchNameList,
        main: true,
        ids: coinIdsForMain,
      }).unwrap();
      handleStarClick();
      setActive(false);
    } catch (error) {
      console.error('Failed to create watchlist:', error);
    }
  };

  const handleIconClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleIconClose = () => {
    setAnchorEl(null);
  };

  const handleSelectedWatchList = (val: string) => {
    setSelectedWatchNameList(val);
    handleClose();
  };

  // Close the dropdown when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        handleIconClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    const fetchWatchListNames = async () => {
      if (Cookies.get('watchlistEmail')) {
        try {
          const response = await fetch(
            `${baseUrl}api/favorites?email=${Cookies.get('watchlistEmail')}`,
          );
          const data = await response.json();
          console.log(data.collections);
          setWatchListNames(data.collections);
        } catch (error) {
          console.error('Error checking email:', error);
        }
      }
    };
    fetchWatchListNames();
  }, [isMainWatchlist, reload, toastOpen]);

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {!Cookies.get('watchlistEmail') && (
          <Typography
            variant="h1"
            sx={{ maxWidth: '960px', marginTop: '-5px' }}
          >
            <span
              style={{
                backgroundImage:
                  'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              My Favorite Coins
            </span>{' '}
          </Typography>
        )}
        {/* watchList dropdwon */}
        {Cookies.get('watchlistEmail') && (
          <div ref={dropdownRef}>
            <Button
              aria-controls="watchlist-menu"
              aria-haspopup="true"
              onClick={handleIconClick}
              endIcon={<ArrowDropDownIcon />}
              sx={{ textTransform: 'none' }} // To keep the button text as-is
            >
              <Typography
                variant="h1"
                sx={{ maxWidth: '960px', marginTop: '-5px' }}
              >
                {' '}
                <span
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {selectedWatchNameList === 'My Favorite Coins' ||
                  selectedWatchNameList === ''
                    ? 'My Favorite Coins'
                    : selectedWatchNameList}
                </span>{' '}
              </Typography>
            </Button>
            <Menu
              id="watchlist-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                elevation: 3,
                sx: {
                  mt: 1,
                  borderRadius: '8px',
                  padding: '5px 10px 15px 10px',
                  minWidth: '240px',
                  boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
                },
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'right',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
            >
              {watchListNames?.map((collection: any, index: any) => (
                <MenuItem
                  key={index}
                  onClick={() =>
                    handleSelectedWatchList(collection.collection_name)
                  }
                  sx={{
                    height: '40px',
                    padding: '8px 10px',
                    display: 'flex',
                    justifyContent: 'flex-start !important',
                    '&:hover': {
                      height: '40px',
                      backgroundColor: 'rgba(0, 0, 0, 0.1)',
                      borderRadius: '8px',
                    },
                  }}
                >
                  <Typography variant="body2" sx={{ fontWeight: 500 }}>
                    {collection.collection_name}
                  </Typography>
                  {collection.main && (
                    <Typography
                      variant="caption"
                      sx={{
                        ml: 1,
                        backgroundColor: '#3f51b5',
                        color: 'white',
                        borderRadius: '4px',
                        padding: '2px 8px',
                        fontSize: '12px',
                        fontWeight: 500,
                      }}
                    >
                      Main
                    </Typography>
                  )}
                </MenuItem>
              ))}
            </Menu>
          </div>
        )}
        {/* watchList dropdwon */}
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
              borderRadius: '50px',
              padding: '8px 10px',
              background: 'rgba(17, 17, 17, 0.2)',
              letterSpacing: '2px',
              fontWeight: 'bold',
            }}
            onClick={handleMoreOptionsClick}
          >
            <div style={{ marginBottom: '5px' }}>...</div>
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
              color: emailExistError !== '' ? 'red' : '#A6B0C3',
              fontSize: '12px',
              display: 'block',
            }}
          >
            {emailExistError !== '' ? emailExistError : '0-32 characters'}
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
            onClick={handleAddMainWatchList}
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

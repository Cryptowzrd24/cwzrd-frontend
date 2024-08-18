'use client';

import {
  Box,
  Button,
  IconButton,
  Typography,
  Snackbar,
  Alert,
  Menu,
  MenuItem,
} from '@mui/material';
import React, { useEffect, useRef, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import StarIcon from '@mui/icons-material/Star';
import Cookies from 'js-cookie';
import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';
import MoreVertIcon from '@mui/icons-material/MoreVert';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddWatchListModal from './addWatchListModal';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { updateFavorites } from '@/app/redux/market';

const HeroContent = ({ selectedWatchList, setSelectedWatchList }) => {
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
  const [watchList, setWatchList] = useState([]);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [reload, setReload] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.market);

  const handleStarClick = () => {
    setIsMainWatchlist(true);
  };
  const handleWatchlistNameChange = (event: any) => {
    setWatchlistName(event.target.value);
  };
  const handleMoreOptionsClick = (event: any) => {
    setMenuAnchorEl(event.target);
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

  const coinIdsArray = favorites.map((id: any) => id.toString());

  const handleCreateWatchlist = async () => {
    if (!emailStored) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (!emailRegex.test(searchTerm)) {
        setEmailExistError('Please enter a valid email address.');
        return;
      }
      try {
        // Call the API to check if the email exists
        const response = await fetch(
          `${baseUrl}/api/favorites/check-email?email=${searchTerm}`,
        );

        if (response.status === 404 && !Cookies.get('watchlistEmail')) {
          // If the email does not exist, store it in cookies and proceed
          Cookies.set('watchlistEmail', searchTerm, { expires: 365 });
          try {
            await addWatchlist({
              email: searchTerm,
              collection_name: 'My Favorite Coins',
              main: true,
              ids: coinIdsArray,
            }).unwrap();
            setReload(true);
          } catch (error) {
            console.error('Failed to create watchlist:', error);
          }
          setEmailStored(searchTerm);
          setSearchTerm('');
          setActive(false);
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
          ids: [],
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

  const handleAddMainWatchList = async () => {
    try {
      await addWatchlist({
        email: Cookies.get('watchlistEmail'),
        collection_name: selectedWatchList?.collection_name,
        main: true,
        ids: selectedWatchList.ids,
      }).unwrap();
      handleStarClick();
      setMoreOptionsOpen(false);
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

  const handleSelectedWatchList = (watchlist) => {
    setSelectedWatchList(watchlist);
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
    const fetchWatchList = async () => {
      if (Cookies.get('watchlistEmail')) {
        try {
          const response = await fetch(
            `${baseUrl}/api/favorites?email=${Cookies.get('watchlistEmail')}`,
          );
          const data = await response.json();
          const mainCollection = Object.values(data.collections).find(
            (collection) => collection?.main === true,
          );
          console.log(data.collections);
          if (mainCollection && !selectedWatchList.collection_name)
            setSelectedWatchList(mainCollection);
          setWatchList(data.collections);
        } catch (error) {
          console.error('Error checking email:', error);
        }
      }
    };
    fetchWatchList();
  }, [isMainWatchlist, reload, toastOpen]);

  useEffect(() => {
    if (selectedWatchList.ids) {
      Cookies.set('favorites', JSON.stringify(selectedWatchList.ids), {
        expires: 365,
      });
      dispatch(updateFavorites(selectedWatchList.ids));
    }
  }, [selectedWatchList]);

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
              endIcon={<ExpandMoreIcon sx={{ color: '#634DFD', width: 48 }} />}
              sx={{
                textTransform: 'none',
                padding: 0,
                minWidth: 0,
                display: 'flex',
                alignItems: 'center',
              }}
            >
              <Typography
                variant="h1"
                sx={{
                  maxWidth: '960px',
                  margin: 0,
                  padding: 0,
                }}
              >
                <span
                  style={{
                    backgroundImage:
                      'linear-gradient(90deg, #634DFD 0%, #7248F7 50%, #BF48F7 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  {selectedWatchList?.collection_name}
                </span>
              </Typography>
            </Button>
            <Menu
              id="watchlist-menu"
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{
                elevation: 4,
                sx: {
                  mt: 1,
                  borderRadius: '8px',
                  padding: '8px 12px',
                  minWidth: '240px',
                  boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
                },
              }}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
            >
              {watchList?.map((collection: any, index: any) => (
                <MenuItem
                  key={index}
                  onClick={() => handleSelectedWatchList(collection)}
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'start !important',
                    flexDirection: 'row',
                    cursor: 'pointer',
                    opacity: 1,
                    height: '32px',
                    borderRadius: '4px',
                  }}
                >
                  <Typography
                    variant="body1"
                    component="span"
                    sx={{
                      fontWeight: '600',
                      fontSize: '13px',
                      marginLeft: '4px',
                    }}
                  >
                    {collection.collection_name}
                  </Typography>
                  {collection.main && (
                    <Typography
                      variant="caption"
                      sx={{
                        ml: 1,
                        backgroundColor: '#634DFD',
                        color: 'white',
                        borderRadius: '4px',
                        padding: '2px 6px 1px 6px',
                        fontSize: '9px',
                        fontWeight: 500,
                        textTransform: 'uppercase',
                        letterSpacing: '0.2px',
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

        {/* WatchList button */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Button
            variant="contained"
            sx={{
              fontSize: '14px',
              borderRadius: '56px',
              padding: '11px 16px',
              lineHeight: 1,
              letterSpacing: '0.7px',
              background: '#664CFC',
              transition: 'all 0.3s ease',
              ':hover': {
                background: '#5339ea',
              },
            }}
            onClick={handleClick}
          >
            New Watchlist
          </Button>
          <IconButton onClick={handleMoreOptionsClick}>
            <MoreVertIcon />
          </IconButton>
        </Box>
      </Box>
      <AddWatchListModal
        active={active}
        handleClose={handleClose}
        emailStored={emailStored}
        watchlistName={watchlistName}
        handleWatchlistNameChange={handleWatchlistNameChange}
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
        emailExistError={emailExistError}
        handleCreateWatchlist={handleCreateWatchlist}
      />
      <Menu
        anchorEl={menuAnchorEl}
        open={Boolean(moreOptionsOpen)}
        onClose={handleMoreOptionsClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        PaperProps={{
          sx: {
            width: 250,
            p: '16px 8px 24px 16px',
            borderRadius: 2,
            boxShadow: 24,
            '& .MuiMenuItem-root': {
              padding: '8px 16px',
              '& .MuiSvgIcon-root': {
                fontSize: 20,
                color: 'action.active',
                mr: 1.5,
              },
              '&:hover': {
                backgroundColor: 'rgba(0, 0, 0, 0.05)',
              },
            },
          },
        }}
      >
        <MenuItem
          onClick={selectedWatchList.main ? null : handleAddMainWatchList}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start !important',
            flexDirection: 'row',
            cursor: selectedWatchList.main ? 'not-allowed' : 'pointer',
            opacity: selectedWatchList.main ? 0.3 : 1,
            height: '32px',
            borderRadius: '4px',
          }}
          disabled={selectedWatchList.main}
        >
          <DeleteOutlineIcon
            sx={{
              margin: 0,
            }}
          />
          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: '600', fontSize: '14px' }}
          >
            Remove Watchlist
          </Typography>
        </MenuItem>

        <MenuItem
          onClick={selectedWatchList.main ? null : handleAddMainWatchList}
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'start !important',
            flexDirection: 'row',
            cursor: selectedWatchList.main ? 'not-allowed' : 'pointer',
            opacity: selectedWatchList.main ? 0.3 : 1,
            height: '32px',
            borderRadius: '4px',
            width: '100%',
          }}
          disabled={selectedWatchList.main}
        >
          <StarIcon
            sx={{
              margin: 0,
            }}
          />

          <Typography
            variant="body1"
            component="span"
            sx={{ fontWeight: '600', fontSize: '14px' }}
          >
            This is your Main Watchlist
          </Typography>
        </MenuItem>
      </Menu>

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

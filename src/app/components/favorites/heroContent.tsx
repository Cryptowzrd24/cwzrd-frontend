// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
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
import {
  setMainWatchFavorites,
  updateFavorites,
  updateSelectedWatchListMain,
  updateSelectedWatchListName,
} from '@/app/redux/market';
import AuthModal from './authModal';
import FirstLoginModal from './firstLoginModal';
import { useSelector } from 'react-redux';

const HeroContent = ({ selectedWatchList, setSelectedWatchList }: any) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const [active, setActive] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [watchlistName, setWatchlistName] = useState('');

  // const [firstLogin, setFirstLogin] = useState(false);

  const [toastOpen, setToastOpen] = useState(false);
  const [moreOptionsOpen, setMoreOptionsOpen] = useState(false);
  const [isMainWatchlist, setIsMainWatchlist] = useState(false);
  const [addWatchlist] = useAddWatchlistMutation();
  const [anchorEl, setAnchorEl] = useState(null);
  const [watchList, setWatchList] = useState([]);
  const [showAuthModal, setShowAuthModal] = useState(false);

  // const [isAuthenticated, setIsAuthenticated] = useState(true);

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const [reload, setReload] = useState(false);
  const [menuAnchorEl, setMenuAnchorEl] = React.useState<null | HTMLElement>(
    null,
  );

  const dispatch = useAppDispatch();
  const { favorites } = useAppSelector((state) => state.market);
  const { isFirstLogin, token } = useSelector((state: any) => state.user);

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
    if (token?.length) {
      // setEmailStored(storedEmail);
      setActive(true);
      // setIsAuthenticated(true);
    } else {
      setShowAuthModal(true);
      setSearchTerm('');
      // setEmailStored('');
      // setIsAuthenticated(false);
    }
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

  // const coinIdsArray = favorites.map((id: any) => id.toString());

  const handleCreateWatchlist = async () => {
    try {
      await addWatchlist({
        token: Cookies.get('authToken'),
        collection_name: watchlistName,
        main: false,
        ids: [],
      }).unwrap();
      setToastOpen(true);
      setSearchTerm('');
      setWatchlistName('');
      setActive(true);
    } catch (error) {
      console.error('Failed to create watchlist:', error);
    } finally {
      setActive(false);
    }
  };

  const handleDeleteWatchlist = async () => {
    if (selectedWatchList.main) {
      return;
    }

    try {
      const response = await fetch(
        `${baseUrl}/api/favorites/?collection_name=${selectedWatchList.collection_name}`,
        {
          method: 'DELETE',
          headers: {
            Authorization: `Bearer ${Cookies.get('authToken')}`,
          },
        },
      );

      if (response.ok) {
        setSelectedWatchList({});
        setReload(!reload);
      } else {
        console.error('Failed to delete the watchlist.');
      }
    } catch (error) {
      console.error('Error deleting watchlist:', error);
    } finally {
      setMoreOptionsOpen(false);
    }
  };

  const handleAddMainWatchList = async () => {
    try {
      await addWatchlist({
        token: Cookies.get('authToken'),
        collection_name: selectedWatchList?.collection_name,
        main: true,
        ids: favorites,
      }).unwrap();
      setSelectedWatchList({
        collection_name: selectedWatchList.collection_name,
        main: true,
        ids: favorites,
      });
      dispatch(updateSelectedWatchListMain(true));
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

  const handleSelectedWatchList = (watchlist: any) => {
    setSelectedWatchList(watchlist);
    handleClose();
  };

  useEffect(() => {
    const storedFavorites: any =
      Cookies.get('mainWatchFavorites') === 'null' ||
      Cookies.get('mainWatchFavorites') === undefined
        ? '[]'
        : (Cookies.get('mainWatchFavorites') as string);
    if (storedFavorites) {
      dispatch(setMainWatchFavorites(JSON.parse(storedFavorites)));
    }
  }, [dispatch]);

  useEffect(() => {
    if (selectedWatchList.main) {
      Cookies.set(
        'mainWatchFavorites',
        JSON.stringify(selectedWatchList.ids ?? []),
        {
          expires: 365,
        },
      );
      dispatch(setMainWatchFavorites(selectedWatchList.ids));
    }
  }, [selectedWatchList, dispatch]);

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
      const authToken = Cookies.get('authToken');
      if (authToken) {
        try {
          const response = await fetch(`${baseUrl}/api/favorites`, {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${authToken}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            const mainCollection: any = Object.values(data.collections).find(
              (collection: any) => collection?.main === true,
            );
            setWatchList(data.collections);

            if (mainCollection && !selectedWatchList.collection_name) {
              setSelectedWatchList(mainCollection);
              dispatch(
                updateSelectedWatchListName(mainCollection?.collection_name),
              );
              dispatch(updateSelectedWatchListMain(mainCollection?.main));
            }
          } else {
            console.error(
              'Failed to fetch the watchlist:',
              response.statusText,
            );
          }
        } catch (error) {
          console.error('error:', error);
        }
      }
    };

    fetchWatchList();
  }, [isMainWatchlist, reload, toastOpen, token, favorites]);

  // useEffect(() => {
  //   const fetchWatchList = async () => {
  //     if (Cookies.get('authToken')) {
  //       try {
  //         const response = await fetch(`${baseUrl}/api/favorites`, {
  //           method: 'GET',
  //           headers: {
  //             Authorization: `Bearer ${Cookies.get('authToken')}`,
  //           },
  //         });
  //         const data = await response.json();
  //         const mainCollection: any = Object.values(data.collections).find(
  //           (collection: any) => collection?.main === true,
  //         );
  //         setWatchList(data.collections);

  //         if (mainCollection && !selectedWatchList.collection_name) {
  //           setSelectedWatchList(mainCollection);
  //           dispatch(
  //             updateSelectedWatchListName(mainCollection?.collection_name),
  //           );
  //           dispatch(updateSelectedWatchListMain(mainCollection?.main));
  //         }
  //       } catch (error) {
  //         console.error('error:', error);
  //       }
  //     }
  //   };
  //   fetchWatchList();
  // }, [isMainWatchlist, reload, toastOpen, Cookies.get('authToken')]);

  useEffect(() => {
    if (selectedWatchList.ids) {
      Cookies.set('favorites', JSON.stringify(selectedWatchList.ids), {
        expires: 365,
      });
      dispatch(updateFavorites(selectedWatchList.ids));
    } else if (!selectedWatchList?.ids && Cookies.get('authToken')) {
      Cookies.set('favorites', JSON.stringify([]), {
        expires: 365,
      });
      dispatch(updateFavorites([]));
    }
  }, [selectedWatchList]);

  const renderFirstLogin = () => {
    //@ts-expect-error: undefiend cookies
    if (JSON.parse(Cookies.get('favorites')).length > 0 && isFirstLogin) {
      return <FirstLoginModal />;
    }
  };

  return (
    <>
      {Cookies.get('favorites') && renderFirstLogin()}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {!token?.length && (
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

        {token?.length && (
          <div ref={dropdownRef}>
            <Button
              aria-controls="watchlist-menu"
              aria-haspopup="true"
              onClick={handleIconClick}
              endIcon={<ExpandMoreIcon sx={{ color: '#7248F7', width: 48 }} />}
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
              key={selectedWatchList.collection_name}
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
                  onClick={() => {
                    handleSelectedWatchList(collection);
                    dispatch(
                      updateSelectedWatchListName(collection?.collection_name),
                    );
                    dispatch(updateSelectedWatchListMain(collection?.main));
                    setReload(!reload);
                  }}
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
                        backgroundColor: '#7248F7',
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
          {showAuthModal && (
            <AuthModal
              setShowAuthModal={setShowAuthModal}
              showAuthModal={showAuthModal}
            />
          )}
          {token?.length && (
            <IconButton onClick={handleMoreOptionsClick}>
              <MoreVertIcon />
            </IconButton>
          )}
        </Box>
      </Box>
      <AddWatchListModal
        active={active}
        handleClose={handleClose}
        // emailStored={emailStored}
        watchlistName={watchlistName}
        handleWatchlistNameChange={handleWatchlistNameChange}
        handleSearchChange={handleSearchChange}
        searchTerm={searchTerm}
        // emailExistError={emailExistError}
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
            p: '12px 12px',
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
          onClick={selectedWatchList.main ? null : handleDeleteWatchlist}
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
            {selectedWatchList.main
              ? 'This is your Main Watchlist'
              : 'Set as Main Watchlist'}
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
          {/* {emailStored */}
          {/* ?  */}
          Watchlist Created Successfully
          {/* : `Email ${searchTerm} has been stored in the cookie.`} */}
        </Alert>
      </Snackbar>
    </>
  );
};

export default HeroContent;

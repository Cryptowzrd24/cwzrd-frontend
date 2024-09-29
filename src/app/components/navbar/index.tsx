'use client';
import React, { useEffect, useState } from 'react';
import Logo from '../../../../public/icons/logo';
import LogoPurpleHat from '../../../../public/icons/logoPurpleHat';

import { NavbarData } from './data';
import LightmodeIcon from '../../../../public/icons/Navbar-Section/lightmode';
import DarkmodeIcon from '../../../../public/icons/Navbar-Section/darkmode';
import ProfileIcon from '../../../../public/icons/Navbar-Section/profile';
import SearchIcon from '../../../../public/icons/Navbar-Section/search';
import {
  Box,
  Button,
  Container,
  Menu,
  MenuItem,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import { useAppDispatch } from '@/app/redux/store';
import {
  setMainWatchFavorites,
  updateFavorites,
  updateSelectedWatchListMain,
  updateSelectedWatchListName,
} from '@/app/redux/market';
import Cookies from 'js-cookie';
import './index.scss';
import { usePathname, useRouter } from 'next/navigation';
import StarIcon from '../../../../public/icons/Navbar-Section/starIcon';
import { useSelector } from 'react-redux';
import { logout, setFirstLoginToFalse } from '@/app/redux/user';
import AuthModal from '../favorites/authModal';
import FirstLoginModal from '../favorites/firstLoginModal';
import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';
// import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';

function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isActive, setIsActive] = useState<string | null>('light');
  const dispatch = useAppDispatch();
  const router = useRouter();
  const pathname = usePathname();
  const { token, name, isFirstLogin } = useSelector((state: any) => state.user);
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const open = Boolean(anchorEl);

  const [addWatchlist] = useAddWatchlistMutation();
  // const { favorites } = useAppSelector((state: any) => state.market);
  // const [addWatchlist] = useAddWatchlistMutation();

  const handleOpenAuth = () => {
    if (!token?.length) {
      setShowAuthModal(true);
    }
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

  // useEffect(() => {
  //   const fetchWatchList = async () => {
  //     const authToken = Cookies.get('authToken');
  //     if (authToken) {
  //       try {
  //         const response = await fetch(
  //           `${process.env.NEXT_PUBLIC_BASE_URL}/api/favorites`,
  //           {
  //             method: 'GET',
  //             headers: {
  //               Authorization: `Bearer ${authToken}`,
  //             },
  //           },
  //         );
  //         if (response.ok) {
  //           const data = await response.json();
  //           const mainCollection: any = Object.values(data.collections).find(
  //             (collection: any) => collection?.main === true,
  //           );

  //           if (mainCollection) {
  //             dispatch(
  //               updateSelectedWatchListName(mainCollection?.collection_name),
  //             );
  //             dispatch(updateSelectedWatchListMain(mainCollection?.main));
  //           }
  //         }
  //         if (response.statusText == 'Not Found') {
  //           await addWatchlist({
  //             token: token,
  //             collection_name: 'My First Coin Watchlist',
  //             main: true,
  //             ids: [],
  //           });

  //           dispatch(updateFavorites([]));
  //           dispatch(updateSelectedWatchListName('My First Coin Watchlist'));
  //           dispatch(updateSelectedWatchListMain('My First Coin Watchlist'));
  //           Cookies.remove('favorites');
  //         }
  //       } catch (error) {
  //         console.error('error:', error);
  //       }
  //     }
  //   };

  //   fetchWatchList();
  // }, [token, !isFirstLogin]);

  const handleAuthClick = (event: any) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {}, [token]);

  const handleLogout = async () => {
    Cookies.remove('authToken');
    Cookies.remove('favorites');
    dispatch(logout());
    dispatch(updateFavorites([]));
    router.refresh();
    handleClose();
  };

  useEffect(() => {
    const favorites = JSON.parse(
      Cookies.get('favorites') === 'null' ||
        Cookies.get('favorites') === undefined
        ? '[]'
        : (Cookies.get('favorites') as string),
    );
    const mainWatchFavorites = JSON.parse(
      Cookies.get('mainWatchFavorites') === 'null' ||
        Cookies.get('mainWatchFavorites') === undefined
        ? '[]'
        : (Cookies.get('mainWatchFavorites') as string),
    );
    dispatch(updateFavorites(favorites));
    dispatch(setMainWatchFavorites(mainWatchFavorites));

    NavbarData.forEach((item) => {
      if (window.location.pathname.includes(item.name.toLowerCase())) {
        setActiveId(item.id);
      }
    });
  }, []);

  const createFirstWatchList = async () => {
    if (
      !Cookies.get('favorites') ||
      (Cookies.get('favorites') && //@ts-expect-error: expect undefined cookies
        JSON.parse(Cookies.get('favorites'))?.length < 1)
    ) {
      try {
        await addWatchlist({
          token: Cookies.get('authToken'),
          collection_name: 'My First Coin Watchlist',
          main: true,
          ids: [],
        }).unwrap();
        dispatch(updateSelectedWatchListMain('My Favorite Coins'));
        dispatch(updateSelectedWatchListName('My Favorite Coins'));
        dispatch(updateFavorites([]));
        dispatch(setFirstLoginToFalse());
      } catch (error) {
        console.log('error', error);
      }
    }
  };

  useEffect(() => {
    const favorites = Cookies.get('favorites');
    if (isFirstLogin) {
      if (!favorites || JSON.parse(favorites)?.length < 1) {
        createFirstWatchList();
      }
    }
  }, [isFirstLogin]);

  const renderFirstLogin = () => {
    //@ts-expect-error: undefiend cookies
    if (JSON.parse(Cookies.get('favorites')).length > 0 && isFirstLogin) {
      return <FirstLoginModal />;
    }
  };

  return (
    <>
      {Cookies.get('favorites') && renderFirstLogin()}
      {showAuthModal && (
        <AuthModal
          setShowAuthModal={setShowAuthModal}
          showAuthModal={showAuthModal}
        />
      )}
      <Box
        className={
          pathname === '/news' || pathname.includes('/news/')
            ? 'headerbg'
            : pathname === '/technicals' || pathname.includes('/technicals/')
              ? 'headerbgTechnicals'
              : ''
        }
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginTop: '8px',
            }}
          >
            <Link href="/">
              {pathname.includes('/news') || pathname === '/technicals' ? (
                <LogoPurpleHat />
              ) : (
                <Logo />
              )}
            </Link>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                flexDirection: 'row',
                flexWrap: 'wrap',
                gap: '32px',
              }}
            >
              {NavbarData.map((item) => (
                <Box key={item.id}>
                  {pathname === '/news' ||
                  pathname === '/technicals' ||
                  pathname.includes('/technicals/') ||
                  pathname.includes('/news/') ? (
                    <Link
                      href={`/${item.name.toLowerCase()}`}
                      style={{
                        cursor: 'pointer',
                        textDecoration: 'none',
                        textDecorationColor: 'none',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: '16px',
                          color: 'white',
                          cursor: 'pointer',
                          transition: 'transform 0.1s ease-in-out',
                          fontWeight: 500,
                          letterSpacing: '0.7px',
                        }}
                        onClick={() => setActiveId(item.id)}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  ) : item.name === 'Market' ? (
                    <Link
                      href="/market/coin"
                      style={{ textDecoration: 'none' }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: '16px',
                          color:
                            activeId === item.id
                              ? '#7248F7'
                              : 'rgba(17, 17, 17, 1)',
                          cursor: 'pointer',
                          transition: 'transform 0.1s ease-in-out',
                          fontWeight: 500,
                          letterSpacing: '0.7px',
                        }}
                        onClick={() => setActiveId(item.id)}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  ) : (
                    <Link
                      href={`/${item.name.toLowerCase()}`}
                      style={{
                        cursor: 'pointer',
                        textDecoration: 'none',
                        textDecorationColor: 'none',
                      }}
                    >
                      <Typography
                        variant="caption"
                        sx={{
                          fontSize: '16px',
                          color:
                            activeId === item.id
                              ? '#7248F7'
                              : 'rgba(17, 17, 17, 1)',
                          cursor: 'pointer',
                          transition: 'transform 0.1s ease-in-out',
                          fontWeight: 500,
                          letterSpacing: '0.7px',
                        }}
                        onClick={() => setActiveId(item.id)}
                      >
                        {item.name}
                      </Typography>
                    </Link>
                  )}
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: '25px' }}>
              <Box
                sx={{
                  border: '1px solid rgba(17, 17, 17, 0.1)',
                  borderRadius: '66.66px',
                  padding: { xs: '2px', sm: '2.6px 3px 1.6px 2.6px' },
                  display: 'flex',
                  cursor: 'pointer',
                  background: 'white',
                }}
              >
                <Box height={26.5} onClick={() => setIsActive('light')}>
                  <LightmodeIcon isActive={isActive === 'light'} />
                </Box>
                <Box height={26.5} onClick={() => setIsActive('dark')}>
                  <DarkmodeIcon isActive={isActive === 'dark'} />
                </Box>
              </Box>

              <SearchIcon
                color={
                  pathname === '/news' ||
                  pathname.includes('/news/') ||
                  pathname.includes('technicals')
                    ? 'white'
                    : 'black'
                }
              />

              <Link style={{ textDecoration: 'none' }} href="/market/favorites">
                <StarIcon
                  color={
                    !!pathname.includes('/favorites')
                      ? 'rgb(243,143,56)'
                      : pathname.includes('/news')
                        ? 'white'
                        : pathname.includes('/technicals')
                          ? 'white'
                          : 'black'
                  }
                />
              </Link>

              {token ? (
                // <>
                //   <Button
                //     sx={{
                //       width: '0px',
                //       height: '30px',
                //     }}
                //     onClick={handleAuthClick}
                //   >
                //     <Typography
                //       sx={{
                //         color: pathname.includes('news') ? 'white' : 'black',
                //         fontSize: '18px',
                //         paddingBlock: '5px',
                //       }}
                //     >
                //       {name.length > 5 ? `${name.slice(0, 5)}...` : name}
                //     </Typography>
                //   </Button>
                //   <Menu
                //     anchorEl={anchorEl}
                //     open={open}
                //     onClose={handleClose}
                //     slotProps={{
                //       paper: {
                //         style: {
                //           border: '1px solid lightgray',
                //           paddingInline: '10px',
                //           marginBottom: '30px',
                //         },
                //       },
                //     }}
                //   >
                //     <MenuItem
                //       sx={{
                //         paddingInline: '10px',
                //         color: 'black',
                //       }}
                //       onClick={handleLogout}
                //     >
                //       Logout
                //     </MenuItem>
                //   </Menu>
                // </>
                <>
                  <Button
                    sx={{
                      width: '0px',
                      height: '30px',
                    }}
                    onClick={handleAuthClick}
                  >
                    <Typography
                      sx={{
                        color: pathname.includes('news') ? 'white' : 'black',
                        fontSize: '18px',
                        paddingBlock: '5px',
                      }}
                    >
                      {name.length > 5 ? `${name.slice(0, 5)}...` : name}
                    </Typography>
                  </Button>
                  <Menu
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    slotProps={{
                      paper: {
                        style: {
                          border: '1px solid lightgray',
                          paddingInline: '10px',
                          marginBottom: '30px',
                        },
                      },
                    }}
                  >
                    <MenuItem
                      sx={{
                        paddingInline: '10px',
                        color: 'black',
                        '&:hover': {
                          color: 'red',
                        },
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                      }}
                      onClick={handleLogout}
                    >
                      <Box
                        sx={{
                          ':hover': {
                            color: 'red',
                          },
                        }}
                      >
                        Logout
                      </Box>
                    </MenuItem>
                  </Menu>
                </>
              ) : (
                <Box
                  onClick={handleOpenAuth}
                  style={{ textDecoration: 'none', cursor: 'pointer' }}
                >
                  <ProfileIcon
                    color={
                      pathname === '/news' ||
                      pathname === '/technicals' ||
                      pathname.includes('/technicals/') ||
                      pathname.includes('/news/')
                        ? 'white'
                        : 'black'
                    }
                  />
                </Box>
              )}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;

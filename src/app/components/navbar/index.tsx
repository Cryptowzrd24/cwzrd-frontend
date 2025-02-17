'use client';
import React, { useEffect, useState } from 'react';
import Logo from '../../../../public/icons/logo';
import LogoPurpleHat from '../../../../public/icons/logoPurpleHat';

import { NavbarData } from './data';

import { Box, Container } from '@mui/material';
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
import { useSelector } from 'react-redux';
import { logout, setFirstLoginToFalse } from '@/app/redux/user';
import AuthModal from '../favorites/authModal';
import FirstLoginModal from '../favorites/firstLoginModal';
import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';
import OptionMenu from './OptionMenu';
import NavLink from './NavLink';
// import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';

function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  console.log('activeID', activeId);
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
      } catch (error) {}
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
        sx={{
          height: '60px',
          position: 'sticky',
          top: 0,
          zIndex: 101,
          background: '#fff',
        }}
        className={
          pathname === '/news' || pathname.includes('/news/')
            ? 'headerbg'
            : pathname === '/technicals' || pathname.includes('/technicals/')
              ? 'headerbgTechnicals'
              : pathname === '/articles'
                ? 'articlesbg'
                : ''
        }
      >
        <Container maxWidth="xl">
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              py: '8px',
            }}
          >
            <Link href="/">
              {pathname === '/news' ||
              pathname === '/technicals' ||
              pathname === '/articles' ||
              pathname === '/news/crypto' ? (
                <LogoPurpleHat />
              ) : (
                <Logo />
              )}
            </Link>
            <NavLink
              pathname={pathname}
              setActiveId={setActiveId}
              NavbarData={NavbarData}
            />
            <OptionMenu
              pathname={pathname}
              token={token}
              name={name}
              handleOpenAuth={handleOpenAuth}
              handleAuthClick={handleAuthClick}
              handleLogout={handleLogout}
              handleClose={handleClose}
              open={open}
              anchorEl={anchorEl}
              isActive={isActive}
              setIsActive={setIsActive}
              setActiveId={setActiveId}
              NavbarData={NavbarData}
            />
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;

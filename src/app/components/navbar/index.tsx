// src/app/components/navbar/index.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { Select } from 'antd';
import Cookies from 'js-cookie';
import { Box, Container } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch } from '@/app/redux/store';
import {
  setMainWatchFavorites,
  updateFavorites,
  updateSelectedWatchListMain,
  updateSelectedWatchListName,
} from '@/app/redux/market';
import { usePathname } from 'next/navigation';
import { useSelector } from 'react-redux';
import { setFirstLoginToFalse } from '@/app/redux/user';
import AuthModal from '../favorites/authModal';
import FirstLoginModal from '../favorites/firstLoginModal';
import { useAddWatchlistMutation } from '@/app/redux/reducers/data-grid';
import Logo from '../../../../public/icons/logo';
import LogoPurpleHat from '../../../../public/icons/logoPurpleHat';
import { ConfigProvider, theme } from 'antd';

const { Option } = Select;

function Navbar() {
  const dispatch = useAppDispatch();
  const pathname = usePathname();
  const { isFirstLogin } = useSelector((state: any) => state.user);
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [selectedCurrency, setSelectedCurrency] = useState<string>(
    Cookies.get('currency') || 'USD',
  );

  const [addWatchlist] = useAddWatchlistMutation();

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

  const handleCurrencyChange = (value: string) => {
    setSelectedCurrency(value);
    Cookies.set('currency', value);
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
              : pathname === '/articles'
                ? 'articlesbg'
                : ''
        }
        style={{
          marginTop: '28px',
          position: 'relative',
          zIndex: '100',
        }}
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
              {pathname === '/membership' ||
              pathname === '/' ||
              pathname === '/articles' ||
              pathname === '/news/crypto' ? (
                <LogoPurpleHat />
              ) : (
                <Logo />
              )}
            </Link>
            <ConfigProvider
              theme={{
                algorithm: theme.darkAlgorithm,
                token: {
                  colorPrimary: '#634DFD',
                },
              }}
            >
              <Select
                value={selectedCurrency}
                onChange={handleCurrencyChange}
                style={{ width: 120 }}
              >
                <Option value="GBP">GBP</Option>
                <Option value="USD">USD</Option>
                <Option value="EUR">EUR</Option>
                <Option value="CAD">CAD</Option>
                <Option value="AUD">AUD</Option>
              </Select>
            </ConfigProvider>
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Navbar;

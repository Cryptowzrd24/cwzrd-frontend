'use client';

import React, { useEffect, useState } from 'react';
import Logo from '../../../../public/icons/logo';
import { NavbarData } from './data';
import LightmodeIcon from '../../../../public/icons/Navbar-Section/lightmode';
import DarkmodeIcon from '../../../../public/icons/Navbar-Section/darkmode';
import ProfileIcon from '../../../../public/icons/Navbar-Section/profile';
import SearchIcon from '../../../../public/icons/Navbar-Section/search';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';
import { useAppDispatch } from '@/app/redux/store';
import { setMainWatchFavorites, updateFavorites } from '@/app/redux/market';
import Cookies from 'js-cookie';
import LogoWhite from '../../../../public/icons/logoWhite';
import './index.scss';
import { usePathname } from 'next/navigation';

function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isActive, setIsActive] = useState<string | null>('light');
  const dispatch = useAppDispatch();
  const pathname = usePathname();

  useEffect(() => {
    // Update favorites from cookies
    const favorites = JSON.parse(
      Cookies.get('favorites') === 'null' ||
      Cookies.get('favorites') === undefined
        ? '[]'
        : (Cookies.get('favorites') as string)
    );
    const mainWatchFavorites = JSON.parse(
      Cookies.get('mainWatchFavorites') === 'null' ||
      Cookies.get('mainWatchFavorites') === undefined
        ? '[]'
        : (Cookies.get('mainWatchFavorites') as string)
    );
    dispatch(updateFavorites(favorites));
    dispatch(setMainWatchFavorites(mainWatchFavorites));

    // Set activeId based on current pathname
    NavbarData.forEach((item) => {
      if (window.location.pathname.includes(item.name.toLowerCase())) {
        setActiveId(item.id);
      }
    });
  }, []);

  return (
    <Box className={pathname === '/news' ? 'headerbg' : ''}>
      <Container maxWidth="xl">
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="/">
            {pathname === '/news' ? <LogoWhite /> : <Logo />}
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
                {pathname === '/news' ? (
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
                  <Link href="/market/coin" style={{ textDecoration: 'none' }}>
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

          <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
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

            <SearchIcon color={pathname === '/news' ? "white" : ''} />
            <ProfileIcon color={pathname === '/news' ? "white" : ''}  />        
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;

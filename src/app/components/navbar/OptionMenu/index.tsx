'use client';

import React from 'react';
import Link from 'next/link';
import { Box, useMediaQuery } from '@mui/material';
import ThemeToggle from './ThemeToggle';
import ProfileMenu from './ProfileMenu';
import SearchIcon from '../../../../../public/icons/Navbar-Section/search';
import StarIcon from '../../../../../public/icons/Navbar-Section/starIcon';
import ProfileIcon from '../../../../../public/icons/Navbar-Section/profile';
import Menu from './Menu';
import { OptionMenuProps } from '../../../../../@types/app/OptionMenu.interface';

const OptionMenu = ({
  pathname,
  token,
  name,
  handleOpenAuth,
  handleAuthClick,
  handleLogout,
  handleClose,
  open,
  anchorEl,
  isActive,
  setIsActive,
  NavbarData,
  setActiveId,
}: OptionMenuProps) => {
  const isSmallScreen = useMediaQuery('(max-width: 978px)');
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: '25px',
        '@media (max-width: 1200px)': {
          gap: '12.5px',
        },
      }}
    >
      <ThemeToggle isActive={isActive} setIsActive={setIsActive} />

      <SearchIcon
        color={
          pathname === '/news' ||
          pathname.includes('/news/') ||
          pathname === '/articles' ||
          pathname.includes('technicals')
            ? 'white'
            : 'black'
        }
      />

      <Box
        component={Link}
        style={{ textDecoration: 'none' }}
        href="/favorites"
        sx={{
          '@media (max-width: 978px)': {
            display: 'none',
          },
        }}
      >
        <StarIcon
          color={
            !!pathname.includes('/favorites')
              ? 'rgb(243,143,56)'
              : pathname === '/news' ||
                  pathname === '/articles' ||
                  pathname === '/news/crypto'
                ? 'white'
                : pathname.includes('/technicals')
                  ? 'white'
                  : 'black'
          }
        />
      </Box>

      {token ? (
        <ProfileMenu
          handleAuthClick={handleAuthClick}
          handleLogout={handleLogout}
          handleClose={handleClose}
          open={open}
          anchorEl={anchorEl}
          name={name}
          pathname={pathname}
        />
      ) : (
        <Box
          onClick={handleOpenAuth}
          sx={{
            '@media (max-width: 978px)': {
              display: 'none',
            },
          }}
          style={{ textDecoration: 'none', cursor: 'pointer' }}
        >
          <ProfileIcon
            color={
              pathname === '/news' ||
              pathname === '/technicals' ||
              pathname === '/articles' ||
              pathname.includes('/technicals/') ||
              pathname === '/news/crypto'
                ? 'white'
                : 'black'
            }
          />
        </Box>
      )}

      {isSmallScreen && (
        <Menu
          pathname={pathname}
          setActiveId={setActiveId}
          NavbarData={NavbarData}
          token={token}
          handleOpenAuth={handleOpenAuth}
          handleLogout={handleLogout}
        />
      )}
    </Box>
  );
};

export default OptionMenu;

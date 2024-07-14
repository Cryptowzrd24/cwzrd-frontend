'use client';
import React, { useState } from 'react';
import Logo from '../../../../public/icons/logo';
import { NavbarData } from './data';
import LightmodeIcon from '../../../../public/icons/Navbar-Section/lightmode';
import DarkmodeIcon from '../../../../public/icons/Navbar-Section/darkmode';
import ProfileIcon from '../../../../public/icons/Navbar-Section/profile';
import SearchIcon from '../../../../public/icons/Navbar-Section/search';
import { Box, Container, Typography } from '@mui/material';
import Link from 'next/link';

function Navbar() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [isActive, setIsActive] = useState<string | null>('light');

  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Link href="/">
          <Logo />
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
              {item.name === 'Market' ? (
                <Link href="/market/coin" style={{ textDecoration: 'none' }}>
                  <Typography
                    variant="caption"
                    sx={{
                      fontSize: '16px',
                      color:
                        activeId === item.id
                          ? '#7248F7'
                          : 'rgba(17, 17, 17, 1)',
                      fontWeight: activeId === item.id ? '500' : '400',
                      cursor: 'pointer',
                      transition: 'transform 0.1s ease-in-out',
                      transform:
                        activeId === item.id ? 'scale(1.1)' : 'scale(1)',
                    }}
                    onClick={() => setActiveId(item.id)}
                  >
                    {item.name}
                  </Typography>
                </Link>
              ) : (
                <Typography
                  variant="caption"
                  sx={{
                    fontSize: '16px',
                    color:
                      activeId === item.id ? '#7248F7' : 'rgba(17, 17, 17, 1)',
                    fontWeight: activeId === item.id ? '500' : '400',
                    cursor: 'pointer',
                    transition: 'transform 0.1s ease-in-out',
                    transform: activeId === item.id ? 'scale(1.1)' : 'scale(1)',
                  }}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.name}
                </Typography>
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
            }}
          >
            <Box height={26.5} onClick={() => setIsActive('light')}>
              <LightmodeIcon isActive={isActive === 'light'} />{' '}
            </Box>
            <Box height={26.5} onClick={() => setIsActive('dark')}>
              <DarkmodeIcon isActive={isActive === 'dark'} />{' '}
            </Box>
          </Box>
          <SearchIcon />
          <ProfileIcon />
        </Box>
      </Box>
    </Container>
  );
}

export default Navbar;

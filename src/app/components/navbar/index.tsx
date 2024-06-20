'use client';
import React, { useState } from 'react';
import Logo from '../../../../public/icons/logo';
import { NavbarData } from './data';
import LightmodeIcon from '../../../../public/icons/Navbar-Section/lightmode';
import DarkmodeIcon from '../../../../public/icons/Navbar-Section/darkmode';
import ProfileIcon from '../../../../public/icons/Navbar-Section/profile';
import SearchIcon from '../../../../public/icons/Navbar-Section/search';
import { Box, Container, Typography } from '@mui/material';

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
        <Box>
          <Logo />
        </Box>
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
            <Typography
              key={item.id}
              variant="caption"
              sx={{
                fontSize: '16px',
                color:
                  activeId === item.id || item.id === '2'
                    ? '#7248F7'
                    : 'rgba(17, 17, 17, 1)',
                fontWeight: activeId === item.id ? '500' : '',
                cursor: 'pointer',
                letterSpacing: '0.5px',
              }}
              onClick={() => setActiveId(item.id)}
            >
              {item.name}
            </Typography>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
          <Box
            sx={{
              border: '1px solid rgba(17, 17, 17, 0.1)',
              borderRadius: '100px',
              padding: { xs: '2px', sm: '4px' },
              display: 'flex',
              cursor: 'pointer',
            }}
          >
            <Box height={40} onClick={() => setIsActive('light')}>
              <LightmodeIcon isActive={isActive === 'light'} />{' '}
            </Box>
            <Box height={40} onClick={() => setIsActive('dark')}>
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

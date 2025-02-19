import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { Typography } from '@mui/material';
import { IconButton } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LogoNav from '../../../../../public/icons/logoNav';
import Link from 'next/link';
import { MenuProps } from '../../../../../@types/app/Menu.interface';

export default function Menu({
  pathname,
  setActiveId,
  NavbarData,
  token,
  handleOpenAuth,
  handleLogout,
}: MenuProps) {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  const list = (
    <Box
      sx={{
        width: '350px',
        background: '#111',
        height: '100vh',
        pt: '24px',
        px: '16px',
        '@media (max-width:576px)': { width: 'calc(100vw - 32px)' },
        overflowY: 'auto',
      }}
      role="presentation"
      onClick={toggleDrawer(false)}
    >
      <Box
        sx={{
          width: '100%',
          height: '28px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '24px',
        }}
      >
        <Link href="/">
          <LogoNav />
        </Link>
        <IconButton onClick={() => setOpen(false)}>
          <ArrowForwardIosIcon sx={{ color: 'white' }} />
        </IconButton>
      </Box>
      <Box
        sx={{
          borderTop: '1px solid white',
          borderBottom: '1px solid white',
          py: '24px',
        }}
      >
        <List
          sx={{ p: 0, display: 'flex', flexDirection: 'column', gap: '24px' }}
        >
          {NavbarData.map((item) => (
            <ListItem key={item.id} sx={{ p: 0 }}>
              <Link
                href={`/${item.name !== 'Market' ? item.name.toLowerCase() : `market/coin`}`}
                style={{
                  cursor: 'pointer',
                  textDecoration: 'none',
                }}
              >
                <Typography
                  sx={{
                    fontSize: '16px',
                    color: pathname.includes(item.name.toLowerCase())
                      ? '#7248F7'
                      : '#fff',
                    transition: 'transform 0.1s ease-in-out',
                    fontWeight: 400,
                    lineBreak: '130%',
                    letterSpacing: '0.32px',
                  }}
                  onClick={() => setActiveId(item.id)}
                >
                  {item.name}
                </Typography>
              </Link>
            </ListItem>
          ))}
        </List>
      </Box>
      {token ? (
        <Button
          sx={{
            mt: '24px',
            width: '100%',
            padding: '12px 16px',
            borderRadius: '56px',
            background: 'rgba(128, 128, 128, 0.55)',
            fontWeight: 700,
            lineHeight: '130%',
            fontSize: '14px',
            color: '#fff',
          }}
          onClick={handleLogout}
        >
          Log Out
        </Button>
      ) : (
        <Box
          sx={{
            mt: '24px',
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
          }}
        >
          <Button
            sx={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '56px',
              background:
                'linear-gradient(90deg, #634DFD 59.15%, #BF48F7 86.31%)',
              fontWeight: 700,
              lineHeight: '130%',
              fontSize: '14px',
              color: '#fff',
            }}
            onClick={handleOpenAuth}
          >
            Create Account
          </Button>
          <Button
            sx={{
              width: '100%',
              padding: '12px 16px',
              borderRadius: '56px',
              background: 'transparent',
              border: '1px solid #fff',
              fontWeight: 700,
              lineHeight: '130%',
              fontSize: '14px',
              color: '#fff',
            }}
            onClick={handleOpenAuth}
          >
            Login
          </Button>
        </Box>
      )}
    </Box>
  );

  return (
    <div>
      <Button onClick={toggleDrawer(true)} sx={{ p: 0, minWidth: 'auto' }}>
        <MenuIcon />
      </Button>
      <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
        {list}
      </Drawer>
    </div>
  );
}

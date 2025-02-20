import React from 'react';
import { Button, Typography, Menu, MenuItem, Box } from '@mui/material';
import { ProfileMenuProps } from '../../../../../@types/app/ProfileMenu.interface';

const ProfileMenu = ({
  handleAuthClick,
  handleLogout,
  handleClose,
  open,
  anchorEl,
  name,
  pathname,
}: ProfileMenuProps) => {
  return (
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
            color:
              pathname === '/news' ||
              pathname === '/news/crypto' ||
              pathname === '/articles' ||
              pathname === '/technicals'
                ? 'white'
                : 'black',
            fontSize: '16px',
            paddingBlock: '5px',
            whiteSpace: 'nowrap',
          }}
        >
          {name.length > 7 ? `${name.slice(0, 5)}...` : name}
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
              background: 'transparent',
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
  );
};

export default ProfileMenu;

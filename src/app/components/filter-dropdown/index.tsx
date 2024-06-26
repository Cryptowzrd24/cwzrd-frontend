import React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Box } from '@mui/material';
import { FilterSearchIcon } from '../../../../public/icons/filterSearch';
import styles from './styles';

interface FilterDropdownProps {
  open: boolean;
  anchorEl: null | HTMLElement;
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
}

function FilterDropdown({ open, anchorEl, setAnchorEl }: FilterDropdownProps) {
  const options = [
    'Atria',
    'Callisto',
    'Dione',
    'Ganymede',
    'Hangouts Call',
    'Luna',
    'Oberon',
    'Phobos',
    'Pyxis',
    'Sedna',
    'Titania',
    'Triton',
    'Umbriel',
  ];

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: '520px',
            width: '280px',
            marginTop: '30px',
            borderRadius: '15px',
            overflowY: 'scroll',
          },
        }}
      >
        <Box sx={styles.searchContainer}>
          <FilterSearchIcon strokeOpacity={'1'} />
          <input
            style={styles.searchInput}
            placeholder={'Search...'}
            // onChange={(e: any) => setSearch(e.target.value)}
          />
        </Box>
        {options.map((option) => (
          <MenuItem
            key={option}
            // selected={option === 'Pyxis'}
            onClick={handleClose}
            sx={{
              fontWeight: 600,
              fontSize: '14px',
              fontFamily: 'Sf Pro Display',
              marginTop: '15px',
              paddingTop: '10px',
            }}
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default FilterDropdown;

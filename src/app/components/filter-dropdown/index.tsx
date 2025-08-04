import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import { Box, Divider, Typography } from '@mui/material';
import { FilterSearchIcon } from '../../../../public/icons/filterSearch';
import { Filters } from '@/app/constants/filters';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { selectFilter } from '@/app/redux/reducers/filters';

type FilterKey = keyof typeof Filters;
interface FilterDropdownProps {
  open: boolean;
  anchorEl: null | HTMLElement;
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
  filterKey: FilterKey;
  setIsAnyFilterActive: (value: boolean) => void;
  platforms: string[]; // new prop
}

function FilterDropdown({
  open,
  anchorEl,
  setAnchorEl,
  filterKey,
  setIsAnyFilterActive,
  platforms, // destructure new prop
}: FilterDropdownProps) {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');
  const [filteredMenuItems, setFilteredMenuItems] = useState<any>([]);
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelectFilter = (id: number, label: string) => {
    setAnchorEl(null);
    dispatch(selectFilter({ id, label }));
    setIsAnyFilterActive(true);
  };

  useEffect(() => {
    setFilteredMenuItems(
      platforms?.filter((item: any) =>
        item.toLowerCase().includes(searchString.toLowerCase()),
      ),
    );
  }, [searchString, platforms]);

  return (
    <Menu
      id="long-menu"
      MenuListProps={{
        'aria-labelledby': 'long-button',
      }}
      anchorEl={anchorEl}
      open={open}
      onClose={handleClose}
      slotProps={{
        paper: {
          sx: {
            maxHeight: '472px',
            width: '295px',
            borderRadius: '16px',
            overflowY: 'scroll',
            padding: '14px',
            boxShadow: '0px 4px 28px 0px rgba(0, 0, 0, 0.05)',
            '@media (max-width: 600px)': {
              width: '280px',
              padding: '12px',
              maxHeight: '400px',
            },
            '@media (max-width: 480px)': {
              width: '260px',
              padding: '10px',
              maxHeight: '350px',
            },
          },
        },
      }}
    >
      <Box sx={styles.searchContainer}>
        <FilterSearchIcon strokeOpacity={'0.5'} />
        <Box
          component="input"
          sx={styles.searchInput}
          placeholder={'Search...'}
          onChange={(e: any) => setSearchString(e.target.value)}
        />
      </Box>
      <Box
        sx={{
          padding: {
            xs: '16px 8px',
            sm: '20px 10px',
          },
        }}
      >
        <Typography
          sx={styles.dropdownSubheading}
          id="modal-modal-title"
          variant="h6"
          component="h6"
        >
          Popular {filterKey}
        </Typography>
        <Divider />
      </Box>
      {filteredMenuItems?.map((option: any) => (
        <Box
          sx={styles.menuItem}
          key={option}
          onClick={() => handleSelectFilter(option, filterKey)}
        >
          {option}
        </Box>
      ))}
    </Menu>
  );
}

export default FilterDropdown;

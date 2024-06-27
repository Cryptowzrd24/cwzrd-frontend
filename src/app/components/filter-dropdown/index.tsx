import React, { useEffect, useState } from 'react';
import Menu from '@mui/material/Menu';
import { Box, Divider, Typography } from '@mui/material';
import { FilterSearchIcon } from '../../../../public/icons/filterSearch';
import { Filters } from '@/app/constants/filters';
import styles from './styles';
import { useDispatch } from 'react-redux';
import { selectCategoryFilter } from '@/app/redux/reducers/filters';

type FilterKey = keyof typeof Filters;
interface FilterDropdownProps {
  open: boolean;
  anchorEl: null | HTMLElement;
  setAnchorEl: React.Dispatch<React.SetStateAction<null | HTMLElement>>;
  filterKey: FilterKey;
}

function FilterDropdown({
  open,
  anchorEl,
  setAnchorEl,
  filterKey,
}: FilterDropdownProps) {
  const dispatch = useDispatch();
  const [searchString, setSearchString] = useState('');
  const [filteredMenuItems, setFilteredMenuItems] = useState(
    Filters[filterKey],
  );
  const handleClose = (id: number, label: string) => {
    setAnchorEl(null);
    dispatch(selectCategoryFilter({ id, label }));
  };

  useEffect(() => {
    setFilteredMenuItems(
      Filters[filterKey].filter((item) =>
        item.label.toLowerCase().includes(searchString.toLowerCase()),
      ),
    );
  }, [searchString, filterKey]);

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
            onChange={(e: any) => setSearchString(e.target.value)}
          />
        </Box>
        <Box sx={{ padding: '10px' }}>
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
        {filteredMenuItems.map((option: any) => (
          <Box
            sx={styles.menuItem}
            key={option}
            onClick={() => handleClose(option.id, filterKey)}
          >
            {option.label}
          </Box>
        ))}
      </Menu>
    </div>
  );
}

export default FilterDropdown;

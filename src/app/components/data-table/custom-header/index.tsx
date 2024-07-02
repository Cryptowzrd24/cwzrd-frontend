'use client';

import { Box, MenuItem, Select, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchIcon } from '../../../../../public/icons/Grid-Header/search';
import { FilterIcon } from '../../../../../public/icons/Grid-Header/filter';
import { BoxIcon } from '../../../../../public/icons/Grid-Header/box';
import { ListIcon } from '../../../../../public/icons/Grid-Header/list';
import links from './data';
import { PageArrowDownIcon } from '../../../../../public/icons/Grid-Header/pageArrowDown';
import { FilterSearchIcon } from '../../../../../public/icons/filterSearch';
import { Filters } from '@/app/constants/filters';
import ClearIcon from '@mui/icons-material/Clear';

import styles from '@/app/components/data-table/custom-header/styles';

import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import AddIcon from '@mui/icons-material/Add';
import FilterDropdown from '../../filter-dropdown';
import FilterModal from '../../filter-modal';
import { useDispatch, useSelector } from 'react-redux';

import {
  clearAllFilters,
  clearSelectedFilter,
} from '../../../redux/reducers/filters';

interface CustomHeaderProps {
  search: string;
  setSearch: any;
  filter?: boolean;
  view?: boolean;
  onToggleView?: () => void;
}

type FilterKey = keyof typeof Filters;

export const CustomHeader = ({
  search,
  setSearch,
  filter = false,
  view = false,
  onToggleView = () => {},
}: CustomHeaderProps) => {
  const pathname = usePathname();
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const options = [10, 50, 100];

  const filterItem = useSelector((state: any) => state.filters);

  const [searchActive, setSearchActive] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [filterKey, setFilterKey] = useState<FilterKey>('category');
  const [isAnyFilterActive, setIsAnyFilterActive] = useState(false);

  const handleChange = (event: any) => {
    setPageSize(event.target.value);
  };

  const handleSearchActiveToggle = () => {
    setSearchActive(!searchActive);
  };

  const handleFilterActiveToggle = () => {
    setFilterActive(!filterActive);
  };

  const openFilterDropdown = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEl(event.currentTarget);
    setFilterKey(key as FilterKey);
  };

  const handleOpenFilterModal = () => setOpenFilterModal(true);

  const getLabel = (key: string): { label: string; isMatching: boolean } => {
    const filterValue = filterItem.filters[key];
    if (filterValue) {
      // Find the matching key in Filters object
      const filterArray = Filters[key as FilterKey];
      if (filterArray && Array.isArray(filterArray)) {
        // Iterate over the array and return the label with the same ID
        const matchingItem = filterArray.find(
          (item) => item.id === filterValue,
        );
        if (matchingItem) {
          return { label: matchingItem.label, isMatching: true };
        }
      }
    }

    return {
      label: key.charAt(0).toUpperCase() + key.slice(1),
      isMatching: false,
    };
  };

  const renderFilters = Object.keys(Filters).map((key: any) => {
    const { label, isMatching } = getLabel(key);
    return (
      <Chip
        key={key}
        sx={{
          border: isMatching ? '1px solid #7248F7' : 'none',
          '& .MuiChip-icon': {
            marginRight: isMatching ? '-10px' : '-12px',
          },
          color: isMatching ? '#7248F7' : 'default',
          fontWeight: isMatching ? 700 : 'default',
        }}
        label={label}
        icon={
          isMatching ? (
            <ClearIcon
              onClick={() => handleClearSelectedFilter(key)}
              sx={{ fontSize: '14px', color: '#7248F7' }}
            />
          ) : (
            <KeyboardArrowDownIcon />
          )
        }
        onClick={
          isMatching
            ? () => handleClearSelectedFilter(key)
            : (e) => handleClick(e, key)
        }
        clickable
      />
    );
  });

  const handleClearFilters = () => {
    dispatch(clearAllFilters());
    setIsAnyFilterActive(false);
  };

  const handleClearSelectedFilter = (label: string) => {
    dispatch(clearSelectedFilter({ label }));
  };

  return (
    <Box sx={styles.container}>
      <Box sx={{ display: 'flex', alignItems: 'center' }}>
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            style={styles.link(pathname === link.href)}
          >
            {link.label}
          </Link>
        ))}
        <Box sx={styles.filterContainer}>
          <Box onClick={handleSearchActiveToggle} sx={styles.iconBox}>
            <SearchIcon />
          </Box>
          <Typography sx={styles.typography}>Rows:</Typography>
          <Select
            sx={styles.select}
            labelId="pagination-select-label"
            id="pagination-select"
            value={pageSize}
            onChange={handleChange}
            disableUnderline
            IconComponent={(props) => (
              <Box
                component="svg"
                sx={{ width: '1em', height: '1em', color: '#7248F7' }}
                {...props}
              >
                <PageArrowDownIcon />
              </Box>
            )}
          >
            {options.map((option) => (
              <MenuItem
                key={option}
                value={option}
                sx={{ fontSize: '16px', fontWeight: 700 }}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
          {filter && (
            <Box onClick={handleFilterActiveToggle} sx={styles.iconBox}>
              <FilterIcon />
            </Box>
          )}
          {view && (
            <>
              <Box
                sx={{ ...styles.iconBox, background: 'transparent' }}
                onClick={onToggleView}
              >
                <BoxIcon />
              </Box>
              <Box sx={styles.iconBox}>
                <ListIcon />
              </Box>
            </>
          )}
        </Box>
      </Box>
      <AnimatePresence>
        {searchActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={styles.searchContainer}>
              <FilterSearchIcon
                strokeOpacity={search.length > 0 ? '1' : '0.5'}
              />
              <input
                style={styles.searchInput}
                placeholder={'Search...'}
                onChange={(e: any) => setSearch(e.target.value)}
              />
            </Box>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {filterActive && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Box sx={styles.filterContainerBox}>
              <Stack direction="row" spacing={1}>
                {renderFilters}
                <Chip
                  sx={{
                    '& .MuiChip-icon': {
                      marginRight: '-12px',
                    },
                  }}
                  label="Add Filter"
                  onClick={handleOpenFilterModal}
                  clickable
                  icon={<AddIcon sx={{ fontSize: '16px' }} />}
                />
              </Stack>
              {isAnyFilterActive && (
                <Chip
                  label="Clear Filters"
                  onClick={handleClearFilters}
                  clickable
                />
              )}
            </Box>
            {openFilterDropdown && (
              <FilterDropdown
                open={openFilterDropdown}
                anchorEl={anchorEl}
                setAnchorEl={setAnchorEl}
                filterKey={filterKey}
                setIsAnyFilterActive={setIsAnyFilterActive}
              />
            )}
            {openFilterModal && (
              <FilterModal
                open={openFilterModal}
                setOpen={setOpenFilterModal}
              />
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </Box>
  );
};

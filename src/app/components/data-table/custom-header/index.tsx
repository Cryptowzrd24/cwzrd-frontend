'use client';

import { Badge, Box, MenuItem, Select, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
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
} from '@/app/redux/reducers/filters';

interface CustomHeaderProps {
  search: string;
  setSearch: any;
  filter?: boolean;
  view?: boolean;
  volume?: any;
  setVolume?: (volume: any) => void;
  onToggleView?: () => void;
  activeIcon?: string;
  setPagination?: (pageNumber: number) => void;
}

type FilterKey = keyof typeof Filters;
const stylesPage = {
  select: (width: any) => ({
    '& .MuiSelect-select': {
      width: width,
      padding: '5px 16px',
      background: '#F0ECFF',
      color: '#7248F7',
      fontSize: '14px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      paddingRight: '24px !important',
    },
    '& .MuiSvgIcon-root': {
      color: '#7248F7',
    },
    '& .MuiOutlinedInput-notchedOutline': {
      border: 'none',
    },
    '& .MuiSelect-icon': {
      right: '15px',
    },
    backgroundColor: '#F0ECFF',
    borderRadius: '8px',
  }),
};
export const CustomHeader = ({
  search,
  setSearch,
  filter = false,
  view = false,
  volume,
  setVolume = () => {},
  onToggleView = () => {},
  activeIcon = 'BoxIcon',
  setPagination = () => {},
}: CustomHeaderProps) => {
  const [volumeValue, setVolumeValue] = useState('24h');
  const [platforms, setPlatforms] = useState([]);

  const pathname = usePathname();
  const dispatch = useDispatch();
  const [pageSize, setPageSize] = useState(10);
  const options = [10, 20, 50, 100];
  const volumes = ['24h', '7d', '30d'];
  const filterItem = useSelector((state: any) => state.filters);
  const filterCount = useSelector(
    (state: any) => state.filters.selectedFilterCount,
  );

  const [searchActive, setSearchActive] = useState(false);
  const [filterActive, setFilterActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openFilterModal, setOpenFilterModal] = useState(false);
  const [filterKey, setFilterKey] = useState<FilterKey>('platform');
  const [isAnyFilterActive, setIsAnyFilterActive] = useState(false);
  const [hasNonNullFilter, setHasNonNullFilter] = useState(false);
  const specificPaths = [
    'coin',
    'chains',
    'exchanges',
    'airdrops',
    'categories',
    'defi',
  ];

  const checkPathname = (pathname: string) => {
    const path = pathname.replace('/market/', '').toLowerCase();

    const matchingLink = specificPaths.find(
      (link) => link.toLowerCase() === path,
    );

    return !!matchingLink;
  };

  const isPathNameMatching = checkPathname(pathname);

  useEffect(() => {
    if (platforms && platforms.length > 0) return;
    const fetchPlatforms = async () => {
      try {
        const response = await fetch(
          'https://backend.cwzrd.co.uk/api/platforms/',
        );
        const data = await response.json();
        setPlatforms(data.platforms);
      } catch (error) {
        console.error('Error fetching platforms:', error);
      }
    };

    fetchPlatforms();
  }, []);

  const handleChange = (event: any) => {
    setPageSize(event.target.value);
  };

  const handleSearchActiveToggle = () => {
    setSearchActive(!searchActive);
    setFilterActive(false);
  };

  const handleFilterActiveToggle = () => {
    setFilterActive(!filterActive);
    setSearchActive(false);
  };

  const openFilterDropdown = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>, key: string) => {
    setAnchorEl(event.currentTarget);
    setFilterKey(key as FilterKey);
  };

  const handleChangeVolume = (event: any) => {
    setVolumeValue(event.target.value);
  };

  const handleOpenFilterModal = () => setOpenFilterModal(true);
  const getLabel = (key: string): { label: string; isMatching: boolean } => {
    if (key === 'platform' && filterItem.filters[key])
      return { label: filterItem.filters[key], isMatching: true };
    const filterValue = filterItem.filters[key];
    if (filterValue) {
      const filterArray = Filters[key as FilterKey];
      if (filterArray && Array.isArray(filterArray)) {
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
          width: 'auto',
          height: '33px',
          border: isMatching ? '1px solid #7248F7' : 'none',
          borderRadius: '8px',
          padding: '16px 12px 16px 16px',
          backgroundColor: 'rgba(114, 72, 247, 0.1)',
          color: 'rgba(114, 72, 247, 1)',
          '& .MuiChip-icon': {
            order: 2,
            color: 'rgba(114, 72, 247, 1)',
            margin: '0',
            fontSize: '16px',
          },
          '&:hover': {
            backgroundColor: 'rgba(114, 72, 247, 0.2)',
            color: 'rgba(114, 72, 247, 1)',
          },
          '& .MuiChip-label': {
            order: 1,
            overflow: 'visible !important',
            paddingLeft: '2px',
            paddingRight: '2px',
          },
          fontWeight: 700,
          fontSize: '14px',
        }}
        label={label}
        icon={
          isMatching ? (
            <ClearIcon
              onClick={() => handleClearSelectedFilter(key)}
              sx={{ fontSize: '14px', color: '#7248F7' }}
            />
          ) : (
            <KeyboardArrowDownIcon
              sx={{ fontSize: '16px', color: '#7248F7' }}
            />
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

  const chip = (
    <Chip
      sx={{
        width: '100px',
        height: '33px',
        borderRadius: '8px',
        padding: '10px 12px 10px 16px',
        backgroundColor: 'rgba(114, 72, 247, 0.1)',
        color: 'rgba(114, 72, 247, 1)',
        '& .MuiChip-icon': {
          order: 1,
          color: 'rgba(114, 72, 247, 1)',
          margin: '0',
          fontSize: '16px',
        },
        '&:hover': {
          backgroundColor: 'rgba(114, 72, 247, 0.2)',
          color: 'rgba(114, 72, 247, 1)',
        },
        '& .MuiChip-label': {
          order: 2,
          overflow: 'visible !important',
          paddingLeft: '4px',
          paddingRight: '15px',
        },
        fontWeight: 700,
        fontSize: '14px',
      }}
      label="Add Filter"
      onClick={handleOpenFilterModal}
      clickable
      icon={filterCount > 0 && filterCount !== null ? undefined : <AddIcon />}
    />
  );

  const handleClearFilters = () => {
    dispatch(clearAllFilters());
    setIsAnyFilterActive(false);
  };

  const handleClearSelectedFilter = (label: string) => {
    dispatch(clearSelectedFilter({ label }));
  };

  const getSelectClass = (value: any) => {
    return value === 100 || value == '24h' || '30d' ? '34px' : '26px';
  };

  useEffect(() => {
    const checkNonNullFilters = () => {
      const { category, algorithm, platform, industry } = filterItem.filters;
      return (
        category !== null ||
        algorithm !== null ||
        platform !== null ||
        industry !== null
      );
    };

    setHasNonNullFilter(checkNonNullFilters());
  }, [filterItem]);

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
          {isPathNameMatching && (
            <Box
              onClick={handleSearchActiveToggle}
              sx={
                searchActive
                  ? { ...styles.iconBox, ...styles.filterActive }
                  : { ...styles.iconBox }
              }
            >
              <SearchIcon />
            </Box>
          )}
          <Typography sx={styles.typography}>Rows:</Typography>
          <Select
            sx={stylesPage.select(getSelectClass(pageSize))}
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
                sx={{
                  display: option === pageSize ? 'none' : 'block',
                  fontSize: '16px',
                  fontWeight: 700,
                }}
                onClick={() => setPagination(option)}
              >
                {option}
              </MenuItem>
            ))}
          </Select>
          {volume && (
            <Select
              value={volumeValue}
              onChange={handleChangeVolume}
              disableUnderline
              sx={stylesPage.select(getSelectClass(volumeValue))}
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
              {volumes.map((v: any) => (
                <MenuItem
                  key={v}
                  value={v}
                  onClick={() => setVolume(v)}
                  sx={{
                    display: v === volume ? 'none' : 'block',
                    fontSize: '16px',
                    fontWeight: 700,
                  }}
                >
                  {v}
                </MenuItem>
              ))}
            </Select>
          )}

          {filter && (
            <Box
              onClick={handleFilterActiveToggle}
              sx={
                filterActive
                  ? { ...styles.iconBox, ...styles.filterActive }
                  : { ...styles.iconBox }
              }
            >
              <FilterIcon />
            </Box>
          )}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: '#1111110D',
              border: '1px solid #11111100',
              borderRadius: '8px',
              gap: '4px',
            }}
          >
            {view && (
              <>
                <Box>
                  <Box
                    sx={{
                      ...styles.iconBox,
                      background:
                        activeIcon === 'BoxIcon'
                          ? 'rgba(114, 72, 247, 0.1)'
                          : 'white',
                    }}
                    onClick={onToggleView}
                  >
                    <BoxIcon
                      color={activeIcon === 'BoxIcon' ? '#7248F7' : '#111111'}
                    />
                  </Box>
                </Box>
                <Box>
                  <Box
                    sx={{
                      ...styles.iconBox,
                      background:
                        activeIcon === 'ListIcon'
                          ? 'rgba(114, 72, 247, 0.1)'
                          : 'white',
                    }}
                    onClick={onToggleView}
                  >
                    <ListIcon
                      color={activeIcon === 'ListIcon' ? '#7248F7' : '#111111'}
                    />
                  </Box>
                </Box>
              </>
            )}
          </Box>
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
                value={search}
                style={styles.searchInput}
                placeholder={'Search...'}
                onChange={(e: any) => setSearch(e.target.value)}
              />
              {search !== '' && (
                <Chip
                  label="Clear Search"
                  onClick={() => setSearch('')}
                  clickable
                />
              )}
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
                {filterCount > 0 && filterCount !== null ? (
                  <Badge
                    badgeContent={filterCount}
                    color="secondary"
                    sx={{
                      '& .MuiBadge-badge': {
                        transform: 'translate(5px , -8px)',
                      },
                    }}
                  >
                    {chip}
                  </Badge>
                ) : (
                  chip
                )}
              </Stack>
              {((isAnyFilterActive && hasNonNullFilter) || filterCount > 0) && (
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
                platforms={platforms} // pass the platforms to the dropdown
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

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
import styles from '@/app/components/data-table/custom-header/styles';

interface CustomHeaderProps {
  search: string;
  setSearch: any;
  filter?: boolean;
  view?: boolean;
}

export const CustomHeader = ({
  search,
  setSearch,
  filter = false,
  view = false,
}: CustomHeaderProps) => {
  const pathname = usePathname();
  const [pageSize, setPageSize] = useState(10);
  const options = [10, 50, 100];

  const [searchActive, setSearchActive] = useState(false);

  const handleChange = (event: any) => {
    setPageSize(event.target.value);
  };

  const handleSearchActiveToggle = () => {
    setSearchActive(!searchActive);
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
            <Box sx={styles.iconBox}>
              <FilterIcon />
            </Box>
          )}
          {view && (
            <>
              <Box sx={{ ...styles.iconBox, background: 'transparent' }}>
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
    </Box>
  );
};

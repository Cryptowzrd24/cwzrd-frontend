'use client';

import { Box, MenuItem, Select, Typography } from '@mui/material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { SearchIcon } from '../../../../../public/icons/Grid-Header/search';
import { FilterIcon } from '../../../../../public/icons/Grid-Header/filter';
import { BoxIcon } from '../../../../../public/icons/Grid-Header/box';
import { ListIcon } from '../../../../../public/icons/Grid-Header/list';
import links from './data';
import { PageArrowDownIcon } from '../../../../../public/icons/Grid-Header/pageArrowDown';
import { FilterSearchIcon } from '../../../../../public/icons/filterSearch';

const styles = {
  link: (isActive: boolean) => ({
    fontSize: 14,
    fontWeight: 700,
    color: isActive ? '#7248F7' : '#11111199',
    background: isActive ? '#7248F71A' : 'transparent',
    textDecoration: 'none',
    padding: '11px 16px',
    lineHeight: '18.2px',
    borderRadius: '40px',
  }),
  iconBox: {
    padding: '10px',
    borderRadius: '8px',
    background: '#7248F71A',
    height: '20px',
    cursor: 'pointer',
  },
  select: {
    '& .MuiSelect-select': {
      width: '23px',
      padding: '9.5px 16px',
      background: '#F0ECFF',
      color: '#7248F7',
      fontSize: '16px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
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
  },
};

interface CustomHeaderProps {
  search: string;
  setSearch: any;
}

export const CustomHeader = ({ search, setSearch }: CustomHeaderProps) => {
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
    <Box
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        marginBottom: '24px',
      }}
    >
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
        <Box
          sx={{
            marginLeft: 'auto',
            display: 'flex',
            gap: '8px',
            alignItems: 'center',
          }}
        >
          <Box onClick={handleSearchActiveToggle} sx={styles.iconBox}>
            <SearchIcon />
          </Box>
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: 600,
              lineHeight: '20.8px',
              color: '#11111199',
            }}
          >
            Rows:
          </Typography>
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
          <Box sx={styles.iconBox}>
            <FilterIcon />
          </Box>
          <Box sx={{ ...styles.iconBox, background: 'transparent' }}>
            <BoxIcon />
          </Box>
          <Box sx={styles.iconBox}>
            <ListIcon />
          </Box>
        </Box>
      </Box>
      {searchActive && (
        <Box
          style={{
            paddingTop: '24px',
            borderTop: '1px solid #1111111A',
            paddingInline: '20px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <FilterSearchIcon strokeOpacity={search.length > 0 ? '1' : '0.5'} />
          <input
            style={{
              outline: 'none',
              border: 'none',
              background: 'transparent',
              fontSize: '16px',
              fontWeight: '500',
              lineHeight: '20.8px',
              fontFamily: 'Sf Pro Display',
              color: '#111111',
              width: '100%',
            }}
            placeholder={'Search...'}
            onChange={(e: any) => setSearch(e.target.value)}
          />
        </Box>
      )}
    </Box>
  );
};

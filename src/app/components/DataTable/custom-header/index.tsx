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

const styles = {
  link: (isActive: boolen) => ({
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
      width: '75px',
      padding: '9.5px 16px',
      background: '#F0ECFF',
      color: '#7248F7',
      fontSize: '16px',
      fontWeight: 700,
      display: 'flex',
      alignItems: 'center',
      borderRadius: '8px',
      minWidth: '64px',
    },
    '& .MuiSvgIcon-root': {
      color: '#7248F7',
    },
    backgroundColor: '#F0ECFF',
    borderRadius: '8px',
  },
};

export const CustomHeader = () => {
  const pathname = usePathname();
  const [pageSize, setPageSize] = useState(10);
  const options = [10, 20, 30, 50];

  const handleChange = (event: any) => {
    setPageSize(event.target.value);
  };

  return (
    <Box mb="24px" sx={{ display: 'flex', alignItems: 'center' }}>
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
        <Box sx={styles.iconBox}>
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
              <path d="M7 10l5 5 5-5z" />
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
  );
};

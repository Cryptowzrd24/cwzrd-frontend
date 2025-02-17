import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@mui/material';
import { NavLinkProps } from '../../../../@types/app/NavLink.interface';

const NavLink = ({ pathname, setActiveId, NavbarData }: NavLinkProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: '32px',
        '@media (max-width: 1200px)': {
          gap: '16px',
        },
        '@media (max-width: 978px)': {
          display: 'none',
        },
      }}
    >
      {NavbarData.map((item) => (
        <Box key={item.id}>
          <Link
            href={`/${item.name !== 'Market' ? item.name.toLowerCase() : `market/coin`}`}
            style={{
              cursor: 'pointer',
              textDecoration: 'none',
            }}
          >
            <Typography
              variant="caption"
              sx={{
                fontSize: '16px',
                color: pathname.includes(item.name.toLowerCase())
                  ? '#7248F7' // Highlight color when the pathname contains the item's name
                  : pathname === '/news' ||
                      pathname === '/articles' ||
                      pathname.includes('/news/') ||
                      pathname === '/technicals' ||
                      pathname.includes('/technicals/')
                    ? 'white' // Default white for `/news` or `/technicals` pages
                    : 'rgba(17, 17, 17, 1)', // Default dark color for other pages
                cursor: 'pointer',
                transition: 'transform 0.1s ease-in-out',
                fontWeight: 500,
                letterSpacing: '0.7px',
              }}
              onClick={() => setActiveId(item.id)}
            >
              {item.name}
            </Typography>
          </Link>
        </Box>
      ))}
    </Box>
  );
};

export default NavLink;

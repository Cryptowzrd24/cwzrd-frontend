import React from 'react';
import { Box } from '@mui/material';
import LightmodeIcon from '../../../../../public/icons/Navbar-Section/lightmode';
import DarkmodeIcon from '../../../../../public/icons/Navbar-Section/darkmode';
import { ThemeToggleProps } from '../../../../../@types/app/ThemeToggle.interface';

const ThemeToggle = ({ isActive, setIsActive }: ThemeToggleProps) => {
  return (
    <Box
      sx={{
        border: '1px solid rgba(17, 17, 17, 0.1)',
        borderRadius: '66.66px',
        padding: { xs: '2px', sm: '2.6px 3px 1.6px 2.6px' },
        display: 'flex',
        cursor: 'pointer',
        background: 'white',
      }}
    >
      <Box height={26.5} onClick={() => setIsActive('light')}>
        <LightmodeIcon isActive={isActive === 'light'} />
      </Box>
      <Box height={26.5} onClick={() => setIsActive('dark')}>
        <DarkmodeIcon isActive={isActive === 'dark'} />
      </Box>
    </Box>
  );
};

export default ThemeToggle;

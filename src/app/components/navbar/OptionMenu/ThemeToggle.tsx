import React from 'react';
import { Box } from '@mui/material';
import LightmodeIcon from '../../../../../public/icons/Navbar-Section/lightmode';
import DarkmodeIcon from '../../../../../public/icons/Navbar-Section/darkmode';
import { useAppDispatch, useAppSelector } from '@/app/redux/store';
import { setMode } from '@/app/redux/theme';

const ThemeToggle = () => {
  const dispatch = useAppDispatch();
  const mode = useAppSelector((state) => state.theme.mode);

  console.log(mode);
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
      <Box
        height={26.5}
        onClick={() => dispatch(setMode('light'))}
        // sx={{ background: mode === 'light' ? 'red' : 'white' }}
      >
        <LightmodeIcon isActive={mode === 'light'} />
      </Box>
      <Box
        height={26.5}
        onClick={() => dispatch(setMode('dark'))}
        // sx={{ background: mode === 'dark' ? 'red' : 'white' }}
      >
        <DarkmodeIcon isActive={mode === 'dark'} />
      </Box>
    </Box>
  );
};

export default ThemeToggle;

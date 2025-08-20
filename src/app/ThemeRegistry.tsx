'use client';

import { CssBaseline, ThemeProvider } from '@mui/material';
import { useSelector } from 'react-redux';
import { RootState } from '@/app/redux/store';
import { useMemo } from 'react';
import { getTheme } from '@/theme';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const theme = useMemo(() => getTheme(mode), [mode]);

  //   const theme = useMemo(
  //     () =>
  //       createTheme({
  //         palette: {
  //           mode,
  //           ...(mode === 'dark'
  //             ? {
  //                 text: { primary: '#238509' },
  //                 background: { default: '#121212', paper: '#1d1d1d' },
  //               }
  //             : {
  //                 text: { primary: '#09789' },
  //                 background: { default: '#ffffff', paper: '#f9f9f9' },
  //               }),
  //         },
  //         typography: existingTheme.typography, // keep your original sizes
  //       }),
  //     [mode],
  //   );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
}

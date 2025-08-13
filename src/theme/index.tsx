'use client';
import { createTheme } from '@mui/material';
import colors from './colors';

export const getTheme = (mode: 'light' | 'dark') =>
  createTheme({
    palette: {
      primary: {
        main: colors.primary,
      },
      secondary: {
        main: colors.secondary,
        light: colors.lightPurple,
      },
      common: {
        black: '#000',
        white: '#fff',
      },
      success: {
        main: colors.colorProfit,
      },
      error: {
        main: colors.colorLoss,
      },
      text: mode === 'dark' ? { primary: '#ffffff' } : { primary: '#000000' },
      background:
        mode === 'dark' ? { default: '#121212' } : { default: '#ffffff' },
      // Don't override text.primary unless you *really* want global text change
    },
    typography: {
      fontFamily: 'Sf Pro Display',
      h1: {
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: '38.4px',
        color: colors.primary,
        '@media (max-width:660px)': {
          fontSize: '36px',
          fontWeight: 600,
          lineHeight: '38px',
        },
      },
      h2: {
        color: colors.primary,
        fontSize: '32px',
        fontWeight: 700,
        lineHeight: '38.4px',
        '@media (max-width:660px)': {
          fontSize: '28px',
          fontWeight: 500,
          lineHeight: '35px',
        },
      },
      h3: {
        fontSize: '14px',
        fontWeight: 400,
        lineHeight: '21px',
        color: colors.primary,
        '@media (max-width:660px)': {
          fontSize: '16px',
        },
      },
      h4: {
        fontSize: '20px',
        fontWeight: 500,
        color: colors.primary,
        '@media (max-width:660px)': {
          fontSize: '16px',
        },
      },
      h5: {
        fontSize: '14px',
        fontWeight: 700,
        lineHeight: '18.2px',
        color: colors.primary,
        '@media (max-width:660px)': {
          fontSize: '16px',
        },
      },
      h6: {
        fontSize: '18px',
        lineHeight: 1,
        color: '#111111',
        fontFamily: 'Sf Pro Text',
        fontWeight: 'bold',
      },
      body1: {
        fontSize: '16px',
        fontWeight: 400,
        lineHeight: 1.2,
        color: colors.primary,
        '@media (max-width:660px)': {
          fontSize: '16px',
        },
      },
      body2: {
        fontSize: '13px',
        fontWeight: 400,
        color: colors.primary,
        '@media (max-width:660px)': {
          fontSize: '13px',
        },
        '@media (max-width:430px)': {
          fontSize: '12px',
        },
      },
      subtitle2: {
        fontSize: '12px',
        fontWeight: 700,
        lineHeight: '15.6px',
        letterSpacing: '2px',
        color: colors.primary,
        '@media (max-width:660px)': {
          fontSize: '13px',
        },
        '@media (max-width:430px)': {
          fontSize: '12px',
        },
      },
      caption: {
        fontSize: '10px',
        fontWeight: 500,
        color: colors.secondary,
        '@media (max-width:660px)': {
          fontSize: '12px',
        },
      },
      subtitle1: {
        fontSize: '10px',
        fontWeight: 500,
        lineHeight: '13px',
      },
    },
    components: {
      MuiContainer: {
        styleOverrides: {
          root: {
            '@media (max-width: 399px)': {
              paddingInline: '10px !important',
            },
            '@media (max-width: 599px)  and (min-width: 400px)': {
              paddingInline: '20px !important',
            },
            '@media (max-width: 1079px) and (min-width: 600px)': {
              paddingInline: '40px !important',
            },
            '@media (max-width: 1199px) and (min-width: 1080px)': {
              paddingInline: '60px !important',
            },
            '@media (max-width: 1439px) and (min-width: 1200px)': {
              paddingInline: '70px !important',
            },
            '@media (min-width: 1440px) ': {
              paddingInline: '80px !important',
            },
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            border: 'none',
            fontWeight: 500,
            borderRadius: '4px',
            textTransform: 'capitalize',
            boxShadow: 'none',
            '&:hover': {
              boxShadow: 'none',
            },
          },
          contained: {
            color: '#fff',
            backgroundColor: colors.secondary,
            '&:hover': {
              backgroundColor: '#927eff',
            },
          },
          outlined: ({ theme }) => ({
            transition: '.6s',
            background: 'transparent',
            border: `1px solid ${theme.palette.grey.A100}`,
            color: theme.palette.grey.A100,
            '&:hover': {
              border: `1px solid ${theme.palette.primary.main}`,
              color: theme.palette.primary.main,
              background: '#F6F8FA',
            },
          }),

          sizeLarge: {
            fontSize: '18px',
            padding: '16px 32px',
          },
          sizeMedium: {
            fontSize: '16px',
            padding: '14px 32px',
          },
          sizeSmall: {
            fontSize: '14px',
            padding: '8px 24px',
          },
        },
      },
    },
  });

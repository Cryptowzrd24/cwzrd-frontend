'use client';
import { createTheme } from '@mui/material';
import colors from './colors';

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    common: {
      black: '#000', // Example for common usage
      white: '#fff',
    },
    success: {
      main: colors.colorProfit,
    },
    error: {
      main: colors.colorLoss,
    },
  },
  typography: {
    fontFamily: 'Sf Pro Display',
    h1: {
      fontSize: '64px',
      fontWeight: 700,
      lineHeight: '64px',
      color: colors.primary,
      '@media (max-width:660px)': {
        fontSize: '36px',
        fontWeight: 600,
        lineHeight: '38px',
      },
    },
    h2: {
      fontSize: '56px',
      fontWeight: 600,
      color: colors.primary,
      lineHeight: '61px',
      '@media (max-width:660px)': {
        fontSize: '28px',
        fontWeight: 500,
        lineHeight: '35px',
      },
    },
    h3: {
      fontSize: '20px',
      fontWeight: 400,
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
      fontSize: '18px',
      fontWeight: 700,
      color: colors.primary,
      '@media (max-width:660px)': {
        fontSize: '16px',
      },
    },

    body1: {
      fontSize: '18px',
      fontWeight: 400,
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
      fontSize: '14px',
      fontWeight: 700,
      lineHeight: '18px',
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
      fontSize: '11px',
      fontWeight: 400,
      lineHeight: '14.3px',
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          '@media (max-width: 599px)': {
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
          color: '#fff', // Assuming you want white text
          backgroundColor: colors.secondary, // Direct use if dynamic theme reference isn't working
          '&:hover': {
            backgroundColor: '#927eff', // A lighter/darker version for hover
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

export default theme;

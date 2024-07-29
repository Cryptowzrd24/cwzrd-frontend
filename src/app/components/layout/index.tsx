// import { Provider } from 'react-redux';
// import { store } from '../../redux/store';
import { ThemeProvider } from '@mui/material';
import Navbar from '../navbar';
import Footer from '../footer';
import theme from '@/theme';
import TickerServer from '../ticker';
import StoreProvider from '@/app/StoreProvider';

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // <Provider store={store}>

    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <StoreProvider>
            <TickerServer />
            <Navbar />
            {children}
            <Footer />
          </StoreProvider>
        </body>
      </html>
    </ThemeProvider>
    // </Provider>
  );
}

// import { Provider } from 'react-redux';
// import { store } from '../../redux/store';
import { ThemeProvider } from '@mui/material';
import Navbar from '../navbar';
import Footer from '../footer';
import theme from '@/theme';
import TickerServer from '../ticker';
import StoreProvider from '@/app/StoreProvider';
import Script from 'next/script';

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ThemeProvider theme={theme}>
      <html lang="en">
        <body>
          <StoreProvider>
            <TickerServer />
            <Navbar />
            {children}
            <Footer />
          </StoreProvider>
          <Script src="/ticker_websocket.js" strategy="afterInteractive" />
        </body>
      </html>
    </ThemeProvider>
  );
}

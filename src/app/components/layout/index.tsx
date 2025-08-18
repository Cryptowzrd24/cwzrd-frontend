import Navbar from '../navbar';
import Footer from '../footer';
import TickerServer from '../ticker';
import StoreProvider from '@/app/StoreProvider';
import Script from 'next/script';
import ThemeRegistry from '@/app/ThemeRegistry';

export default function CustomLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>
          <TickerServer />
          <ThemeRegistry>
            <Navbar />
            {children}
            <Footer />
          </ThemeRegistry>
        </StoreProvider>
        <Script src="/ticker_websocket.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}

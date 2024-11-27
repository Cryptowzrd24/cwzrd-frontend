import type { Metadata } from 'next';
import './styles/globals.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-material.css';
import CustomLayout from './components/layout';

export const metadata: Metadata = {
  title: 'CRYPTOWZRD',
  description: 'Your home for everything crypto',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <CustomLayout>{children}</CustomLayout>
    </>
  );
}

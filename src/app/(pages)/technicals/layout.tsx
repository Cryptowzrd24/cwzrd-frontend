import TechnicalsHeader from '@/app/components/technicals-page/header';
import { TechnicalsCategory } from '@/app/components/technicals-page/technicals-categories';
import { Container } from '@mui/material';

export default function TechnicalsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container maxWidth="xl">
        <TechnicalsHeader />
        <TechnicalsCategory />
        {children}
      </Container>
    </>
  );
}

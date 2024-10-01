import NewsHeader from '@/app/components/news/header';
import { NewsCategory } from '@/app/components/news/main/news-categories';
import { Container } from '@mui/material';

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container style={{ marginTop: 16 }} maxWidth="xl">
        <NewsHeader />
        <NewsCategory />
        {children}
      </Container>
    </>
  );
}

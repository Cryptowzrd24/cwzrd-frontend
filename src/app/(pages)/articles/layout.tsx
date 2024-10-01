import NewsHeader from '@/app/components/news/header';
import { NewsCategory } from '@/app/components/news/main/news-categories';
import { Container } from '@mui/material';

export default function ArticlesLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Container maxWidth="xl">
        <NewsHeader />
        <NewsCategory />
        {children}
      </Container>
    </>
  );
}

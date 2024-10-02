import ArticleHeader from '@/app/components/articles/components/article-header';
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
        <ArticleHeader />
        <NewsCategory />
        {children}
      </Container>
    </>
  );
}

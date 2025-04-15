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
      <Container
        maxWidth="xl"
        sx={{
          '@media (max-width: 2560px)': { paddingInline: '20px !important' },
          '@media (max-width: 599px)': { paddingInline: '16px !important' },
        }}
      >
        <NewsHeader isNews={false} />
        <NewsCategory />
        {children}
      </Container>
    </>
  );
}

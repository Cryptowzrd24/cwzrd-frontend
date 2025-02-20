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
      <Container
        maxWidth="xl"
        sx={{
          marginTop: 2,
          '@media (max-width: 1520px)': { paddingInline: '20px !important' },
          '@media (max-width: 599px)': { paddingInline: '5px !important' },
        }}
      >
        <NewsHeader isNews={true} />
        <NewsCategory />
        {children}
      </Container>
    </>
  );
}

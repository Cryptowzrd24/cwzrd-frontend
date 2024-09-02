import NewsHeader from '@/app/components/news/header';
import { NewsCategory } from '@/app/components/news/main/news-categories';
import { Container } from '@mui/material';
import { headers } from 'next/headers';

export default function NewsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const headersList = headers();
  // read the custom x-url header
  const header_url = headersList.get('x-url') || '';
  console.log('::==>>', header_url);
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

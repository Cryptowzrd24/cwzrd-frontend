'use client';
import { Box, Container, Link } from '@mui/material';
import SearchIcon from '../../../../../../public/icons/Navbar-Section/search';
import { usePathname } from 'next/navigation';

export const NewsCategory: React.FC = () => {
  const pathname = usePathname();

  const newsData = [
    {
      name: 'All News',
      id: 1,
      link: pathname.includes('/articles') ? '/articles' : '/news',
    },
    { name: 'AI', id: 2, link: '/news' },
    { name: 'B2B', id: 3, link: '/news' },
    { name: 'Bitcoin', id: 4, link: '/news' },
    { name: 'Cryptocurrency', id: 5, link: '/news/crypto' },
    { name: 'De-Fi', id: 6, link: '/news' },
    { name: 'Exchanges', id: 7, link: '/news' },
    { name: 'Featured', id: 8, link: '/news' },
    { name: 'Invested', id: 9, link: '/news' },
  ];
  return (
    <Container
      sx={{
        display: 'flex',
        marginBlock: '10px 24px',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '24px',
        height: '72px',
        maxWidth: '100% !important',
        boxShadow: '0px 4px 28px 0px #0000000D',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 2,
          marginLeft: '-50px',
        }}
      >
        {newsData.map((item, index) => (
          <Box
            key={index}
            sx={
              (pathname === '/news' && item.name === 'All News') ||
              (pathname.includes('crypto') && item.name === 'Cryptocurrency')
                ? {
                    height: '40px',
                    width: '120px',
                    backgroundColor: 'rgb(239,234,254)',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgb(101,101,101)',
                  }
                : {
                    color: 'rgb(112,112,112)',
                  }
            }
          >
            <Link
              key={item.id}
              sx={{
                textDecoration: 'none',
                textAlign: 'center',
                fontSize: '14px',
                fontWeight: 700,
                paddingInline: '5px',
                marginInline: '5px',
                color: `${
                  (pathname === '/news' && item.name === 'All News') ||
                  (pathname.includes('crypto') &&
                    item.name === 'Cryptocurrency')
                    ? '#7248F7'
                    : 'inherit'
                }`,
                ':hover': {
                  color: '#7248F7',
                },
              }}
              href={item.link}
            >
              {item.name}
            </Link>
          </Box>
        ))}
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          marginRight: '-42px',

          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        <SearchIcon height={20} width={20} />
      </Box>
    </Container>
  );
};

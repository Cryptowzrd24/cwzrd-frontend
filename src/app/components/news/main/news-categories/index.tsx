import { Box, Container, Link } from '@mui/material';
import SearchIcon from '../../../../../../public/icons/Navbar-Section/search';

const newsData = [
  { name: 'All News', id: 1, link: '/news' },
  { name: 'AI', id: 2, link: '/news' },
  { name: 'B2B', id: 3, link: '/news' },
  { name: 'Bitcoin', id: 4, link: '/news' },
  { name: 'Cryptocurrency', id: 5, link: '/news' },
  { name: 'De-Fi', id: 6, link: '/news' },
  { name: 'Exchanges', id: 7, link: '/news' },
  { name: 'Featured', id: 8, link: '/news' },
  { name: 'Invested', id: 9, link: '/news' },
];

export const NewsCategory: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        marginBlock: '30px',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '18px',
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
        }}
      >
        {newsData.map((item, index) => (
          <Box
            key={index}
            sx={
              item.name == 'All News'
                ? {
                    height: '40px',
                    width: '90px',
                    backgroundColor: 'rgb(239,234,254)',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgb(101,101,101)',
                  }
                : {
                    color: 'rgb(112,112,112)',
                    ':hover': {
                      backgroundColor: 'rgb(239,234,254)',
                      height: '40px',
                      width: '90px',
                      color: '#7248F7',
                      borderRadius: '30px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      cursor: 'pointer',
                    },
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
                color: `${item.name == 'All News' ? '#7248F7' : 'inherit'}`,
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
      <Box>
        <SearchIcon />
      </Box>
    </Container>
  );
};

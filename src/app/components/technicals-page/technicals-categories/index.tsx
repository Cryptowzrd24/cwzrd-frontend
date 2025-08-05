import { Box, Container, Link } from '@mui/material';
import SearchIcon from '../../../../../public/icons/Navbar-Section/search';

const newsData = [
  { name: 'All Analysis', id: 1, link: '/technicals' },
  { name: 'BTC', id: 2, link: '/technicals' },
  { name: 'ETH', id: 3, link: '/technicals' },
  { name: 'LTC', id: 4, link: '/technicals' },
  { name: 'XRP', id: 5, link: '/technicals' },
  { name: 'LINK', id: 6, link: '/technicals' },
];

export const TechnicalsCategory: React.FC = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        position: 'relative',
        top: '-9px',
        marginTop: '-35px',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: '24px',
        height: '72px',
        maxWidth: '100% !important',
        boxShadow: '0px 4px 28px 0px #0000000D',
        justifyContent: 'space-between',

        '@media (min-width: 1440px)': {
          paddingInline: '20px !important',
        },

        '@media (max-width: 1024px)': {
          marginTop: '10px',
        },

        '@media (max-width: 768px)': {
          backgroundColor: 'transparent',
          boxShadow: 'none',
          paddingInline: '0px !important',
          marginTop: '0px',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          height: '100%',
          flex: 1,
          
          '@media (max-width: 768px)': {
            overflowX: 'auto',
            overflowY: 'hidden',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            paddingLeft: '16px',
            paddingRight: '16px',
            '@media (max-width: 576px)': {
              paddingLeft: '0px',
              paddingRight: '0px',
            },
          },
        }}
      >
        {newsData.map((item, index) => (
          <Box
            key={index}
            sx={
              item.name == 'All Analysis'
                ? {
                    // height: '40px',
                    // width: '120px',
                    padding: '11px 16px',
                    backgroundColor: 'rgba(114, 72, 247, 0.1)',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(17, 17, 17, 0.6)',
                    flexShrink: 0,
                  }
                : {
                    color: 'rgba(17, 17, 17, 0.6)',
                    flexShrink: 0,
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
                paddingInline: '8px',
                marginInline: '8px',
                whiteSpace: 'nowrap',
                color: `${item.name == 'All Analysis' ? 'rgba(114, 72, 247, 1)' : 'inherit'}`,
                ':hover': {
                  color: 'rgba(114, 72, 247, 1)',
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
          paddingLeft: '8px',
          flexShrink: 0,

          ':hover': {
            cursor: 'pointer',
          },

          '@media (max-width: 768px)': {
            paddingRight: '16px',
          },
        }}
      >
        <SearchIcon height={20} width={20} color={'rgba(17, 17, 17, 1)'} />
      </Box>
    </Container>
  );
};

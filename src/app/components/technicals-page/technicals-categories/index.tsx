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
        // marginBlock: '30px',
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
          marginLeft: '-50px',
        }}
      >
        {newsData.map((item, index) => (
          <Box
            key={index}
            sx={
              item.name == 'All Analysis'
                ? {
                    // height: '40px',
                    // width: '106px',
                    padding: '11px 16px',
                    backgroundColor: 'rgba(114, 72, 247, 0.1)',
                    borderRadius: '30px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(17, 17, 17, 0.6)',
                  }
                : {
                    color: 'rgba(17, 17, 17, 0.6)',
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
          marginRight: '-42px',

          ':hover': {
            cursor: 'pointer',
          },
        }}
      >
        <SearchIcon height={20} width={20} color={'rgba(17, 17, 17, 1)'} />
      </Box>
    </Container>
  );
};

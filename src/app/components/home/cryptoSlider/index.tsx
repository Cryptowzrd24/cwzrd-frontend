// // components/CryptoSlider.tsx

import Slider from 'react-slick';
import CryptoCard from './CryptoCard';
import { cryptoData } from './data';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PreviousArrow = ({ onClick, isNarrow }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: isNarrow ? '110%' : '52%',
      bottom: isNarrow ? 8 : 'auto',
      left: isNarrow ? 'calc(50% - 56px)' : '-60px',
      width: '40px',
      height: '40px',
      transform: isNarrow ? 'none' : 'translateY(-50%)',
      zIndex: 1,
      background: '#FFF',
      '&:hover': {
        background: '#f0f0f0',
      },
    }}
  >
    <ArrowBackIosNewIcon
      sx={{
        fontSize: '18px',
        color: 'rgba(17, 17, 17, 1)',
      }}
    />
  </IconButton>
);

const NextArrow = ({ onClick, isNarrow }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: isNarrow ? '110%' : '52%',
      bottom: isNarrow ? 8 : 'auto',
      right: isNarrow ? 'auto' : '-60px',
      left: isNarrow ? 'calc(50% + 16px)' : 'auto',
      width: '40px',
      height: '40px',
      transform: isNarrow ? 'none' : 'translateY(-50%)',
      zIndex: 1,
      background: '#FFF',
      '&:hover': {
        background: '#f0f0f0',
      },
      dotsClass: 'slick-dots slick-thumb',
    }}
  >
    <ArrowForwardIosIcon
      sx={{
        fontSize: '18px',
        color: 'rgba(17, 17, 17, 1)',
      }}
    />
  </IconButton>
);

export default function CryptoSlider() {
  const theme = useTheme();
  const isLgUp = useMediaQuery(theme.breakpoints.up('lg'));
  const isMdUp = useMediaQuery(theme.breakpoints.up('md'));
  const slidesToShow = isLgUp ? 3 : isMdUp ? 2 : 1;
  const isNarrow = useMediaQuery('(max-width:600px)');

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    nextArrow: <NextArrow isNarrow={isNarrow} />,
    prevArrow: <PreviousArrow isNarrow={isNarrow} />,
    arrowsPosition: 'bottom',
  };

  return (
    <Box
      display="flex"
      justifyContent="center"
      margin="0 auto"
      width="100%"
      height={{ xs: '140px', sm: '70px' }}
    >
      <Box sx={{ width: { xs: '100%', sm: '70%', md: '85%' } }} height="100%">
        <Slider {...settings} className="technicals-slick">
          {cryptoData.map((crypto) => (
            <Box key={crypto.symbol}>
              <CryptoCard {...crypto} />
            </Box>
          ))}
        </Slider>
      </Box>
    </Box>
  );
}

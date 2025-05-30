// // components/CryptoSlider.tsx

import Slider from 'react-slick';
import CryptoCard from './CryptoCard';
import { cryptoData } from './data';
import { Box, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const PreviousArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: '52%',
      left: '-60px',
      width: '40px',
      height: '40px',
      transform: 'translateY(-50%)',
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

const NextArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: '52%',
      right: '-60px',
      width: '40px',
      height: '40px',
      transform: 'translateY(-50%)',
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
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PreviousArrow />,
  };

  return (
    <Box width="100%" display="flex" justifyContent="center">
      <Box width="92%">
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

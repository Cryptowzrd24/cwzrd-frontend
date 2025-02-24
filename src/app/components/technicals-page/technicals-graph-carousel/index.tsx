'use client';
// import React from 'react';
// import { Box, IconButton } from '@mui/material';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import Slider from 'react-slick';
// import CarouselCard from './carousel-card';

// const PreviousArrow = ({ onClick }: any) => (
//   <IconButton
//     onClick={onClick}
//     sx={{
//       cursor: 'pointer',
//       position: 'absolute',
//       top: '52%',
//       left: '11px',
//       width: '40px',
//       height: '40px',
//       transform: 'translateY(-50%)',
//       zIndex: 1,
//       background: '#f0f0f0',
//       '&:hover': {
//         background: '#f0f0f0',
//       },
//     }}
//   >
//     <ArrowBackIosNewIcon
//       sx={{
//         fontSize: '18px',
//         color: 'rgba(17, 17, 17, 1)',
//       }}
//     />
//   </IconButton>
// );

// const NextArrow = ({ onClick }: any) => (
//   <IconButton
//     onClick={onClick}
//     sx={{
//       cursor: 'pointer',
//       position: 'absolute',
//       top: '52%',
//       right: '11px',
//       width: '40px',
//       height: '40px',
//       transform: 'translateY(-50%)',
//       zIndex: 1,
//       background: '#f0f0f0',
//       '&:hover': {
//         background: '#f0f0f0',
//       },
//     }}
//   >
//     <ArrowForwardIosIcon
//       sx={{
//         fontSize: '18px',
//         color: 'rgba(17, 17, 17, 1)',
//       }}
//     />
//   </IconButton>
// );

// const TechnicalGraphCarousel = () => {
//   const settings = {
//     dots: false,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: true,
//     prevArrow: <PreviousArrow onClick={() => {}} />,
//     nextArrow: <NextArrow onClick={() => {}} />,
//     dotsClass: 'slick-dots slick-thumb',
//   };

//   const renderCards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((elem) => {
//     return (
//       <Box
//         key={elem}
//         sx={{
//           display: 'flex !important',
//           justifyContent: 'center',
//         }}
//       >
//         <CarouselCard />
//       </Box>
//     );
//   });

//   return (
//     <Box>
//       <Slider className="technicals-slick" {...settings}>
//         {renderCards}
//       </Slider>
//     </Box>
//   );
// };

// export default TechnicalGraphCarousel;

import React from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Slider from 'react-slick';
import CarouselCard from './carousel-card';

const TechnicalGraphCarousel = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px - 900px

  const PreviousArrow = ({ onClick }: any) => (
    <IconButton
      onClick={onClick}
      sx={{
        cursor: 'pointer',
        position: 'absolute',
        top: isTablet || isMobile ? '110%' : '52%',
        left: '11px',
        width: '40px',
        height: '40px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        background: '#f0f0f0',
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
        top: isTablet || isMobile ? '110%' : '52%',
        right: '11px',
        width: '40px',
        height: '40px',
        transform: 'translateY(-50%)',
        zIndex: 1,
        background: '#f0f0f0',
        '&:hover': {
          background: '#f0f0f0',
        },
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

  const settings = {
    dots: isMobile || isTablet,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
    dotsClass: 'slick-dots slick-thumb',
  };

  const renderCards = Array.from({ length: 10 }, (_, i) => (
    <Box
      key={i}
      sx={{
        display: 'flex !important',
        justifyContent: 'center',
      }}
    >
      <CarouselCard />
    </Box>
  ));

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        marginBottom: isTablet || isMobile ? '50px' : '0px',
      }}
    >
      <Slider className="technicals-slick" {...settings}>
        {renderCards}
      </Slider>
    </Box>
  );
};

export default TechnicalGraphCarousel;

// Previous code not responsive
// 'use client';
// import React from 'react';
// import { Box, IconButton } from '@mui/material';
// import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// import 'slick-carousel/slick/slick.css';
// import 'slick-carousel/slick/slick-theme.css';

// import FinancialNewsCardVertical from '../financial-news-card-vertical';
// import Slider from 'react-slick';

// const PreviousArrow = ({ onClick }: any) => (
//   <IconButton
//     onClick={onClick}
//     sx={{
//       cursor: 'pointer',
//       position: 'absolute',
//       top: '104%',
//       left: '6px',
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
//       top: '104%',
//       right: '0px',
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

// const FinancialNewsCarousel = ({ noBackground = false }) => {
//   const settings = {
//     dots: true,
//     infinite: false,
//     speed: 500,
//     slidesToShow: 5,
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
//           paddingLeft: '10px',
//           paddingBlock: '20px',
//           boxSizing: 'border-box',
//         }}
//       >
//         <FinancialNewsCardVertical noBackground={noBackground} />
//       </Box>
//     );
//   });

//   return (
//     <Box>
//       <Slider {...settings}>{renderCards}</Slider>
//     </Box>
//   );
// };

// export default FinancialNewsCarousel;

// Responsive React Slick Slider
'use client';
import React from 'react';
import { Box, IconButton, useMediaQuery, useTheme } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import FinancialNewsCardVertical from '../financial-news-card-vertical';
import Slider from 'react-slick';
import { StaticImageData } from 'next/image';

const PreviousArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: '110%',
      left: '5px',
      width: '40px',
      height: '40px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      background: '#f0f0f0',
      '&:hover': { background: '#e0e0e0' },
    }}
  >
    <ArrowBackIosNewIcon
      sx={{ fontSize: '15px', color: 'rgba(17, 17, 17, 1)' }}
    />
  </IconButton>
);

const NextArrow = ({ onClick }: any) => (
  <IconButton
    onClick={onClick}
    sx={{
      cursor: 'pointer',
      position: 'absolute',
      top: '110%',
      right: '5px',
      width: '40px',
      height: '40px',
      transform: 'translateY(-50%)',
      zIndex: 1,
      background: '#f0f0f0',
      '&:hover': { background: '#e0e0e0' },
    }}
  >
    <ArrowForwardIosIcon
      sx={{ fontSize: '15px', color: 'rgba(17, 17, 17, 1)' }}
    />
  </IconButton>
);

const FinancialNewsCarousel = ({
  noBackground = false,
  image,
  titleWidth,
  descriptionWidth,
}: {
  noBackground?: boolean;
  image?: string | StaticImageData;
  titleWidth?: string;
  descriptionWidth?: string;
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // <600px
  const isTablet = useMediaQuery(theme.breakpoints.between('sm', 'md')); // 600px - 900px

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 5, // Adjusts based on screen size
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
        // padding: { xs: '4px', sm: '6px', md: '8px' },
        marginInline: '-10px',
        boxSizing: 'border-box',
      }}
    >
      <FinancialNewsCardVertical
        noBackground={noBackground}
        image={image}
        titleMaxWidth={titleWidth}
        descriptionMaxWidth={descriptionWidth}
      />
    </Box>
  ));

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
      }}
    >
      <Slider {...settings}>{renderCards}</Slider>
    </Box>
  );
};

export default FinancialNewsCarousel;

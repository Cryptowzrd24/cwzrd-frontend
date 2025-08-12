'use client';
import React, { ReactNode, createContext, useContext } from 'react';
import { Box, IconButton, useMediaQuery } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

// Responsive configuration interface
export interface ResponsiveConfig {
  breakpoint: number;
  slidesToShow: number;
  slidesToScroll: number;
  dots?: boolean;
  arrows?: boolean;
  infinite?: boolean;
  speed?: number;
}

// Responsive context
interface ResponsiveContextType {
  responsiveConfig?: ResponsiveConfig[];
  overrideResponsive?: boolean;
}

const ResponsiveContext = createContext<ResponsiveContextType>({});

export const ResponsiveProvider: React.FC<{
  children: ReactNode;
  responsiveConfig?: ResponsiveConfig[];
  overrideResponsive?: boolean;
}> = ({ children, responsiveConfig, overrideResponsive = false }) => {
  return (
    <ResponsiveContext.Provider
      value={{ responsiveConfig, overrideResponsive }}
    >
      {children}
    </ResponsiveContext.Provider>
  );
};

export const useResponsiveConfig = () => useContext(ResponsiveContext);

interface CarouselSettings {
  dots?: boolean;
  infinite?: boolean;
  speed?: number;
  slidesToShow?: number;
  slidesToScroll?: number;
  arrows?: boolean;
  dotsClass?: string;
  responsive?: any[];
  [key: string]: any;
}

interface ArrowProps {
  onClick?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

interface ReusableCarouselProps {
  children: ReactNode;
  settings?: Partial<CarouselSettings>;
  arrowPosition?: 'top' | 'bottom' | 'center';
  arrowOffset?: { top?: string; left?: string; right?: string };
  arrowSize?: { width: string; height: string };
  arrowColor?: string;
  arrowBackground?: string;
  arrowHoverBackground?: string;
  showArrows?: boolean;
  className?: string;
  sx?: any;
  // New props for responsive override
  responsiveConfig?: ResponsiveConfig[];
  overrideResponsive?: boolean;
}

const ReusableCarousel: React.FC<ReusableCarouselProps> = ({
  children,
  settings = {},
  arrowPosition = 'bottom',
  arrowOffset = {},
  arrowSize = { width: '40px', height: '40px' },
  arrowColor = 'rgba(17, 17, 17, 1)',
  arrowBackground = '#f0f0f0',
  arrowHoverBackground = '#e0e0e0',
  showArrows = true,
  className,
  sx,
  responsiveConfig,
  overrideResponsive = false,
}) => {
  const {
    responsiveConfig: contextConfig,
    overrideResponsive: contextOverride,
  } = useResponsiveConfig();

  const isMobile = useMediaQuery('(max-width: 576px)');
  const isTablet = useMediaQuery('(max-width: 768px)');

  // Use provided responsive config or context config or default
  const finalResponsiveConfig = responsiveConfig || contextConfig;
  const shouldOverride = overrideResponsive || contextOverride;

  // Default responsive settings
  const defaultResponsive = [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ];

  // Convert custom responsive config to slick format
  const convertResponsiveConfig = (config: ResponsiveConfig[]) => {
    return config.map((item) => ({
      breakpoint: item.breakpoint,
      settings: {
        slidesToShow: item.slidesToShow,
        slidesToScroll: item.slidesToScroll,
        dots: item.dots !== undefined ? item.dots : true,
        arrows: item.arrows !== undefined ? item.arrows : showArrows,
        infinite: item.infinite !== undefined ? item.infinite : false,
        speed: item.speed !== undefined ? item.speed : 500,
      },
    }));
  };

  // Use custom responsive config if provided, otherwise use default
  const finalResponsive =
    shouldOverride && finalResponsiveConfig
      ? convertResponsiveConfig(finalResponsiveConfig)
      : defaultResponsive;

  // Calculate arrow positioning with full width span
  const getArrowPosition = () => {
    const basePosition = {
      position: 'absolute' as const,
      transform: 'translateY(-50%)',
      zIndex: 1,
      width: arrowSize.width,
      height: arrowSize.height,
      background: arrowBackground,
      '&:hover': {
        background: arrowHoverBackground,
      },
    };

    switch (arrowPosition) {
      case 'top':
        return {
          ...basePosition,
          top: arrowOffset.top || '10px',
        };
      case 'center':
        return {
          ...basePosition,
          top: '50%',
          transform: 'translateY(-50%)',
        };
      case 'bottom':
      default:
        return {
          ...basePosition,
          top: arrowOffset.top || 'calc(100% + 20px)', // Default 20px below carousel
        };
    }
  };

  const arrowStyles = getArrowPosition();

  const PreviousArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        ...arrowStyles,
        left: arrowOffset.left || '0px', // Start from left edge
        cursor: 'pointer',
      }}
    >
      <ArrowBackIosNewIcon
        sx={{
          fontSize: '15px',
          color: arrowColor,
        }}
      />
    </IconButton>
  );

  const NextArrow: React.FC<ArrowProps> = ({ onClick }) => (
    <IconButton
      onClick={onClick}
      sx={{
        ...arrowStyles,
        right: arrowOffset.right || '0px', // End at right edge
        cursor: 'pointer',
      }}
    >
      <ArrowForwardIosIcon
        sx={{
          fontSize: '15px',
          color: arrowColor,
        }}
      />
    </IconButton>
  );

  // Default settings with responsive behavior and full-width dots
  const defaultSettings: CarouselSettings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: isMobile ? 1 : isTablet ? 2 : 5,
    slidesToScroll: 1,
    arrows: showArrows,
    prevArrow: showArrows ? <PreviousArrow /> : undefined,
    nextArrow: showArrows ? <NextArrow /> : undefined,
    dotsClass: 'slick-dots slick-thumb',
    responsive: finalResponsive,
  };

  // Merge user settings with defaults
  const finalSettings = {
    ...defaultSettings,
    ...settings,
    // Ensure arrows are properly set if user overrides
    prevArrow:
      settings.arrows !== false
        ? settings.prevArrow || <PreviousArrow />
        : undefined,
    nextArrow:
      settings.arrows !== false
        ? settings.nextArrow || <NextArrow />
        : undefined,
  };

  return (
    <Box
      className={className}
      sx={{
        position: 'relative',
        width: '100%',
        // Add bottom margin to accommodate arrows and dots
        marginBottom: arrowPosition === 'bottom' ? '60px' : '0px',
        ...sx,
        // Custom styles for dots to span full width
        '& .slick-dots': {
          bottom: '-40px',
          width: '100%',
          display: 'flex !important',
          justifyContent: 'center',
          alignItems: 'center',
          gap: '8px',
          padding: '0',
          margin: '0',
          listStyle: 'none',
          '& li': {
            margin: '0 4px',
            '& button': {
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              border: 'none',
              background: '#ccc',
              cursor: 'pointer',
              padding: '0',
              fontSize: '0',
              '&:before': {
                display: 'none',
              },
            },
            '&.slick-active button': {
              background: '#333',
            },
          },
        },
      }}
    >
      <Slider {...finalSettings}>{children}</Slider>
    </Box>
  );
};

export default ReusableCarousel;

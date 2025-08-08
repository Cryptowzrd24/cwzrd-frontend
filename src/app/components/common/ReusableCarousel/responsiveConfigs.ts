import { ResponsiveConfig } from './index';

// Common responsive configurations for different use cases
export const responsiveConfigs = {
  // For hero section cards (2 columns on desktop, 1 on mobile/tablet)
  heroCards: [
    {
      breakpoint: 1024,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
    },
    {
      breakpoint: 768,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
    },
    {
      breakpoint: 576,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
  ] as ResponsiveConfig[],

  // For news cards (3 on desktop, 2 on tablet, 1 on mobile)
  newsCards: [
    {
      breakpoint: 1024,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
    },
    {
      breakpoint: 768,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
    },
    {
      breakpoint: 576,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
  ] as ResponsiveConfig[],

  // For crypto cards (4 on desktop, 2 on tablet, 1 on mobile)
  cryptoCards: [
    {
      breakpoint: 1024,
      slidesToShow: 4,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
    },
    {
      breakpoint: 768,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
    },
    {
      breakpoint: 576,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
  ] as ResponsiveConfig[],

  // For financial cards (5 on desktop, 3 on tablet, 2 on mobile)
  financialCards: [
    {
      breakpoint: 1024,
      slidesToShow: 5,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
    },
    {
      breakpoint: 768,
      slidesToShow: 3,
      slidesToScroll: 1,
      dots: true,
      arrows: true,
    },
    {
      breakpoint: 576,
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
  ] as ResponsiveConfig[],

  // For single item carousels (like news side cards)
  singleItem: [
    {
      breakpoint: 1024,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
    {
      breakpoint: 768,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
    {
      breakpoint: 576,
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      arrows: false,
    },
  ] as ResponsiveConfig[],
};

// Helper function to create custom responsive configs
export const createResponsiveConfig = (
  desktop: number,
  tablet: number,
  mobile: number,
  options?: {
    dots?: boolean;
    arrows?: boolean;
    infinite?: boolean;
    speed?: number;
  }
): ResponsiveConfig[] => [
  {
    breakpoint: 1024,
    slidesToShow: desktop,
    slidesToScroll: 1,
    ...options,
  },
  {
    breakpoint: 768,
    slidesToShow: tablet,
    slidesToScroll: 1,
    ...options,
  },
  {
    breakpoint: 576,
    slidesToShow: mobile,
    slidesToScroll: 1,
    ...options,
  },
];

// Helper function to get responsive config by name
export const getResponsiveConfig = (name: keyof typeof responsiveConfigs): ResponsiveConfig[] => {
  return responsiveConfigs[name];
};

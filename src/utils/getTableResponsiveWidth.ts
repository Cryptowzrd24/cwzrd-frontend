const screenWidth = typeof window !== 'undefined' ? window.innerWidth : 1200;

// Responsive widths
const isMobile = screenWidth < 520;
const isTablet = screenWidth >= 520 && screenWidth < 1024;

export const getResponsiveWidth = (
  defaultWidth: number,
  tablet?: number,
  mobile?: number,
) => {
  if (isMobile) return mobile ?? defaultWidth * 0.6;
  if (isTablet) return tablet ?? defaultWidth * 0.8;
  return defaultWidth;
};

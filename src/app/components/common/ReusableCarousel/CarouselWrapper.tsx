import React, { ReactNode } from 'react';
import ReusableCarousel, {
  ResponsiveConfig,
  ResponsiveProvider,
} from './index';

interface CarouselWrapperProps {
  items: ReactNode[];
  settings?: any;
  itemPadding?: string;
  responsiveConfig?: ResponsiveConfig[];
  overrideResponsive?: boolean;
  className?: string;
  sx?: any;
}

const CarouselWrapper: React.FC<CarouselWrapperProps> = ({
  items,
  settings = {},
  itemPadding = '8px',
  responsiveConfig,
  overrideResponsive = false,
  className,
  sx,
}) => {
  return (
    <ResponsiveProvider
      responsiveConfig={responsiveConfig}
      overrideResponsive={overrideResponsive}
    >
      <ReusableCarousel
        settings={settings}
        className={className}
        sx={sx}
        responsiveConfig={responsiveConfig}
        overrideResponsive={overrideResponsive}
      >
        {items.map((item, index) => (
          <div key={index} style={{ padding: itemPadding }}>
            {item}
          </div>
        ))}
      </ReusableCarousel>
    </ResponsiveProvider>
  );
};

export default CarouselWrapper;

# Reusable Carousel Components

This package provides flexible, reusable carousel components that eliminate duplicate settings and provide sensible defaults while allowing customization.

## Components

### 1. ReusableCarousel
The base carousel component that accepts children and handles all carousel logic.

### 2. CarouselWrapper
A wrapper component that makes it super easy to use with arrays of items.

## Usage Examples

### Basic Usage with CarouselWrapper (Recommended)

```tsx
import { CarouselWrapper } from '@/components/common/ReusableCarousel';

// Simple array of components
const MyCarousel = () => {
  const items = [
    <MyCard key="1" />,
    <MyCard key="2" />,
    <MyCard key="3" />,
    // ... more items
  ];

  return (
    <CarouselWrapper
      items={items}
      // Optional: Override default settings
      settings={{
        slidesToShow: 3,
        infinite: true,
      }}
    />
  );
};
```

### Advanced Usage with Custom Settings

```tsx
import { CarouselWrapper } from '@/components/common/ReusableCarousel';

const AdvancedCarousel = () => {
  const items = [/* your items */];

  return (
    <CarouselWrapper
      items={items}
      settings={{
        slidesToShow: 4,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
      }}
      arrowPosition="center"
      arrowOffset={{ top: '50%' }}
      arrowSize={{ width: '50px', height: '50px' }}
      arrowColor="#ffffff"
      arrowBackground="rgba(0,0,0,0.5)"
      arrowHoverBackground="rgba(0,0,0,0.8)"
      itemPadding="16px"
    />
  );
};
```

### Using ReusableCarousel Directly

```tsx
import { ReusableCarousel } from '@/components/common/ReusableCarousel';

const DirectCarousel = () => {
  return (
    <ReusableCarousel
      settings={{
        slidesToShow: 3,
        dots: false,
      }}
    >
      <div>Slide 1</div>
      <div>Slide 2</div>
      <div>Slide 3</div>
    </ReusableCarousel>
  );
};
```

### Custom Item Wrapper

```tsx
const CustomWrapperCarousel = () => {
  const items = [/* your data */];

  const itemWrapper = (item, index) => (
    <Box
      sx={{
        border: '1px solid #ccc',
        borderRadius: '8px',
        padding: '16px',
      }}
    >
      {item}
    </Box>
  );

  return (
    <CarouselWrapper
      items={items}
      itemWrapper={itemWrapper}
      itemPadding="12px"
    />
  );
};
```

## Props

### CarouselWrapper Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `items` | `ReactNode[]` | - | Array of components to render |
| `itemWrapper` | `(item, index) => ReactNode` | - | Optional wrapper function for each item |
| `settings` | `object` | `{}` | Override default carousel settings |
| `arrowPosition` | `'top' \| 'bottom' \| 'center'` | `'bottom'` | Position of navigation arrows |
| `arrowOffset` | `object` | `{}` | Custom offset for arrow positioning |
| `arrowSize` | `object` | `{width: '40px', height: '40px'}` | Size of navigation arrows |
| `arrowColor` | `string` | `'rgba(17, 17, 17, 1)'` | Color of arrow icons |
| `arrowBackground` | `string` | `'#f0f0f0'` | Background color of arrow buttons |
| `arrowHoverBackground` | `string` | `'#e0e0e0'` | Hover background color of arrow buttons |
| `showArrows` | `boolean` | `true` | Show/hide navigation arrows |
| `itemPadding` | `string \| object` | `'8px'` | Padding for each carousel item |
| `className` | `string` | - | Additional CSS class |
| `sx` | `object` | - | Additional styles |

### Default Responsive Behavior

The carousel automatically adjusts based on screen size:
- **Mobile (< 600px)**: 1 slide
- **Tablet (600px - 900px)**: 2 slides  
- **Desktop (> 900px)**: 5 slides

## Benefits

1. **No Duplicate Code**: Eliminates repetitive carousel settings
2. **Sensible Defaults**: Works out of the box with good responsive behavior
3. **Flexible**: Easy to customize when needed
4. **Type Safe**: Full TypeScript support
5. **Responsive**: Built-in responsive breakpoints
6. **Accessible**: Proper ARIA attributes and keyboard navigation 

# Responsive Carousel Configuration System

This system allows you to override responsive settings from the top-level component and provides predefined configurations for common use cases.

## Features

- **Global Responsive Configuration**: Set responsive settings at the top level that apply to all carousels
- **Component-Level Override**: Override global settings for specific components
- **Predefined Configurations**: Use common responsive patterns out of the box
- **Flexible Customization**: Create custom responsive configurations as needed

## Usage

### 1. Global Responsive Configuration

Wrap your page or section with `ResponsiveProvider` to set global responsive settings:

```tsx
import { ResponsiveProvider, ResponsiveConfig } from '../common/ReusableCarousel';

const globalConfig: ResponsiveConfig[] = [
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
];

const HomePage = () => {
  return (
    <ResponsiveProvider 
      responsiveConfig={globalConfig} 
      overrideResponsive={true}
    >
      {/* Your components */}
    </ResponsiveProvider>
  );
};
```

### 2. Using Predefined Configurations

Import and use predefined configurations:

```tsx
import { responsiveConfigs } from '../common/ReusableCarousel/responsiveConfigs';

// Use hero cards configuration
<CarouselWrapper
  items={items}
  responsiveConfig={responsiveConfigs.heroCards}
  overrideResponsive={true}
  itemPadding="8px"
/>

// Use news cards configuration
<CarouselWrapper
  items={items}
  responsiveConfig={responsiveConfigs.newsCards}
  overrideResponsive={true}
  itemPadding="8px"
/>
```

### 3. Available Predefined Configurations

- `heroCards`: 2 columns on desktop, 1 on mobile/tablet
- `newsCards`: 3 on desktop, 2 on tablet, 1 on mobile
- `cryptoCards`: 4 on desktop, 2 on tablet, 1 on mobile
- `financialCards`: 5 on desktop, 3 on tablet, 2 on mobile
- `singleItem`: Single item carousel (like news side cards)

### 4. Creating Custom Configurations

Use the helper function to create custom configurations:

```tsx
import { createResponsiveConfig } from '../common/ReusableCarousel/responsiveConfigs';

const customConfig = createResponsiveConfig(
  4, // desktop slides
  2, // tablet slides
  1, // mobile slides
  {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
  }
);

<CarouselWrapper
  items={items}
  responsiveConfig={customConfig}
  overrideResponsive={true}
  itemPadding="8px"
/>
```

### 5. Component-Level Override

Override global settings for specific components:

```tsx
// This will use the global config
<CarouselWrapper items={items} />

// This will override the global config
<CarouselWrapper 
  items={items}
  responsiveConfig={customConfig}
  overrideResponsive={true}
/>
```

## ResponsiveConfig Interface

```tsx
interface ResponsiveConfig {
  breakpoint: number;        // Screen width breakpoint
  slidesToShow: number;      // Number of slides to show
  slidesToScroll: number;    // Number of slides to scroll
  dots?: boolean;           // Show dots (optional)
  arrows?: boolean;         // Show arrows (optional)
  infinite?: boolean;       // Infinite loop (optional)
  speed?: number;          // Animation speed (optional)
}
```

## Breakpoints

The system uses these standard breakpoints:
- **1024px**: Tablet landscape and desktop
- **768px**: Tablet portrait
- **576px**: Mobile devices

## Examples

### Home Page with Global Configuration

```tsx
// src/app/components/home/index.tsx
import { ResponsiveProvider } from '../common/ReusableCarousel';
import { responsiveConfigs } from '../common/ReusableCarousel/responsiveConfigs';

const Home = () => {
  return (
    <ResponsiveProvider 
      responsiveConfig={responsiveConfigs.heroCards} 
      overrideResponsive={true}
    >
      <CryptoHero />
      <MarketSummary />
      {/* Other components */}
    </ResponsiveProvider>
  );
};
```

### Component with Specific Configuration

```tsx
// src/app/components/home/cryptoHero/index.tsx
import { responsiveConfigs } from '../../common/ReusableCarousel/responsiveConfigs';

const CryptoHero = () => {
  return (
    <CarouselWrapper
      items={gridCards}
      responsiveConfig={responsiveConfigs.heroCards}
      overrideResponsive={true}
      itemPadding="8px"
    />
  );
};
```

## Benefits

1. **Consistency**: All carousels use the same responsive patterns
2. **Maintainability**: Change responsive behavior from one place
3. **Flexibility**: Override settings when needed
4. **Reusability**: Predefined configurations for common use cases
5. **Type Safety**: Full TypeScript support with proper interfaces

## Migration from Hardcoded Settings

Replace hardcoded responsive settings:

```tsx
// Before
<CarouselWrapper
  items={items}
  settings={{
    slidesToShow: isMobile ? 1 : 2,
    dots: true,
    arrows: true,
  }}
/>

// After
<CarouselWrapper
  items={items}
  responsiveConfig={responsiveConfigs.heroCards}
  overrideResponsive={true}
/>
``` 
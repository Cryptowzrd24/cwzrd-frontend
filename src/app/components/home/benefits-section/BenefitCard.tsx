import { Box, Button, Typography } from '@mui/material';
import React from 'react';

interface BenefitCardProps {
  id: number;
  title: string;
  description: string;
  hasButton: boolean;
  background: string;
  textColor: string;
  titleColor?: string;
  descriptionColor?: string;
  imagePlaceholder: {
    width: string;
    height: string;
    background: string;
    borderRadius: string;
    display: string;
    alignItems: string;
    justifyContent: string;
    position: string;
    overflow: string;
    border?: string;
    isBackground?: boolean;
    isForeground?: boolean;
  };
  cardWidth: number;
  cardHeight: number;
  titleFontSize: string;
  titleLineHeight: string;
  titleLetterSpacing: string;
  descriptionFontSize: string;
  descriptionLineHeight: string;
  descriptionLetterSpacing: string;
  descriptionOpacity?: number;
}

const BenefitCard: React.FC<BenefitCardProps> = ({
  id,
  title,
  description,
  hasButton,
  background,
  textColor,
  titleColor,
  descriptionColor,
  imagePlaceholder,
  cardWidth,
  cardHeight,
  titleFontSize,
  titleLineHeight,
  titleLetterSpacing,
  descriptionFontSize,
  descriptionLineHeight,
  descriptionLetterSpacing,
  descriptionOpacity,
}) => {
  return (
    <Box
      sx={{
        width: { xs: '100%', sm: 'calc(50% - 12px)', lg: `${cardWidth}px` },
        height: { xs: 'auto', lg: `${cardHeight}px` },
        minHeight: { xs: '280px', sm: '300px', lg: `${cardHeight}px` },
        background: background,
        borderRadius: '16px',
        padding: { xs: '16px', sm: '18px', lg: '20px' },
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        border: background === 'white' ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      {/* Background Image */}
      {imagePlaceholder.isBackground && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: imagePlaceholder.background,
            borderRadius: imagePlaceholder.borderRadius,
            zIndex: 1,
            ...(imagePlaceholder.border && { border: imagePlaceholder.border }),
          }}
        />
      )}

      {/* Content Container */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 2,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          gap: { xs: '12px', sm: '16px', lg: '24px' },
        }}
      >
        {/* Title */}
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '18px', sm: titleFontSize },
            fontWeight: 700,
            color: titleColor || textColor,
            marginBottom: { xs: '4px', sm: '8px' },
            lineHeight: titleLineHeight,
            letterSpacing: titleLetterSpacing,
            fontFamily: 'SF Pro Display, sans-serif',
            textAlign: id === 4 || id === 7 ? 'center' : 'left',
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color: descriptionColor || (textColor === 'white' ? 'rgba(255, 255, 255, 0.9)' : '#6B7280'),
            lineHeight: descriptionLineHeight,
            marginBottom: { xs: '12px', sm: '16px' },
            fontSize: { xs: '13px', sm: descriptionFontSize },
            fontWeight: 400,
            letterSpacing: descriptionLetterSpacing,
            fontFamily: 'SF Pro Display, sans-serif',
            flex: 1,
            textAlign: id === 4 || id === 7 ? 'center' : 'left',
            opacity: descriptionOpacity || 1,
          }}
        >
          {description}
        </Typography>

        {/* Button */}
        {hasButton && (
          <Button
            variant="contained"
            sx={{
              background: 'white',
              color: '#111111',
              borderRadius: '56px',
              textTransform: 'none',
              fontWeight: 500,
              fontSize: { xs: '16px', sm: '18px' },
              padding: { xs: '10px 20px', sm: '12px 24px' },
              lineHeight: '23.40px',
              fontFamily: 'SF Pro Display, sans-serif',
              alignSelf: 'flex-start',
              '&:hover': {
                background: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            Get Started &gt;
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default BenefitCard;

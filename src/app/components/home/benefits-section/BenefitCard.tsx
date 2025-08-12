import { Box, Button, Typography } from '@mui/material';
import ArrowForwardIosRoundedIcon from '@mui/icons-material/ArrowForwardIosRounded';
import React from 'react';
import AirdropCallsIcon from './svg-icons/AirdropCallsIcon';
import ProfessionalMentorshipIcon from './svg-icons/ProfessionalMentorshipIcon';
import MarketOutlooksIcon from './svg-icons/MarketOutlooksIcon';
import RiskManagementIcon from './svg-icons/RiskManagementIcon';
import ExpertLessonsIcon from './svg-icons/ExpertLessonsIcon';
import WZRDStrategiesIcon from './svg-icons/WZRDStrategiesIcon';
import TakeProfitIcon from './svg-icons/TakeProfitIcon';

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
  const renderIcon = () => {
    switch (id) {
      case 1:
        return <AirdropCallsIcon width={285} height={267} />;
      case 2:
        return <ProfessionalMentorshipIcon width={64} height={64} />;
      case 3:
        return <MarketOutlooksIcon width={576} height={317} />;
      case 4:
        return <RiskManagementIcon width={160} height={149} />;
      case 5:
        return <ExpertLessonsIcon width={151} height={153} />;
      case 7:
        return <WZRDStrategiesIcon width={284} height={237} />;
      case 8:
        return <TakeProfitIcon width={628} height={419} />;
      default:
        return null;
    }
  };

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
        border:
          background === 'white' ? '1px solid rgba(0, 0, 0, 0.05)' : 'none',
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

      {/* Foreground Icon - Fixed positioning based on image */}
      {renderIcon() && (
        <Box
          sx={{
            position: 'absolute',
            zIndex: 2,
            // Airdrop Calls - Left side, coins spilling out
            ...(id === 1 && { left: '10px', top: '-5px' }),
            // Professional Mentorship - Centered within a soft circular badge
            ...(id === 2 && {
              left: '50%',
              top: '28%',
              transform: 'translate(-50%, -50%)',
              width: '88px',
              height: '88px',
              borderRadius: '9999px',
              background: 'rgba(255,255,255,0.20)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              border: '1px solid rgba(255,255,255,0.25)',
            }),
            // Market Outlooks - Bottom right, mobile dashboard
            ...(id === 3 && { right: '10px', bottom: '10px' }),
            // Risk Management - Centered green chart
            ...(id === 4 && {
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }),
            // Expert Lessons - Centered blue glowing screen
            ...(id === 5 && {
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }),
            // WZRD Strategies - Centered purple target
            ...(id === 7 && {
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }),
            // Take Profit - Background Bitcoin symbol
            ...(id === 8 && { left: '0px', top: '-54px' }),
          }}
        >
          {renderIcon()}
        </Box>
      )}

      {/* Content Container - Fixed positioning based on image */}
      <Box
        sx={{
          position: 'relative',
          zIndex: 3,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'space-between',
          gap: { xs: '12px', sm: '16px', lg: '24px' },
          // Airdrop Calls - Right side content
          ...(id === 1 && {
            position: 'absolute',
            right: '56px',
            top: '54%',
            transform: 'translateY(-50%)',
            width: '360px',
            textAlign: 'left',
          }),
          // Professional Mentorship - Bottom content
          ...(id === 2 && {
            position: 'absolute',
            top: '56%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '420px',
            maxWidth: 'calc(100% - 40px)',
            textAlign: 'center',
          }),
          // Market Outlooks - Top content
          ...(id === 3 && {
            position: 'absolute',
            top: '20px',
            left: '20px',
            right: '20px',
            textAlign: 'left',
          }),
          // Risk Management - Bottom content
          ...(id === 4 && {
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
            width: 'calc(100% - 40px)',
            maxWidth: '320px',
            textAlign: 'center',
          }),
          // Expert Lessons - Bottom content
          ...(id === 5 && {
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            textAlign: 'left',
          }),
          // WZRD Strategies - Bottom content
          ...(id === 7 && {
            position: 'absolute',
            bottom: '20px',
            left: '20px',
            right: '20px',
            textAlign: 'center',
          }),
          // Take Profit - Left side content
          ...(id === 8 && {
            position: 'absolute',
            left: '20px',
            top: '50%',
            transform: 'translateY(-50%)',
            width: '270px',
            textAlign: 'left',
          }),
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
            textAlign: id === 2 || id === 4 || id === 7 ? 'center' : 'left',
            marginInline: id === 4 ? 'auto' : undefined,
          }}
        >
          {title}
        </Typography>

        {/* Description */}
        <Typography
          variant="body2"
          sx={{
            color:
              descriptionColor ||
              (textColor === 'white' ? 'rgba(255, 255, 255, 0.9)' : '#6B7280'),
            lineHeight: descriptionLineHeight,
            marginBottom: { xs: '12px', sm: '16px' },
            fontSize: { xs: '13px', sm: descriptionFontSize },
            fontWeight: 400,
            letterSpacing: descriptionLetterSpacing,
            fontFamily: 'SF Pro Display, sans-serif',
            flex: 1,
            textAlign: id === 2 || id === 4 || id === 7 ? 'center' : 'left',
            maxWidth: id === 4 ? '320px' : undefined,
            marginInline: id === 4 ? 'auto' : undefined,
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
            endIcon={<ArrowForwardIosRoundedIcon sx={{ fontSize: 16 }} />}
          >
            Get Started
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default BenefitCard;

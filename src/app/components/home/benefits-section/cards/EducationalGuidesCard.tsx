import { Box, Typography } from '@mui/material';
import React from 'react';

interface SubIcon {
  icon: string;
  background: string;
  size: number;
  glow?: boolean;
}

interface EducationalGuidesCardProps {
  subIcons: SubIcon[];
}

const EducationalGuidesCard: React.FC<EducationalGuidesCardProps> = ({ subIcons }) => {
  return (
    <Box
      sx={{
        width: '100%',
        height: { xs: 'auto', lg: '216px' },
        minHeight: { xs: '200px', sm: '216px' },
        background: 'white',
        borderRadius: '16px',
        padding: { xs: '16px', sm: '18px', lg: '20px' },
        boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.1)',
        border: '1px solid rgba(0, 0, 0, 0.05)',
        transition: 'all 0.3s ease',
        display: 'flex',
        flexDirection: { xs: 'column', lg: 'row' },
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: { xs: '16px', sm: '20px', lg: '24px' },
        '&:hover': {
          transform: 'translateY(-2px)',
          boxShadow: '0px 4px 16px rgba(0, 0, 0, 0.15)',
        },
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: { xs: '6px', sm: '8px', lg: '9px' },
          flex: 1,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: '18px', sm: '20px' },
            fontWeight: 700,
            color: '#111111',
            lineHeight: '24px',
            letterSpacing: '0.20px',
            fontFamily: 'SF Pro Display, sans-serif',
          }}
        >
          Educational Guides
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: '#111111',
            fontSize: { xs: '14px', sm: '16px' },
            fontWeight: 400,
            lineHeight: '20.80px',
            letterSpacing: '0.16px',
            fontFamily: 'SF Pro Display, sans-serif',
            opacity: 0.56,
          }}
        >
          Access comprehensive guides designed to educate and empower traders at all levels. Master the markets with our in-depth resources.
        </Typography>
      </Box>

      {/* Sub Icons */}
      <Box
        sx={{
          display: 'flex',
          gap: { xs: '16px', sm: '20px', lg: '27.25px' },
          alignItems: 'center',
          flexShrink: 0,
          flexWrap: { xs: 'wrap', sm: 'nowrap' },
          justifyContent: { xs: 'center', lg: 'flex-end' },
        }}
      >
        {subIcons.map((iconData, index) => (
          <Box
            key={index}
            sx={{
              padding: { xs: `${iconData.size * 0.2}px`, sm: `${iconData.size * 0.25}px` },
              background: iconData.background,
              borderRadius: { xs: `${iconData.size * 0.2}px`, sm: `${iconData.size * 0.25}px` },
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: { xs: `${iconData.size * 0.8}px`, sm: `${iconData.size}px` },
              height: { xs: `${iconData.size * 0.8}px`, sm: `${iconData.size}px` },
              ...(iconData.glow && {
                boxShadow: '0px 3.318117380142212px 120px rgba(65, 185, 245, 0.60)',
              }),
            }}
          >
            <Box
              sx={{
                fontSize: { xs: `${iconData.size * 0.4}px`, sm: `${iconData.size * 0.6}px` },
                color: '#111111',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              {iconData.icon}
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default EducationalGuidesCard;

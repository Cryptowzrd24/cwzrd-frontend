import { Box, Typography } from '@mui/material';
import React from 'react';

const TradingDashboard = () => {
  const tickers = [
    { symbol: 'LTC', price: '$67.93', change: '-0.9997', percent: '-1.64%' },
    { symbol: 'DASH', price: '$28.55', change: '-0.6662', percent: '-2.27%' },
    { symbol: 'XRP', price: '$0.5387', change: '-0.01605560', percent: '-2.89%' },
    { symbol: 'MIOTA', price: '$0.2654', change: '-0.0088', percent: '' },
  ];

  const metrics = [
    { label: 'Portfolio Balance', value: '$0.00', subValue: '0.00%-' },
    { label: 'Total Market Cap', value: '$1.30T', subValue: '0%-' },
    { label: 'Total Volume', value: '$13.00B', subValue: '0%-' },
    { label: 'Market Dominance', value: '54.90%', subValue: '-1.44%-' },
  ];

  const navItems = [
    'Dashboard', 'Course', 'Library', 'Examinations', 'Trader\'s Hub', 
    'Charts', 'Portfolio', 'Trade Trader', 'Journal', 'Calculator', 
    'Technicals', 'Algo Generator'
  ];

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #1A1A2E 0%, #16213E 100%)',
        borderRadius: { xs: '12px', sm: '14px', md: '16px' },
        padding: { xs: '16px', sm: '18px', md: '20px' },
        boxShadow: '0px 20px 40px rgba(0, 0, 0, 0.3)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        width: '100%',
        maxWidth: '600px',
      }}
    >
      {/* Navigation Bar */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: { xs: '12px', sm: '14px', md: '16px' },
          padding: { xs: '6px 0', sm: '7px 0', md: '8px 0' },
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          flexWrap: 'wrap',
          gap: { xs: '8px', sm: '10px', md: '12px' },
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '8px', sm: '12px', md: '16px' },
            flexWrap: 'wrap',
            flex: 1,
            overflow: 'hidden',
          }}
        >
          {navItems.map((item, index) => (
            <Typography
              key={index}
              sx={{
                color: index === 0 ? '#FFFFFF' : 'rgba(255, 255, 255, 0.6)',
                fontSize: { xs: '9px', sm: '10px', md: '11px' },
                fontWeight: index === 0 ? 600 : 400,
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                '&:hover': {
                  color: '#FFFFFF',
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>
        <Box
          sx={{
            display: 'flex',
            gap: { xs: '8px', sm: '10px', md: '12px' },
            alignItems: 'center',
            flexShrink: 0,
          }}
        >
          <Box
            sx={{
              width: { xs: '16px', sm: '18px', md: '20px' },
              height: { xs: '16px', sm: '18px', md: '20px' },
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontSize: { xs: '8px', sm: '9px', md: '10px' }, color: 'white' }}>🔔</Typography>
          </Box>
          <Box
            sx={{
              width: { xs: '16px', sm: '18px', md: '20px' },
              height: { xs: '16px', sm: '18px', md: '20px' },
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Typography sx={{ fontSize: { xs: '8px', sm: '9px', md: '10px' }, color: 'white' }}>👤</Typography>
          </Box>
        </Box>
      </Box>

      {/* Cryptocurrency Tickers */}
      <Box
        sx={{
          display: 'flex',
          gap: { xs: '8px', sm: '10px', md: '12px' },
          marginBottom: { xs: '12px', sm: '14px', md: '16px' },
          flexWrap: 'wrap',
        }}
      >
        {tickers.map((ticker, index) => (
          <Box
            key={index}
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: { xs: '4px 8px', sm: '5px 9px', md: '6px 10px' },
              borderRadius: { xs: '4px', sm: '5px', md: '6px' },
              border: '1px solid rgba(255, 255, 255, 0.1)',
              minWidth: 'fit-content',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '9px', sm: '10px', md: '11px' },
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {ticker.symbol} {ticker.price}
            </Typography>
            <Typography
              sx={{
                color: '#FF6B6B',
                fontSize: { xs: '7px', sm: '8px', md: '9px' },
                lineHeight: 1,
              }}
            >
              {ticker.change} {ticker.percent}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Key Metric Cards */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: 'repeat(2, 1fr)', sm: 'repeat(4, 1fr)' },
          gap: { xs: '6px', sm: '7px', md: '8px' },
          marginBottom: { xs: '12px', sm: '14px', md: '16px' },
        }}
      >
        {metrics.map((metric, index) => (
          <Box
            key={index}
            sx={{
              background: 'rgba(255, 255, 255, 0.08)',
              padding: { xs: '6px 4px', sm: '8px 6px', md: '10px 8px' },
              borderRadius: { xs: '6px', sm: '7px', md: '8px' },
              textAlign: 'center',
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography
              sx={{
                color: 'rgba(255, 255, 255, 0.7)',
                fontSize: { xs: '7px', sm: '8px', md: '9px' },
                marginBottom: '2px',
                lineHeight: 1,
              }}
            >
              {metric.label}
            </Typography>
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '10px', sm: '11px', md: '12px' },
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              {metric.value}
            </Typography>
            <Typography
              sx={{
                color: '#FF6B6B',
                fontSize: { xs: '6px', sm: '7px', md: '8px' },
                lineHeight: 1,
              }}
            >
              {metric.subValue}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Charts Section */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' },
          gap: { xs: '8px', sm: '10px', md: '12px' },
          marginBottom: { xs: '12px', sm: '14px', md: '16px' },
        }}
      >
        {['BTC', 'Candlestick'].map((label, index) => (
          <Box
            key={index}
            sx={{
              background: 'rgba(255, 255, 255, 0.05)',
              padding: { xs: '8px', sm: '10px', md: '12px' },
              borderRadius: { xs: '6px', sm: '7px', md: '8px' },
              border: '1px solid rgba(255, 255, 255, 0.1)',
            }}
          >
            <Typography
              sx={{
                color: 'white',
                fontSize: { xs: '10px', sm: '11px', md: '12px' },
                fontWeight: 600,
                marginBottom: { xs: '6px', sm: '7px', md: '8px' },
              }}
            >
              {label}
            </Typography>
            <Box
              sx={{
                height: { xs: '40px', sm: '45px', md: '50px' },
                background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%)',
                borderRadius: { xs: '3px', sm: '3px', md: '4px' },
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: '50%',
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: 'linear-gradient(90deg, #4CAF50 0%, #FF9800 100%)',
                  transform: 'translateY(-50%)',
                },
              }}
            />
          </Box>
        ))}
      </Box>

      {/* Bottom Indicators */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexDirection: { xs: 'column', sm: 'row' },
          gap: { xs: '8px', sm: '0' },
        }}
      >
        {/* Community Indicator */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: { xs: '4px', sm: '5px', md: '6px' },
            background: 'rgba(255, 255, 255, 0.1)',
            padding: { xs: '4px 8px', sm: '5px 9px', md: '6px 10px' },
            borderRadius: { xs: '4px', sm: '5px', md: '6px' },
            border: '1px solid rgba(255, 255, 255, 0.2)',
            width: { xs: '100%', sm: 'auto' },
            justifyContent: { xs: 'center', sm: 'flex-start' },
          }}
        >
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {[1, 2, 3].map((_, index) => (
              <Box
                key={index}
                sx={{
                  width: { xs: '14px', sm: '16px', md: '18px' },
                  height: { xs: '14px', sm: '16px', md: '18px' },
                  borderRadius: '50%',
                  background: index === 2 ? '#FF69B4' : '#4CAF50',
                  border: '2px solid rgba(255, 255, 255, 0.3)',
                  marginLeft: index > 0 ? '-4px' : 0,
                  zIndex: 3 - index,
                }}
              />
            ))}
          </Box>
          <Typography
            sx={{
              color: 'white',
              fontSize: { xs: '8px', sm: '9px', md: '10px' },
              fontWeight: 500,
            }}
          >
            + 3000+ people already joined us
          </Typography>
        </Box>

        {/* Course Progress */}
        <Box
          sx={{
            background: 'rgba(255, 255, 255, 0.1)',
            padding: { xs: '4px 8px', sm: '5px 9px', md: '6px 10px' },
            borderRadius: { xs: '4px', sm: '5px', md: '6px' },
            border: '1px solid rgba(255, 255, 255, 0.2)',
            minWidth: { xs: '100%', sm: '80px' },
            textAlign: { xs: 'center', sm: 'left' },
          }}
        >
          <Typography
            sx={{
              color: 'white',
              fontSize: { xs: '8px', sm: '9px', md: '10px' },
              marginBottom: '2px',
            }}
          >
            Course
          </Typography>
          <Box
            sx={{
              width: '100%',
              height: { xs: '4px', sm: '5px', md: '6px' },
              background: 'rgba(255, 255, 255, 0.2)',
              borderRadius: { xs: '2px', sm: '2px', md: '3px' },
              overflow: 'hidden',
              marginBottom: '2px',
            }}
          >
            <Box
              sx={{
                width: '30%',
                height: '100%',
                background: 'linear-gradient(90deg, #4CAF50 0%, #8BC34A 100%)',
                borderRadius: { xs: '2px', sm: '2px', md: '3px' },
              }}
            />
          </Box>
          <Typography
            sx={{
              color: 'white',
              fontSize: { xs: '7px', sm: '8px', md: '9px' },
              textAlign: 'center',
            }}
          >
            30%
          </Typography>
        </Box>
      </Box>

      {/* Numerical Value */}
      <Typography
        sx={{
          color: 'rgba(255, 255, 255, 0.6)',
          fontSize: { xs: '8px', sm: '9px', md: '10px' },
          textAlign: 'right',
          marginTop: { xs: '6px', sm: '7px', md: '8px' },
        }}
      >
        $37,225.67
      </Typography>
    </Box>
  );
};

export default TradingDashboard;

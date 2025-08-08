import { Box, Typography } from '@mui/material';
import React from 'react';
import FilterTab from './FilterTab';
import BitCoinPotential from './BitCoinPotential';
import FinancialRight from '../../technicals-page/financial-right';
import FinancialCard from '../../technicals-page/financial-card';
import chainLinkImg from '../../../../../public/images/coin-details/chain-link.png';
import TradeProfitCard from './TradeProfitCard';
import LiveAnalysisCard from './LiveAnalysisCard';
import WizardStrategyCard from './WizardStrategyCard';

const TrendingCrypto = ({
  tabSelected = 'crypto',
  handleCurrencyChange,
}: {
  tabSelected: 'crypto' | 'forex';
  handleCurrencyChange: (title: 'crypto' | 'forex') => void;
}) => {
  return (
    <Box
      sx={{
        pt: '30px',
        pb: '60px',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        '@media (max-width: 1024px)': {
          pt: '24px',
          pb: '48px',
          gap: '20px',
        },
        '@media (max-width: 768px)': {
          pt: '20px',
          pb: '40px',
          gap: '16px',
        },
        '@media (max-width: 576px)': {
          pt: '16px',
          pb: '32px',
          gap: '12px',
        },
      }}
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Typography
            sx={{
              textAlign: 'center',
              color: '#111',
              fontSize: '32px',
              fontWeight: '700',
              lineHeight: '120%',
              letterSpacing: '0.32px',
              '@media (max-width: 1024px)': {
                fontSize: '28px',
                letterSpacing: '0.28px',
              },
              '@media (max-width: 768px)': {
                fontSize: '24px',
                letterSpacing: '0.24px',
              },
              '@media (max-width: 576px)': {
                fontSize: '20px',
                letterSpacing: '0.20px',
              },
            }}
          >
            <span
              style={{
                background:
                  'linear-gradient(90deg, #634DFD 20.81%, #BF48F7 40.69%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Trending
            </span>{' '}
            Crypto & Forex Technicals
          </Typography>
          <Typography
            sx={{
              color: '#333',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '150%',
              letterSpacing: '-0.16px',
              '@media (max-width: 768px)': {
                fontSize: '14px',
                letterSpacing: '-0.14px',
              },
              '@media (max-width: 576px)': {
                fontSize: '12px',
                letterSpacing: '-0.12px',
              },
            }}
          >
            Provides the latest market trends, technical analysis, and trading
            insights for cryptocurrencies and forex.
          </Typography>
        </Box>
        <FilterTab
          tabSelected={tabSelected}
          handleCurrencyChange={handleCurrencyChange}
        />
      </Box>
      <Box sx={{
        display: 'flex',
        gap: '24px',
        '@media (max-width: 1024px)': {
          flexDirection: 'column',
          gap: '16px',
        },
        '@media (max-width: 768px)': {
          gap: '12px',
        },
        '@media (max-width: 576px)': {
          gap: '8px',
        },
      }}>
        <Box
          sx={{
            maxWidth: '957px',
            padding: '12px',
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            borderRadius: '20px',
            border: '0.5px solid #FFF',
            background: 'rgba(255,255,255,0.40)',
            backdropFilter: 'blur(8px)',
            '@media (max-width: 1024px)': {
              maxWidth: '100%',
              padding: '10px',
              gap: '20px',
              borderRadius: '16px',
              flexDirection: 'column',
            },
            '@media (max-width: 768px)': {
              padding: '8px',
              gap: '16px',
              borderRadius: '12px',
            },
            '@media (max-width: 576px)': {
              padding: '6px',
              gap: '12px',
              borderRadius: '10px',
            },
          }}
        >
          <Box sx={{
            display: 'flex',
            gap: '16px',
            '@media (max-width: 1024px)': {
              gap: '12px',
            },
            '@media (max-width: 768px)': {
              flexDirection: 'column',
              gap: '8px',
            },
            '@media (max-width: 576px)': {
              gap: '6px',
            },
          }}>
            <BitCoinPotential />
            <Box>
              <FinancialRight isMainPage />
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            '@media (max-width: 1024px)': {
              flexWrap: 'wrap',
              gap: '6px',
            },
            '@media (max-width: 768px)': {
              gap: '4px',
            },
            '@media (max-width: 576px)': {
              gap: '3px',
            },
          }}>
            <Box sx={{
              width: '217px',
              '@media (max-width: 1024px)': {
                width: '49%',
              },
              '@media (max-width: 768px)': {
                width: '100%',
              },
            }}>
              <FinancialCard image={chainLinkImg} isMainPage />
            </Box>
            <Box sx={{
              width: '217px',
              '@media (max-width: 1024px)': {
                width: '49%',
              },
              '@media (max-width: 768px)': {
                width: '100%',
              },
            }}>
              <FinancialCard image={chainLinkImg} isMainPage />
            </Box>
            <Box sx={{
              width: '217px',
              '@media (max-width: 1024px)': {
                width: '49%',
              },
              '@media (max-width: 768px)': {
                width: '100%',
              },
            }}>
              <FinancialCard image={chainLinkImg} isMainPage />
            </Box>
            <Box sx={{
              width: '217px',
              '@media (max-width: 1024px)': {
                width: '49%',
              },
              '@media (max-width: 768px)': {
                width: '100%',
              },
            }}>
              <FinancialCard image={chainLinkImg} isMainPage />
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            '@media (max-width: 1024px)': {
              width: '100%',
              gap: '16px',
            },
            '@media (max-width: 768px)': {
              gap: '12px',
            },
            '@media (max-width: 576px)': {
              gap: '8px',
            },
          }}
        >
          <TradeProfitCard />
          <LiveAnalysisCard />
          <WizardStrategyCard />
        </Box>
      </Box>
    </Box>
  );
};

export default TrendingCrypto;

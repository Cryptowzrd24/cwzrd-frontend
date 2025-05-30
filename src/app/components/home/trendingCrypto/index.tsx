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
      <Box sx={{ display: 'flex', gap: '24px' }}>
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
          }}
        >
          <Box sx={{ display: 'flex', gap: '16px' }}>
            <BitCoinPotential />
            <Box>
              <FinancialRight isMainPage />
            </Box>
          </Box>
          <Box sx={{ display: 'flex', gap: '8px' }}>
            <FinancialCard image={chainLinkImg} isMainPage />
            <FinancialCard image={chainLinkImg} isMainPage />
            <FinancialCard image={chainLinkImg} isMainPage />
            <FinancialCard image={chainLinkImg} isMainPage />
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
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

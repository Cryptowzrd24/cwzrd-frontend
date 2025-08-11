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
        width:'100%',
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
        width:'100%',
        display: 'flex',
        gap: '24px',
        flexDirection:{xs:'column',sm:'column',md:'row',lg:'row'},
        boxSizing:'border-box',
        padding: {xs:"0px",md:'12px',lg:'14px',xl:'16px'},
      }}>
        <Box
          sx={{
            // maxWidth: '957px',
            padding: {xs:'0px',lg:'12px'},
            display: 'flex',
            flexDirection: 'column',
            justifyContent:'space-between',
            gap: '24px',
            borderRadius: '20px',
            border: {xs:'none',lg:'0.5px solid #FFF'},
            background: {xs:'transparent',lg:'rgba(255,255,255,0.40)'},
            backdropFilter: {xs:'none',lg:'blur(8px)'},
            width:{xs:'100%',sm:'100%',md:'70%',lg:'70%'},
            boxSizing:'border-box'
          }}
        >
          <Box sx={{
            display: 'flex',
            gap: '16px',
            flexDirection:{xs:'column',sm:'column',md:'column',lg:'row'},
            overflowX:'hidden',
            width:'100%',
            boxSizing:'border-box'
          }}>
            <Box sx={{
              width: { xs: '100%', sm: '100%', md: '100%', lg: '65%', xl: '65%' },
              height: { xs: '596px', sm: '596px', md: '596px', lg: '100%', xl: '100%' },
              overflowX: 'hidden',
              boxSizing:'border-box'
            }}  >
              <BitCoinPotential />
            </Box>
            <Box
              sx={{
                width: { xs: '100%', sm: '100%', md: '100%', lg: '35%', xl: '35%' },
                overflowX: 'hidden',
                height: { xs: '596px', sm: '596px', md: '596px', lg: '100%', xl: '100%' },
                boxSizing: 'border-box'
              }}>
              <FinancialRight isMainPage />
            </Box>
          </Box>
          <Box sx={{
            display: 'flex',
            gap: '8px',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            width:'100%',
            boxSizing:'border-box'
          }}>
            <Box sx={{
              width: {xs:'100%',sm:'100%',md:'49%',lg:'24%'},
              overflowX:'hidden'
            }}>
              <FinancialCard image={chainLinkImg} titleMaxWidth={'100%'} isMainPage />
            </Box>
            <Box sx={{
              width: {xs:'100%',sm:'100%',md:'49%',lg:'24%'},
              overflowX:'hidden'
            }}>
              <FinancialCard image={chainLinkImg} isMainPage titleMaxWidth={'100%'}/>
            </Box>
            <Box sx={{
              width: {xs:'100%',sm:'100%',md:'49%',lg:'24%'},
              overflowX:'hidden'
            }}>
              <FinancialCard image={chainLinkImg} isMainPage titleMaxWidth={'100%'}/>
            </Box>
            <Box sx={{
              width: {xs:'100%',sm:'100%',md:'49%',lg:'24%'},
              overflowX:'hidden'
            }}>
              <FinancialCard image={chainLinkImg} isMainPage titleMaxWidth={'100%'}/>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '24px',
            width:{xs:'100%',sm:'100%',md:'30%',lg: '30%'},
            boxSizing:'border-box',
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

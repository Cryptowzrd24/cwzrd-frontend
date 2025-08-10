import React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import MarketAnaylsisBanner from '../../banners/marketAnaylsisBanner';
import CryptoInfo from '../cryptoInfo';
import { ReadMoreIcon } from '../../../../../public/icons/readMoreIcon';

// Styled Components
const Container = styled(Box)({
  width: '100%',
  paddingTop: '30px',
  marginBottom: '45px',
  display: 'flex',
  flexDirection: 'column',
  gap: '24px',
  overflowX: 'hidden',
});

const CardsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  // gap: theme.spacing(1, 1.5, 2, 3), // xs: 8px, sm: 12px, md: 16px, lg: 24px
  width: '100%',
  boxSizing: 'border-box',
  flexDirection: 'column',
  [theme.breakpoints.up('lg')]: {
    flexDirection: 'row',
  },
  gap: '12px',
  overflowX: 'hidden',
}));

const CardWrapper = styled(Box)(({ theme }) => ({
  padding: theme.spacing(1, 0.5, 0.5), // xs: 8px 4px 4px
  borderRadius: theme.spacing(1), // xs: 8px
  border: '0.5px solid #FFF',
  background: 'rgba(255, 255, 255, 0.40)',
  backdropFilter: 'blur(8px)',
  display: 'flex',
  flexDirection: 'column',
  gap: theme.spacing(1), // xs: 8px
  width: '100%',
  boxSizing: 'border-box',
  [theme.breakpoints.up('md')]: {
    width: '100%',
    padding: theme.spacing(1.5, 1, 1), // md: 12px 8px 8px
    borderRadius: theme.spacing(1.5), // md: 12px
    gap: theme.spacing(1.5), // md: 12px
  },
  [theme.breakpoints.up('lg')]: {
    width: '50%',
    padding: theme.spacing(2, 1.5, 1.5), // lg: 16px 12px 12px
    borderRadius: theme.spacing(2), // lg: 16px
    gap: theme.spacing(2), // lg: 16px
  },
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(1.25, 0.75, 0.75), // sm: 10px 6px 6px
    borderRadius: theme.spacing(1.25), // sm: 10px
    gap: theme.spacing(1.25), // sm: 10px
  },
}));

const CardHeader = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const CardTitle = styled(Typography)(({ theme }) => ({
  fontSize: '24px',
  fontWeight: 700,
  lineHeight: '120%',
  letterSpacing: '0.24px',
  boxSizing: 'border-box',
  [theme.breakpoints.down('lg')]: {
    fontSize: '20px',
    letterSpacing: '0.20px',
  },
  [theme.breakpoints.down('md')]: {
    fontSize: '18px',
    letterSpacing: '0.18px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '16px',
    letterSpacing: '0.16px',
  },
}));

const SeeAllContainer = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
});

const SeeAllText = styled(Typography)(({ theme }) => ({
  background: 'linear-gradient(117deg, #F7841A -4.07%, #F74848 100.68%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  fontWeight: 600,
  fontSize: '14px',
  lineHeight: '18.2px',
  [theme.breakpoints.down('md')]: {
    fontSize: '12px',
    lineHeight: '16px',
  },
  [theme.breakpoints.down('sm')]: {
    fontSize: '10px',
    lineHeight: '14px',
  },
}));

const IconContainer = styled(Box)(({ theme }) => ({
  marginLeft: '10px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {
    marginLeft: '8px',
  },
  [theme.breakpoints.down('sm')]: {
    marginLeft: '6px',
  },
}));

const CardsContent = styled(Box)({
  width: '100%',
});

const CryptoGainer = () => {
  return (
    <Container>
      <CardsContainer>
        {/* Top 5 Crypto Card */}
        <CardWrapper>
          <CardHeader>
            <CardTitle>
              Top{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                5 Crypto
              </span>
            </CardTitle>

            <SeeAllContainer>
              <SeeAllText variant="body2">
                See All
              </SeeAllText>
              <IconContainer>
                <ReadMoreIcon isMainPage={true} />
              </IconContainer>
            </SeeAllContainer>
          </CardHeader>
          
          <CardsContent>
            <CryptoInfo type="crypto" />
          </CardsContent>
        </CardWrapper>

        {/* Top Gainers Card */}
        <CardWrapper>
          <CardHeader>
            <CardTitle>
              Top{' '}
              <span
                style={{
                  background: 'linear-gradient(90deg, #7248F7 0%, #BF48F7 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Gainers
              </span>
            </CardTitle>

            <SeeAllContainer>
              <SeeAllText variant="body2">
                See All
              </SeeAllText>
              <IconContainer>
                <ReadMoreIcon isMainPage />
              </IconContainer>
            </SeeAllContainer>
          </CardHeader>
          
          <CardsContent>
            <CryptoInfo type="gain" />
          </CardsContent>
        </CardWrapper>
      </CardsContainer>
      
      <MarketAnaylsisBanner />
    </Container>
  );
};

export default CryptoGainer;

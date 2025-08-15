import { Box, Typography } from '@mui/material';
import React from 'react';

const InformationCards = () => {
  return (
    <Box
      sx={{
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: { xs: '', sm: 'row' },
        gap: { xs: '30px', lg: '30px' },
        padding: { xs: '20px', lg: '0px' },
        flexWrap: { xs: 'wrap', sm: 'nowrap' },
      }}
    >
      <InformationCard
        title="48"
        symbol="+"
        symbolColor="#F74848"
        description="Founded by a team of seasoned traders and industry experts."
      />
      <InformationCard
        title="1,750M"
        symbol="$"
        symbolColor="#22C833"
        symbolPosition="left"
        description="Founded by a team of seasoned traders and industry experts."
      />
      <InformationCard
        title="74.29"
        symbol="%"
        symbolColor="#7248F7"
        description="Founded by a team of seasoned traders and industry experts."
      />
    </Box>
  );
};

export default InformationCards;

const InformationCard = ({
  title,
  symbol,
  symbolColor,
  symbolPosition = 'right',
  description,
}: {
  title: string;
  symbol: string;
  symbolColor: string;
  description: string;
  symbolPosition?: 'left' | 'right';
}) => {
  const formattedTitle =
    symbolPosition === 'left' ? (
      <>
        <span style={{ color: symbolColor }}>{symbol}</span>
        {title}
      </>
    ) : (
      <>
        {title}
        <span style={{ color: symbolColor }}>{symbol}</span>
      </>
    );

  return (
    <Box
      sx={{
        width: '182px',
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        alignItems: 'flex-start',
      }}
    >
      <Typography
        sx={{
          color: '#111',
          fontSize: '20px',
          fontWeight: '700',
          lineHeight: '110%',
          letterSpacing: '0.2px',
        }}
      >
        {formattedTitle}
      </Typography>

      <Typography
        sx={{
          color: 'rgba(17, 17, 17, 0.80)',
          fontSize: '12px',
          fontWeight: '400',
          lineHeight: '150%',
        }}
      >
        {description}
      </Typography>
    </Box>
  );
};

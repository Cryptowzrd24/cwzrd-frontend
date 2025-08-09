import { Card, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';

interface CryptoCardProps {
  name: string;
  symbol: string;
  price: string;
  change: string;
  icon: string;
}

export default function CryptoCard({
  name,
  symbol,
  price,
  change,
  icon,
}: CryptoCardProps) {
  const isPositive = parseFloat(change) >= 0;

  return (
    <Card
      sx={{
        borderRadius: '20px',
        minWidth: '240px',
        maxWidth: '61px',
        cursor: 'pointer',
        border: '0.5px solid #DCDCDC',
        backgroundColor: 'rgba(255, 255, 255, 0.48)',
        transition: 'all 0.3s',
        backdropFilter: 'blur(8px)',
        margin:'0 auto',
        '&:hover': {
          backgroundColor: 'rgba(255, 255, 255, 1)',
          border: '2px solid #7248F7',
          boxShadow: 3,
        },
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          gap: '8px',
          justifyContent: 'space-between',
          '&.MuiCardContent-root:last-child': {
            padding: '12px',
          },
        }}
      >
        <Box sx={{ display: 'flex', gap: '8px' }}>
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '50%',
              bgcolor: '#fff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: 1,
            }}
          >
            <Image
              src={icon}
              alt="icon"
              width={100}
              height={100}
              style={{ width: '100%', height: '100%' }}
            />
          </Box>
          <Box>
            <Typography variant="body2" fontWeight={600}>
              {name}
            </Typography>
            <Typography variant="caption" color="text.secondary">
              {symbol}
            </Typography>
          </Box>
        </Box>
        <Box sx={{ textAlign: 'right' }}>
          <Typography variant="body2">{price}</Typography>
          <Typography
            variant="caption"
            color={isPositive ? 'green' : 'red'}
            fontWeight={500}
          >
            {isPositive ? '+' : ''}
            {change}%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
}

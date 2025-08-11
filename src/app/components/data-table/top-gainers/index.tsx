import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { Box } from '@mui/material';

export const TopGainers = ({ data }: { data: any }) => {
  const handleMouseEnter = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.querySelector('img')!.style.transform = 'scale(1.1)';
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.currentTarget.querySelector('img')!.style.transform = 'scale(1)';
  };
  return (
    <div className={styles['top-gainers']}>
      {data.top_gainers.map((id: number) => (
        <Link
          style={{ textDecoration: 'none' }}
          href={`/market/coin-details/${id}`}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <Box sx={{ width: { xs: '24px', md: '28px', lg: '32px' } }}>
            <Image
              key={id}
              width={32}
              height={32}
              style={{
                borderRadius: '50%',
                width: '100%',
                height: '100%',
              }}
              src={`https://backend.cwzrd.co.uk/api/coin-image/?id=${id ?? 1}`}
              alt=""
            />
          </Box>
        </Link>
      ))}
    </div>
  );
};

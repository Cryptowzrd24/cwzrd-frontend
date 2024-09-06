import React from 'react';
import styles from './index.module.css';
import Link from 'next/link';
import Image from 'next/image';

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
          <Image
            key={id}
            width={32}
            height={32}
            style={{
              borderRadius: '50%',
            }}
            src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id ?? 1}.png`}
            alt=""
          />
        </Link>
      ))}
    </div>
  );
};

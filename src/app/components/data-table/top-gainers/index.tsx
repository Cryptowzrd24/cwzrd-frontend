import React from 'react';
import styles from './index.module.css';
import Image from 'next/image';

export const TopGainers = ({ data }: { data: any }) => {
  return (
    <div className={styles['top-gainers']}>
      {data.top_gainers.map((id: string) => (
        <Image
          loader={() => id}
          width={32}
          height={32}
          style={{
            borderRadius: '50%',
          }}
          src={`https://s2.coinmarketcap.com/static/img/coins/64x64/${id ?? 1}.png`}
          alt=""
        />
      ))}
    </div>
  );
};

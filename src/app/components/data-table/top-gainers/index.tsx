import React from 'react';
import styles from './index.module.css';

export const TopGainers = ({ data }: { data: any }) => {
  return (
    <div className={styles['top-gainers']}>
      {data.top_gainers.map((id: number) => (
        <img
          key={id}
          // loader={() => id}
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

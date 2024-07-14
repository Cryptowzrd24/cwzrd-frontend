import Image from 'next/image';
import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';

export const CurrencyNameComponent = (props: CustomCellRendererProps) => {
  const [firstWord] = props.value.split(' ');
  const imgId = `https://s2.coinmarketcap.com/static/img/coins/64x64/${props.data.coin_id || 1}.png`;
  return (
    <div className={styles['currency-comp']}>
      <Image
        loader={() => imgId}
        width={32}
        height={32}
        style={{
          marginBottom: '18px',
          borderRadius: '50%',
        }}
        src={imgId}
        alt=""
      />
      <div className={styles['name-section']}>
        <p className={styles['full-name']}>{firstWord}</p>
        <p className={styles['short-name']}>{props.data.symbol}</p>
      </div>
    </div>
  );
};

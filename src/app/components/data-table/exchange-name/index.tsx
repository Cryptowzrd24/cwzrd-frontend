import Image from 'next/image';
import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';

export const ExchangeNameComponent = (props: CustomCellRendererProps) => {
  const imgId = `https://s2.coinmarketcap.com/static/img/exchanges/64x64/${props.data.ex_id || 1}.png`;
  return (
    <div className={styles['exchange-comp']}>
      <div className={styles['exchange-icon']}>
        <Image
          loader={() => imgId}
          width={32}
          height={32}
          style={{
            borderRadius: '50%',
          }}
          src={imgId}
          alt=""
        />
      </div>
      <div className={styles['name-section']}>
        <p className={styles['full-name']}>{props.value}</p>
      </div>
    </div>
  );
};

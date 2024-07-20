import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';

export const ExchangeNameComponent = (props: CustomCellRendererProps) => {
  const imgId = `https://s2.coinmarketcap.com/static/img/exchanges/32x32/${props.data.ex_id || 1}.png`;
  return (
    <div className={styles['exchange-comp']}>
      <div className={styles['exchange-icon']}>
        <img src={imgId} alt="logo" />
      </div>
      <div className={styles['name-section']}>
        <p className={styles['full-name']}>{props.value}</p>
      </div>
    </div>
  );
};

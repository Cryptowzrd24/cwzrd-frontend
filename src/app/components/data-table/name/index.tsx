import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';

export const CurrencyNameComponent = (props: CustomCellRendererProps) => {
  const [firstWord] = props.value.split(' ');
  const imgId = `https://s2.coinmarketcap.com/static/img/coins/32x32/${props.data.coin_id || 1}.png`;
  return (
    <div className={styles['currency-comp']}>
      <img
        style={{ width: '32px', height: '32px', borderRadius: '25px' }}
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

import { priceNumberFormatter } from '@/utils/price-number-formater';
import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';

export const VolumeComponent = (props: CustomCellRendererProps) => {
  const val = '$' + priceNumberFormatter(props.value);
  return (
    <div className={styles['volume-comp']}>
      <p className={styles['price-main']}>{val}</p>
      <p className={styles['sub-price']}>9123123 USDT</p>
    </div>
  );
};

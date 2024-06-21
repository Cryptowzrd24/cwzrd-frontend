import styles from './index.module.css';

import BitcoinIcon from '../../../../../public/icons/Ticker-Section/bitcoin';

import { CustomCellRendererProps } from 'ag-grid-react';

export const ExchangeNameComponent = (props: CustomCellRendererProps) => {
  return (
    <div className={styles['exchange-comp']}>
      <div className={styles['exchange-icon']}>
        <BitcoinIcon />
      </div>
      <div className={styles['name-section']}>
        <p className={styles['full-name']}>{props.value}</p>
      </div>
    </div>
  );
};

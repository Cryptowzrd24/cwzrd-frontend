import styles from './index.module.css';

import BitcoinIcon from '../../../../../public/icons/Ticker-Section/bitcoin';

import { CustomCellRendererProps } from 'ag-grid-react';

export const CurrencyNameComponent = (props: CustomCellRendererProps) => {
  const [firstWord, secondWord] = props.value.split(' ');
  return (
    <div className={styles['currency-comp']}>
      <div className={styles['currency-icon']}>
        <BitcoinIcon />
      </div>
      <div className={styles['name-section']}>
        <p className={styles['full-name']}>{firstWord}</p>
        <p className={styles['short-name']}>{secondWord}</p>
      </div>
    </div>
  );
};

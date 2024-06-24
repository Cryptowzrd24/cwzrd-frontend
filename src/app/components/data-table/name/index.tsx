import styles from './index.module.css';

import BitcoinIcon from '../../../../../public/icons/Ticker-Section/bitcoin';

import { CustomCellRendererProps } from 'ag-grid-react';

export const CurrencyNameComponent = (props: CustomCellRendererProps) => {
  const [firstWord] = props.value.split(' ');
  return (
    <div className={styles['currency-comp']}>
      <BitcoinIcon />
      <div className={styles['name-section']}>
        <p className={styles['full-name']}>{firstWord}</p>
        <p className={styles['short-name']}>{props.data.symbol}</p>
      </div>
    </div>
  );
};

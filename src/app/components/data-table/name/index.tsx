import styles from './index.module.css';

import BitcoinIcon from '../../../../../public/icons/Ticker-Section/bitcoin';

import { CustomCellRendererProps } from 'ag-grid-react';

export const CurrencyNameComponent = (props: CustomCellRendererProps) => {
  const [firstWord, secondWord] = props.value.split(' ');
  return (
    <div className={styles['currency-comp']}>
      <BitcoinIcon />
      <div className={styles['name-section']}>
        <div className={styles['full-name']}>{firstWord}</div>
        <div className={styles['short-name']}>{secondWord}</div>
      </div>
    </div>
  );
};

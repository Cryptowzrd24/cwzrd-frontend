import { priceNumberFormatter } from '@/utils/price-number-formater';
import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';
import { usePathname } from 'next/navigation';

export const VolumeComponent = (props: CustomCellRendererProps) => {
  const rawVal = priceNumberFormatter(props.value);
  const numericVal = Math.round(
    Number(rawVal.replace(/[^\d.-]/g, '')),
  ).toLocaleString();

  const rawPriceDiff = priceNumberFormatter(
    String(Number(props.data.volume_24h) / Number(props.data.new_price)),
  );
  const priceDiff = Math.round(
    Number(rawPriceDiff.replace(/[^\d.-]/g, '')),
  ).toLocaleString();

  const pathName = usePathname();
  const isPathNewCoin = pathName.includes('/market/new-coin');

  return (
    <div className={styles['volume-comp']}>
      <p className={styles['price-main']}>${numericVal}</p>
      {!isPathNewCoin && (
        <p className={styles['sub-price']}>
          {`${priceDiff} ${props.data.symbol}`}
        </p>
      )}
    </div>
  );
};

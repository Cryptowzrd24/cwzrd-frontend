import { priceNumberFormatter } from '@/utils/price-number-formater';
import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';
import { usePathname } from 'next/navigation';

export const VolumeComponent = (props: CustomCellRendererProps) => {
  const val = '$' + priceNumberFormatter(props.value);
  const priceDiff = priceNumberFormatter(
    String(Number(props.data.volume_24h) / Number(props.data.price)),
  );
  const pathName = usePathname();
  const isPathNewCoin = pathName.includes('/market/new-coin');

  return (
    <div
      className={`${!isPathNewCoin ? styles['volume-comp'] : styles['margin-none']} `}
    >
      <p className={styles['price-main']}>{val}</p>
      {!isPathNewCoin && (
        <p
          className={styles['sub-price']}
        >{`${priceDiff} ${props.data.symbol}`}</p>
      )}
    </div>
  );
};

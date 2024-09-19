import Image from 'next/image';
import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';
import { Tooltip } from '@mui/material';

export const CurrencyNameComponent = (props: CustomCellRendererProps) => {
  const imgId =
    props?.data?.logo ||
    `https://s2.coinmarketcap.com/static/img/coins/64x64/${props.data.coin_id || 1}.png`;

  const getDisplayName = (name: any) => {
    return name.length > 13 ? name.slice(0, 13) + '...' : name;
  };

  return (
    <div className={styles['currency-comp']}>
      <Image
        loader={() => imgId}
        width={32}
        height={32}
        style={{
          marginBottom: '18px',
          borderRadius: '50%',
        }}
        src={imgId}
        alt=""
      />
      <div className={styles['name-section']}>
        {props.value.length > 13 ? (
          <Tooltip
            title={props.value}
            placement="top-start"
            PopperProps={{
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, -10],
                  },
                },
              ],
            }}
            componentsProps={{
              tooltip: {
                sx: {
                  fontSize: '16px',
                },
              },
            }}
          >
            <p className={styles['full-name']}>{getDisplayName(props.value)}</p>
          </Tooltip>
        ) : (
          <p className={styles['full-name']}>{getDisplayName(props.value)}</p>
        )}
        <p className={styles['short-name']}>{props.data.symbol}</p>
      </div>
    </div>
  );
};

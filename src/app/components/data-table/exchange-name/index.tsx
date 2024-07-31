import Image from 'next/image';
import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';
import { Tooltip } from '@mui/material';

export const ExchangeNameComponent = (props: CustomCellRendererProps) => {
  const getDisplayName = (name: any) => {
    return name.length > 13 ? name.slice(0, 13) + '...' : name;
  };
  const imgId = `https://s2.coinmarketcap.com/static/img/exchanges/64x64/${props.data.ex_id || 1}.png`;
  return (
    <div className={styles['exchange-comp']}>
      <div className={styles['exchange-icon']}>
        <Image
          loader={() => imgId}
          width={32}
          height={32}
          style={{
            borderRadius: '50%',
          }}
          src={imgId}
          alt=""
        />
      </div>
      <div style={{ cursor: 'pointer' }}>
        {props.value.length > 13 ? (
          <Tooltip
            title={props.value}
            placement="top-start"
            PopperProps={{
              modifiers: [
                {
                  name: 'offset',
                  options: {
                    offset: [0, -17],
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
      </div>
    </div>
  );
};

import Image from 'next/image';
import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';
import { Box, Tooltip } from '@mui/material';

export const CurrencyNameComponent = (props: CustomCellRendererProps) => {
  const imgId =
    props?.data?.logo ||
    `https://backend.cwzrd.co.uk/api/coin-image/?id=${props.data.coin_id || 1}`;

  const getDisplayName = (name: any) => {
    return name.length > 13 ? name.slice(0, 13) + '...' : name;
  };

  return (
    <div className={styles['currency-comp']}>
      <Box
        sx={{
          maxWidth: { xs: '24px', sm: '32px' },
          minWidth: { xs: '24px', sm: '32px' },
          mb: { xs: '10px', sm: '0px' },
        }}
      >
        <Image
          loader={() => imgId}
          width={100}
          height={100}
          style={{
            // marginBottom: '18px',
            borderRadius: '50%',
            width: '100%',
            height: '100%',
          }}
          src={imgId}
          alt=""
        />
      </Box>
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

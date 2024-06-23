import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';
import { AirdropStatusChart } from '../../../../../public/images/airdropStatusChart';

export const AirdropStatus = (props: CustomCellRendererProps) => {
  return (
    <div className={styles['container']}>
      <AirdropStatusChart />
      <div className={styles['container__box']}>
        <div className={styles['container__box-main-text']}>
          {props.value?.status}
        </div>
        {props?.value?.date && (
          <div className={styles['container__box-code-text']}>
            {props.value.date}
          </div>
        )}
      </div>
    </div>
  );
};

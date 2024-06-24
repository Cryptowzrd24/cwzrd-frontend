import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';
import { AirdropIcon } from '../../../../../public/images/airdrop';

export const ProjectName = (props: CustomCellRendererProps) => {
  return (
    <div className={styles['container']}>
      <AirdropIcon />
      <div className={styles['container__box']}>
        <div className={styles['container__box-main-text']}>
          {props.value?.name}
        </div>
        {props?.value?.code && (
          <div className={styles['container__box-code-text']}>
            {props.value.code}
          </div>
        )}
      </div>
    </div>
  );
};

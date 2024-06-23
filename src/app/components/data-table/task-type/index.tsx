import styles from './index.module.css';

import { CustomCellRendererProps } from 'ag-grid-react';
import { TaskTypeArrow } from '../../../../../public/icons/Grid-Header/taskTypeArrow';

export const TaskType = (props: CustomCellRendererProps) => {
  return (
    <div className={styles['section']}>
      <div
        style={{
          background:
            props.value === 'Mint NFT'
              ? 'linear-gradient(116.74deg, rgba(247, 132, 26, 0.1) -4.07%, rgba(247, 72, 72, 0.1) 100.68%)'
              : 'linear-gradient(180deg, rgba(55, 97, 251, 0.1) 0%, rgba(55, 169, 251, 0.1) 100%)',
        }}
        className={styles['container']}
      >
        <div
          style={{
            background:
              props.value === 'Mint NFT'
                ? 'linear-gradient(116.74deg, #F7841A -4.07%, #F74848 100.68%)'
                : 'linear-gradient(180deg, #3761FB 0%, #37A9FB 100%)',
          }}
          className={styles['container__text']}
        >
          {props.value}
        </div>
        <TaskTypeArrow value={props.value} />
      </div>
    </div>
  );
};

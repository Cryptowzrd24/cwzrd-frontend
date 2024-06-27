import styles from './index.module.css';

export const Volume24 = (props: any) => {
  return (
    <div className={styles['container']}>
      <div className={styles['container__text']}>{props.value.amount}</div>
      <div
        style={{
          color: props.value.percent.includes('-') ? '#F74848' : '#45CA94',
        }}
        className={styles['container__percent']}
      >
        {props.value.percent}
      </div>
    </div>
  );
};

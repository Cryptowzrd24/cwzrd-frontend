import styles from './index.module.css';

export const HeaderTooltip = () => {
  return (
    <div className={styles['tooltip']}>
      <p>
        {' '}
        The total market value of a cryptocurrency's circulating supply. It is
        analogous to the free- float capitalization in the stock market
      </p>
      <p>Market Cap = Current Price x Circulating Supply.</p>
    </div>
  );
};

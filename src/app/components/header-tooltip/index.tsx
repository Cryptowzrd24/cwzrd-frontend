import { CustomCellRendererProps } from 'ag-grid-react';
import styles from './index.module.css';
import Link from 'next/link';

const tooltips = {
  market_cap: (
    <div className={styles['tooltip']}>
      <p>
        The total market value of a cryptocurrency's circulating supply. It is
        analogous to the free-float capitalization in the stock market.
      </p>
      <p>Market Cap = Current Price x Circulating Supply.</p>
    </div>
  ),
  volume_24h: (
    <div className={styles['tooltip']}>
      <p>
        A measure of how much of a cryptocurrency was traded in the last 24
        hours.
      </p>
      <Link className={styles['link']} href={'/'}>
        Read More
      </Link>
    </div>
  ),
  circulating_supply: (
    <div className={styles['tooltip']}>
      <p>
        The amount of coins that are circulating in the market and are in public
        hands. It is analogous to the flowing shares in the stock market.
      </p>
      <Link className={styles['link']} href={'/'}>
        Read More
      </Link>
    </div>
  ),
  fdv: (
    <div className={styles['tooltip']}>
      <p>
        The total market value of a cryptocurrency's circulating supply. It is
        analogous to the free-float capitalization in the stock market.
      </p>
      <p>Market Cap = Current Price x Circulating Supply.</p>
    </div>
  ),
};

export const HeaderTooltip = (props: CustomCellRendererProps) => {
  const tooltipContent = tooltips[props?.colDef?.field] || (
    <div className={styles['tooltip']}>
      <p>No specific tooltip available.</p>
    </div>
  );
  return <>{tooltipContent}</>;
};

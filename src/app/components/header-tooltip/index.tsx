import styles from './index.module.css';
import Link from 'next/link';

interface HeaderTooltipProps {
  headerName: string;
}

const tooltips: any = {
  Market_cap: (
    <div className={styles['tooltip']}>
      <p>
        The total market value of a cryptocurrency's circulating supply. It is
        analogous to the free-float capitalization in the stock market.
      </p>
      <p>Market Cap = Current Price x Circulating Supply.</p>
    </div>
  ),
  Volume_24h: (
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
  Circulating_supply: (
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
  Fdv: (
    <div className={styles['tooltip']}>
      <p>Content for it to be displayed here. No content for it yet.</p>
      <p>Will be applied once available.</p>
    </div>
  ),
  Score: (
    <div className={styles['tooltip']}>
      <p>Content for it to be displayed here. No content for it yet.</p>
      <p>Will be applied once available.</p>
    </div>
  ),
  Dominance: (
    <div className={styles['tooltip']}>
      <p>Content for it to be displayed here. No content for it yet.</p>
      <p>Will be applied once available.</p>
    </div>
  ),
  Tvl: (
    <div className={styles['tooltip']}>
      <p>Content for it to be displayed here. No content for it yet.</p>
      <p>Will be applied once available.</p>
    </div>
  ),
  'Market Cap/TVL': (
    <div className={styles['tooltip']}>
      <p>Content for it to be displayed here. No content for it yet.</p>
      <p>Will be applied once available.</p>
    </div>
  ),
};

export const HeaderTooltip = ({ headerName }: HeaderTooltipProps) => {
  const tooltipContent = headerName ? (
    tooltips[headerName]
  ) : (
    <div className={styles['tooltip']}>
      <p>No specific tooltip available.</p>
    </div>
  );
  return <>{tooltipContent}</>;
};

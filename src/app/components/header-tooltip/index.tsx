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
      <p>
        The total market value of a cryptocurrency's circulating supply. It is
        analogous to the free-float capitalization in the stock market.
        <br />
        <br /> Market Cap = Current Price x Circulating Supply.
      </p>
      <Link className={styles['link']} href={'/'}>
        Read More
      </Link>
    </div>
  ),
  Score: (
    <div className={styles['tooltip']}>
      <p style={{ fontWeight: '500' }}>Spot Exchange Score</p>
      <p>
        CryptoWZRD ranks and scores exchanges based on the following: Web
        Traffic Factor; Average Liquidity; Volume, as well as the Confidence
        that the volume reported by an exchange is legitimate. Weights are
        assigned to the above-mentioned factors and a score from 0.0 to 10.0 is
        given to the Spot Exchange.
      </p>
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
  volume: (
    <div className={styles['tooltip']}>
      <p>
        The number indicates the total value of NFT transactions over the past
        selected time.
      </p>
      <p>The graph shows the sales volume value on an hourly basis.</p>
    </div>
  ),
  sales: (
    <div className={styles['tooltip']}>
      <p>
        The number indicates the total sales of NFTs in the past selected time.
      </p>
      <p>The graph shows the sales figures on an hourly basis..</p>
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

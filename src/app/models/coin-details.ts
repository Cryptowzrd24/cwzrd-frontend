export interface Quote {
  price: number;
  volume_24h: number;
  volume_change_24h: string;
  percent_change_1h: string;
  percent_change_24h: string;
  percent_change_7d: string;
  percent_change_30d: string;
  percent_change_60d: string;
  percent_change_90d: string;
  market_cap: string;
  market_cap_dominance: string;
  fully_diluted_market_cap: string;
  tvl: number | null;
  last_updated: string;
}

export interface CoinDetailsTypes {
  coin_id: number;
  quote: Quote;
  tags: string[];
  isAboutLoaded: boolean | null;
  name: string;
  symbol: string;
  slug: string;
  num_market_pairs: number;
  date_added: string;
  max_supply: number | null;
  circulating_supply: string;
  total_supply: string;
  infinite_supply: boolean;
  platform: string | null;
  cmc_rank: number;
  self_reported_circulating_supply: number | null;
  self_reported_market_cap: number | null;
  tvl_ratio: number | null;
  last_updated: string;
}

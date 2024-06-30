export interface Filters {
  cryptoCurrency: string | null;
  category: number | null;
  algorithm: number | null;
  platform: number | null;
  industry: number | null;
  price: { min: number | null; max: number | null };
  market: { min: number | null; max: number | null };
  volume: { min: number | null; max: number | null };
  circulatingSupply: { min: number | null; max: number | null };
  percentChange: { min: number | null; max: number | null };
  mineable: boolean;
  audited: boolean;
}

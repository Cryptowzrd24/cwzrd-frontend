import { Filters } from '@/app/models/filters';

export const constructQueryParams = (filters: Filters) => {
  const queryParams: { [key: string]: string } = {};
  const tags = [];

  if (filters.price?.min !== null) {
    queryParams.price_min = filters.price.min.toString();
  }
  if (filters.price?.max !== null) {
    queryParams.price_max = filters.price.max.toString();
  }

  if (filters.market?.min !== null) {
    queryParams.market_cap_min = filters.market.min.toString();
  }
  if (filters.market?.max !== null) {
    queryParams.market_cap_max = filters.market.max.toString();
  }

  if (filters.volume?.min !== null) {
    queryParams.volume_24h_min = filters.volume.min.toString();
  }
  if (filters.volume?.max !== null) {
    queryParams.volume_24h_max = filters.volume.max.toString();
  }

  if (filters.circulatingSupply?.min !== null) {
    queryParams.circulating_supply_min =
      filters.circulatingSupply.min.toString();
  }
  if (filters.circulatingSupply?.max !== null) {
    queryParams.circulating_supply_max =
      filters.circulatingSupply.max.toString();
  }

  if (filters.percentChange?.min !== null) {
    queryParams.change_24h_min = filters.percentChange.min.toString();
  }
  if (filters.percentChange?.max !== null) {
    queryParams.change_24h_max = filters.percentChange.max.toString();
  }

  if (filters.platform !== null) {
    queryParams.platform = filters.platform.toString();
  }

  if (filters.mineable) {
    tags.push('mineable');
  }
  if (filters.audited) {
    tags.push('audited');
  }

  if (tags.length > 0) {
    queryParams.tags = tags.join(',');
  }

  if (
    filters.cryptoCurrency !== null &&
    filters.cryptoCurrency !== 'allCryptoCurrencies'
  ) {
    queryParams[filters.cryptoCurrency] = 'true';
  }

  return queryParams;
};

import { Filters } from '@/app/models/filters';

export const countSelectedFilters = (filters: Filters): number => {
  let count = 0;
  const filterKeys = [
    'price',
    'market',
    'volume',
    'circulatingSupply',
    'percentChange',
    'mineable',
    'audited',
    'cryptoCurrency',
  ] as const;

  filterKeys.forEach((key) => {
    const filter = filters[key];
    if (typeof filter === 'object' && filter !== null) {
      if (filter.min !== null || filter.max !== null) {
        count++;
      }
    } else if (typeof filter === 'boolean' && filter) {
      count++;
    } else if (filter !== null && filter !== '' && filter !== false) {
      count++;
    }
  });
  return count;
};

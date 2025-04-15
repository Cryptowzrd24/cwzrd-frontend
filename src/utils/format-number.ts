import numeral from 'numeral';

export function formatLargeNumber(value: number | string): string {
  const val = typeof value === 'string' ? parseFloat(value) : value;
  return numeral(val).format('0.0a').toUpperCase();
}

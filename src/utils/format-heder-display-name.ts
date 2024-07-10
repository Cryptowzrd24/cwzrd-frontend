export const formatDisplayName = (str: string) => {
  if (str === 'Fdv') return 'Fully Diluted Market Cap';
  if (str === 'Volume_24h') return 'Volume(24h)';
  if (str === 'Tvl') return 'TVL';

  return str
    .split('_')
    .map((word, index) => {
      if (index === 0) {
        return word;
      }
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(' ');
};

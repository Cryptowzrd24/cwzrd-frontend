export const formatPrice = (value: number, fixed = true) => {
  if (value >= 1_000_000_000) {
    return (value / 1_000_000_000).toFixed(fixed ? 2 : 0) + 'B';
  } else if (value >= 1_000_000) {
    return (value / 1_000_000).toFixed(fixed ? 2 : 0) + 'M';
  } else if (value >= 1_000) {
    return (value / 1_000).toFixed(fixed ? 2 : 0) + 'K';
  } else {
    return value.toString();
  }
};

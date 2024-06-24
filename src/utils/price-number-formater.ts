export const priceNumberFormatter = (price: number) => {
  if (price === 0) {
    return '0';
  }
  if (price % 1 === 0) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return price
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

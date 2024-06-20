export const priceNumberFormatter = (price: number) => {
  if (!price) return;
  if (price % 1 === 0) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return price
      .toFixed(2)
      .toString()
      .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

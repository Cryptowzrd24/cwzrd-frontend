export const priceNumberFormatter = (price: number) => {
  console.log(price);
  return price
    ?.toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

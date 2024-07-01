export const priceNumberFormatter = (price: string) => {
  const priceNumber = Number(price);
  if (priceNumber === 0) {
    return '0';
  }
  if (priceNumber % 1 === 0) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    return priceNumber
      ?.toFixed(2)
      ?.toString()
      ?.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
};

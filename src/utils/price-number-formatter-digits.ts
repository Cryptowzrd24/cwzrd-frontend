export const priceNumberFormatDigits = (price: string) => {
  const priceNumber = Number(price);
  if (priceNumber === 0) {
    return '0';
  }
  if (priceNumber % 1 === 0) {
    return priceNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    const parts = priceNumber.toFixed(2).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
  }
};

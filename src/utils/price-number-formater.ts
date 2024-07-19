export const priceNumberFormatter = (price: string) => {
  const priceNumber = Number(price);
  if (priceNumber === 0) {
    return '0';
  }
  if (priceNumber % 1 === 0) {
    // Integer part only, standard thousand separator
    return priceNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } else {
    // Handle decimal by breaking into parts
    const parts = priceNumber.toFixed(8).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Apply comma to the integer part only
    return parts.join('.'); // Rejoin integer with decimal parts
  }
};

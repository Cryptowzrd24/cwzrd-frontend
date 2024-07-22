import React from 'react';

const NewCoin = ({ value }: any) => {
  const priceNumberFormatter = (price: any) => {
    const priceNumber = Number(price);

    if (priceNumber === 0) {
      return '0';
    }

    if (priceNumber < 0.1) {
      // Format with 10 decimal places
      return priceNumber.toFixed(10);
    }

    // Format with 2 decimal places
    const formattedPrice = priceNumber.toFixed(2);
    const parts = formattedPrice.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ','); // Apply comma to the integer part only
    return parts.join('.');
  };

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'start',
      }}
    >
      <span
        style={{
          fontWeight: 500,
          fontSize: '13px',
          fontFamily: 'Sf Pro Display',
        }}
      >
        ${priceNumberFormatter(value)}
      </span>
    </div>
  );
};

export default NewCoin;

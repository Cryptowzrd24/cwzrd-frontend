const socketCoinDetailBanner = new WebSocket('wss://backend.cwzrd.co.uk/ws/data/');

  const priceNumberFormatDigits = (price) => {
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

socketCoinDetailBanner.addEventListener('open', () => {
  console.log('WebSocket connection opened here');
});

socketCoinDetailBanner.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  if (message.d && message.id) {
    const coinId = message.id;
    const newPrice = message.p;
    const percentChange1h = message.p1h;
    const marketCap = message.mc
    const priceElement = document.getElementById(`banner-price-${coinId}`);
    const percentChangeElement = document.getElementById(
      `banner-price-change-${coinId}`,
    );
    const marketCapElement = document.getElementById(`banner-market-cap-${coinId}`);

    console.log(priceElement)
    
    if (priceElement) {
      console.log(priceNumberFormatDigits(newPrice))
      priceElement.innerHTML = `$${priceNumberFormatDigits(newPrice)}`;
    }

    if (marketCapElement) {
      console.log(priceNumberFormatDigits(marketCap))
      marketCapElement.innerHTML = `$${priceNumberFormatDigits(marketCap)}`;
    }

    if (percentChangeElement && percentChange1h ) {
      percentChangeElement.innerHTML =
      percentChange1h > 0
          ? `+${percentChange1h.toFixed(2)}%`
          : `${percentChange1h.toFixed(2)}%`;
      percentChangeElement.style.color =
      percentChange1h > 0 ? 'rgba(76, 254, 182, 1)' : 'rgba(245, 109, 109, 1)';
    }
  }
});

socketCoinDetailBanner.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});

socketCoinDetailBanner.addEventListener('close', (event) => {
  console.log('WebSocket connection closed:', event);
});



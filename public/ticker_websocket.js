const ws = new WebSocket('wss://backend.cwzrd.co.uk/ws/data/');

ws.addEventListener('open', () => {
  console.log('WebSocket connection opened');
});

ws.addEventListener('message', (event) => {
  const message = JSON.parse(event.data);
  if (message.d && message.id) {
    const coinId = message.id;
    const newPrice = message.p;
    const percentChange24h = message.p24h;

    const priceElement = document.getElementById(`price-${coinId}`);
    const percentChangeElement = document.getElementById(
      `percent-change-${coinId}`,
    );


    if (priceElement) {
      priceElement.textContent = `${priceElement.textContent.split(' ')[0]} $${newPrice.toFixed(2)}`;
    }

    if (percentChangeElement) {
      percentChangeElement.textContent =
        percentChange24h > 0
          ? `+${percentChange24h.toFixed(2)}%`
          : `${percentChange24h.toFixed(2)}%`;
      percentChangeElement.style.backgroundColor =
        percentChange24h > 0 ? '#1FD773' : '#F74848';
    }
  }
});

ws.addEventListener('error', (error) => {
  console.error('WebSocket error:', error);
});

ws.addEventListener('close', (event) => {
  console.log('WebSocket connection closed:', event);
});

const toggleMoreButton = document.getElementById('toggleMore');
const toggleLessButton = document.getElementById('toggleLess');
const additionalContent = document.getElementById('additionalContent');

toggleMoreButton?.addEventListener('click', () => {
  additionalContent.style.display = 'block';
  toggleMoreButton.style.display = 'none';
  toggleLessButton.style.display = 'inline-block';
});

toggleLessButton?.addEventListener('click', () => {
  additionalContent.style.display = 'none';
  toggleLessButton.style.display = 'none';
  toggleMoreButton.style.display = 'inline-block';
});

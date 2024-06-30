export const getPositiveNegativeIcon = (number: number) => {
  const message = number > 0 ? '+' : number < 0 ? '-' : '';
  return message;
};

export const getGraphColor = (number: number) => {
  const color = number >= 0 ? '69, 202, 148' : '245, 109, 109';
  return color;
};

export const getTimeAgoText = (value: Date | number) => {
  const minutesAgo = typeof value === 'number' ? value : '';
  return `${minutesAgo} Minutes Ago`;
};

export const getVisitCount = (value: number) => {
  const visited = value > 1000 ? `${value / 1000}k` : value;
  return `${visited} Visited`;
};

export const numberWithCommas = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export function formatDate(date: Date) {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear().toString().padStart(4, '0');
  let hours = date.getHours() % 12;
  const minutes = date.getMinutes().toString().padStart(2, '0');
  let period = date.getHours() >= 12 ? 'PM' : 'AM';
  if (hours === 0) hours = 12;
  if (hours === 12) period = 'PM';
  const formattedDate = `${month}/${day}/${year} at ${hours}:${minutes} ${period}`;

  return formattedDate;
}

export const profitLossCheck = (val: string) => {
  if (val.includes('-')) {
    return val;
  } else {
    return `+${val}`;
  }
};

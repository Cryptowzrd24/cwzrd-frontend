export const getPercentStyle = (value: number) => {
    if (!value.toLocaleString().includes('-')) {
      return { color: 'rgba(69, 202, 148, 1)' };
    } else {
      return { color: 'rgba(245, 109, 109, 1)' };
    }
  };
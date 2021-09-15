export const formatNumber = (num) => {
  if (num / 10 ** 9 > 1) {
    return `${(num / 10 ** 9).toFixed(2)} B`;
  } else if (num / 10 ** 6 > 1) {
    return `${(num / 10 ** 6).toFixed(2)} M`;
  } else if (num / 10 ** 3 > 1) {
    return `${(num / 10 ** 3).toFixed(2)} K`;
  } else return num;
};

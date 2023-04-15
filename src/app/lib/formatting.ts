export const roundToDp = (num: number, dp = 2) => {
  const factor = 10 ** dp;
  return Math.round(num * factor) / factor;
};

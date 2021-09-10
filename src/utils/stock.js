export const toStock = (symbol, raw) => {
  const { c, dp } = raw;
  return {
    symbol: symbol,
    price: c,
    percentChange: dp,
  };
};

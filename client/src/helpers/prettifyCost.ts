export const prettifyCost = (num?: number | string) => {
  const cost = num?.toString();
  return cost?.replace(/(\d{1,3}(?=(?:\d\d\d)+(?!\d)))/g, '$1' + ' ');
};

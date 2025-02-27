export const COFFEE_PRICE = 9.9;
export const SHIPPING_PRICE = 3.5;

export const formatMoney = (value: number) => {
  return value.toFixed(2).toString().replace(".", ",");
};

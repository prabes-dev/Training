type CurrencyData = Record<string, any>;

export const convertKeysToUppercase = (obj: CurrencyData): CurrencyData => {
  if (typeof obj !== 'object' || obj === null) return obj;

  return Object.keys(obj).reduce((acc: CurrencyData, key) => {
    const value = obj[key];
    const newKey = typeof key === 'string' ? key.toUpperCase() : key;
    acc[newKey] = typeof value === 'object' ? convertKeysToUppercase(value) : value;
    return acc;
  }, {});
};
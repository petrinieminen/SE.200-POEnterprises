import reduce from '../src/reduce';

describe('reduce.js - Reducing collections', () => {
  test('sums up numbers in an array', () => {
    const result = reduce([1, 2, 3, 4], (sum, n) => sum + n, 0);
    expect(result).toBe(10);
  });

  test('creates an object from an array of key-value pairs', () => {
    const pairs = [['a', 1], ['b', 2]];
    const result = reduce(
      pairs,
      (obj, [key, value]) => {
        obj[key] = value;
        return obj;
      },
      {}
    );
    expect(result).toEqual({ a: 1, b: 2 });
  });

  test('counts occurrences of values in an object', () => {
    const items = { a: 1, b: 2, c: 1 };
    const result = reduce(
      items,
      (result, value, key) => {
        result[value] = (result[value] || []).concat(key);
        return result;
      },
      {}
    );
    expect(result).toEqual({ 1: ['a', 'c'], 2: ['b'] });
  });

  test('handles empty arrays gracefully', () => {
    expect(reduce([], (sum, n) => sum + n, 0)).toBe(0);
  });
});
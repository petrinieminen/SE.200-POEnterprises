import isEmpty from "../src/isEmpty";

describe('isEmpty', () => {
  test('should return true for null and undefined', () => {
    expect(isEmpty(null)).toBe(true);
    expect(isEmpty(undefined)).toBe(true);
  });

  test('should return true for boolean values', () => {
    expect(isEmpty(true)).toBe(true);
    expect(isEmpty(false)).toBe(true);
  });

  test('should return true for numbers', () => {
    expect(isEmpty(0)).toBe(true);
    expect(isEmpty(1)).toBe(true);
    expect(isEmpty(NaN)).toBe(true);
  });

  test('should return true for an empty array', () => {
    expect(isEmpty([])).toBe(true);
  });

  test('should return false for non-empty arrays', () => {
    expect(isEmpty([1, 2, 3])).toBe(false);
  });

  test('should return true for an empty string', () => {
    expect(isEmpty('')).toBe(true);
  });

  test('should return false for non-empty strings', () => {
    expect(isEmpty('abc')).toBe(false);
    expect(isEmpty(' ')).toBe(false);
  });

  test('should return true for empty objects', () => {
    expect(isEmpty({})).toBe(true);
  });

  test('should return false for non-empty objects', () => {
    expect(isEmpty({ a: 1 })).toBe(false);
  });

});

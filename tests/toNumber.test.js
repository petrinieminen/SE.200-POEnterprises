import toNumber from '../src/toNumber';

describe('toNumber.js - Converting values to numbers', () => {
  test('converts a numeric string to a number', () => {
    expect(toNumber('42')).toBe(42);
  });

  test('converts a float string to a number', () => {
    expect(toNumber('3.14')).toBe(3.14);
  });

  test('handles invalid strings gracefully', () => {
    expect(toNumber('abc')).toBeNaN(); 
    expect(toNumber('')).toBe(0); 
  });

  test('handles binary string input', () => {
    expect(toNumber('0b101')).toBe(5);
  });

  test('handles octal string input', () => {
    expect(toNumber('0o17')).toBe(15);
  });

  test('handles hexadecimal string input', () => {
    expect(toNumber('0x1F')).toBe(31);
  });

  test('converts boolean values', () => {
    expect(toNumber(true)).toBe(1);
    expect(toNumber(false)).toBe(0);
  });

  test('returns `NaN` for symbols', () => {
    expect(toNumber(Symbol('test'))).toBeNaN();
  });

  test('handles objects with valueOf methods', () => {
    const obj = {
      valueOf() {
        return 42;
      },
    };
    expect(toNumber(obj)).toBe(42);
  });
});
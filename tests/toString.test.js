import toString from "../src/toString";

describe('toString', () => {
    test('should return an empty string for null', () => {
      expect(toString(null)).toBe('');
    });
  
    test('should return an empty string for undefined', () => {
      expect(toString(undefined)).toBe('');
    });

    test('should return string as it is', () => {
        expect(toString('test')).toBe('test');
    });
  
    test('should preserve the sign of -0', () => {
      expect(toString(-0)).toBe('-0');
    });
  
    test('should convert an array to a string', () => {
      expect(toString([1, 2, 3])).toBe('1,2,3');
    });
  
    test('should convert a number to a string', () => {
      expect(toString(42)).toBe('42');
    });

  });
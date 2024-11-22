import capitalize from "../src/capitalize";

describe('capitalize', () => {
    test('should capitalize a lowercase string', () => {
      expect(capitalize('fred')).toBe('Fred');
    });
  
    test('should capitalize an uppercase string', () => {
      expect(capitalize('FRED')).toBe('Fred');
    });
  
    test('should capitalize a mixed-case string', () => {
      expect(capitalize('fReD')).toBe('Fred');
    });
  
    test('should handle a single character', () => {
      expect(capitalize('f')).toBe('F');
      expect(capitalize('F')).toBe('F');
    });
  
    test('should handle an empty string', () => {
      expect(capitalize('')).toBe('');
    });

  });
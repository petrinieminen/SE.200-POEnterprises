import ceil from "../src/ceil";

describe('ceil', () => {
  test('should round up to the nearest integer by default', () => {
    expect(ceil(4.006)).toBe(5);
    expect(ceil(-4.006)).toBe(-4);
    expect(ceil(0.1)).toBe(1);
  });

  test('should round up to a specified positive precision', () => {
    expect(ceil(6.004, 2)).toBe(6.01);
    expect(ceil(6.0004, 3)).toBe(6.001);
  });

  test('should round up to a specified negative precision', () => {
    expect(ceil(6040, -2)).toBe(6100);
    expect(ceil(-6040, -2)).toBe(-6000);
  });
  
  test('should handle non-integer numbers', () => {
    expect(ceil(4.0001)).toBe(5);
    expect(ceil(-4.0001)).toBe(-4);
  });

  test('should handle inputs with no rounding needed', () => {
    expect(ceil(5)).toBe(5);
    expect(ceil(-5)).toBe(-5);
  });
});

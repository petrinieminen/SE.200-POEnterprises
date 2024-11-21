import add from '../src/add';

describe('add.js - Adding two numbers', () => {
  test('adds two positive numbers', () => {
    expect(add(6, 4)).toBe(10);
  });

  test('adds a positive and a negative number', () => {
    expect(add(10, -3)).toBe(7);
  });

  test('adds two negative numbers', () => {
    expect(add(-5, -10)).toBe(-15);
  });

  test('adds a number and zero', () => {
    expect(add(7, 0)).toBe(7);
  });

  test('handles non-numeric inputs gracefully', () => {
    const result = add('a', 5);
    expect(result).toBe('a5'); 
  });
});
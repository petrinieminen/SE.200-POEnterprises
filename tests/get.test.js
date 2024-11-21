import get from '../src/get'; 
import baseGet from '../src/.internal/baseGet.js';

jest.mock('../src/.internal/baseGet.js', () => jest.fn());

describe('get.js - Testing the behavior of get function', () => {
  test('retrieves the correct value for a given path', () => {
    baseGet.mockReturnValue('Callaway Driver');
    const obj = { clubs: { driver: 'Callaway Driver' } };
    expect(get(obj, 'clubs.driver')).toBe('Callaway Driver');
  });

  test('returns the default value when the path is not found', () => {
    baseGet.mockReturnValue(undefined);
    const obj = { clubs: {} };
    expect(get(obj, 'clubs.putter', 'Default Putter')).toBe('Default Putter');
  });

  test('handles null or undefined objects gracefully', () => {
    baseGet.mockReturnValue(undefined);
    expect(get(null, 'clubs.driver', 'Fallback')).toBe('Fallback');
    expect(get(undefined, 'clubs.driver', 'Fallback')).toBe('Fallback');
  });

  test('resolves nested paths correctly using baseGet', () => {
    baseGet.mockReturnValue('Titleist Ball');
    const obj = { bags: { pockets: [{ balls: 'Titleist Ball' }] } };
    expect(get(obj, 'bags.pockets[0].balls')).toBe('Titleist Ball');
    expect(baseGet).toHaveBeenCalledWith(obj, 'bags.pockets[0].balls');
  });

  test('returns undefined when no default value is provided and the path is not found', () => {
    baseGet.mockReturnValue(undefined);
    const obj = { clubs: { wedge: 'Lob Wedge' } };
    expect(get(obj, 'clubs.iron')).toBeUndefined();
  });
});
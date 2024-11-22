import chunk from "../src/chunk";

describe('chunk', () => {
  test('should split an array into chunks of the specified size', () => {
    expect(chunk(['a', 'b', 'c', 'd'], 2)).toEqual([['a', 'b'], ['c', 'd']]);
    expect(chunk(['a', 'b', 'c', 'd'], 3)).toEqual([['a', 'b', 'c'], ['d']]);
  });

  test('should return the entire array as one chunk if size is greater than array length', () => {
    expect(chunk(['a', 'b'], 3)).toEqual([['a', 'b']]);
  });

  test('should return an empty array if the input array is empty', () => {
    expect(chunk([], 2)).toEqual([]);
  });

  test('should return an empty array if size is 0 or less', () => {
    expect(chunk(['a', 'b', 'c'], 0)).toEqual([]);
    expect(chunk(['a', 'b', 'c'], -1)).toEqual([]);
  });

  test('should return an array of single-element chunks if size is 1', () => {
    expect(chunk(['a', 'b', 'c'], 1)).toEqual([['a'], ['b'], ['c']]);
  });

  test('should handle null or undefined input gracefully', () => {
    expect(chunk(null, 2)).toEqual([]);
    expect(chunk(undefined, 2)).toEqual([]);
  });

  test('should default size to 1 if no size is provided', () => {
    expect(chunk(['a', 'b', 'c'])).toEqual([['a'], ['b'], ['c']]);
  });

});

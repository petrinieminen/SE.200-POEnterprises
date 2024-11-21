import filter from '../src/filter';

describe('filter.js - Filtering arrays', () => {
  const users = [
    { user: 'Titleist', active: true },
    { user: 'Callaway', active: false },
    { user: 'Taylormade', active: true },
  ];

  test('filters users based on active status', () => {
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([
      { user: 'Titleist', active: true },
      { user: 'Taylormade', active: true },
    ]);
  });

  test('returns an empty array if no elements match', () => {
    const result = filter(users, ({ active }) => active === false);
    expect(result).toEqual([{ user: 'Callaway', active: false }]);
  });

  test('handles an empty array gracefully', () => {
    const result = filter([], () => true);
    expect(result).toEqual([[]]); 
  });

  test('applies predicate with index argument', () => {
    const result = filter(users, (_, index) => index === 1);
    expect(result).toEqual([{ user: 'Callaway', active: false }]);
  });
});
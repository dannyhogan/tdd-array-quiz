const removeYWords = require('../lib/index');

describe('returns words from array that dont contain the letter y', () => {
  it('returns correct array', () => {
    const arr = ['sky', 'hot', 'Yeti', 'green'];
    const expected = ['Is it hot?', 'Is it green?'];
    const result = removeYWords(arr);
    expect(result).toEqual(expected);
  });
});

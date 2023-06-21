const palindrome = require('./palindrome');

describe('palindrome', () => {
  it('should be a function', () => {
    expect(typeof palindrome).toEqual('function');
  });
  it('should return a boolean', () => {
    expect(typeof palindrome('hello')).toEqual('boolean');
  });

  it('should return true if it is a palindrome', () => {
    expect(palindrome('racecar')).toEqual(true);
    expect(palindrome('kayak')).toBeTruthy();
    expect(palindrome('wow')).toBeTruthy();
  });

  it('should return false if it is not a palindrome', () => {
    expect(palindrome('minor')).toBeFalsy();
    expect(palindrome('doll')).toBeFalsy();
    expect(palindrome('cool')).toBeFalsy();
  });
  it('should return false if it include spaces', () => {
    expect(palindrome(' wow')).toBeFalsy();
    expect(palindrome('race car')).toBeFalsy();
    expect(palindrome('ka yak')).toBeFalsy();
  });
});

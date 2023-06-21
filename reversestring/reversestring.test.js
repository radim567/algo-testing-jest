const reverseString = require('./reversestring.js');

describe('Reverse String', () => {
  test('should be a function', () => {
    expect(typeof reverseString).toEqual('function');
  });

  test('should return a string', () => {
    expect(typeof reverseString('hello')).toEqual('string');
  });

  test('should reverse a string', () => {
    expect(reverseString('hello')).toEqual('olleh');
    expect(reverseString('bye')).toEqual('eyb');
    expect(reverseString('wow')).toEqual('wow');
    expect(reverseString('hello world')).toEqual('dlrow olleh');
  });
});

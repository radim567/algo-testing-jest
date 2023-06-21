// function palindrome(str) {
//   return str === str.split('').reverse().join('');

//   // const reversed = str.split('').reverse().join('');
//   // return str === reversed;
// }

// Solution 2
function palindrome(str) {
  if (str.includes(' ')) {
    return false;
  }
  return str.split('').every((char, index) => {
    return char === str[str.length - index - 1];
  });
}

module.exports = palindrome;

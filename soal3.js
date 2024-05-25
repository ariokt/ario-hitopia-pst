function highestPalindrome(inputString, k) {
  console.log("input string: ", inputString);
  console.log("k: ", k);

  const n = inputString.length;
  const changes = Array(n).fill(0);
  
  // make the string a palindrome with minimal changes
  function makePalindrome(str, indexLeft, indexRight, k) {
      if (indexLeft >= indexRight) return {str, k};
      if (str[indexLeft] !== str[indexRight]) {
          if (k <= 0) return {str: '-1', k: 0};
          const maxChar = Math.max(str[indexLeft], str[indexRight]);
          str = replaceAt(str, indexLeft, maxChar);
          str = replaceAt(str, indexRight, maxChar);
          changes[indexLeft] = changes[indexRight] = 1;
          k--;
      }
      return makePalindrome(str, indexLeft + 1, indexRight - 1, k);
  }
  
  // maximize the palindrome value
  function maximizePalindrome(str, indexLeft, indexRight, k) {
      if (indexLeft > indexRight) return str;
      
      if (indexLeft === indexRight) {
          if (k > 0) str = replaceAt(str, indexLeft, '9');
          return str;
      }
      
      if (str[indexLeft] !== '9') {
          if (changes[indexLeft] === 1 || changes[indexRight] === 1) {
              if (k > 0) {
                  str = replaceAt(str, indexLeft, '9');
                  str = replaceAt(str, indexRight, '9');
                  k--;
              }
          } else if (k > 1) {
              str = replaceAt(str, indexLeft, '9');
              str = replaceAt(str, indexRight, '9');
              k -= 2;
          }
      }
      
      return maximizePalindrome(str, indexLeft + 1, indexRight - 1, k);
  }
  
  function replaceAt(str, index, char) {
      return str.substring(0, index) + char + str.substring(index + 1);
  }
  
  let {str: newStr, k: newK} = makePalindrome(inputString, 0, n - 1, k);
  
  if (newStr === '-1') return '-1'; // not found
  newStr = maximizePalindrome(newStr, 0, n - 1, newK);
  
  return newStr;
}

// Contoh penggunaan:
console.log("result: ", highestPalindrome("3543", 1)); // Output: 3553
console.log("---------------------------");
console.log("result: ", highestPalindrome("932239", 2)); // Output: 992299
console.log("---------------------------");
console.log("result: ", highestPalindrome("12321", 1)); // Output: 12921
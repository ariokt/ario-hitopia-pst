function weightedStrings(inputString, queries) {
  console.log("input string: ", inputString);
  console.log("queries: ", queries);

  const charWeights = {
      'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5,
      'f': 6, 'g': 7, 'h': 8, 'i': 9, 'j': 10,
      'k': 11, 'l': 12, 'm': 13, 'n': 14, 'o': 15,
      'p': 16, 'q': 17, 'r': 18, 's': 19, 't': 20,
      'u': 21, 'v': 22, 'w': 23, 'x': 24, 'y': 25, 'z': 26
  };

  
  const uniqueWeights = new Set();
  let i = 0;
  while (i < inputString.length) {
      let currentChar = inputString[i];
      let count = 0;

      while (i < inputString.length && inputString[i] === currentChar) {
          count++;
          let substring = currentChar.repeat(count);
          console.log(substring);
          uniqueWeights.add(charWeights[currentChar] * count);
          i++;
      }
  }

  return queries.map(query => uniqueWeights.has(query) ? "Yes" : "No");
}

// Contoh penggunaan:
const inputString = "abbcccd";
const queries = [1, 3, 9, 8];
const result = weightedStrings(inputString, queries);
console.log(result);  // Output: ["Yes", "Yes", "Yes", "No"]
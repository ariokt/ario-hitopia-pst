function isBalanced(brackets) {
  console.log("brackets: ", brackets);
  const pairs = {
    "{" : "}",
    "[" : "]",
    "(" : ")",
  }
  let stack = [];
  for (const char of brackets) {
    if (char === "{" || char === "[" || char === "(") {
      stack.push(char);
    } else if (char === "}" || char === "]" || char === ")") {
      const lastStack = stack.pop();
      if (pairs[lastStack] !== char) {
        return "NO";
      }
    }
  }
  return stack.length === 0 ? "YES" : "NO";
}

// Contoh penggunaan:
console.log(isBalanced("{ [ ( ) ] }")); // Output: Yes
console.log("---------------------------");
console.log(isBalanced("{ [ ( ] ) }")); // Output: No
console.log("---------------------------");
console.log(isBalanced("{ ( ( [ ] ) [ ] ) [ ] }")); // Output: Yes
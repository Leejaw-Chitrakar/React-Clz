// 4. Create a pure function capitalize(str) that returns the string with the first letter capitalized.

function capitalize(str) {
  if (!str) return str;
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// Test cases
console.log(capitalize("hello")); // "Hello"
console.log(capitalize("world")); // "World"
console.log(capitalize("")); // ""
console.log(capitalize("a")); // "A"

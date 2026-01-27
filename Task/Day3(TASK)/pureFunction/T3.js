// 3. Write a pure function isEven(num) that returns true if the number is even, false otherwise.

function isEven(num) {
  return num % 2 === 0;
}

// Test cases
console.log(isEven(4)); // true
console.log(isEven(7)); // false
console.log(isEven(0)); // true
console.log(isEven(-2)); // true

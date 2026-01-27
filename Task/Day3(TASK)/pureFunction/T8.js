// 8. Create a pure function reverseString(str) that returns the reversed string.

function reverseString(str) {
  if (!str) return "";
  return str.split('').reverse().join('');
}

// Test cases
console.log(reverseString("hello")); // "olleh"
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("12345")); // "54321"

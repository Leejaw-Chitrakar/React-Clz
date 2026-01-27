// 9. Write a pure function findMax(arr) that returns the largest number in an array.

function findMax(arr) {
  if (!arr || arr.length === 0) return null;
  return Math.max(...arr);
}

// Test cases
console.log(findMax([1, 5, 3, 9, 2])); // 9
console.log(findMax([-10, -5, -20])); // -5
console.log(findMax([])); // null
